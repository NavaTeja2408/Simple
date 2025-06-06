import React, {
  useCallback,
  useMemo,
  useState,
  useRef,
  useEffect,
} from "react";
import {
  FaBold,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from "react-icons/fa";
import {
  createEditor,
  Transforms,
  Editor,
  Element as SlateElement,
} from "slate";
import { LuStrikethrough } from "react-icons/lu";
import { FaStrikethrough } from "react-icons/fa6";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { Button, Toolbar } from "./comp"; // Your components
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const ALIGN_TYPES = ["left", "center", "right"];

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type),
    split: true,
  });

  const newProperties = {
    type: format,
  };
  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleAlign = (editor, align) => {
  const newProperties = { align };
  Transforms.setNodes(editor, newProperties);
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const transformText = (editor, transformType) => {
  const { selection } = editor;

  if (!selection) return;

  const nodes = Array.from(
    Editor.nodes(editor, {
      match: (n) => Editor.isInline(editor, n) || Editor.isBlock(editor, n),
    })
  );

  for (const [node, path] of nodes) {
    if (node.text) {
      let newText = node.text;
      if (transformType === "uppercase") newText = node.text.toUpperCase();
      else if (transformType === "lowercase") newText = node.text.toLowerCase();
      else if (transformType === "capitalize")
        newText = node.text.replace(/\b\w/g, (char) => char.toUpperCase());

      Transforms.insertText(editor, newText, { at: path });
    }
  }
};

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === format,
  });
  return !!match;
};

