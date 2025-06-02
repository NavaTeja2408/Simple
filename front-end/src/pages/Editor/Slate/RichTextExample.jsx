import React, {
  useCallback,
  useMemo,
  useState,
  useRef,
  useEffect,
} from "react";
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline, FaBold } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { FaStrikethrough } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";
import {
  createEditor,
  Transforms,
  Editor,
  Element as SlateElement,
} from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { Button, Toolbar } from "./comp"; // Your components

// Block types
const LIST_TYPES = ["numbered-list", "bulleted-list"];
const ALIGN_TYPES = ["left", "center", "right"];

// Block toggle logic
const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  // Detect if inside a table (assuming table blocks exist)
  const [tableMatch] = Editor.nodes(editor, {
    match: (n) => SlateElement.isElement(n) && n.type === "table",
  });

  // Unwrap existing lists (if needed)
  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type),
    split: true,
  });

  // Apply nesting for level 2 inside a table
  if (tableMatch && isList) {
    const newListItem = {
      type: "list-item",
      children: [{ text: "" }],
    };

    const newList = {
      type: format,
      children: [newListItem],
    };

    Transforms.wrapNodes(editor, newList);
    return;
  }

  // Normal list behavior
  const newProperties = {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  };
  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const handleKeyDown = (event, editor) => {
  if (event.key === "Tab") {
    event.preventDefault();
    const { selection } = editor;

    if (selection) {
      const [match] = Editor.nodes(editor, {
        match: (n) => SlateElement.isElement(n) && n.type === "list-item",
      });

      if (match) {
        if (event.shiftKey) {
          // Decrease indentation (Outdent)
          Transforms.liftNodes(editor, {
            match: (n) => SlateElement.isElement(n) && n.type === "list-item",
          });
        } else {
          // Increase indentation (Indent)
          const parentList = Editor.above(editor, {
            match: (n) =>
              SlateElement.isElement(n) && n.type === "bulleted-list",
          });

          if (parentList) {
            // If already inside a list, wrap the list item inside another list
            Transforms.wrapNodes(editor, {
              type: "bulleted-list",
              children: [],
            });
          } else {
            // If not inside a list, wrap in a list
            Transforms.wrapNodes(editor, {
              type: "bulleted-list",
              children: [],
            });
          }
        }
      }
    }
  }
};

const toggleMark = (editor, format) => {
  const marks = Editor.marks(editor) || {}; // Ensure marks object exists
  const isActive = marks[format] === true;

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }

  console.log("Updated Marks:", Editor.marks(editor)); // Debugging
};
// Toggle alignment
const toggleAlign = (editor, align) => {
  const newProperties = {
    align,
  };
  Transforms.setNodes(editor, newProperties);
};

// Check if block is active
const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === format,
  });
  return !!match;
};

// Check if align is active
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
// Define initial value
const initialValue = [
  {
    type: "paragraph",
    children: [
      {
        text: "This is editable rich text. Try lists, headings, and alignment!",
      },
    ],
  },
];

