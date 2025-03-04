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
        <h1 className={`w-full text-3xl ${alignment}`} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 className={`text-2xl ${alignment}`} {...attributes}>
          {children}
        </h2>
      );
    case "heading-three":
      return (
        <h3 className={`text-xl ${alignment}`} {...attributes}>
          {children}
        </h3>
      );
    case "heading-four":
      return (
        <h4 className={`text-lg ${alignment}`} {...attributes}>
          {children}
        </h4>
      );
    case "heading-five":
      return (
        <h5 className={`text-base ${alignment}`} {...attributes}>
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
  data,
  preview,
  size,
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
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [value, setValue] = useState(initialValue);
  const toolbarRef = useRef(null);
  const editorRef = useRef(null);
  const moveRef = useRef(null);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  return (
    <div
      className={` relative w-[100%] p-2 rounded  ${
        index === indexValue ? "mt-10" : "mt-1"
      }`}
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
        {index === indexValue && (
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
                className="border border-gray-200 rounded px-2 bg-white py-1"
                onChange={(e) => toggleBlock(editor, e.target.value)}
                defaultValue="Heading-two"
              >
                <option value="heading-one">H1</option>
                <option value="heading-two">H2</option>
                <option value="heading-three">H3</option>
                <option value="heading-four">H4</option>
                <option value="heading-five">H5</option>
                <option value="heading-six">H6</option>
                <option value="paragraph">P</option>
              </select>
              <select
                className="border  bg-white border-gray-200 rounded px-2 py-1 ml-4"
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
          className={` min-h-[20px] p-2 outline-none ${
            index === indexValue ? "border-[2px] border-gray-300" : "none"
          }`}
          readOnly={preview}
        />
      </Slate>
    </div>
  );
};

export default MyRichTextEditor;