const isAlignActive = (editor, align) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.align === align,
  });
  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element, size }) => {
  const alignment =
    element.align === "center"
      ? `text-${element.align}`
      : element.align === "right"
      ? "text-right"
      : "text-left";

  switch (size) {
    case "heading-one":
      return (
        <h1 className={`w-full text-4xl ${alignment}`} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 className={`text-3xl ${alignment}`} {...attributes}>
          {children}
        </h2>
      );
    case "heading-three":
      return (
        <h3 className={`text-2xl ${alignment}`} {...attributes}>
          {children}
        </h3>
      );
    case "heading-four":
      return (
        <h4 className={`text-xl ${alignment}`} {...attributes}>
          {children}
        </h4>
      );
    case "heading-five":
      return (
        <h5 className={`text-lg ${alignment}`} {...attributes}>
          {children}
        </h5>
      );
    case "heading-six":
      return (
        <h6 className={`text-sm ${alignment}`} {...attributes}>
          {children}
        </h6>
      );
    default:
      return (
        <p className={`mb-2 ${alignment}`} {...attributes}>
          {children}
        </p>
      );
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  const classNames = [
    leaf.bold ? "font-bold" : "",
    leaf.italic ? "italic" : "",
    leaf.underline ? "underline" : "",
    leaf.strikethrough ? "line-through" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span {...attributes} className={classNames}>
      {children}
    </span>
  );
};
const MyRichTextEditor = ({
  index,
  indexValue,
  setIndexValue,
  onChange,
  onSizeChange,
  data,
  preview,
  size,
  settings,
  onTextColor,
  textColor,
  selected,
  setSelected,
}) => {
  const [textSize, setTextSize] = useState(size);
  const initialValue = [
    {
      type: textSize,
      align: "center",

      children: [
        {
          text: "Heading",
          bold: true,
        },
      ],
    },
  ];

  const createBorder = (theme, color) => {
    if (theme === 1) {
      return size === "heading-one" ? (
        <div
          style={{ "--tw-bg-opacity": 1, backgroundColor: color }}
          className="h-[10px] w-full"
        ></div>
      ) : size === "heading-two" ? (
        <div
          style={{ "--tw-bg-opacity": 1, backgroundColor: color }}
          className="h-[5px] w-full"
        ></div>
      ) : (
        <div
          style={{ "--tw-bg-opacity": 1, backgroundColor: "white" }}
          className="h-[5px] w-full"
        ></div>
      );
    } else if (theme === 2) {
      return size === "heading-one" ? (
        <div
          style={{ "--tw-bg-opacity": 1, backgroundColor: color }}
          className="h-[10px] w-full"
        ></div>
      ) : size === "heading-two" ? (
        <div className="w-full h-[5px] flex items-center justify-center">
          <div
            style={{ "--tw-bg-opacity": 1, backgroundColor: color }}
            className="h-[10px] w-[20%]"
          ></div>
          <div
            style={{ "--tw-bg-opacity": 1, backgroundColor: color }}
            className="h-[2px] w-[80%]"
          ></div>
        </div>
      ) : (
        <div
          style={{ "--tw-bg-opacity": 1, backgroundColor: "white" }}
          className="h-[5px] w-full"
        ></div>
      );
    } else if (theme === 3) {
      return size === "heading-one" ? (
        <div
          style={{ "--tw-bg-opacity": 1, backgroundColor: color }}
          className="h-[10px] w-[20%]"
        ></div>
      ) : size === "heading-two" ? (
        <div
          style={{ "--tw-bg-opacity": 1, backgroundColor: color }}
          className="h-[5px] w-[20%]"
        ></div>
      ) : (
        <div
          style={{ "--tw-bg-opacity": 1, backgroundColor: "white" }}
          className="h-[5px] w-full"
        ></div>
      );
    } else if (theme === 4) {
      return size === "heading-one" ? (
        <div
          style={{ "--tw-bg-opacity": 1, backgroundColor: color }}
          className="h-[10px] w-[20%]"
        ></div>
      ) : size === "heading-two" ? (
        <div
          style={{ "--tw-bg-opacity": 1, backgroundColor: color }}
          className="h-[5px] w-[20%]"
        ></div>
      ) : (
        <div
          style={{ "--tw-bg-opacity": 1, backgroundColor: "white" }}
          className="h-[5px] w-full"
        ></div>
      );
    } else if (theme === 5) {
      return size === "heading-one" ? (
        <div
          style={{ "--tw-bg-opacity": 1, backgroundColor: color }}
          className="h-[8px] w-full"
        ></div>
      ) : size === "heading-two" ? (
        <div
          style={{ "--tw-bg-opacity": 1, backgroundColor: color }}
          className="h-[6px] w-full"
        ></div>
      ) : (
        <div
          style={{ "--tw-bg-opacity": 1, backgroundColor: "white" }}
          className="h-[5px] w-full"
        ></div>
      );
    } else if (theme === 0) {
      return <div></div>;
    }
  };
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [value, setValue] = useState(initialValue);
  const toolbarRef = useRef(null);
  const editorRef = useRef(null);
  const moveRef = useRef(null);

  const renderElement = useCallback(
    (props) => <Element {...props} size={size} />,
    [size]
  );
  const renderLeaf = useCallback(
    (props) => <Leaf {...props} size={size} />,
    [size]
  );

  const lightenColor = (hex, percent) => {
    // Remove "#" if present
    hex = hex.replace("#", "");

    // Convert hex to RGB values
    let num = parseInt(hex, 16);
    let r = (num >> 16) & 255;
    let g = (num >> 8) & 255;
    let b = num & 255;

    // Adjust each color channel toward 255 (white)
    r = Math.round(r + (255 - r) * percent);
    g = Math.round(g + (255 - g) * percent);
    b = Math.round(b + (255 - b) * percent);

    return `rgb(${r}, ${g}, ${b})`;
  };

  // ✅ Usage: Lighten #01070c by 50%
  const lighterColor = lightenColor("#01070c", 0.5);

  return (
    <div
      className={` relative w-[100%] p-2 rounded  ${
        selected === index ? "mt-10" : "mt-2"
      }`}
      onFocus={() => setSelected(index)}
      onBlur={(e) => {
        // Prevent toolbar from hiding when interacting with the dropdowns
        if (
          toolbarRef.current &&
          toolbarRef.current.contains(e.relatedTarget)
        ) {
          e.preventDefault();
        } else {
          setIndexValue(null);
        }
      }}
      ref={editorRef}
    >
      <Slate
        editor={editor}
        initialValue={
          Array.isArray(data.content)
            ? data.content
            : preview
            ? []
            : initialValue
        }
        value={data}
        onChange={(newValue) => onChange(newValue)}
      >
        {index === selected && preview !== true && (
          <Toolbar
            className="absolute top-[-40px] shadow-sm shadow-gray-400 left-[26%]  bg-white flex flex-row items-center justify-center  border border-gray-200 rounded-sm  px-3 py-2 "
            ref={toolbarRef}
            onFocus={() => setIndexValue(index)}
            onBlur={(e) => {
              if (
                editorRef.current &&
                editorRef.current.contains(e.relatedTarget)
              ) {
                e.preventDefault();
              } else {
                setIndexValue(null);
              }
            }}
          >
            {/* Heading Dropdown */}

            {/* Text Transform Dropdown */}

            <Button
              onMouseDown={(e) => {
                e.preventDefault();
                toggleMark(editor, "bold");
              }}
              active={isMarkActive(editor, "bold")}
            >
              <FaBold />
            </Button>
            <Button
              onMouseDown={(e) => {
                e.preventDefault();
                toggleMark(editor, "italic");
              }}
              active={isMarkActive(editor, "italic")}
            >
              <FaItalic />
            </Button>
            <Button
              onMouseDown={(e) => {
                e.preventDefault();
                toggleMark(editor, "underline");
              }}
              className="pt-1"
              active={isMarkActive(editor, "underline")}
            >
              <FaUnderline />
            </Button>
            <Button
              onMouseDown={(e) => {
                e.preventDefault();
                toggleMark(editor, "strikethrough");
              }}
              active={isMarkActive(editor, "strikethrough")}
            >
              <FaStrikethrough />
            </Button>
            <div className="h-8 w-[1px] my-[-4px] bg-gray-300"></div>
            <div className="relative my-[-3px] flex flex-row ">
              <select
                className="border border-gray-200 rounded px-2 bg-white py-1 outline-none"
                onChange={(e) => {
                  toggleBlock(editor, e.target.value);
                  onSizeChange(e.target.value);
                }}
                defaultValue={size}
              >
                <option value="heading-one">H1</option>
                <option value="heading-two">H2</option>
                <option value="heading-three">H3</option>
                <option value="heading-four">H4</option>
                <option value="heading-five">H5</option>
                <option value="heading-six">H6</option>
              </select>
              <select
                className="border border-gray-200 rounded px-2 ml-2 bg-white py-1 outline-none"
                onChange={(e) => {
                  onTextColor(e.target.value);
                }}
                defaultValue={"text-black"}
              >
                <option value="text-black">B</option>
                <option value="text-white">W</option>
                <option value="text-gray-700">G</option>
              </select>
              <select
                className="border  bg-white border-gray-200 rounded px-2 py-1 ml-2 outline-none"
                onChange={(e) => transformText(editor, e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>
                  Aa
                </option>
                <option value="uppercase">AA</option>
                <option value="lowercase">aa</option>
                <option value="capitalize">Aa</option>
              </select>
            </div>
            <div className="h-8 w-[1px] my-[-4px] bg-gray-300"></div>
            <Button
              onMouseDown={(e) => {
                e.preventDefault();
                toggleAlign(editor, "left");
              }}
              active={isAlignActive(editor, "left")}
            >
              <FaAlignLeft />
            </Button>
            <Button
              onMouseDown={(e) => {
                e.preventDefault();
                toggleAlign(editor, "center");
              }}
              active={isAlignActive(editor, "center")}
            >
              <FaAlignCenter />
            </Button>
            <Button
              onMouseDown={(e) => {
                e.preventDefault();
                toggleAlign(editor, "right");
              }}
              active={isAlignActive(editor, "right")}
            >
              <FaAlignRight />
            </Button>
          </Toolbar>
        )}

        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Heading"
          style={{
            "--tw-bg-opacity": 0.4,
            backgroundColor:
              settings.theme === 5
                ? lightenColor(settings.color, 0.8)
                : "transparent",
          }}
          className={` relative min-h-[20px] ${textColor}   px-2 py-1 outline-none   font-${
            settings.heading
          } ${
            index === selected && preview !== true
              ? "border-[2px] border-gray-300"
              : "none"
          }`}
          readOnly={preview}
        />
        {settings.theme !== 0 && (
          <div
            className={`absolute w-full h-[15px] px-2 ${
              settings.theme === 4 ? "top-0" : "-bottom-2"
            } left-0`}
          >
            {createBorder(settings.theme, settings.color)}
          </div>
        )}
      </Slate>
    </div>
  );
};

export default MyRichTextEditor;
