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

  return (
    <div
      ref={divRef}
      style={{
        width: row.type === "brake" ? "100%" : "94%",
        minHeight: "100px",
        marginBottom: "0px",
        marginLeft: row.type === "brake" ? "0px" : "20px",
        marginRight: row.type === "brake" ? "0px" : "7px",
        marginTop: selected === index && index === 0 ? "30px" : "0px",
        border:
          selected === index ? "1px dashed rgba(223 , 6 , 78 , 1)" : "none",
        backgroundColor: "#fff",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="relative"
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
              data={row.content}
              preview={preview}
              settings={settings}
            />
          </div>
        ) : row.type === "heading" ? (
          <div className="w-full " onClick={() => setSelected(index)}>
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
              size={row.size}
              data={row}
              preview={preview}
              moveRowUp={moveRowUp}
              moveRowDown={moveRowDown}
              deleteRow={deleteRow}
              settings={settings}
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
                />

                {switchButton === index && (
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
                />

                {switchButton === index && (
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
                  data={row.content}
                  preview={preview}
                  className="relative"
                  settings={settings}
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
            />
          </div>
        ) : row.type === "cost" ? (
          <div className="w-full  " onClick={() => setSelected(index)}>
            <CostModuleSlate
              settings={settings}
              index={index}
              rows={row}
              selected={selected}
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
            />
          </div>
        ) : (
          <span>Empty Row</span>
        )}
      </div>

      {/* Row management buttons */}
      {selected === index && (
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
    </div>
  );
};

export default DropRow;
