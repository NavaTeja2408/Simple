import React, { useContext } from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
import { DatabaseContext } from "../context/DatabaseContext";

const ScrollSectionTracker = ({
  groupedData,
  setTimeStore,
  os,
  browser,
  country,
  sta,
  totalTime,
  id,
}) => {
  const sectionRefs = useRef({});
  const currentSection = useRef(null);
  const startTime = useRef(null);
  const containerRef = useRef(null);
  const { databaseUrl } = useContext(DatabaseContext);

  useEffect(() => {
    const temp = {};
    const observer = new IntersectionObserver(
      (entries) => {
        const now = Date.now();
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        const mostVisibleEntry = visibleEntries.reduce((max, entry) =>
          entry.intersectionRatio > max.intersectionRatio ? entry : max
        );

        const heading = mostVisibleEntry.target.dataset.heading;

        if (currentSection.current !== heading) {
          // Save previous section time
          if (currentSection.current && startTime.current) {
            const duration = (now - startTime.current) / 1000;
            temp[currentSection.current] =
              temp[currentSection.current] || 0 + duration;
          }

          currentSection.current = heading;
          startTime.current = now;
        }
      },
      {
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: "0px 0px -50% 0px",
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const sendAnalytics = () => {
      if (currentSection.current && startTime.current) {
        const duration = (Date.now() - startTime.current) / 1000;
        temp[currentSection.current] =
          (temp[currentSection.current] || 0) + duration;

        axios
          .post(`${databaseUrl}/api/workspace/analytics`, {
            temp,
            os,
            browser,
            country,
            sta,
            timespent: (Date.now() - totalTime) / 1000,
            seen: totalTime,
            id,
          })
          .then((res) => console.log("Analytics sent:", res.data))
          .catch((err) => console.error("Analytics error:", err));
      }
    };

    const handleBeforeUnload = (e) => {
      sendAnalytics();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendAnalytics();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [groupedData]);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {groupedData.map((section, index) => (
        <div
          key={`${section.heading}-${index}`}
          data-heading={section.heading}
          ref={(el) =>
            (sectionRefs.current[`${section.heading}-${index}`] = el)
          }
          style={{
            position: "absolute",
            top: `${index * 500}px`,
            height: "100px",
            width: "100%",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
      ))}
    </div>
  );
};

export default ScrollSectionTracker;