// Define elements
const Element = ({ attributes, children, element }) => {
  const alignment =
    element.align === "center"
      ? `text-${element.align}`
      : element.align === "right"
      ? "text-right"
      : "text-left";

  switch (element.type) {
    case "heading-one":
      return (
        <h1 className={`text-4xl py-1 font-bold ${alignment}`} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 className={`text-3xl py-1 font-bold ${alignment}`} {...attributes}>
          {children}
        </h2>
      );
    case "heading-three":
      return (
        <h2 className={`text-2xl py-1 font-bold ${alignment}`} {...attributes}>
          {children}
        </h2>
      );
    case "heading-four":
      return (
        <h2 className={`text-xl py-1 font-bold ${alignment}`} {...attributes}>
          {children}
        </h2>
      );
    case "heading-five":
      return (
        <h2 className={`text-lg font-bold ${alignment}`} {...attributes}>
          {children}
        </h2>
      );
    case "heading-six":
      return (
        <h2 className={`text-sm  ${alignment}`} {...attributes}>
          {children}
        </h2>
      );
    case "paragrapgh":
      return (
        <h2 className={`text-sm ${alignment}`} {...attributes}>
          {children}
        </h2>
      );
    case "paragrapgh-two":
      return (
        <h2 className={`text-xs ${alignment}`} {...attributes}>
          {children}
        </h2>
      );
    case "block-quote":
      return (
        <blockquote
          className={`border-l-4 border-gray-400 pl-4 italic ${alignment}`}
          {...attributes}
        >
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul className={`list-disc pl-6 ${alignment}`} {...attributes}>
          {children}
        </ul>
      );
    case "numbered-list":
      return (
        <ol className={`list-decimal pl-6 ${alignment}`} {...attributes}>
          {children}
        </ol>
      );
    case "list-item":
      return (
        <li {...attributes}>
          {children}
          {/* Render nested lists inside list items */}
          {element.children.some((child) => child.type === "bulleted-list") && (
            <ul className="pl-6" style={{ listStyleType: "circle" }}>
              {element.children.map((child, index) => (
                <li key={index} {...attributes}>
                  {child.children}
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    default:
      return (
        <p className={` ${alignment}`} {...attributes}>
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

  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (leaf.link && children?.text) {
      window.location.href = children.text; // Navigate using window.location
    }
  };

  return leaf.link ? (
    <a
      {...attributes}
      href={children.text}
      className="text-blue-800 cursor-pointer underline font-semibold"
      onClick={handleLinkClick}
    >
      {children}
    </a>
  ) : (
    <span {...attributes} className={classNames}>
      {children}
    </span>
  );
};
// RichTextEditor component
const RichTextEditor = ({
  index,
  indexValue,
  setIndexValue,
  onChange,
  data,
  preview,
  settings,
  onTextColor,
  textColor,
}) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [value, setValue] = useState(initialValue);
  const [showAlign, setShowAlign] = useState(false);
  const alignRef = useRef();
  const toolbarRef = useRef(null);
  const [choosen, setChoosen] = useState(false);
  const editorRef = useRef(null);

  const handleClickOutsideAlign = (event) => {
    if (alignRef.current && !alignRef.current.contains(event.target)) {
      setShowAlign(false);
      setAlignH(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideAlign);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideAlign);
    };
  }, []);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  return (
    <div
      className={`relative   w-[100%] ${
        index === indexValue ? "pt-14" : "pt-0"
      }  px-2 py-1 rounded overflow-hidden`}
      onFocus={() => setIndexValue(index)}
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
        initialValue={Array.isArray(data) ? data : preview ? [] : initialValue}
        value={data}
        onChange={(newValue) => onChange(newValue)}
      >
        {index === indexValue && choosen && (
          <Toolbar
            className="flex flex-row items-center justify-center absolute top-1 shadow-sm shadow-gray-400 left-1 bg-white  border z-50 border-gray-200 rounded-sm  px-3 py-2"
            ref={toolbarRef}
            onFocus={() => {
              setIndexValue(index);
              setChoosen(true);
            }}
            onBlur={(e) => {
              // Prevent blur behavior when clicking inside the editor or dropdown
              if (
                editorRef.current &&
                editorRef.current.contains(e.relatedTarget)
              ) {
                e.preventDefault();
              } else {
                setIndexValue(null);
                setChoosen(false);
              }
            }}
          >
            <div className="relative flex flex-row">
              <select
                className="border border-gray-200 rounded px-1 bg-white py-1"
                onChange={(e) => toggleBlock(editor, e.target.value)}
                defaultValue="paragraph"
              >
                <option value="heading-one">H1</option>
                <option value="heading-two">H2</option>
                <option value="heading-three">H3</option>
                <option value="heading-four">H4</option>
                <option value="heading-five">H5</option>
                <option value="heading-six">H6</option>
                <option value="paragrapgh">P1</option>
                <option value="paragrapgh-two">P2</option>
              </select>
              <select
                className="border border-gray-200 rounded  ml-2 bg-white py-1 outline-none"
                onChange={(e) => {
                  onTextColor(e.target.value);
                }}
                defaultValue={"text-black"}
              >
                <option value="text-black">B</option>
                <option value="text-white">W</option>
                <option value="text-gray-700">G</option>
              </select>
            </div>

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
            <Button
              onMouseDown={(e) => {
                e.preventDefault();
                toggleMark(editor, "link");
              }}
              active={isMarkActive(editor, "link")}
            >
              <IoLink />
            </Button>

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

            <div className="h-8 w-[1px] my-[-4px] bg-gray-300"></div>

            <Button
              onMouseDown={(e) => {
                e.preventDefault();
                toggleBlock(editor, "bulleted-list");
              }}
              active={isBlockActive(editor, "bulleted-list")}
            >
              <MdFormatListBulleted className="h-5" />
            </Button>
            <Button
              onMouseDown={(e) => {
                e.preventDefault();
                toggleBlock(editor, "numbered-list");
              }}
              active={isBlockActive(editor, "numbered-list")}
            >
              <MdFormatListNumbered className="h-5" />
            </Button>
          </Toolbar>
        )}

        <Editable
          onKeyDown={(event) => handleKeyDown(event, editor)}
          onFocus={() => {
            setChoosen(true);
          }}
          onBlur={(e) => {
            // Prevent blur behavior when clicking inside the editor or dropdown
            if (
              editorRef.current &&
              editorRef.current.contains(e.relatedTarget)
            ) {
              e.preventDefault();
            } else {
              setChoosen(false);
            }
          }}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Paragraph"
          className={` min-h-[100px] px-2 outline-none ${textColor} ${
            index === indexValue ? "border-[2px] border-gray-300" : "none"
          } font-${settings.body}`}
          readOnly={preview}
        />
      </Slate>
    </div>
  );
};

export default RichTextEditor;
