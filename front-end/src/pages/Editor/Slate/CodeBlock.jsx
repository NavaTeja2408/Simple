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
      <MonacoEditor
        height="300px"
        language="python"
        value={content}
        onChange={onChange}
        options={{
          readOnly: preview,
          minimap: { enabled: false },
          scrollPredominantAxis: false,
          scrollBeyondLastLine: false,
          wordWrap: "on", // Enable word wrapping
          automaticLayout: true,
        }}
        className="rounded-md overflow-hidden "
      />
    </div>
  );
};

export default CodeBlock;
