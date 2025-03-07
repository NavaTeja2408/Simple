import React, { useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeBlock = ({ content, onChange, preview }) => {
  useEffect(() => {
    if (window.monaco && window.monaco.editor) {
      window.monaco.editor.defineTheme("myCustomTheme", {
        base: "vs", // base theme (vs for light, vs-dark for dark)
        inherit: true,
        rules: [],
        colors: {
          "editor.background": "#E8E8E8", // Set grey background
        },
      });

      // Set the custom theme
      window.monaco.editor.setTheme("myCustomTheme");
    } else {
      // If Monaco is not loaded yet, log or handle error
      console.log("Monaco editor not yet loaded");
    }
  }, []);

  // Inline styles for the editor container
  const containerStyles = {
    backgroundColor: "#E8E8E8", // Set grey background
    padding: "8px",
    borderRadius: "5px",
  };

  return (
    <div style={containerStyles}>
      <textarea
        className="w-full min-h-[20px] bg-gray-200 outline-none font-mono text-sm px-2 resize-none overflow-hidden break-words whitespace-pre-wrap"
        value={content}
        onChange={(e) => onChange(e.target.value)}
        onInput={(e) => {
          e.target.style.height = "auto"; // Reset height
          e.target.style.height = `${e.target.scrollHeight}px`; // Expand dynamically
        }}
      ></textarea>
    </div>
  );
};

export default CodeBlock;
