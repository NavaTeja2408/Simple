import React, { useContext, useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { useDrop } from "react-dnd";
import RichTextExample from "./Slate/RichTextExample";
import MyRichTextEditor from "./Slate/HeadingTextArea";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import Table from "./Slate/Table";
import CodeBlock from "./Slate/CodeBlock";
import CostModuleSlate from "./Slate/CostModuleSlate";
import SignRow from "./SignRow";

import Image from "./Slate/Image";
import ForDouble from "./Slate/ForDouble";
import { CiBookmark } from "react-icons/ci";
import { LuArrowUpToLine } from "react-icons/lu";
import { LuArrowDownToLine } from "react-icons/lu";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import PriceTermSlate from "./Slate/PriceTermSlate";
import { StateManageContext } from "../../context/StateManageContext";
import CoverPageSlate from "./Slate/CoverPageSlate";
import { FiPlus } from "react-icons/fi";

const DropRow = ({
  row,
  rows,
  setRows,
  index,
  moveRowUp,
  moveRowDown,
  deleteRow,
  handleDropItem,
  preview,
  setBookmark,
  setSnapshotLink,
  setLoading,
  loading,
  settings,
  addEmptyRow,
  addInputRow,
  addTextRow,
  addHeadingRow,
  addDoublePara,
  addImageAndParagraph,
  addImageRow,
  addBreakPoint,
  addTableRow,
  addCodeBlock,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TEXT", // Accepts draggable text items
    drop: (item) => handleDropItem(index, item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const [indexValue, setIndexValue] = useState(null);
  const [switchButton, setSwitchButtons] = useState(null);
  const divRef = useRef();
  const sideRef = useRef();
  const buttonRef = useRef();
  const quickRef = useRef();
  const quickButtonRef = useRef();

  const { setSign, setPriceTerms } = useContext(StateManageContext);
  const handleClickOutsideMenu = (event) => {
    if (
      sideRef.current &&
      !sideRef.current.contains(event.target) &&
      divRef.current &&
      !divRef.current.contains(event.target)
    ) {
      setSelected(null);
    }
  };
  const handleClickQuick = (event) => {
    if (
      quickRef.current &&
      !quickRef.current.contains(event.target) &&
      quickButtonRef.current &&
      !quickButtonRef.current.contains(event.target)
    ) {
      setQuickAdd(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickQuick);
    return () => {
      document.removeEventListener("mousedown", handleClickQuick);
    };
  }, []);
  const handleClickOutsideMenuB = (event) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target) &&
      divRef.current &&
      !divRef.current.contains(event.target)
    ) {
      setSwitchButtons(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenuB);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenuB);
    };
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);
  const handleUpload = async (file) => {
    if (!file) {
      alert("Please select an image first!");
      return;
    }

    const cloudName = "dojwaepbj"; // Replace with your Cloudinary cloud name
    const uploadPreset = "simple_quotes"; // Replace with your upload preset

    // Create FormData object
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      setLoading(true);

      // Upload image to Cloudinary
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const photo = await response.json();
      setSnapshotLink(photo.secure_url);
      console.log("Uploaded Image URL:", photo.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const captureImage = () => {
    if (!divRef.current) return;

    html2canvas(divRef.current).then((canvas) => {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const file = new File([blob], "snapshot.jpg", {
              type: "image/jpeg",
            });
            handleUpload(file);
          }
        },
        "image/jpeg",
        1
      );
    });
  };

  const [selected, setSelected] = useState(null);
  const [quickAdd, setQuickAdd] = useState(false);

  return (
    <div
      ref={divRef}
      style={{
        width: row.type === "brake" ? "100%" : "94%",
        minHeight: row.type !== "cover" ? "30px" : "30px",
        marginBottom: "0px",
        marginLeft: row.type === "brake" ? "0px" : "20px",
        marginRight: row.type === "brake" ? "0px" : "7px",
        marginTop: selected === index && index === 0 ? "30px" : "0px",
        paddingBottom: selected === index ? "30px" : "0px",

        border:
          selected === index && preview !== true
            ? "1px dashed rgba(223 , 6 , 78 , 1)"
            : "none",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="relative bg-transparent"
    >
      {/* Render row's content */}
      <div className="w-full">
        {row.type === "text" ? (
          <div
            style={{
              padding: "8px",
              backgroundColor: "lightyellow",
              border: "1px solid black",
            }}
          >
            {row.content || "Drag text here"}
          </div>
        ) : row.type === "input" ? (
          <div className="w-full " onClick={() => setSelected(index)}>
            <RichTextExample
              index={index}
              indexValue={indexValue}
              setIndexValue={setIndexValue}
              onChange={(newData) => {
                const updatedContent = [...rows];
                updatedContent[index].content = newData;
                setRows(updatedContent);
              }}
              onTextColor={(newData) => {
                const updatedData = [...rows];
                updatedData[index].textColor = newData;
                setRows(updatedData);
              }}
              textColor={row.textColor ? row.textColor : "text-black"}
              data={row.content}
              preview={preview}
              settings={settings}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        ) : row.type === "heading" ? (
          <div className="w-full  " onClick={() => setSelected(index)}>
            <MyRichTextEditor
              index={index}
              indexValue={indexValue}
              setIndexValue={setIndexValue}
              onChange={(newData) => {
                const updatedContent = [...rows];
                updatedContent[index].content = newData;
                setRows(updatedContent);
              }}
              onSizeChange={(newData) => {
                const updatedData = [...rows];
                updatedData[index].size = newData;
                setRows(updatedData);
              }}
              onTextColor={(newData) => {
                const updatedData = [...rows];
                updatedData[index].textColor = newData;
                setRows(updatedData);
              }}
              textColor={row.textColor ? row.textColor : "text-black"}
              size={row.size}
              data={row}
              preview={preview}
              moveRowUp={moveRowUp}
              moveRowDown={moveRowDown}
              deleteRow={deleteRow}
              settings={settings}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        ) : row.type === "double-para" ? (
          <div
            className="w-full flex flex-row gap-4  "
            onClick={() => setSelected(index)}
          >
            <RichTextExample
              index={index}
              indexValue={indexValue}
              setIndexValue={setIndexValue}
              onChange={(newData) => {
                const updatedContent = [...rows];
                updatedContent[index].firstContent = newData;
                setRows(updatedContent);
              }}
              data={row.firstContent}
              preview={preview}
              settings={settings}
              onTextColor={(newData) => {
                const updatedData = [...rows];
                updatedData[index].textColor = newData;
                setRows(updatedData);
              }}
              selected={selected}
              textColor={row.textColor ? row.textColor : "text-black"}
              setSelected={setSelected}
            />
            <RichTextExample
              index={index}
              indexValue={indexValue}
              setIndexValue={setIndexValue}
              onChange={(newData) => {
                const updatedContent = [...rows];
                updatedContent[index].secondContent = newData;
                setRows(updatedContent);
              }}
              data={row.secondContent}
              preview={preview}
              settings={settings}
              onTextColor={(newData) => {
                const updatedData = [...rows];
                updatedData[index].textColor = newData;
                setRows(updatedData);
              }}
              selected={selected}
              textColor={row.textColor ? row.textColor : "text-black"}
              setSelected={setSelected}
            />
          </div>
        ) : row.type === "image-para" ? (
          <div
            className="w-full flex flex-row gap-1  "
            onClick={() => {
              setSelected(index);
              setSwitchButtons(index);
            }}
          >
            {row.align === undefined || row.align === "left" ? (
              <>
                <RichTextExample
                  index={index}
                  indexValue={indexValue}
                  setIndexValue={setIndexValue}
                  onChange={(newData) => {
                    const updatedContent = [...rows];
                    updatedContent[index].content = newData;
                    setRows(updatedContent);
                  }}
                  data={row.content}
                  preview={preview}
                  className="relative"
                  settings={settings}
                  onTextColor={(newData) => {
                    const updatedData = [...rows];
                    updatedData[index].textColor = newData;
                    setRows(updatedData);
                  }}
                  selected={selected}
                  textColor={row.textColor ? row.textColor : "text-black"}
                  setSelected={setSelected}
                />

                {switchButton === index && preview !== true && (
                  <div className="w-[1px] h-30 border-r-[1px] border-dashed border-red-400 ml-4 relative">
                    <button
                      ref={buttonRef}
                      onClick={() => {
                        setSelected(index);
                        const updatedContent = [...rows];
                        updatedContent[index].align =
                          updatedContent[index].align === "left"
                            ? "right"
                            : "left";
                        setRows(updatedContent);
                      }}
                      className="absolute -right-3 z-50 p-1 border border-dashed text-graidient_bottom
                       border-red-400 bg-white rounded-[50%] hover:bg-graidient_bottom hover:text-white top-[47%] "
                    >
                      <HiOutlineSwitchHorizontal />
                    </button>
                  </div>
                )}

                <ForDouble
                  onWidth={(newData) => {
                    const updatedContent = [...rows];
                    updatedContent[index].width = newData;
                    setRows(updatedContent);
                  }}
                  onAliegn={(newData) => {
                    const updatedContent = [...rows];
                    updatedContent[index].aliegn = newData;
                    setRows(updatedContent);
                  }}
                  aliegn={row.aliegn ? row.aliegn : "center"}
                  width={row.width ? row.width : "50"}
                  index={index}
                  indexValue={indexValue}
                  setIndexValue={setIndexValue}
                  preview={preview}
                  data={row.ImageLink}
                  selected={selected}
                  onUpdate={(newData) => {
                    const updatedContent = [...rows];
                    updatedContent[index].ImageLink = newData;
                    setRows(updatedContent);
                  }}
                  onHeight={(newData) => {
                    const updatedContent = [...rows];
                    updatedContent[index].height = newData;
                    setRows(updatedContent);
                  }}
                  height={row.height ? row.height : "200"}
                />
              </>
            ) : (
              <>
                <ForDouble
                  onWidth={(newData) => {
                    const updatedContent = [...rows];
                    updatedContent[index].width = newData;
                    setRows(updatedContent);
                  }}
                  onAliegn={(newData) => {
                    const updatedContent = [...rows];
                    updatedContent[index].aliegn = newData;
                    setRows(updatedContent);
                  }}
                  aliegn={row.aliegn ? row.aliegn : "center"}
                  width={row.width ? row.width : "50"}
                  index={index}
                  indexValue={indexValue}
                  setIndexValue={setIndexValue}
                  preview={preview}
                  data={row.ImageLink}
                  onUpdate={(newData) => {
                    const updatedContent = [...rows];
                    updatedContent[index].ImageLink = newData;
                    setRows(updatedContent);
                  }}
                  onHeight={(newData) => {
                    const updatedContent = [...rows];
                    updatedContent[index].height = newData;
                    setRows(updatedContent);
                  }}
                  height={row.height ? row.height : "200"}
                  selected={selected}
                />

                {switchButton === index && preview !== true && (
                  <div className="w-[1px] h-30 border-r-[1px] border-dashed border-red-400 ml-4 relative">
                    <button
                      ref={buttonRef}
                      onClick={() => {
                        setSelected(index);
                        const updatedContent = [...rows];
                        updatedContent[index].align =
                          updatedContent[index].align === "left"
                            ? "right"
                            : "left";
                        setRows(updatedContent);
                      }}
                      className="absolute -right-3 z-50 p-1 border border-dashed text-graidient_bottom
                       border-red-400 bg-white rounded-[50%] hover:bg-graidient_bottom hover:text-white top-[47%] "
                    >
                      <HiOutlineSwitchHorizontal />
                    </button>
                  </div>
                )}
                <RichTextExample
                  index={index}
                  indexValue={indexValue}
                  setIndexValue={setIndexValue}
                  onChange={(newData) => {
                    const updatedContent = [...rows];
                    updatedContent[index].content = newData;
                    setRows(updatedContent);
                  }}
                  onTextColor={(newData) => {
                    const updatedData = [...rows];
                    updatedData[index].textColor = newData;
                    setRows(updatedData);
                  }}
                  textColor={row.textColor ? row.textColor : "text-black"}
                  data={row.content}
                  preview={preview}
                  selected={selected}
                  className="relative"
                  settings={settings}
                  setSelected={setSelected}
                />
              </>
            )}
          </div>
        ) : row.type === "image" ? (
          <div className="w-full" onClick={() => setSelected(index)}>
            <Image
              data={row.content}
              onUpdate={(newData) => {
                const updatedContent = [...rows];
                updatedContent[index].content = newData;
                setRows(updatedContent);
              }}
              onHeight={(newData) => {
                const updatedContent = [...rows];
                updatedContent[index].height = newData;
                setRows(updatedContent);
              }}
              onWidth={(newData) => {
                const updatedContent = [...rows];
                updatedContent[index].width = newData;
                setRows(updatedContent);
              }}
              onAliegn={(newData) => {
                const updatedContent = [...rows];
                updatedContent[index].aliegn = newData;
                setRows(updatedContent);
              }}
              aliegn={row.aliegn ? row.aliegn : "center"}
              height={row.height ? row.height : "200"}
              width={row.width ? row.width : "50"}
              captionH={row.caption ? row.caption : ""}
              discription={row.discription ? row.discription : ""}
              onCaption={(value1, value2) => {
                const updatedContent = [...rows];
                updatedContent[index].caption = value1;
                updatedContent[index].discription = value2;
                setRows(updatedContent);
              }}
              index={index}
              indexValue={indexValue}
              setIndexValue={setIndexValue}
              preview={preview}
              selected={selected}
              settings={settings}
            />
          </div>
        ) : row.type === "brake" ? (
          <div
            className="w-[103%] ml-[-12px]  h-10 flex items-center justify-center   "
            onClick={() => setSelected(index)}
          >
            <div className="w-full h-4 shadow-inner  bg-gray-100"></div>
          </div>
        ) : row.type === "table" ? (
          <div className="w-full  " onClick={() => setSelected(index)}>
            <Table
              settings={settings}
              data={row.content}
              design={row.design}
              onUpdate={(newData) => {
                setRows((prevRows) => {
                  const updatedRows = [...prevRows];
                  updatedRows[index] = {
                    ...updatedRows[index],
                    content: newData,
                  };
                  return updatedRows;
                });
              }}
              textFormat={row.textFormat ?? "left"}
              onUpdateTextFormat={(newData) => {
                setRows((prevRows) => {
                  const updatedRows = [...prevRows];
                  updatedRows[index] = {
                    ...updatedRows[index],
                    textFormat: newData,
                  };
                  return updatedRows;
                });
              }}
              colAlign={row.colAlign ?? {}}
              onColAlign={(newData) => {
                setRows((prevRows) => {
                  const updatedRows = [...prevRows];
                  updatedRows[index] = {
                    ...updatedRows[index],
                    colAlign: newData,
                  };
                  return updatedRows;
                });
              }}
              boldAll={row.boldAll}
              onBold={(newData) => {
                setRows((prevRows) => {
                  const updatedRows = [...prevRows];
                  updatedRows[index] = {
                    ...updatedRows[index],
                    boldAll: newData,
                  };
                  return updatedRows;
                });
              }}
              underlineAll={row.underlineAll}
              onUnderline={(newData) => {
                setRows((prevRows) => {
                  const updatedRows = [...prevRows];
                  updatedRows[index] = {
                    ...updatedRows[index],
                    underlineAll: newData,
                  };
                  return updatedRows;
                });
              }}
              italicAll={row.italicAll}
              onItalic={(newData) => {
                setRows((prevRows) => {
                  const updatedRows = [...prevRows];
                  updatedRows[index] = {
                    ...updatedRows[index],
                    italicAll: newData,
                  };
                  return updatedRows;
                });
              }}
              index={index}
              indexValue={indexValue}
              setIndexValue={setIndexValue}
              preview={preview}
              selected={selected}
            />
          </div>
        ) : row.type === "cost" ? (
          <div className="w-full  " onClick={() => setSelected(index)}>
            <CostModuleSlate
              settings={settings}
              index={index}
              rows={row}
              selected={selected}
              preview={preview}
            />
          </div>
        ) : row.type === "code" ? (
          <div className="w-full  " onClick={() => setSelected(index)}>
            <CodeBlock
              index={index}
              rows={row}
              content={row.content}
              onChange={(newData) => {
                const updatedContent = [...rows];
                updatedContent[index].content = newData;
                setRows(updatedContent);
              }}
              preview={preview}
            />
          </div>
        ) : row.type === "sign" ? (
          <div className="w-full " onClick={() => setSelected(index)}>
            <SignRow
              index={index}
              rows={row}
              content={row.content}
              onChange={(newData) => {
                const updatedContent = [...rows];
                updatedContent[index].content = newData;
                setRows(updatedContent);
              }}
              selected={selected}
              setSign={setSign}
            />
          </div>
        ) : row.type === "price" ? (
          <div className="w-full  " onClick={() => setSelected(index)}>
            <PriceTermSlate
              settings={settings}
              index={index}
              rows={row}
              selected={selected}
              preview={preview}
            />
          </div>
        ) : row.type === "cover" ? (
          <div
            className="w-full  "
            onClick={() => {
              setSelected(index);
            }}
          >
            <CoverPageSlate
              index={index}
              indexValue={indexValue}
              setIndexValue={setIndexValue}
              selected={selected}
              url={row.content}
              onChange={(newData) => {
                const updatedContent = [...rows];
                updatedContent[0].content = newData;
                setRows(updatedContent);
              }}
              preview={preview}
            />
          </div>
        ) : (
          <span>Empty Row</span>
        )}
      </div>

      {/* Row management buttons */}
      {selected === index && preview !== true && (
        <div
          className={`absolute -top-12 right-0 bg-white flex  gap-2 border border-gray-100 shadow-lg py-1 px-1  rounded-sm`}
          ref={sideRef}
          onClick={() => setIndexValue(index)}
        >
          <button
            onClick={() => {
              captureImage();
              setBookmark(index);
            }}
            disabled={!!row.bookmark}
            className={` bg-white flex items-center justify-center px-2 py-2 ${
              row.bookmark ? "none" : "hover:bg-gray-100"
            }   `}
          >
            {row.bookmark ? (
              <FaBookmark className="text-graidient_bottom" />
            ) : (
              <CiBookmark />
            )}
          </button>
          <button
            onClick={() => {
              moveRowUp(index);
              setSelected(index - 1);
            }}
            className="  bg-white flex items-center justify-center px-2 py-2 hover:bg-gray-100"
          >
            <LuArrowUpToLine />
          </button>
          <button
            onClick={() => {
              moveRowDown(index);
              setSelected(index + 1);
            }}
            className="  bg-white flex items-center justify-center px-2 py-2 hover:bg-gray-100"
          >
            <LuArrowDownToLine />
          </button>
          <button
            onClick={() => deleteRow(index)}
            className="  bg-white flex items-center justify-center px-2 py-2 hover:bg-gray-100"
          >
            <MdOutlineDeleteForever />
          </button>
        </div>
      )}

      {selected === index && preview !== true && (
        <div
          ref={quickButtonRef}
          onClick={() => setQuickAdd(true)}
          className={`absolute -bottom-4 right-[50%] bg-white flex   border border-graidient_bottom text-graidient_bottom items-center justify-center w-10 h-10  rounded-[50%] text-xl cursor-pointer z-[5000]`}
        >
          <FiPlus />
        </div>
      )}
      {selected === index && preview !== true && quickAdd === true && (
        <div
          ref={quickRef}
          className={`absolute bottom-7 right-[47%] bg-white flex flex-col items-center justify-start w-fit h-44 overflow-auto py-3 px-4   cursor-pointer shadow-lg z-[5000] scrollbar-hide `}
        >
          <button
            onClick={() => {
              addHeadingRow("heading-one", selected + 1);
              setSelected(selected + 1);
              setQuickAdd(false);
            }}
            className="py-1.5 w-full px-3 hover:bg-gray-100 text-start"
          >
            Heading 1
          </button>
          <button
            onClick={() => {
              addHeadingRow("heading-two", selected + 1);
              setSelected(selected + 1);
              setQuickAdd(false);
            }}
            className="py-1.5 w-full px-3 hover:bg-gray-100 text-start"
          >
            Heading 2
          </button>
          <button
            onClick={() => {
              addHeadingRow("heading-three", selected + 1);
              setSelected(selected + 1);
              setQuickAdd(false);
            }}
            className="py-1.5 w-full px-3 hover:bg-gray-100 text-start"
          >
            Heading 3
          </button>
          <button
            onClick={() => {
              addHeadingRow("heading-four", selected + 1);
              setSelected(selected + 1);
              setQuickAdd(false);
            }}
            className="py-1.5 w-full px-3 hover:bg-gray-100 text-start"
          >
            Heading 4
          </button>
          <button
            onClick={() => {
              addHeadingRow("heading-five", selected + 1);
              setSelected(selected + 1);
              setQuickAdd(false);
            }}
            className="py-1.5 w-full px-3 hover:bg-gray-100 text-start"
          >
            Heading 5
          </button>
          <button
            onClick={() => {
              addHeadingRow("heading-six", selected + 1);
              setSelected(selected + 1);
              setQuickAdd(false);
            }}
            className="py-1.5 w-full px-3 hover:bg-gray-100 text-start"
          >
            Heading 6
          </button>
          <button
            onClick={() => {
              addInputRow(selected + 1);
              setSelected(selected + 1);
              setQuickAdd(false);
            }}
            className="py-1.5 w-full px-3 hover:bg-gray-100 text-start"
          >
            Paragraph
          </button>
          <button
            onClick={() => {
              addDoublePara(selected + 1);
              setSelected(selected + 1);
              setQuickAdd(false);
            }}
            className="py-1.5 w-full px-3 hover:bg-gray-100 text-start"
          >
            Doble-Para
          </button>
          <button
            onClick={() => {
              addImageRow(selected + 1);
              setSelected(selected + 1);
              setQuickAdd(false);
            }}
            className="py-1.5 w-full px-3 hover:bg-gray-100 text-start"
          >
            Image
          </button>
          <button
            onClick={() => {
              addImageAndParagraph(selected + 1);
              setSelected(selected + 1);
              setQuickAdd(false);
            }}
            className="py-1.5 w-full px-3 hover:bg-gray-100 text-start"
          >
            Image-Para
          </button>
          <button
            onClick={() => {
              addCodeBlock(selected + 1);
              setSelected(selected + 1);
              setQuickAdd(false);
            }}
            className="py-1.5 w-full px-3 hover:bg-gray-100 text-start"
          >
            Code block
          </button>
          <button
            onClick={() => {
              addBreakPoint(selected + 1);
              setSelected(selected + 1);
              setQuickAdd(false);
            }}
            className="py-1.5 w-full px-3 hover:bg-gray-100 text-start"
          >
            Page Break
          </button>
        </div>
      )}
    </div>
  );
};

export default DropRow;
