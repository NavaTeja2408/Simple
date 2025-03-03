import jsPDF from "jspdf";
import "jspdf-autotable";
import ImageAlter from "../../assets/ImageAlter.png";
import { BsFileLock } from "react-icons/bs";

const GeneratePDF = async (data) => {
  const doc = new jsPDF();
  let currentY = 10; // Start position for the Y-coordinate
  const pageHeight = doc.internal.pageSize.height;
  const availableWidth = doc.internal.pageSize.width - 10;

  const renderContent = (content, type) => {
    const pageS = doc.internal.pageSize.width;
    if (type !== "image" && type !== "brake") {
      if (!content) {
        console.warn(
          `Content for type '${type}' is missing or invalid:`,
          content
        );
        return;
      }
    }

    switch (type) {
      case "heading":
        currentY += 10;
        const headingText =
          Array.isArray(content) &&
          content[0]?.children &&
          content[0]?.children[0]?.text
            ? content[0].children[0].text
            : "No Heading Provided";
        const textSize =
          Array.isArray(content) && content[0]?.children && content[0]?.type
            ? content[0].type
            : "heading-two";
        const alignment =
          Array.isArray(content) && content[0]?.align
            ? content[0].align.toLowerCase()
            : "left"; // Default to "left" alignment if not specified
        if (currentY + 20 > pageHeight) {
          doc.addPage();
          currentY = 10;
        }

        doc.setFontSize(
          textSize === "heading-one"
            ? 26
            : textSize === "heading-two"
            ? 24
            : textSize === "heading-three"
            ? 22
            : textSize === "heading-four"
            ? 20
            : textSize === "heading-five"
            ? 18
            : 16
        );

        let xPosition = 10; // Default for "left"
        if (alignment === "center") {
          const pageWidth = doc.internal.pageSize.width;
          const textWidth = doc.getTextWidth(headingText);
          xPosition = (pageWidth - textWidth) / 2; // Center align
        } else if (alignment === "right") {
          const pageWidth = doc.internal.pageSize.width;
          const textWidth = doc.getTextWidth(headingText);
          xPosition = pageWidth - textWidth - 10; // Right align
        }

        // Render the text
        doc.text(headingText, xPosition, currentY, { maxWidth: pageS });
        currentY += 5;
        // Add space after heading
        break;

      case "table":
        if (currentY + 25 > pageHeight) {
          doc.addPage();
          currentY = 10;
        }
        if (Array.isArray(content) && content.length > 0) {
          const rows = content.map((row) => (Array.isArray(row) ? row : []));
          doc.autoTable({
            startY: currentY,
            head: [rows[0] || []],
            body: rows.slice(1),
          });
          currentY = doc.autoTable.previous.finalY + 10; // Update Y after table
        } else {
          console.warn("Invalid table data:", content);
        }
        break;

      case "input":
        if (Array.isArray(content)) {
          content.forEach((block) => {
            const text = block?.children?.[0]?.text || "No Text Provided";
            const alignment = block?.align?.toLowerCase() || "left";
            const type = block?.type || "paragraph";

            if (type === "numbered-list") {
              if (currentY + 15 > pageHeight) {
                doc.addPage();
                currentY = 10;
              }
              if (Array.isArray(block?.children)) {
                block.children.forEach((item, idx) => {
                  const text = item?.children?.[0]?.text || "No Text Provided";
                  const alignment = item?.align?.toLowerCase() || "left"; // Default alignment is "left"

                  let xPosition = 10; // Default for "left" alignment
                  if (alignment === "center") {
                    const pageWidth = doc.internal.pageSize.width;
                    const textWidth = doc.getTextWidth(`${idx + 1}. ` + text);
                    xPosition = (pageWidth - textWidth) / 2; // Center align
                  } else if (alignment === "right") {
                    const pageWidth = doc.internal.pageSize.width;
                    const textWidth = doc.getTextWidth(`${idx + 1}. ` + text);
                    xPosition = pageWidth - textWidth - 10; // Right align
                  }

                  doc.setFontSize(8); // Set standard font size for list items
                  const prefix = `${idx + 1}.`; // Use numbers or bullet points
                  const lines = doc.splitTextToSize(
                    prefix + text,
                    availableWidth
                  );
                  lines.forEach((line, idx) => {
                    doc.text(line, xPosition, currentY, {
                      maxWidth: doc.internal.pageSize.width - 15,
                    });
                    currentY += 5;
                    if (currentY + 10 > pageHeight) {
                      doc.addPage();
                      currentY = 10;
                    }
                    // Move down for the next line
                  }); // Move down for the next item
                });
              }
            } else if (type === "bulleted-list") {
              if (currentY + 15 > pageHeight) {
                doc.addPage();
                currentY = 10;
              }
              if (Array.isArray(block?.children)) {
                block.children.forEach((item, idx) => {
                  const text = item?.children?.[0]?.text || "No Text Provided";
                  const alignment = item?.align?.toLowerCase() || "left"; // Default alignment is "left"

                  let xPosition = 10; // Default for "left" alignment
                  if (alignment === "center") {
                    const pageWidth = doc.internal.pageSize.width;
                    const textWidth = doc.getTextWidth("• " + text);
                    xPosition = (pageWidth - textWidth) / 2; // Center align
                  } else if (alignment === "right") {
                    const pageWidth = doc.internal.pageSize.width;
                    const textWidth = doc.getTextWidth("• " + text);
                    xPosition = pageWidth - textWidth - 10; // Right align
                  }

                  doc.setFontSize(8); // Set standard font size for list items
                  const prefix = "• "; // Use numbers or bullet points
                  const lines = doc.splitTextToSize(
                    prefix + text,
                    availableWidth
                  );
                  lines.forEach((line, idx) => {
                    doc.text(line, xPosition, currentY, {
                      maxWidth: doc.internal.pageSize.width - 15,
                    });
                    if (currentY + 10 > pageHeight) {
                      doc.addPage();
                      currentY = 10;
                    }
                    currentY += 5; // Move down for the next line
                  }); // Move down for the next item
                });
              }
            } else if (type === "block-quote") {
              if (currentY + 15 > pageHeight) {
                doc.addPage();
                currentY = 10;
              }
              const text = block?.children?.[0]?.text || "No Text Provided";

              // Apply custom styling for block quotes
              doc.setFont("Times", "italic"); // Italic font for block quotes
              doc.setFontSize(14); // Slightly larger font size for emphasis

              // Add left indentation for block quotes
              const xPosition = 20; // Indent block quotes slightly
              doc.text(text, xPosition, currentY, {
                maxWidth: doc.internal.pageSize.width - 40,
              }); // Restrict width for wrapping
              if (currentY + 10 > pageHeight) {
                doc.addPage();
                currentY = 10;
              }

              currentY += 5; // Add extra spacing after block quote
            } else {
              if (currentY + 15 > pageHeight) {
                doc.addPage();
                currentY = 10;
              }
              let xPosition = 10; // Default for "left" alignment
              if (alignment === "center") {
                const pageWidth = doc.internal.pageSize.width;
                const textWidth = doc.getTextWidth(text);
                xPosition = (pageWidth - textWidth) / 2; // Center align
              } else if (alignment === "right") {
                const pageWidth = doc.internal.pageSize.width;
                const textWidth = doc.getTextWidth(text);
                xPosition = pageWidth - textWidth - 10; // Right align
              }
              const textSize = block.type;

              doc.setFontSize(
                textSize === "heading-one"
                  ? 16
                  : textSize === "heading-two"
                  ? 14
                  : textSize === "heading-three"
                  ? 12
                  : textSize === "heading-four"
                  ? 10
                  : textSize === "heading-five"
                  ? 8
                  : 8
              ); // Set a standard font size for input text
              const lines = doc.splitTextToSize(text, availableWidth);
              if (textSize === "heading-one" || textSize === "heading-two") {
                currentY += 3;
              }
              lines.forEach((line, idx) => {
                doc.text(line, xPosition, currentY, {
                  maxWidth: doc.internal.pageSize.width - 15,
                });
                if (currentY + 10 > pageHeight) {
                  doc.addPage();
                  currentY = 10;
                }
                currentY +=
                  textSize === "heading-one"
                    ? 12
                    : textSize === "heading-two"
                    ? 10
                    : textSize === "heading-three"
                    ? 8
                    : textSize === "heading-four"
                    ? 6
                    : textSize === "heading-five"
                    ? 6
                    : 5; // Move down for the next line
              });
              // Add space after rendering each block
            }
          });
        } else {
          console.warn("Invalid content for 'input':", content);
        }
        break;

      case "double-para":
        if (
          Array.isArray(content.firstContent) &&
          Array.isArray(content.secondContent)
        ) {
          if (currentY + 20 > pageHeight) {
            doc.addPage();
            currentY = 10;
          }
          const pageWidth = doc.internal.pageSize.width;
          const halfWidth = pageWidth / 2;
          const temp = currentY;
          const currentPage = doc.internal.getCurrentPageInfo().pageNumber;

          content.firstContent.forEach((block) => {
            const text = block?.children?.[0]?.text || "No Text Provided";
            const alignment = block?.align?.toLowerCase() || "left";
            const type = block?.type || "paragraph";

            if (type === "numbered-list") {
              const alignment = block?.align?.toLowerCase() || "left";
              if (Array.isArray(block?.children)) {
                block.children.forEach((item, idx) => {
                  const text = item?.children?.[0]?.text || "No Text Provided";
                  // Default alignment is "left"

                  let xPosition = 10; // Default for "left" alignment
                  if (alignment === "center") {
                    const pageWidth = doc.internal.pageSize.width / 2;
                    const textWidth = doc.getTextWidth(`${idx + 1}. ` + text);
                    xPosition = (pageWidth - textWidth) / 2; // Center align
                  } else if (alignment === "right") {
                    const pageWidth = doc.internal.pageSize.width / 2;
                    const textWidth = doc.getTextWidth(`${idx + 1}. ` + text);
                    xPosition = pageWidth - textWidth - 10; // Right align
                  }

                  doc.setFontSize(8); // Set standard font size for list items
                  const prefix = `${idx + 1}.`; // Use numbers or bullet points
                  const lines = doc.splitTextToSize(
                    prefix + text,
                    halfWidth - 15
                  );
                  lines.forEach((line, idx) => {
                    doc.text(line, xPosition, currentY, {
                      maxWidth: halfWidth - 15,
                    });
                    if (currentY + 10 > pageHeight) {
                      doc.addPage();
                      currentY = 10;
                    }
                    currentY += 5; // Move down for the next line
                  });
                });
              }
            } else if (type === "bulleted-list") {
              const alignment = block?.align?.toLowerCase() || "left";
              if (Array.isArray(block?.children)) {
                block.children.forEach((item, idx) => {
                  const text = item?.children?.[0]?.text || "No Text Provided";
                  // Default alignment is "left"

                  let xPosition = 10; // Default for "left" alignment
                  if (alignment === "center") {
                    const pageWidth = doc.internal.pageSize.width / 2;
                    const textWidth = doc.getTextWidth("• " + text);
                    xPosition = (pageWidth - textWidth) / 2; // Center align
                  } else if (alignment === "right") {
                    const pageWidth = doc.internal.pageSize.width / 2;
                    const textWidth = doc.getTextWidth("• " + text);
                    xPosition = pageWidth - textWidth - 10; // Right align
                  }

                  doc.setFontSize(8); // Set standard font size for list items
                  const prefix = "• "; // Use numbers or bullet points
                  const lines = doc.splitTextToSize(
                    prefix + text,
                    halfWidth - 15
                  );
                  lines.forEach((line, idx) => {
                    doc.text(line, xPosition, currentY, {
                      maxWidth: halfWidth - 15,
                    });
                    if (currentY + 10 > pageHeight) {
                      doc.addPage();
                      currentY = 10;
                    }
                    currentY += 5; // Move down for the next line
                  });
                });
              }
            } else if (type === "block-quote") {
              const text = block?.children?.[0]?.text || "No Text Provided";

              // Apply custom styling for block quotes
              doc.setFont("Times", "italic"); // Italic font for block quotes
              doc.setFontSize(10); // Slightly larger font size for emphasis

              // Add left indentation for block quotes
              const xPosition = 20;

              // Restrict width for wrapping
              const lines = doc.splitTextToSize(text, halfWidth - 15);
              lines.forEach((line, idx) => {
                doc.text(line, xPosition, currentY, {
                  maxWidth: doc.internal.pageSize.width - 40,
                });
                if (currentY + 10 > pageHeight) {
                  doc.addPage();
                  currentY = 10;
                }
                currentY += 5; // Move down for the next line
              });
            } else {
              let xPosition = 10; // Default for "left" alignment
              if (alignment === "center") {
                const pageWidth = doc.internal.pageSize.width / 2;
                const textWidth = doc.getTextWidth(text);
                xPosition = (pageWidth - textWidth) / 2; // Center align
              } else if (alignment === "right") {
                const pageWidth = doc.internal.pageSize.width / 2;
                const textWidth = doc.getTextWidth(text);
                xPosition = pageWidth - textWidth - 10; // Right align
              }
              const textSize = block.type;
              if (textSize === "heading-one" || textSize === "heading-two") {
                currentY += 3;
              }

              doc.setFontSize(
                textSize === "heading-one"
                  ? 16
                  : textSize === "heading-two"
                  ? 14
                  : textSize === "heading-three"
                  ? 12
                  : textSize === "heading-four"
                  ? 10
                  : textSize === "heading-five"
                  ? 8
                  : 8
              ); // Set a standard font size for input text
              const lines = doc.splitTextToSize(text, halfWidth - 15);
              lines.forEach((line, idx) => {
                doc.text(line, xPosition, currentY, {
                  maxWidth: halfWidth - 15,
                });
                if (currentY + 10 > pageHeight) {
                  doc.addPage();
                  currentY = 10;
                }
                currentY += 5;
              });
            }
          });
          currentY = temp;
          doc.setPage(currentPage);
          content.secondContent.forEach((block) => {
            const text = block?.children?.[0]?.text || "No Text Provided";
            const alignment = block?.align?.toLowerCase() || "left";
            const type = block?.type || "paragraph";

            if (type === "numbered-list") {
              if (Array.isArray(block?.children)) {
                block.children.forEach((item, idx) => {
                  const text = item?.children?.[0]?.text || "No Text Provided";
                  // Default alignment is "left"

                  let xPosition = halfWidth + 10; // Default for "left" alignment
                  if (alignment === "center") {
                    const pageWidth = doc.internal.pageSize.width / 2;
                    const textWidth = doc.getTextWidth(`${idx + 1}. ` + text);
                    xPosition = halfWidth + (pageWidth - textWidth) / 2; // Center align
                  } else if (alignment === "right") {
                    const pageWidth = doc.internal.pageSize.width / 2;
                    const textWidth = doc.getTextWidth(`${idx + 1}. ` + text);
                    xPosition = halfWidth + pageWidth - textWidth - 10; // Right align
                  }

                  doc.setFontSize(8); // Set standard font size for list items
                  const prefix = `${idx + 1}.`; // Use numbers or bullet points
                  const lines = doc.splitTextToSize(
                    prefix + text,
                    halfWidth - 15
                  );
                  lines.forEach((line, idx) => {
                    doc.text(line, xPosition, currentY, {
                      maxWidth: halfWidth - 15,
                    });
                    if (currentY + 10 > pageHeight) {
                      doc.setPage(currentPage + 1);
                      currentY = 10;
                    }
                    currentY += 5; // Move down for the next item // Move down for the next line
                  });
                });
              }
            } else if (type === "bulleted-list") {
              const alignment = block?.align?.toLowerCase() || "left";
              if (Array.isArray(block?.children)) {
                block.children.forEach((item, idx) => {
                  const text = item?.children?.[0]?.text || "No Text Provided";
                  // Default alignment is "left"

                  let xPosition = halfWidth + 10; // Default for "left" alignment
                  if (alignment === "center") {
                    const pageWidth = doc.internal.pageSize.width / 2;
                    const textWidth = doc.getTextWidth("• " + text);
                    xPosition = halfWidth + (pageWidth - textWidth) / 2; // Center align
                  } else if (alignment === "right") {
                    const pageWidth = doc.internal.pageSize.width / 2;
                    const textWidth = doc.getTextWidth("• " + text);
                    xPosition = halfWidth + pageWidth - textWidth - 10; // Right align
                  }

                  doc.setFontSize(8); // Set standard font size for list items
                  const prefix = "• "; // Use numbers or bullet points
                  const lines = doc.splitTextToSize(
                    prefix + text,
                    halfWidth - 15
                  );
                  lines.forEach((line, idx) => {
                    doc.text(line, xPosition, currentY, {
                      maxWidth: halfWidth - 15,
                    });
                    if (currentY + 10 > pageHeight) {
                      doc.setPage(currentPage + 1);
                      currentY = 10;
                    }
                    currentY += 5; // Move down for the next item // Move down for the next line
                  });
                });
              }
            } else if (type === "block-quote") {
              const text = block?.children?.[0]?.text || "No Text Provided";

              // Apply custom styling for block quotes
              doc.setFont("Times", "italic"); // Italic font for block quotes
              doc.setFontSize(12); // Slightly larger font size for emphasis

              // Add left indentation for block quotes
              const xPosition = halfWidth + 10; // Indent block quotes slightly
              doc.text(text, xPosition, currentY, {
                maxWidth: doc.internal.pageSize.width - 40,
              }); // Restrict width for wrapping

              currentY += 5; // Add extra spacing after block quote
            } else {
              let xPosition = halfWidth + 10; // Default for "left" alignment
              if (alignment === "center") {
                const pageWidth = doc.internal.pageSize.width / 2;
                const textWidth = doc.getTextWidth(text);
                xPosition = halfWidth + (pageWidth - textWidth) / 2; // Center align
              } else if (alignment === "right") {
                const pageWidth = doc.internal.pageSize.width / 2;
                const textWidth = doc.getTextWidth(text);
                xPosition = halfWidth + pageWidth - textWidth - 10; // Right align
              }
              const textSize = block.type;
              if (textSize === "heading-one" || textSize === "heading-two") {
                currentY += 3;
              }

              doc.setFontSize(
                textSize === "heading-one"
                  ? 16
                  : textSize === "heading-two"
                  ? 14
                  : textSize === "heading-three"
                  ? 12
                  : textSize === "heading-four"
                  ? 10
                  : textSize === "heading-five"
                  ? 8
                  : 8
              ); // Set a standard font size for input text
              const lines = doc.splitTextToSize(text, halfWidth - 15);
              lines.forEach((line, idx) => {
                doc.text(line, xPosition, currentY, {
                  maxWidth: halfWidth - 15,
                });
                if (currentY + 10 > pageHeight) {
                  doc.setPage(currentPage + 1);
                  currentY = 10;
                }
                currentY += 5;
              });
            }
          });
        } else {
          console.warn(`Invalid content for '${type}':`, content);
        }
        break;

      case "image":
        if (currentY + 50 > pageHeight) {
          doc.addPage();
          currentY = 10;
        }
        const imgWidth = 50; // Image width
        const imgHeight = 50; // Image height
        const pageWidth = doc.internal.pageSize.width;
        const Position = (pageWidth - imgWidth) / 2; // Center the image horizontally

        doc.addImage(
          ImageAlter,
          "JPEG",
          Position,
          currentY,
          imgWidth,
          imgHeight
        );
        currentY += imgHeight + 10; // Add space after the image
        break;

      case "image-para":
        if (currentY + 30 > pageHeight) {
          doc.addPage();
          currentY = 10;
        }
        if (Array.isArray(content)) {
          const pageWidth = doc.internal.pageSize.width;
          const halfWidth = pageWidth / 2;
          const temp = currentY;
          content.forEach((block) => {
            const text = block?.children?.[0]?.text || "No Text Provided";
            const alignment = block?.align?.toLowerCase() || "left";
            const type = block?.type || "paragraph";

            if (type === "numbered-list") {
              const alignment = block?.align?.toLowerCase() || "left";
              if (Array.isArray(block?.children)) {
                block.children.forEach((item, idx) => {
                  const text = item?.children?.[0]?.text || "No Text Provided";
                  // Default alignment is "left"

                  let xPosition = 10; // Default for "left" alignment
                  if (alignment === "center") {
                    const pageWidth = doc.internal.pageSize.width / 2;
                    const textWidth = doc.getTextWidth(`${idx + 1}. ` + text);
                    xPosition = (pageWidth - textWidth) / 2; // Center align
                  } else if (alignment === "right") {
                    const pageWidth = doc.internal.pageSize.width / 2;
                    const textWidth = doc.getTextWidth(`${idx + 1}. ` + text);
                    xPosition = pageWidth - textWidth - 10; // Right align
                  }

                  doc.setFontSize(8); // Set standard font size for list items
                  const prefix = `${idx + 1}.`; // Use numbers or bullet points
                  const lines = doc.splitTextToSize(
                    prefix + text,
                    halfWidth - 10
                  );
                  lines.forEach((line, idx) => {
                    doc.text(line, xPosition, currentY, {
                      maxWidth: halfWidth - 10,
                    });
                    if (currentY + 10 > pageHeight) {
                      doc.addPage();
                      currentY = 10;
                    }
                    currentY += 5; // Move down for the next line
                  });
                });
              }
            } else if (type === "bulleted-list") {
              const alignment = block?.align?.toLowerCase() || "left";
              if (Array.isArray(block?.children)) {
                block.children.forEach((item, idx) => {
                  const text = item?.children?.[0]?.text || "No Text Provided";
                  // Default alignment is "left"

                  let xPosition = 10; // Default for "left" alignment
                  if (alignment === "center") {
                    const pageWidth = doc.internal.pageSize.width / 2;
                    const textWidth = doc.getTextWidth("• " + text);
                    xPosition = (pageWidth - textWidth) / 2; // Center align
                  } else if (alignment === "right") {
                    const pageWidth = doc.internal.pageSize.width / 2;
                    const textWidth = doc.getTextWidth("• " + text);
                    xPosition = pageWidth - textWidth - 10; // Right align
                  }

                  doc.setFontSize(8); // Set standard font size for list items
                  const prefix = "• "; // Use numbers or bullet points
                  const lines = doc.splitTextToSize(
                    prefix + text,
                    halfWidth - 10
                  );
                  lines.forEach((line, idx) => {
                    doc.text(line, xPosition, currentY, {
                      maxWidth: halfWidth - 10,
                    });
                    if (currentY + 10 > pageHeight) {
                      doc.addPage();
                      currentY = 10;
                    }
                    currentY += 5; // Move down for the next line
                  });
                });
              }
            } else if (type === "block-quote") {
              const text = block?.children?.[0]?.text || "No Text Provided";

              // Apply custom styling for block quotes
              doc.setFont("Times", "italic"); // Italic font for block quotes
              doc.setFontSize(12); // Slightly larger font size for emphasis

              // Add left indentation for block quotes
              const xPosition = 20; // Indent block quotes slightly
              doc.text(text, xPosition, currentY, {
                maxWidth: halfWidth - 10,
              }); // Restrict width for wrapping

              currentY += 5; // Add extra spacing after block quote
            } else {
              let xPosition = 10; // Default for "left" alignment
              if (alignment === "center") {
                const pageWidth = doc.internal.pageSize.width;
                const textWidth = doc.getTextWidth(text);
                xPosition = (pageWidth - textWidth) / 2; // Center align
              } else if (alignment === "right") {
                const pageWidth = doc.internal.pageSize.width;
                const textWidth = doc.getTextWidth(text);
                xPosition = pageWidth - textWidth - 10; // Right align
              }
              const textSize = block.type;
              if (textSize === "heading-one" || textSize === "heading-two") {
                currentY += 3;
              }

              doc.setFontSize(
                textSize === "heading-one"
                  ? 16
                  : textSize === "heading-two"
                  ? 14
                  : textSize === "heading-three"
                  ? 12
                  : textSize === "heading-four"
                  ? 10
                  : textSize === "heading-five"
                  ? 8
                  : 8
              ); // Set a standard font size for input text
              const lines = doc.splitTextToSize(text, halfWidth - 10);
              lines.forEach((line, idx) => {
                doc.text(line, xPosition, currentY, {
                  maxWidth: halfWidth - 10,
                });
                if (currentY + 10 > pageHeight) {
                  doc.addPage();
                  currentY = 10;
                }
                currentY +=
                  textSize === "heading-one"
                    ? 12
                    : textSize === "heading-two"
                    ? 10
                    : textSize === "heading-three"
                    ? 8
                    : textSize === "heading-four"
                    ? 6
                    : textSize === "heading-five"
                    ? 5
                    : 5; // Move down for the next line
              });
            }
          });
          currentY = temp;
          const imgWidth = 50; // Image width
          const imgHeight = 50; // Image height
          const page = doc.internal.pageSize.width / 2;

          const imgXPosition = page + 10; // Position image to the right of the text
          const imgYPosition = currentY - 10; // Keep the same Y position as the text

          // Center the image horizontally

          doc.addImage(
            ImageAlter,
            "JPEG",
            imgXPosition,
            imgYPosition,
            imgWidth,
            imgHeight
          );
          currentY += Math.max(50, 10);
        } else {
          console.warn("Invalid content for 'input':", content);
        }
        break;

      case "cost":
        // Check if we need to add a new page
        if (currentY + 15 > pageHeight) {
          doc.addPage();
          currentY = 10; // Reset Y position to top of the new page
        }

        // Check if optional fields like discount and quantity are present
        const hasDiscount = content.some((row) => row.discount !== undefined);
        const hasQuantity = content.some((row) => row.quantity !== undefined);

        // Define the table headers dynamically based on available data
        const headers = ["Deliverable", "Price", "Payment Duration", "Amount"]; // Basic columns

        // Add optional columns to headers if they exist in any row
        if (hasDiscount) {
          headers.splice(2, 0, "Discount"); // Add "Discount" after "Price"
        }
        if (hasQuantity) {
          headers.splice(3, 0, "Quantity"); // Add "Quantity" after "Price" or "Discount"
        }

        // Construct the table body
        const body = content.map((row) => {
          const rowData = [
            row.deliverable,
            row.price,
            row.paymentDuration,
            row.amount,
          ];

          // Add the "Discount" and "Quantity" data if present
          if (hasDiscount) {
            rowData.splice(2, 0, row.discount); // Insert discount data
          }
          if (hasQuantity) {
            rowData.splice(3, 0, row.quantity); // Insert quantity data
          }

          return rowData;
        });

        // Generate the table with dynamic headers and body
        doc.autoTable({
          startY: currentY,
          head: [headers], // Use the dynamic headers array
          body: body, // Use the dynamically constructed body
        });

        // Update currentY after generating the table
        currentY = doc.autoTable.previous.finalY + 10;
        let value = 0;
        // Sum all the amounts in the content array
        content.forEach((item) => {
          value += item.amount;
        });

        // Format the total price (optional, depending on your requirements)
        const formattedValue = new Intl.NumberFormat().format(value); // Fix to two decimal places (optional)

        // Display the total price in the document
        doc.text(`Total Price is $${formattedValue}`, 15, currentY);

        break;

      case "sign":
        // Add "Signatures" label with some spacing
        let proposed;
        let proposedSigned;
        let acceptedSigned;
        let accepted;
        content.forEach((item, idx) => {
          if (idx === 0) {
            proposed = item.proposedName;
            proposedSigned = item.signed;
          } else {
            accepted = item.acceptedName;
            acceptedSigned = item.signed;
          }
        });
        currentY += 10;
        doc.text("Signatures", 10, currentY + 5);

        // Proposed name
        // Proposed signature line and text
        const proposedLineStart = 60;
        const proposedLineEnd = 110;
        const proposedLineCenter = (proposedLineStart + proposedLineEnd) / 2; // Center of the line
        const proposedTextWidth = doc.getTextWidth(proposed); // Width of the text
        const proposedTextX = proposedLineCenter - proposedTextWidth / 2; // Center the text

        if (proposedSigned === true) {
          doc.setFont("Times", "italic");
          doc.text(proposed, proposedTextX, currentY);
        }

        doc.line(
          proposedLineStart,
          currentY + 3,
          proposedLineEnd,
          currentY + 3
        ); // Draw line
        doc.setFont("Times", "normal", "bold");

        doc.text(proposed, proposedTextX, currentY + 9); // Centered text above the line

        // Accepted signature line and text
        const acceptedLineStart = 140;
        const acceptedLineEnd = 190;
        const acceptedLineCenter = (acceptedLineStart + acceptedLineEnd) / 2; // Center of the line
        const acceptedTextWidth = doc.getTextWidth(accepted); // Width of the text
        const acceptedTextX = acceptedLineCenter - acceptedTextWidth / 2; // Center the text

        if (acceptedSigned === true) {
          doc.setFont("Times", "italic");
          doc.text(accepted, acceptedTextX, currentY);
        }
        doc.line(
          acceptedLineStart,
          currentY + 3,
          acceptedLineEnd,
          currentY + 3
        ); // Draw line
        doc.setFont("Times", "normal", "bold");
        doc.text(accepted, acceptedTextX, currentY + 9); // Centered text above the line

        break;

      case "brake":
        doc.addPage();
        currentY = 10;
      default:
        console.warn(`Unhandled type '${type}':`, content);
    }
  };

  // Iterate over all data items
  data.forEach((item) => {
    if (item.type === "double-para") {
      renderContent(item, item.type);
    } else {
      renderContent(item.content, item.type);
    }

    currentY += 5;
  });

  // Save the PDF
  doc.save("document.pdf");
};

export default GeneratePDF;
