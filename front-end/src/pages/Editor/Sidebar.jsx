import React, { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { FiPlus } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Sign_v from "../../assets/Sign_v.png";
import cost_v from "../../assets/cost_v.png";
import table_v_1 from "../../assets/table_v_1.png";
import table_v_2 from "../../assets/table_v_2.png";
import table_v_3 from "../../assets/table_v_3.png";
import table_v_4 from "../../assets/table_v_4.png";
import table_v_5 from "../../assets/table_v_5.png";
import sections_1 from "../../assets/sections_1.png";
import section_2 from "../../assets/section_2.png";
import page_1 from "../../assets/page_1.png";
import sections from "../../assets/sections.png";
import saved from "../../assets/saved.png";
import Elements from "../../assets/Elements.png";
import Outline from "../../assets/Outline.png";
import Layout from "../../assets/Layout.png";
import Layers from "../../assets/Layers.png";
import History from "../../assets/History.png";
import Themes from "../../assets/Themes.png";
import Content from "../../assets/Content.png";
import help from "../../assets/help.png";
import heading_one from "../../assets/heading_one.png";
import image_in from "../../assets/Image_in.png";
import image_paragraph from "../../assets/Image_paragraph.png";
import theme_0 from "../../assets/theme-0.png";
import theme_1 from "../../assets/theme-1.png";
import theme_2 from "../../assets/theme-2.png";
import theme_3 from "../../assets/theme-3.png";
import theme_4 from "../../assets/theme-4.png";
import theme_5 from "../../assets/theme-5.png";

import ContentSideBar from "./SideBarComponents/ContentSideBar";
import { FaAngleDoubleLeft } from "react-icons/fa";
import single_para from "../../assets/single_para.png";
import double_para from "../../assets/double_para.png";
import { StateManageContext } from "../../context/StateManageContext";
import { SketchPicker } from "react-color";
import { IoCloudUploadOutline } from "react-icons/io5";
import para from "../../assets/para.jpeg";
import image_insert from "../../assets/img.jpeg";
import double_para_2 from "../../assets/double_para.jpeg";
import img_para from "../../assets/Img_para.jpeg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { VscHistory } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";
import profile from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";
import cover_img_1 from "../../assets/cover_1.jpg";
import cover_img_2 from "../../assets/cover_img_2.jpg";
import cover_img_3 from "../../assets/cover_img_3.jpg";
import cover_img_4 from "../../assets/cover_img_4.jpg";
import cover_img_5 from "../../assets/cover_img_5.jpg";
import cost_lv2 from "../../assets/cost_lv2.svg";
import signn_lv2 from "../../assets/sign_lv2.svg";
import content_lv2 from "../../assets/content_lv2.svg";
import cover_lv2 from "../../assets/cover_lv2.svg";
import sections_lv2 from "../../assets/sections_lv2.svg";
import { FaAngleRight } from "react-icons/fa6";
import para_2 from "../../assets/para_lvl2_2.svg";
import double_2 from "../../assets/double_para_lv2.svg";
import image_2 from "../../assets/img_lvl2_2.svg";
import image_p_2 from "../../assets/img_para_lvl2_2.svg";
import section_11 from "../../assets/section_11.png";
import section_12 from "../../assets/section_12.png";
import section_13 from "../../assets/section_13.png";
import section_14 from "../../assets/section_14.png";
import section_15 from "../../assets/section_15.jpg";
import s_1 from "../../assets/s_1.png";
import s_2 from "../../assets/s_2.png";
import s_3 from "../../assets/s_3.png";
import s_4 from "../../assets/s_4.png";
import s_5 from "../../assets/s_5.png";
import s_6 from "../../assets/s_6.png";
import s_7 from "../../assets/s_7.png";
import s_8 from "../../assets/s_8.png";
import s_9 from "../../assets/s_9.png";
import s_10 from "../../assets/s_10.png";
import s_11 from "../../assets/s_11.png";
import s_12 from "../../assets/s_12.png";

const Sidebar = ({
  selected,
  addInputRow,
  addHeadingRow,
  addDoublePara,
  addImageAndParagraph,
  addImageRow,
  addBreakPoint,
  addTableRow,
  addCodeBlock,
  active,
  setActive,
  rows,
  setRows,
  settings,
  setSettings,
  addCoverPage,
  preview,
}) => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const section_3_row = [
    {
      id: "9e671f88-bd20-45e7-90e5-af5cea534dec",
      type: "heading",
      size: "heading-three",
      content: [
        {
          type: "heading-three",
          align: "left",
          children: [
            {
              text: "Board Meeting Notes",
              bold: true,
            },
          ],
        },
      ],
      bookmark: false,
    },
    {
      id: "f18b35c1-9d7e-4579-bdbf-6ecad4df90d7",
      type: "heading",
      size: "heading-six",
      content: [
        {
          type: "heading-five",
          align: "left",
          children: [
            {
              bold: true,
              text: "Company Name",
            },
          ],
        },
      ],
      bookmark: false,
    },
    {
      id: "901d6c68-dffd-4d9c-8cd6-9859f789171e",
      type: "table",
      design: "leftcol",
      content: [
        ["Date", "[Add Date]"],
        ["Time", "[Add Time]"],
        ["Location", "[Add Location]"],
        ["Audio / Video Replay", "[Add Link]"],
        ["Meeting Agenda", "[Add Link]"],
      ],
      boldAll: [
        [false, false],
        [false, false],
        [false, false],
        [false, false],
        [false, false],
      ],
      underlineAll: [
        [false, false],
        [false, false],
        [false, false],
        [false, false],
        [false, false],
      ],
      italicAll: [
        [false, false],
        [false, false],
        [false, false],
        [false, false],
        [false, false],
      ],
      textFormat: "left",
      bookmark: false,
    },
  ];

  const section_4_row = [
    {
      id: "c2bb1e50-20c1-41ca-abb5-2ce4dc33502b",
      type: "input",
      content: [
        {
          type: "heading-two",
          children: [
            {
              text: "Attendees",
              bold: true,
            },
          ],
        },
      ],
      bookmark: false,
    },
    {
      id: "8b780c9e-9bb0-493a-bcab-7482d41fab9c",
      type: "table",
      design: "alternativecol",
      content: [
        ["Role", "Name", "Role", "Name"],
        ["Founder & CEO", "[Add Name]", "VP of Operations", "[Add Name]"],
        ["Finance Director", "[Add Name]", "HR Director", "[Add Name]"],
        ["Product Lead", "[Add Name]", "Legal Advisor", "[Add Name]"],
        ["Marketing Head", "[Add Name]", "Head of Partnerships", "[Add Name]"],
        [
          "Technology Lead",
          "[Add Name]",
          "Sustainability Manager",
          "[Add Name]",
        ],
      ],
      boldAll: [
        [true, true, true, true],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ],
      underlineAll: [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ],
      italicAll: [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ],
      textFormat: "left",
      bookmark: true,
    },
  ];

  const section_5_row = [
    {
      id: "d60e5f1c-204e-4a77-8714-c834d037d2d1",
      type: "heading",
      size: "heading-three",
      content: [
        {
          type: "heading-three",
          align: "left",
          children: [
            {
              text: "Key Strategic Initiatives",
              bold: true,
            },
          ],
        },
      ],
      bookmark: false,
    },
    {
      id: "d5ba026f-6670-43a0-b267-94c8b640b381",
      type: "table",
      design: "normal",
      content: [
        ["Strategic Focus", "Status Update"],
        [
          "Entering New Regions",
          "The team recently expanded operations into two additional regions, receiving encouraging early feedback from local customers.\nHurdles: Stronger-than-expected competition has created extra demand for targeted marketing campaigns to build market share.",
        ],
        [
          "New Product Development",
          "Our innovation team is advancing a new product range, \nwith prototypes now in the final testing phase.\nHurdles: Supply chain issues for certain components have delayed the rollout timeline, requiring updates to the launch plan.",
        ],
        [
          "Efficiency & Cost Savings",
          "Multiple efficiency measures have been rolled out, resulting in significant reductions in operating costs.\nHurdles: Some staff have raised concerns about how these changes affect daily workflows, so ongoing communication and support are in place.",
        ],
      ],
      boldAll: [
        [true, true],
        [false, false],
        [false, false],
        [false, false],
      ],
      underlineAll: [
        [false, false],
        [false, false],
        [false, false],
        [false, false],
      ],
      italicAll: [
        [false, false],
        [false, false],
        [false, false],
        [false, false],
      ],
      textFormat: "left",
      bookmark: false,
    },
  ];

  const section_2_row = {
    id: "5864692a-4859-4b18-babe-7c4b866a60f1",
    type: "input",
    content: [
      {
        type: "heading-two",
        children: [
          {
            text: "Business Overview & Key Objectives",
            bold: true,
          },
        ],
      },
      {
        type: "paragrapgh",
        children: [
          {
            text: "Use this section to describe your industry and where your business fits in.",
          },
        ],
      },
      {
        type: "paragrapgh",
        children: [
          {
            text: "Include relevant market research, trends, and key stats to show the opportunity and potential growth in your space. Highlight any products, new developments, or shifts in the market that support your business plan.",
          },
        ],
      },
      {
        type: "paragrapgh",
        children: [
          {
            text: "",
          },
        ],
      },
      {
        type: "paragrapgh",
        children: [
          {
            text: "Key Objectives",
          },
        ],
      },
      {
        type: "paragrapgh",
        children: [
          {
            text: "Break down your goals into short-term, mid-term, and long-term milestones. These might include:",
          },
        ],
      },
      {
        type: "paragrapgh",
        children: [
          {
            text: "",
          },
        ],
      },
      {
        type: "bulleted-list",
        children: [
          {
            type: "list-item",
            children: [
              {
                text: "New product launches",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "Customer growth targets",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "Hiring plans",
              },
            ],
          },
          {
            type: "list-item",
            children: [
              {
                text: "Revenue projections",
              },
            ],
          },
        ],
      },
      {
        type: "paragrapgh",
        children: [
          {
            text: "",
          },
        ],
      },
      {
        type: "paragrapgh",
        children: [
          {
            text: "Office expansion or entering new markets",
          },
        ],
      },
      {
        type: "paragrapgh",
        children: [
          {
            text: "",
          },
        ],
      },
      {
        type: "paragrapgh",
        children: [
          {
            text: "👉 Tip: Clear goals make your plan stronger and more credible. For extra tips, check out the linked article below for practical advice and examples.",
          },
        ],
      },
    ],
    bookmark: false,
  };
  const section_1_row = {
    id: "081abde6-a028-401b-80cb-5db02c44a317",
    type: "input",
    content: [
      {
        type: "heading-two",
        children: [
          {
            text: "Executive Summary",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Your Executive Summary is the snapshot of your proposal or business plan.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Use it to clearly explain where your company is today, where you’re headed, and why you’ll succeed.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Briefly describe the problem you’re solving and the need in your market. Support your points with key insights or data, and show exactly how your solution fits in and adds value.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "👉 Tip: Always keep your audience in mind — are you writing this for your team, a new client, or an investor? Focus on what they care about most.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Use this section to grab attention, build confidence, and set the tone for everything that follows.",
          },
        ],
      },
    ],
    bookmark: false,
  };

  const section_6_row = [
    {
      id: "9dd6f157-1ab8-4c93-aa3c-486672903269",
      type: "heading",
      size: "heading-three",
      content: [
        {
          type: "heading-three",
          align: "left",
          children: [
            {
              bold: true,
              text: "Why Choose Us",
            },
          ],
        },
      ],
      bookmark: false,
    },
    {
      id: "38f7e5ae-4afd-4569-b610-2be1816bd8f9",
      type: "double-para",
      firstContent: [
        {
          type: "heading-four",
          children: [
            {
              text: "Proven Results",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "We aim to shape a future where [industry] is smarter, more sustainable, and accessible to everyone. We believe in pushing boundaries and setting new standards for innovation. Our vision is to lead by example — inspiring progress through responsible practices, cutting-edge solutions, and a commitment to positive change for communities and the planet. By rethinking what’s possible today, we lay the foundation for a better tomorrow.",
            },
          ],
        },
      ],
      secondContent: [
        {
          type: "heading-four",
          children: [
            {
              text: "Trusted Partner",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Our mission is simple — to empower our clients with practical solutions that solve real problems, drive growth, and make a meaningful impact in their markets. We deliver results through collaboration, creativity, and a relentless focus on quality. Every project we take on is driven by our promise to add measurable value, build lasting partnerships, and help our clients stay ahead in a changing world. We exist to make your goals achievable and your vision a reality.",
            },
          ],
        },
      ],
      bookmark: false,
    },
    {
      id: "0da91996-daf8-4330-b53a-b788ef036d43",
      type: "input",
      content: [
        {
          type: "paragraph",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Together, our vision and mission guide every decision we make and every project we deliver.",
              italic: true,
            },
          ],
        },
      ],
      bookmark: false,
      textColor: "text-gray-700",
    },
  ];

  const section_7_row = [
    {
      id: "89a097a7-bbe2-47c8-84f7-a8ca712eaa96",
      type: "image-para",
      content: [
        {
          type: "heading-three",
          children: [
            {
              text: "Our Leader",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Our president has 10 years' experience in this industry. He is dedicated to upholding our company values and delivering the greatest possible experience to our partners.",
            },
          ],
        },
      ],
      ImageLink:
        "https://res.cloudinary.com/dojwaepbj/image/upload/v1751524012/znj80secde9wcg1igvde.jpg",
      height: "",
      width: "50",
      align: "left",
      aliegn: "center",
      bookmark: true,
    },
  ];

  const section_8_row = [
    {
      id: "9547e1ed-51b8-4c41-b6f0-2516122ff976",
      type: "image-para",
      content: [
        {
          type: "heading-three",
          children: [
            {
              text: "Account Executive",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "I am , and I will be your assigned point of contact at all times. I can be reached via phone or email at Link",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "",
            },
          ],
        },
      ],
      ImageLink:
        "https://res.cloudinary.com/dojwaepbj/image/upload/v1751524250/ee17xmlv7thzvmgcesrz.jpg",
      height: "",
      width: "50",
      align: "right",
      aliegn: "center",
      bookmark: true,
    },
  ];

  const section_9_row = [
    {
      id: "f1bb13aa-7e22-4af7-ac4f-de119a8bee98",
      type: "image-para",
      content: [
        {
          type: "heading-four",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "heading-four",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "heading-four",
          children: [
            {
              text: "Bringing Ideas to Life",
            },
          ],
        },
        {
          type: "heading-four",
          children: [
            {
              bold: true,
              text: "",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "An image can say more than words — that’s why we pair our proposals with visuals that capture your vision, highlight your goals, and tell your story at a glance. Whether it’s a product photo, project snapshot, or team moment, we make sure every image supports what we stand for: clarity, impact, and real results.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "",
            },
          ],
        },
      ],
      ImageLink:
        "https://res.cloudinary.com/dojwaepbj/image/upload/v1751548925/wxgrms9rzfsmkvlnij0w.jpg",
      height: "",
      width: "100",
      align: "right",
      aliegn: "center",
      bookmark: false,
    },
  ];

  const section_10_row = [
    {
      id: "826b123b-c8c1-4347-b8cf-1c7b9ac4d205",
      type: "heading",
      size: "heading-three",
      content: [
        {
          type: "heading-three",
          align: "left",
          children: [
            {
              text: "",
              bold: true,
            },
          ],
        },
        {
          type: "heading-three",
          align: "left",
          children: [
            {
              bold: true,
              text: "",
            },
          ],
        },
        {
          type: "heading-three",
          align: "left",
          children: [
            {
              bold: true,
              text: "Costing ",
            },
          ],
        },
      ],
      bookmark: false,
    },
    {
      id: "16135c8d-4632-4246-ae8e-07821e16dd6d",
      type: "cost",
      content: [
        {
          deliverable: "Website Design",
          price: 1500,
          discount: 0,
          quantity: 1,
          paymentDuration: "Monthly",
          amount: 1500,
        },
        {
          deliverable: "Development & Integration",
          price: 2000,
          quantity: 1,
          amount: 2000,
        },
        {
          deliverable: "Monthly Hosting (12 months)",
          price: 50,
          quantity: 12,
          amount: 600,
        },
        {
          deliverable: "SEO Optimization",
          price: 300,
          quantity: 2,
          amount: 600,
        },
        {
          deliverable: "Maintenance & Support (6 mo.)",
          price: 200,
          quantity: 6,
          amount: 1200,
        },
      ],
      options: {
        discount: true,
        quantity: true,
        currency: true,
        tax: true,
      },
      bookmark: false,
      values: {
        discount: "5",
        tax: "12",
      },
    },
  ];

  const section_11_row = [
    {
      id: "759b7a24-a023-4469-a517-0cb845cd7de3",
      type: "heading",
      size: "heading-three",
      content: [
        {
          type: "heading-three",
          align: "left",
          children: [
            {
              bold: true,
              text: "",
            },
          ],
        },
        {
          type: "heading-three",
          align: "left",
          children: [
            {
              bold: true,
              text: "Price Terms 1",
            },
          ],
        },
      ],
      bookmark: false,
    },
    {
      id: "780bf7bb-f711-4cd7-9f05-2f9b28b7615b",
      type: "price",
      content: [
        {
          deliverable: "Project Planning & Research",
          percentage: 15,
          value: 1500,
        },
        {
          deliverable: "Design & Development",
          percentage: 40,
          value: 4000,
        },
        {
          deliverable: "Testing & Quality Assurance",
          percentage: 20,
          value: 2000,
        },
        {
          deliverable: "Deployment & Launch",
          percentage: 15,
          value: 1500,
        },
        {
          deliverable: "Project Management & Support",
          percentage: 10,
          value: 1000,
        },
      ],
      options: {
        percentage: true,
        value: true,
        currency: "$",
      },
      bookmark: false,
    },
  ];

  const section_12_row = [
    {
      id: "8936edc5-ba5d-4ce6-b18e-32b89b8ba6c0",
      type: "heading",
      size: "heading-three",
      content: [
        {
          type: "heading-three",
          align: "left",
          children: [
            {
              bold: true,
              text: "Price Terms 2",
            },
          ],
        },
      ],
      bookmark: false,
    },
    {
      id: "6256560e-34fe-4f57-95b8-391f8733a737",
      type: "price",
      content: [
        {
          deliverable: "Website Design",
          percentage: 50,
          value: 5000,
        },
        {
          deliverable: "SEO & Marketing",
          percentage: 30,
          value: 3000,
        },
        {
          deliverable: "Maintenance",
          percentage: 20,
          value: 2000,
        },
      ],
      options: {
        percentage: true,
        value: true,
        currency: "$",
      },
      bookmark: false,
    },
  ];

  const page_1_row = [
    {
      id: "5a5d11fd-4811-470b-91fb-8222b82734d3",
      type: "image",
      content:
        "https://res.cloudinary.com/dojwaepbj/image/upload/v1738236302/wdbs9fvjse52t5fiw7fd.jpg",
      height: "400",
      width: "100",
    },
    {
      id: "59144b23-895e-4ed9-bb47-701a9369f2cf",
      type: "heading",
      size: "heading-one",
      content: [
        {
          type: "heading-one",
          align: "center",
          children: [{ text: "HEADING", bold: true, underline: true }],
        },
      ],
    },
    {
      id: "63b74220-36a1-4670-8229-64ba7c2435a4",
      type: "double-para",
      firstContent: [
        { type: "heading-two", children: [{ text: "" }], align: "center" },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        {
          type: "heading-one",
          align: "center",
          children: [{ text: "Overview" }],
        },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
        { type: "heading-two", align: "center", children: [{ text: "" }] },
      ],
      secondContent: [
        {
          type: "paragraph",
          children: [
            {
              text: "The stars don’t care about our little problems, yet we still look up and find comfort in them. Time moves strangely when you're lost in thought—minutes stretch, and hours vanish. A cup of coffee in the morning feels like a small reset button for the brain, while the sound of rain hitting the window at night becomes nature’s own lullaby. If trees could talk, they’d probably complain about humans breathing all their hard work. Somewhere in the universe, an alien might be staring at the night sky, wondering if we exist. ",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "The internet connects billions of people, yet somehow, loneliness still lingers. Sometimes, the best ideas come when you’re not even trying to think, and a blank page can be either terrifying or exciting, depending on how you look at it. If dreams are just random brain signals, why do some feel more real than reality?",
            },
          ],
        },
      ],
    },
    {
      id: "ef8ba667-ce78-490a-b1a4-c2fcfbb39c07",
      type: "double-para",
      firstContent: [
        { type: "heading-three", children: [{ text: "" }], align: "center" },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
        {
          type: "heading-one",
          align: "center",
          children: [{ text: "Terms & Conditions" }],
        },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
        { type: "heading-three", align: "left", children: [{ text: "" }] },
        { type: "heading-three", align: "center", children: [{ text: "" }] },
      ],
      secondContent: [
        {
          type: "bulleted-list",
          children: [
            {
              type: "list-item",
              children: [
                {
                  text: "By using [Your Website/App Name], you agree to these terms.",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  text: "If you do not agree, please do not use our services.",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  text: "You must be 18 years or older (or meet the legal age in your country).",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  text: "By using our services, you confirm that you meet these requirements.",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  text: "You may need to create an account to access certain features.",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  text: "You are responsible for keeping your login details secure.",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  text: "We can suspend or terminate accounts at our discretion.",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                { text: "Do not use our services for illegal activities." },
              ],
            },
            {
              type: "list-item",
              children: [
                { text: "Do not interfere with or disrupt our services." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "b8172e74-be46-45aa-a360-8305c3e3da69",
      type: "brake",
      content: "",
    },
  ];

  const cover_1 = [
    {
      id: "030bb67e-f6bb-416d-b9c4-6deea5e7755b",
      type: "cover",
      dark: 0,
      bright: 0,

      template: 1,
      content:
        "https://res.cloudinary.com/dojwaepbj/image/upload/v1750313321/tqlme1qawsr6m0owommp.png",
      bookmark: false,
    },
    {
      id: "a67d170a-0f57-431a-9dbc-0d509e2bd217",
      type: "heading",
      size: "heading-one",
      content: [
        {
          type: "heading-one",
          align: "center",
          children: [
            {
              text: "Transforming Workflows with Smart Software",
              bold: true,
            },
          ],
        },
      ],
      bookmark: false,
      textColor: "text-white",
    },
    {
      id: "0b13f7f3-141a-4eea-96b9-8f6c5dac9ea2",
      type: "input",
      content: [
        {
          type: "paragraph",
          children: [
            {
              text: "A proposal to streamline operations using our SaaS platform",
            },
          ],
          align: "center",
        },
      ],
      bookmark: false,
      textColor: "text-white",
    },
    {
      id: "c9ec8458-fa78-4b7a-90df-f59520dd9d84",
      type: "input",
      content: [
        { type: "paragraph", children: [{ text: "" }] },
        { type: "paragraph", children: [{ text: "" }] },
        { type: "paragraph", children: [{ text: "June 24, 2025" }] },
      ],
      bookmark: false,
      textColor: "text-white",
    },
    {
      id: "2db5f891-cb49-4728-a011-ba4739ab1d24",
      type: "input",
      content: [
        {
          type: "paragraph",
          children: [
            {
              text: "Discover how our scalable software-as-a-service product helps you automate tasks, ",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "improve team collaboration, and deliver measurable results—fast.",
            },
          ],
        },
      ],
      bookmark: false,
      textColor: "text-white",
    },
    {
      id: "25384be1-8dad-4b9b-9f6e-d0b21a30fb54",
      type: "image-para",
      content: [
        { type: "paragraph", children: [{ text: "" }] },
        { type: "paragraph", children: [{ text: "" }] },
        { type: "paragraph", children: [{ text: "" }] },
        {
          type: "paragraph",
          children: [{ text: "Prepared For: John Wick" }],
        },
        {
          type: "paragraph",
          children: [{ text: "Prepared By: Simple Quotes" }],
        },
      ],
      ImageLink:
        "https://res.cloudinary.com/dojwaepbj/image/upload/v1750313419/ocwocu3grfgpfqz7gh8t.png",
      height: "",
      width: "",
      align: "left",
      aliegn: "center",
      bookmark: false,
      textColor: "text-white",
    },
  ];

  const cover_2 = [
    {
      id: "030bb67e-f6bb-416d-b9c4-6deea5e7755b",
      type: "cover",
      template: 2,
      dark: 0,
      bright: 0,
      content:
        "https://res.cloudinary.com/dojwaepbj/image/upload/v1750314535/a50zjpsoarhpidc6ukt6.jpg",
      bookmark: false,
    },
    {
      id: "a67d170a-0f57-431a-9dbc-0d509e2bd217",
      type: "heading",
      size: "heading-one",
      content: [
        {
          type: "heading-one",
          align: "left",
          children: [{ text: "", bold: true }],
        },
        {
          type: "heading-one",
          align: "left",
          children: [{ bold: true, text: "" }],
        },
        {
          type: "heading-one",
          align: "left",
          children: [{ bold: true, text: "Let’s Grow Your Brand Together" }],
        },
      ],
      bookmark: false,
      textColor: "text-black",
    },
    {
      id: "0b13f7f3-141a-4eea-96b9-8f6c5dac9ea2",
      type: "input",
      content: [
        {
          type: "paragraph",
          children: [
            {
              text: "Custom marketing strategies designed to boost reach and results",
            },
          ],
          align: "left",
        },
        { type: "paragraph", align: "left", children: [{ text: "" }] },
        { type: "paragraph", align: "left", children: [{ text: "" }] },
        { type: "paragraph", align: "left", children: [{ text: "" }] },
      ],
      bookmark: false,
      textColor: "text-black",
    },
    {
      id: "c9ec8458-fa78-4b7a-90df-f59520dd9d84",
      type: "input",
      content: [
        { type: "paragraph", children: [{ text: "" }] },
        { type: "paragraph", children: [{ text: "" }], align: "center" },
        {
          type: "paragraph",
          children: [{ text: "June 24, 2025", bold: true }],
          align: "left",
        },
      ],
      bookmark: false,
      textColor: "text-black",
    },
    {
      id: "bda93768-1cf6-464c-b56e-8ab98989d4ad",
      type: "input",
      content: [
        { type: "paragraph", children: [{ text: "" }] },
        {
          type: "paragraph",
          children: [{ text: "Prepared For: John Wick" }],
        },
        {
          type: "paragraph",
          children: [{ text: "Prepared By: Simple Quotes" }],
        },
        { type: "paragraph", children: [{ text: "" }] },
        { type: "paragraph", children: [{ text: "" }] },
        { type: "paragraph", children: [{ text: "" }] },
        { type: "paragraph", children: [{ text: "" }] },
      ],
      bookmark: false,
    },
    {
      id: "618e4c72-b7ea-4699-8e18-60215765e10c",
      type: "image-para",
      content: [
        { type: "paragraph", children: [{ text: "" }] },
        { type: "paragraph", children: [{ text: "" }] },
        { type: "paragraph", children: [{ text: "" }] },
        { type: "paragraph", children: [{ text: "+1 123 456 7890" }] },
        { type: "paragraph", children: [{ text: "www.yourwebsite.com" }] },
        {
          type: "paragraph",
          children: [{ text: "your.email@example.com" }],
        },
        {
          type: "paragraph",
          children: [{ text: "123 Anywhere St., Any City" }],
        },
      ],
      ImageLink:
        "https://res.cloudinary.com/dojwaepbj/image/upload/v1750314722/namwstjqzsxobc90jqfi.png",
      height: "",
      width: "",
      align: "left",
      aliegn: "center",
      bookmark: false,
    },
  ];

  const cover_3 = [
    {
      id: "030bb67e-f6bb-416d-b9c4-6deea5e7755b",
      type: "cover",
      template: 3,
      dark: 0,
      bright: 0,
      content:
        "https://res.cloudinary.com/dojwaepbj/image/upload/v1750317872/x6j7yiv33er5gcrkcfz2.png",
      bookmark: false,
    },
    {
      id: "a67d170a-0f57-431a-9dbc-0d509e2bd217",
      type: "heading",
      size: "heading-one",
      content: [
        {
          type: "heading-one",
          align: "left",
          children: [{ bold: true, text: "" }],
        },
        {
          type: "heading-one",
          align: "left",
          children: [{ bold: true, text: "Innovation That Scales" }],
        },
      ],
      bookmark: false,
      textColor: "text-gray-700",
    },
    {
      id: "0b13f7f3-141a-4eea-96b9-8f6c5dac9ea2",
      type: "input",
      content: [
        {
          type: "paragraph",
          children: [{ text: "Proposal for Strategic Investment in Ohm" }],
          align: "left",
        },
      ],
      bookmark: false,
      textColor: "text-gray-700",
    },
    {
      id: "13312e6f-2028-48b3-999b-a001f1fd7da2",
      type: "input",
      content: [
        {
          type: "paragrapgh-two",
          children: [
            {
              text: "We’re building a smarter, faster future. This proposal outlines ",
            },
          ],
        },
        {
          type: "paragrapgh-two",
          children: [
            { text: "how our technology addresses real-world problems—" },
          ],
        },
        {
          type: "paragrapgh-two",
          children: [{ text: "and why we’re ready to scale." }],
        },
      ],
      bookmark: false,
      textColor: "text-gray-700",
    },
    {
      id: "c9ec8458-fa78-4b7a-90df-f59520dd9d84",
      type: "input",
      content: [
        {
          type: "paragraph",
          children: [{ text: "", bold: true }],
          align: "left",
        },
        {
          type: "paragraph",
          align: "left",
          children: [{ bold: true, text: "" }],
        },
        {
          type: "paragraph",
          align: "left",
          children: [{ bold: true, text: "June 24, 2025" }],
        },
      ],
      bookmark: false,
      textColor: "text-gray-700",
    },
    {
      id: "bda93768-1cf6-464c-b56e-8ab98989d4ad",
      type: "input",
      content: [
        {
          type: "paragrapgh",
          children: [{ text: "Prepared For: John Wick" }],
        },
        {
          type: "paragrapgh",
          children: [{ text: "Prepared By: Brain Quest" }],
        },
      ],
      bookmark: false,
      textColor: "text-gray-700",
    },
    {
      id: "545b33cc-b403-4b69-8e29-b32b4adce8fb",
      type: "input",
      content: [
        { type: "paragrapgh-two", children: [{ text: "" }] },
        { type: "paragrapgh-two", children: [{ text: "" }] },
        { type: "paragrapgh-two", children: [{ text: "" }] },
        { type: "paragrapgh-two", children: [{ text: "+91 0123456789" }] },
        {
          type: "paragrapgh-two",
          children: [{ text: "www.yourwebsite@gmail.com" }],
        },
        {
          type: "paragrapgh-two",
          children: [{ text: "yourname@gmail.com" }],
        },
        {
          type: "paragrapgh-two",
          children: [{ text: "123 xyz road street" }],
        },
      ],
      bookmark: false,
      textColor: "text-gray-700",
    },
  ];

  const cover_4 = [
    {
      id: "27866411-41d4-4955-8024-4f7bce5d9578",
      type: "cover",
      template: 4,
      dark: 0,
      bright: 0,
      content:
        "https://res.cloudinary.com/dojwaepbj/image/upload/v1750322585/zcga6w1zwhfbpenqvcpy.png",
      bookmark: false,
    },
    {
      id: "253d996f-c3b0-46b8-a321-15340ad39822",
      type: "heading",
      size: "heading-one",
      content: [
        {
          type: "heading-one",
          align: "left",
          children: [{ text: "DESIGN THAT SPEAKS ", bold: true }],
        },
        {
          type: "heading-one",
          align: "left",
          children: [{ bold: true, text: "FOR YOUR BRAND" }],
        },
      ],
      bookmark: false,
    },
    {
      id: "36aefd29-6057-40f2-9bbb-903c840fa4f7",
      type: "input",
      content: [
        {
          type: "paragraph",
          align: "left",
          children: [{ text: "Freelance UI/UX Design Services" }],
        },
        { type: "paragraph", align: "left", children: [{ text: "" }] },
      ],
      bookmark: false,
    },
    {
      id: "a887fa7f-d4fe-43a5-b600-24e9bd11cf78",
      type: "input",
      content: [
        {
          type: "paragraph",
          children: [{ text: "📞+91 0123456789" }],
          align: "left",
        },
        {
          type: "paragraph",
          children: [{ text: "🌐www.yourwebsite@gmail.com" }],
          align: "left",
        },
        {
          type: "paragraph",
          children: [{ text: "📨yourname@gmail.com" }],
          align: "left",
        },
        { type: "paragraph", align: "left", children: [{ text: "" }] },
        { type: "paragraph", align: "left", children: [{ text: "" }] },
      ],
      bookmark: false,
    },
    {
      id: "b93469b7-6093-4cf3-85f8-cd8f6598dd09",
      type: "image",
      content:
        "https://res.cloudinary.com/dojwaepbj/image/upload/v1750323477/uk9tv2qdvbfhozr9eb5b.png",
      height: "200",
      width: "25",
      aliegn: "left",
      caption: "",
      discription: "",
      bookmark: false,
    },
  ];
  const cover_5 = [
    {
      id: "dc08dd0f-a4d3-4064-b5da-f6b0a5bcbc64",
      type: "cover",
      template: 5,
      dark: 0,
      bright: 0,
      content:
        "https://res.cloudinary.com/dojwaepbj/image/upload/v1750328199/mjypix7gqovvle5jeh1j.png",
      bookmark: false,
    },
    {
      id: "8bfc05f3-3984-4747-908c-6694eabf947b",
      type: "heading",
      size: "heading-four",
      content: [
        {
          type: "heading-four",
          align: "left",
          children: [{ text: "Rimberio co" }],
        },
      ],
      bookmark: false,
    },
    {
      id: "905e4a4b-8a53-4083-913a-8558b902f4dd",
      type: "heading",
      size: "heading-one",
      content: [
        {
          type: "heading-one",
          align: "left",
          children: [{ text: "BUSINESS PLAN", bold: true }],
        },
      ],
      bookmark: false,
      textColor: "text-gray-700",
    },
    {
      id: "b61c8f06-6d9d-4e35-b4e3-84baa224702d",
      type: "heading",
      size: "heading-five",
      content: [
        {
          type: "heading-five",
          align: "left",
          children: [{ text: "Empowering Success," }],
        },
        {
          type: "heading-five",
          align: "left",
          children: [{ text: "Igniting Innovation" }],
        },
      ],
      bookmark: false,
    },
    {
      id: "259453f3-3c97-404f-9788-5006034f3154",
      type: "input",
      content: [
        { type: "paragraph", children: [{ text: "", bold: true }] },
        {
          type: "paragraph",
          children: [{ bold: true, text: "" }],
          align: "left",
        },
        {
          type: "paragraph",
          children: [{ bold: true, text: "24-06-2025" }],
          align: "left",
        },
        {
          type: "paragraph",
          children: [{ bold: true, text: "" }],
          align: "right",
        },
        { type: "paragraph", children: [{ bold: true, text: "" }] },
      ],
      bookmark: false,
    },
    {
      id: "efdd0398-bf6d-4e8a-a098-7249835bc0d8",
      type: "double-para",
      firstContent: [
        {
          type: "paragraph",
          children: [{ text: "", bold: true }],
          align: "left",
        },
        {
          type: "paragraph",
          align: "left",
          children: [{ bold: true, text: "" }],
        },
        {
          type: "paragraph",
          align: "left",
          children: [{ bold: true, text: "Prepared by" }],
        },
        {
          type: "paragraph",
          align: "left",
          children: [{ text: "Olivia Wilson" }],
        },
      ],
      secondContent: [
        {
          type: "paragraph",
          children: [{ text: "Rimberio Co" }],
          align: "right",
        },
        {
          type: "paragraph",
          children: [{ text: "rimberio@pixelhuee.studio" }],
          align: "right",
        },
        {
          type: "paragraph",
          children: [{ text: "+91 98000 44000" }],
          align: "right",
        },
        {
          type: "paragraph",
          children: [{ text: "www.pixelhuee.studio" }],
          align: "right",
        },
      ],
      bookmark: false,
    },
  ];

  const [thirdLevel, setThirdLevel] = useState("");
  const headingRef = useRef(null);
  const [showPicker, setShowPicker] = useState(false);
  const [tool, setTool] = useState(null);
  const handleClickOutsideHeading = (event) => {
    if (headingRef.current && !headingRef.current.contains(event.target)) {
      setThirdLevel("");
    }
  };

  const {
    setSign,
    setPriceTerms,
    setCostModeule,
    scrollIndex,
    setScrollIndex,
  } = useContext(StateManageContext);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideHeading);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideHeading);
    };
  }, []);

  const colorRef = useRef();
  const colorButtonRef = useRef();

  const handleClickOutsideColor = (event) => {
    if (
      colorRef.current &&
      !colorRef.current.contains(event.target) &&
      colorButtonRef.current &&
      !colorButtonRef.current.contains(event.target)
    ) {
      setShowPicker(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideColor);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideColor);
    };
  }, []);
  const navigate = useNavigate();
  const renderHeadingLinks = (items, index, prefix = "") => {
    return Array.isArray(items)
      ? items.flatMap((item, idx) => {
          // Skip if item is not an object
          if (typeof item !== "object" || item === null) return [];

          const isHeading =
            item.type === "heading-one" ||
            item.type === "heading-two" ||
            item.type === "heading-three";

          if (!isHeading || !Array.isArray(item.children)) return [];

          return item.children.map((child, childIdx) => {
            if (!child?.text) return null;

            return (
              <div
                key={`${index}-${prefix}-${idx}-${childIdx}`}
                className="w-full text-ellipsis flex items-center justify-start px-1"
              >
                <FaAngleDoubleLeft className="rotate-180 p-[2px] text-gray-400 mt-1 mr-1" />
                <p
                  onClick={() => setScrollIndex(index)}
                  className={`w-[95%] mt-[1px] overflow-hidden text-ellipsis cursor-pointer hover:text-black whitespace-nowrap ${
                    item.type === "heading-one"
                      ? "text-gray-700 text-md font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {child.text}
                </p>
              </div>
            );
          });
        })
      : null;
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert("Please select an image first!");
      return;
    }

    // Cloudinary details
    setLoading(true);
    const cloudName = "dojwaepbj"; // Replace with your Cloudinary cloud name
    const uploadPreset = "simple_quotes"; // Replace with your upload preset

    // Create FormData object
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      // Upload image to Cloudinary
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const photo = await response.json();
      // console.log(photo.secure_url);
      // console.log("Uploaded Image URL:", photo.secure_url);
      if (rows[0]?.type === "cover") {
        rows[0].content = photo.secure_url;
        console.log(photo.secure_url);
      } else {
        addCoverPage(photo.secure_url);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
      setThirdLevel("");
    }
  };

  const insertCoverPage = (value) => {
    if (rows.length === 0) {
      setRows([...value]);
    } else {
      if (rows[0].type === "cover") {
        if (rows[0].template !== undefined) {
          const digit =
            rows[0].template === 1
              ? 6
              : rows[0].template === 2
              ? 6
              : rows[0].template === 3
              ? 7
              : rows[0].template === 4
              ? 5
              : rows[0].template === 5
              ? 6
              : 1;
          const updatedRows = [...value, ...rows.slice(digit)];
          setRows(updatedRows);
        } else {
          const updatedRows = [...value, ...rows.slice(1)];
          setRows(updatedRows);
        }
      } else {
        setRows([...value, ...rows]);
      }
    }
  };

  return (
    <div className="flex flex-row">
      {preview === true ? (
        <div></div>
      ) : (
        <div className="flex flex-row be-vietnam-pro-regular">
          {" "}
          <div
            style={{ height: "calc(100vh - 65px)" }}
            className="w-20 relative flex flex-col border-r-[1px] gap-2 border-gray-100 shadow-md shadow-gray-300 pt-2 "
          >
            {tool === "Add Elements" && (
              <div className=" absolute left-[80%] w-24 top-5 px-1 text-center bg-gray-500 text-white z-50 text-xs rounded-sm  ">
                {tool}
              </div>
            )}
            {tool === "View outline" && (
              <div className=" absolute left-[80%] w-24 top-[85px] px-1 text-center bg-gray-500 text-white z-50 text-xs rounded-sm  ">
                {tool}
              </div>
            )}
            {tool === "Design Document" && (
              <div className=" absolute left-[80%] w-28 top-[145px] px-1 text-center bg-gray-500 text-white z-50 text-xs rounded-sm  ">
                {tool}
              </div>
            )}

            {tool === "Track progress" && (
              <div className=" absolute left-[80%] w-24 top-[210px] px-1 text-center bg-gray-500 text-white z-50 text-xs rounded-sm  ">
                {tool}
              </div>
            )}
            {tool === "Version history" && (
              <div className=" absolute left-[80%] w-24 top-[275px] px-1 text-center bg-gray-500 text-white z-50 text-xs rounded-sm  ">
                {tool}
              </div>
            )}
            <div
              onClick={() => setActive("elements")}
              className="flex p-1 flex-col w-full h-14 text-[12px] text-gray-500 cursor-pointer items-center justify-center"
              onMouseEnter={() => setTool("Add Elements")}
              onMouseLeave={() => setTool(null)}
            >
              <div
                className={`p-1 rounded-md border hover:border-gray-200 ${
                  ["elements", "content-3", "table-3", "goal-3"].includes(
                    active
                  )
                    ? "border-gray-300 shadow-sm shadow-gray-200"
                    : "border-white"
                }`}
              >
                <IoMdAddCircleOutline
                  className={`w-5 h-5 ${
                    ["elements", "content-3", "table-3", "goal-3"].includes(
                      active
                    )
                      ? "text-[#df064e]"
                      : "text-gray-400"
                  } hover:text-gray-700`}
                />
              </div>

              <p className="text-gray-400">Elements</p>
            </div>

            <div
              onClick={() => setActive("outline")}
              className="flex p-1 flex-col w-full h-14 text-[12px] text-gray-500 cursor-pointer items-center justify-center"
              onMouseEnter={() => setTool("View outline")}
              onMouseLeave={() => setTool(null)}
            >
              <div
                className={`p-1 rounded-md border hover:border-gray-200 ${
                  active === "outline"
                    ? "border-gray-300 shadow-sm shadow-gray-200"
                    : "border-white"
                }`}
              >
                <AiOutlineBars
                  className={`w-5 h-5 ${
                    active === "outline" ? "text-[#df064e]" : "text-gray-400"
                  } hover:text-gray-700`}
                />
              </div>

              <p className="text-gray-400">Outline</p>
            </div>

            <div
              onClick={() => setActive("layout")}
              className="flex p-1 flex-col w-full h-14 text-[12px] text-gray-500 cursor-pointer items-center justify-center"
              onMouseEnter={() => setTool("Design Document")}
              onMouseLeave={() => setTool(null)}
            >
              <div
                className={`p-1 rounded-md border hover:border-gray-200 ${
                  active === "layout"
                    ? "border-gray-300 shadow-sm shadow-gray-200"
                    : "border-white"
                }`}
              >
                <LuLayoutPanelLeft
                  className={`w-5 h-5 ${
                    active === "layout" ? "text-[#df064e]" : "text-gray-400"
                  } hover:text-gray-700`}
                />
              </div>

              <p className="text-gray-400">Design Doc</p>
            </div>

            <div
              onClick={() => setActive("tracking")}
              className="flex p-1 flex-col w-full h-14 text-[12px] text-gray-500 cursor-pointer items-center justify-center"
              onMouseEnter={() => setTool("Track progress")}
              onMouseLeave={() => setTool(null)}
            >
              <div
                className={`p-1 rounded-md border hover:border-gray-200 ${
                  active === "tracking"
                    ? "border-gray-300 shadow-sm shadow-gray-200"
                    : "border-white"
                }`}
              >
                <HiOutlineDocumentChartBar
                  className={`w-5 h-5 ${
                    active === "tracking" ? "text-[#df064e]" : "text-gray-400"
                  } hover:text-gray-700`}
                />
              </div>

              <p className="text-gray-400">Doc Track</p>
            </div>

            <div
              onClick={() => setActive("history")}
              className="flex p-1 flex-col w-full h-14 text-[12px] text-gray-500 cursor-pointer items-center justify-center"
              onMouseEnter={() => setTool("Version history")}
              onMouseLeave={() => setTool(null)}
            >
              <div
                className={`p-1 rounded-md border hover:border-gray-200 ${
                  active === "history"
                    ? "border-gray-300 shadow-sm shadow-gray-200"
                    : "border-white"
                }`}
              >
                <VscHistory
                  className={`w-5 h-5 ${
                    active === "history" ? "text-[#df064e]" : "text-gray-400"
                  } hover:text-gray-700`}
                />
              </div>

              <p className="text-gray-400">History</p>
            </div>

            <div className="w-full h-40 absolute bottom-10 pb-0 left-0 flex flex-col items-center justify-end">
              <div className="flex p-1  flex-col w-full h-14 text-[12px] text-gray-500 cursor-pointer items-center justify-center  ">
                <div className="p-1 rounded-md ">
                  <IoIosHelpCircleOutline className="w-5 h-5" />
                </div>

                <p>Help</p>
              </div>
              <div className="flex p-1  flex-col w-full h-14 text-[12px] text-gray-500 cursor-pointer items-center justify-center  ">
                <div
                  className="p-1 rounded-md  "
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  <img
                    src={user.avatar ? user.avatar : profile}
                    className="w-6 h-6 z-50 rounded-[50%]"
                  />
                </div>
              </div>
            </div>
          </div>
          {active === "elements" ? (
            <div
              className="w-[220px] overflow-x-hidden  pr-4  overflow-auto pb-[16px] scrollbar-hide text-lvl_2_txt z-50  "
              style={{
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.2)",
                height: "calc(100vh - 65px)",
              }}
            >
              <button
                className=" p-2 w-full   mx-3  flex  items-center justify-between
           gap-2 "
              >
                <p className="text-sm text-lvl_2_hed font-semibold">Basics</p>
              </button>

              <div className="w-[220px]">
                <ContentSideBar
                  addHeadingRow={addHeadingRow}
                  addImageRow={addImageRow}
                  addInputRow={addInputRow}
                  addDoublePara={addDoublePara}
                  addImageAndParagraph={addImageAndParagraph}
                  selected={selected}
                  addBreakPoint={addBreakPoint}
                  addTableRow={addTableRow}
                  addCodeBlock={addCodeBlock}
                  setSign={setSign}
                  setThirdLevel={setThirdLevel}
                  thirdLevel={thirdLevel}
                />
              </div>
              <div className="w-full h-[1px] ml-2  bg-gray-300 mt-3"></div>
              <div className="w-[220px]">
                <button
                  className=" p-2 w-full   mx-3 my-1 flex  items-center justify-between
           gap-2 "
                >
                  <p className="text-sm text-lvl_2_hed font-semibold">Assets</p>
                </button>
                <div className="pr-2 w-[220px]">
                  <button
                    onClick={() => setThirdLevel("cover")}
                    className=" relative p-2 px-3 w-[95%] rounded-lg flex  mx-3  items-center  
           gap-4 hover:bg-gray-100 "
                  >
                    <img
                      src={cover_lv2}
                      className="w-8 h-8 rounded-md p-[4px] border border-gray-100 shadow-md shadow-gray-300"
                      alt="heading"
                    />
                    <p className="text-sm">Cover Page</p>
                    <FaAngleRight className="flex absolute right-4 text-xs  " />
                  </button>
                  <button
                    onClick={() => setThirdLevel("sections")}
                    className=" relative p-2 px-3 w-[95%] rounded-lg flex  mx-3  items-center  
           gap-4 hover:bg-gray-100 "
                  >
                    <img
                      src={sections_lv2}
                      className="w-8 h-8  rounded-md p-[4px] border border-gray-100 shadow-md shadow-gray-300"
                      alt="heading"
                    />
                    <p className="text-sm">Sections</p>
                    <FaAngleRight className="flex absolute right-4 text-xs  " />
                  </button>
                  <button
                    onClick={() => setThirdLevel("saved")}
                    className=" relative p-2 px-3 w-[95%] rounded-lg flex  mx-3 items-center  
           gap-4 hover:bg-gray-100 "
                  >
                    <img
                      src={content_lv2}
                      className="w-8 h-8 rounded-md p-[4px] border border-gray-100 shadow-md shadow-gray-300"
                      alt="heading"
                    />
                    <p className="text-sm">My Content</p>
                    <FaAngleRight className="flex absolute right-4 text-xs  " />
                  </button>
                </div>
              </div>
              <div className="w-full h-[1px] ml-2  bg-gray-300 mt-3"></div>
              <div className="w-[220px]">
                <button
                  className=" p-2 w-full   mx-3 my-1 flex  items-center justify-between
           gap-2 "
                >
                  <p className="text-sm text-lvl_2_hed font-semibold">
                    Cost Module
                  </p>
                </button>
                <div className="pr-2 w-[220px]">
                  <button
                    onClick={() => setCostModeule(true)}
                    className=" relative p-2 px-3 w-[95%] rounded-lg flex  mx-3 items-center  
           gap-4 hover:bg-gray-100 "
                  >
                    <img
                      src={cost_lv2}
                      className="w-8 h-8 rounded-md p-[4px] border border-gray-100 shadow-md shadow-gray-300"
                      alt="heading"
                    />
                    <p className="text-sm">Costing</p>
                    <FiPlus className="flex absolute right-4 " />
                  </button>
                  <button
                    onClick={() => setPriceTerms(true)}
                    className=" relative p-2 px-3 w-[95%] rounded-lg flex  mx-3  items-center  
           gap-4 hover:bg-gray-100 "
                  >
                    <img
                      src={cost_lv2}
                      className="w-8 h-8 rounded-md p-[4px] border border-gray-100 shadow-md shadow-gray-300"
                      alt="heading"
                    />
                    <p className="text-sm">Price Terms</p>
                    <FiPlus className="flex absolute right-4 " />
                  </button>
                </div>
              </div>
              <div className="w-full h-[1px] ml-2  bg-gray-300 mt-3"></div>
              <div className="w-[220px]">
                <button
                  className=" p-2 w-full   mx-3 my-1 flex  items-center justify-between
           gap-2 "
                >
                  <p className="text-sm text-lvl_2_hed font-semibold">Legal</p>
                </button>
                <div className="pr-4 w-[220px]">
                  <button
                    onClick={() => setSign(true)}
                    className=" relative p-2 px-3 w-[95%] rounded-lg flex  mx-3  items-center  
           gap-4 hover:bg-gray-100 "
                  >
                    <img
                      src={signn_lv2}
                      className="w-8 h-8 rounded-md p-[4px] border border-gray-100 shadow-md shadow-gray-300"
                      alt="heading"
                    />
                    <p className="text-sm">Signiture</p>
                    <FiPlus className="flex absolute right-4 " />
                  </button>
                </div>
              </div>

              {/* <button
            onClick={() => setCostModeule(true)}
            className="h-20 w-[75%] m-3 flex flex-col items-center justify-center 
            bg-gradient-to-b from-editor_button_top to-editor_button_bot border-[1px] 
            border-sidebar_border gap-2 shadow-lg"
            style={{
              boxShadow: "1px 2px 4px gray",
            }}
          >
            <img src={currency} className="w-6" alt="heading" />
            <p className="text-xs ">Cost Module</p>
          </button>
          <button
            onClick={() => setActive("goal-3")}
            className="h-20 w-[75%] m-3 flex flex-col items-center justify-center 
            bg-gradient-to-b from-editor_button_top to-editor_button_bot border-[1px] 
            border-sidebar_border  shadow-lg"
            style={{
              boxShadow: "1px 2px 4px gray",
            }}
          >
            <img src={goal} className="w-10" alt="heading" />
            <p className="text-xs ">Goal Module</p>
          </button> */}
            </div>
          ) : active === "outline" ? (
            <div
              style={{ height: "calc(100vh - 65px)" }}
              className="w-[220px]  pr-4 border-r-2 border-gray-200  pb-10 scrollbar-thin flex flex-col"
            >
              <p className="w-full text-start p-2 px-2 text-gray-400 mb-1 ">
                Outline
              </p>
              <div className="w-full h-screen pl-2 scrollbar-thin flex flex-col overflow-y-auto gap-1 ">
                {rows?.map((row, index) => {
                  if (row.type === "heading") {
                    return renderHeadingLinks(row.content, index);
                  } else if (row.type === "input") {
                    return renderHeadingLinks(row.content, index);
                  } else if (row.type === "double-para") {
                    return [
                      ...renderHeadingLinks(row.firstContent, index, "first"),
                      ...renderHeadingLinks(row.secondContent, index, "second"),
                    ];
                  } else if (row.type === "image-para") {
                    return renderHeadingLinks(row.content, index);
                  }

                  return null;
                })}
              </div>
            </div>
          ) : active === "layout" ? (
            <div className="flex flex-row">
              <div
                style={{ height: "calc(100vh - 65px)" }}
                className=" w-[220px] px-4 py-4 border-r-2 border-gray-200  pb-20 scrollbar-thin flex flex-col overflow-y-scroll overflow-x-hidden  "
              >
                <h3 className="text-lg text-gray-800 font-semibold ">
                  Typography
                </h3>
                <div className="mt-4">
                  <label className="text-sm text-gray-400 mb-2">
                    Heading Font
                  </label>
                  <select
                    value={settings.heading}
                    onChange={(e) => {
                      const temp = { ...settings };
                      temp.heading = e.target.value;
                      setSettings(temp);
                    }}
                    className="w-full py-1 px-1 outline-none border border-gray-50 rounded-md text-gray-400 text-xs
            "
                  >
                    <option value="arial">Arial</option>
                    <option value="helvetica">Helvetica</option>
                    <option value="poppins">Poppins</option>
                    <option value="montserrat">Montserrat</option>
                    <option value="roboto">Roboto</option>
                    <option value="times-new-roman">Times New Roman</option>
                    <option value="georgia">Georgia</option>
                    <option value="playfair-display">Playfair Display</option>
                    <option value="merriweather">Merriweather</option>
                    <option value="garamond">Garamond</option>
                    <option value="lobster">Lobster</option>
                    <option value="pacifico">Pacifico</option>
                    <option value="bebas-neue">Bebas Neue</option>
                    <option value="anton">Anton</option>
                    <option value="oswald">Oswald</option>
                  </select>
                </div>
                <div className="mt-2 gap-1">
                  <label className="text-sm text-gray-400 mb-2">
                    Body Font
                  </label>
                  <select
                    value={settings.body}
                    onChange={(e) => {
                      const temp = { ...settings };
                      temp.body = e.target.value;
                      setSettings(temp);
                    }}
                    className="w-full py-1 px-1 outline-none border border-gray-50 rounded-md text-gray-400 text-xs"
                  >
                    <option value="arial">Arial</option>
                    <option value="helvetica">Helvetica</option>
                    <option value="poppins">Poppins</option>
                    <option value="montserrat">Montserrat</option>
                    <option value="roboto">Roboto</option>
                    <option value="times-new-roman">Times New Roman</option>
                    <option value="georgia">Georgia</option>
                    <option value="playfair-display">Playfair Display</option>
                    <option value="merriweather">Merriweather</option>
                    <option value="garamond">Garamond</option>
                    <option value="lobster">Lobster</option>
                    <option value="pacifico">Pacifico</option>
                    <option value="bebas-neue">Bebas Neue</option>
                    <option value="anton">Anton</option>
                    <option value="oswald">Oswald</option>
                  </select>
                </div>
                <div className="mt-3 flex items-center justify-between px-3 py-1 border border-gray-200 rounded-md text-xs text-gray-400 ">
                  <label>Header</label>
                  <input
                    className="accent-graidient_bottom "
                    checked={settings.header}
                    onChange={(e) => {
                      const temp = { ...settings };
                      temp.header = e.target.checked;
                      setSettings(temp);
                    }}
                    type="checkbox"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-3 py-1 border border-gray-200 rounded-md text-xs text-gray-400 ">
                  <label>Footer</label>
                  <input
                    className="accent-graidient_bottom "
                    checked={settings.footer}
                    onChange={(e) => {
                      const temp = { ...settings };
                      temp.footer = e.target.checked;
                      setSettings(temp);
                    }}
                    type="checkbox"
                  />
                </div>
                <div>
                  <h3 className="text-lg mt-3 text-gray-800 font-semibold ">
                    Theme Fill
                  </h3>
                  <div
                    ref={colorButtonRef}
                    className="py-1 mt-2 flex   items-center justify-between border border-gray-100"
                    onClick={() => setShowPicker(true)}
                  >
                    <p className=" text-sm">
                      <span className="flex gap-1 px-2 items-center">
                        <div
                          className="w-4 h-4"
                          style={{ backgroundColor: settings.color }}
                        ></div>
                        {settings.color}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg text-gray-800 font-semibold ">
                    Design Theme
                  </h3>
                  <p className="text-gray-400 text-sm mt-3">
                    Select Design Theme
                  </p>
                  <div className=" grid grid-cols-2 gap-3 mt-4">
                    <img
                      onClick={() => {
                        const temp = { ...settings };
                        temp.theme = 0;
                        setSettings(temp);
                      }}
                      className="h-28 w-[90%]"
                      src={theme_0}
                      alt="sometthing"
                    />
                    <img
                      onClick={() => {
                        const temp = { ...settings };
                        temp.theme = 1;
                        setSettings(temp);
                      }}
                      className="h-28 w-[90%]"
                      src={theme_1}
                      alt="sometthing"
                    />
                    <img
                      onClick={() => {
                        const temp = { ...settings };
                        temp.theme = 2;
                        setSettings(temp);
                      }}
                      className="h-28 w-[90%]"
                      src={theme_2}
                      alt="sometthing"
                    />
                    <img
                      onClick={() => {
                        const temp = { ...settings };
                        temp.theme = 3;
                        setSettings(temp);
                      }}
                      className="h-28 w-[90%]"
                      src={theme_3}
                      alt="sometthing"
                    />
                    <img
                      onClick={() => {
                        const temp = { ...settings };
                        temp.theme = 4;
                        setSettings(temp);
                      }}
                      className="h-28 w-[90%]"
                      src={theme_4}
                      alt="sometthing"
                    />
                    <img
                      onClick={() => {
                        const temp = { ...settings };
                        temp.theme = 5;
                        setSettings(temp);
                      }}
                      className="h-28 w-[90%]"
                      src={theme_5}
                      alt="sometthing"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{ height: "calc(100vh - 65px)" }}
                className="relative w-[1px]"
              >
                {showPicker && (
                  <div
                    ref={colorRef}
                    className="absolute top-[25%] -left-1 mt-2 shadow-lg z-50"
                  >
                    <SketchPicker
                      color={settings.color}
                      onChange={(updatedColor) => {
                        const temp = { ...settings };
                        temp.color = updatedColor.hex;
                        setSettings(temp);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div> </div>
          )}
          <div
            style={{ height: "calc(100vh - 65px)" }}
            className="w-[1px]  bg-gray-100 relative "
          >
            {thirdLevel === "heading" ? (
              <div
                ref={headingRef}
                className=" absolute left-0 w-[220px] flex flex-col items-center pt-[16px] gap-[16px]  bg-white z-30 overflow-auto pb-[16px] scrollbar-hide   "
                style={{
                  boxShadow: "5px 0 10px rgba(0, 0, 0, 0.1)",
                  height: "calc(100vh - 65px)",
                }}
              >
                <div
                  onClick={() => {
                    addHeadingRow("heading-one");
                    setThirdLevel("");
                  }}
                  className="w-[88%]   py-[14px] bg-lvl_3_bg rounded-md flex flex-col  items-center justify-center gap-2 "
                >
                  {/* <img className="h-[85%] w-[70%] " src={heading_one} /> */}
                  <div
                    style={{ boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)" }}
                    className="text-[18px] text-lvl_3_img bg-white h-[60px] w-[100px] flex items-center justify-center rounded-md  "
                  >
                    Heading 1
                  </div>
                  <p className="text-xs font-semibold text-lvl_3_txt">H1</p>
                </div>
                <div
                  onClick={() => {
                    addHeadingRow("heading-two");
                    setThirdLevel("");
                  }}
                  className="w-[88%]  py-[15px] bg-lvl_3_bg rounded-md flex flex-col  items-center justify-center gap-2 "
                >
                  <div
                    style={{ boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)" }}
                    className="text-[16px] text-lvl_3_img bg-white h-[57px] w-[98px] flex items-center justify-center rounded-md "
                  >
                    Heading 2
                  </div>
                  <p className="text-xs font-semibold text-lvl_3_txt">H2</p>
                </div>
                <div
                  onClick={() => {
                    addHeadingRow("heading-three");
                    setThirdLevel("");
                  }}
                  className="w-[88%] h-28  py-[15px] bg-lvl_3_bg rounded-md flex flex-col  items-center justify-center gap-3 "
                >
                  <div
                    style={{ boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)" }}
                    className="text-[14px] text-lvl_3_img bg-white h-[56px] w-[89px] flex items-center justify-center rounded-md "
                  >
                    Heading 3
                  </div>
                  <p className="text-xs font-semibold text-lvl_3_txt">H3</p>
                </div>
                <div
                  onClick={() => {
                    addHeadingRow("heading-four");
                    setThirdLevel("");
                  }}
                  className="w-[88%] h-28  py-[15px] gap-3.5 bg-lvl_3_bg rounded-md flex flex-col  items-center justify-center "
                >
                  <div
                    className="text-[12px] text-lvl_3_img bg-white h-[51px] w-[85px] flex items-center justify-center rounded-md "
                    style={{ boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)" }}
                  >
                    Heading 4
                  </div>
                  <p className="text-xs font-semibold text-lvl_3_txt">H4</p>
                </div>

                <div
                  onClick={() => {
                    addHeadingRow("heading-five");
                    setThirdLevel("");
                  }}
                  className="w-[88%] h-28  py-[16px] gap-4 bg-lvl_3_bg rounded-md flex flex-col  items-center justify-center "
                >
                  <div
                    className="text-[10px] text-lvl_3_img bg-white h-[47px] w-[67px] flex items-center justify-center rounded-md "
                    style={{ boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)" }}
                  >
                    Heading 5
                  </div>
                  <p className="text-xs font-semibold text-lvl_3_txt">H5</p>
                </div>
                <div
                  onClick={() => {
                    addHeadingRow("heading-six");
                    setThirdLevel("");
                  }}
                  className="w-[88%] h-40 py-[17px] gap-5 bg-lvl_3_bg rounded-md flex flex-col  items-center justify-center "
                >
                  <div
                    className="text-[8px] text-lvl_3_img bg-white h-[42px] w-[65px] flex items-center justify-center rounded-md "
                    style={{ boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)" }}
                  >
                    Heading 6
                  </div>
                  <p className="text-xs font-semibold text-lvl_3_txt">H6</p>
                </div>
              </div>
            ) : thirdLevel === "paragraph" ? (
              <div
                ref={headingRef}
                className=" absolute left-0 w-[220px] flex flex-col items-center pt-[16px] gap-[16px]  bg-white z-30 overflow-auto pb-20 scrollbar-hide border-r border-gray-100    "
                style={{
                  boxShadow: "5px 0 10px rgba(0, 0, 0, 0.1)",
                  height: "calc(100vh - 65px)",
                }}
              >
                <div
                  onClick={() => {
                    addInputRow();
                    setThirdLevel("");
                  }}
                  className="w-full flex flex-col justify-center items-center gap-1 cursor-pointer"
                >
                  <div className="w-[88%] relative h-[112px] p-1 bg-lvl_3_bg rounded-md flex flex-col text-gray-500 items-center justify-center gap-2 ">
                    <img
                      style={{
                        boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                      }}
                      className=" rounded-md "
                      src={para_2}
                    />
                    <p className="text-lvl_3_txt text-xs">Paragraph</p>
                  </div>
                </div>
                <div
                  onClick={() => {
                    addDoublePara();
                    setThirdLevel("");
                  }}
                  className="w-full flex flex-col justify-center items-center gap-1 cursor-pointer"
                >
                  <div className="w-[88%] relative h-[112px] p-1 bg-lvl_3_bg rounded-md flex flex-col text-gray-500 items-center justify-center gap-2 ">
                    <img
                      style={{
                        boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                      }}
                      className=" rounded-md "
                      src={double_2}
                    />
                    <p className="text-lvl_3_txt text-xs">Double Paragraph</p>
                  </div>
                </div>
              </div>
            ) : thirdLevel === "image" ? (
              <div
                ref={headingRef}
                className=" absolute left-0 w-[220px] flex flex-col items-center pt-[16px] gap-[16px]  bg-white z-30 overflow-auto pb-[16px] scrollbar-hide border-r border-gray-100 "
                style={{
                  boxShadow: "5px 0 10px rgba(0, 0, 0, 0.1)",
                  height: "calc(100vh - 65px)",
                }}
              >
                <div
                  onClick={() => {
                    addImageRow();
                    setThirdLevel("");
                  }}
                  className="w-full flex flex-col justify-center items-center gap-1 cursor-pointer"
                >
                  <div className="w-[88%] relative h-[112px] p-1 bg-lvl_3_bg rounded-md flex flex-col text-gray-500 items-center justify-center gap-2 ">
                    <img
                      style={{
                        boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                      }}
                      className="rounded-md "
                      src={image_2}
                    />
                    <p className="text-lvl_3_txt text-xs">Image</p>
                  </div>
                </div>
                <div
                  onClick={() => {
                    addImageAndParagraph();
                    setThirdLevel("");
                  }}
                  className="w-full flex flex-col justify-center items-center gap-1 cursor-pointer"
                >
                  <div className="w-[88%] relative h-[112px] p-1 bg-lvl_3_bg rounded-md flex flex-col text-gray-500 items-center justify-center gap-2 ">
                    <img
                      style={{
                        boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                      }}
                      className=" rounded-md "
                      src={image_p_2}
                    />
                    <p className="text-lvl_3_txt text-xs">Image & Paragraph</p>
                  </div>
                </div>
              </div>
            ) : thirdLevel === "table" ? (
              <div
                ref={headingRef}
                style={{
                  boxShadow: "5px 0 10px rgba(0, 0, 0, 0.1)",
                  height: "calc(100vh - 65px)",
                }}
                className=" absolute left-0 w-[220px] flex flex-col items-center pt-[16px] gap-4  bg-white z-30 overflow-auto pb-[16px] scrollbar-hide border-r border-gray-100 "
              >
                <div
                  onClick={() => {
                    addTableRow("normal");
                    setThirdLevel("");
                  }}
                  className="w-[88%] h-[112px] p-2 bg-lvl_3_bg rounded-md flex flex-col  items-center justify-center "
                >
                  <img className="h-[75%] w-[53%]" src={table_v_1} />
                  <p className="text-lvl_2_txt text-xs">Basic</p>
                </div>
                <div
                  onClick={() => {
                    addTableRow("alternativerow");
                    setThirdLevel("");
                  }}
                  className="w-[88%] h-[112px] p-2 bg-lvl_3_bg rounded-md flex flex-col  items-center justify-center "
                >
                  <img className="h-[75%] w-[53%]" src={table_v_2} />
                  <p className="text-lvl_2_txt text-xs">Aleternative Row</p>
                </div>
                <div
                  onClick={() => {
                    addTableRow("alternativecol");
                    setThirdLevel("");
                  }}
                  className="w-[88%] h-[112px] p-2 bg-lvl_3_bg rounded-md flex flex-col  items-center justify-center "
                >
                  <img className="h-[75%] w-[53%]" src={table_v_3} />
                  <p className="text-lvl_2_txt text-xs">Aleternative Coloumn</p>
                </div>
                <div
                  onClick={() => {
                    addTableRow("toprow");
                    setThirdLevel("");
                  }}
                  className="w-[88%] h-[112px] p-2 bg-lvl_3_bg rounded-md flex flex-col  items-center justify-center "
                >
                  <img className="h-[75%] w-[53%]" src={table_v_4} />
                  <p className="text-lvl_2_txt text-xs">Top Row</p>
                </div>

                <div
                  onClick={() => {
                    addTableRow("leftcol");
                    setThirdLevel("");
                  }}
                  className="w-[88%] h-[112px] p-2 bg-lvl_3_bg rounded-md flex flex-col  items-center justify-center "
                >
                  <img className="h-[75%] w-[53%]" src={table_v_5} />
                  <p className="text-lvl_2_txt text-xs">Left Coloumn</p>
                </div>
              </div>
            ) : thirdLevel === "sections" ? (
              <div
                ref={headingRef}
                style={{
                  boxShadow: "5px 0 10px rgba(0, 0, 0, 0.1)",
                  height: "calc(100vh - 65px)",
                }}
                className=" absolute left-0 w-[220px] flex flex-col items-center pt-[16px] gap-[16px]  bg-white z-30 overflow-auto pb-[16px] scrollbar-hide border-r border-gray-100    "
              >
                <p className="text-lvl_2_txt w-full text-left text-sm px-[16px]">
                  Paragraph
                </p>
                <div
                  onClick={() => {
                    setRows([...rows, section_1_row]);
                    setThirdLevel("");
                  }}
                  className="w-[88%]  bg-lvl_3_bg py-[16px] rounded-md flex flex-col text-gray-500 items-center justify-center gap-1 "
                >
                  <img
                    className=" w-[85%] rounded-md"
                    src={s_1}
                    style={{
                      boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
                <div
                  onClick={() => {
                    setRows([...rows, section_2_row]);
                    setThirdLevel("");
                  }}
                  className="w-[88%]  bg-lvl_3_bg py-[16px] rounded-md flex flex-col text-gray-500 items-center justify-center gap-1 "
                >
                  <img
                    className=" w-[85%] rounded-md"
                    src={s_2}
                    style={{
                      boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
                <div
                  onClick={() => {
                    setRows([...rows, ...section_6_row]);
                    setThirdLevel("");
                  }}
                  className="w-[88%]  bg-lvl_3_bg py-[16px] rounded-md flex flex-col text-gray-500 items-center justify-center gap-1 "
                >
                  <img
                    className=" w-[85%] rounded-md"
                    src={s_6}
                    style={{
                      boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>

                <p className="text-lvl_2_txt w-full text-left text-sm px-[16px]">
                  Tables
                </p>

                <div
                  onClick={() => {
                    setRows([...rows, ...section_3_row]);
                    setThirdLevel("");
                  }}
                  className="w-[88%]  bg-lvl_3_bg py-[16px] rounded-md flex flex-col text-gray-500 items-center justify-center gap-1 "
                >
                  <img
                    className=" w-[85%] rounded-md"
                    src={s_3}
                    style={{
                      boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
                <div
                  onClick={() => {
                    setRows([...rows, ...section_4_row]);
                    setThirdLevel("");
                  }}
                  className="w-[88%]  bg-lvl_3_bg py-[16px] rounded-md flex flex-col text-gray-500 items-center justify-center gap-1 "
                >
                  <img
                    className=" w-[85%] rounded-md"
                    src={s_4}
                    style={{
                      boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
                <div
                  onClick={() => {
                    setRows([...rows, ...section_5_row]);
                    setThirdLevel("");
                  }}
                  className="w-[88%]  bg-lvl_3_bg py-[16px] rounded-md flex flex-col text-gray-500 items-center justify-center gap-1 "
                >
                  <img
                    className=" w-[85%] rounded-md"
                    src={s_5}
                    style={{
                      boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
                <p className="text-lvl_2_txt w-full text-left text-sm px-[16px]">
                  Image & Content
                </p>

                <div
                  onClick={() => {
                    setRows([...rows, ...section_7_row]);
                    setThirdLevel("");
                  }}
                  className="w-[88%]  bg-lvl_3_bg py-[16px] rounded-md flex flex-col text-gray-500 items-center justify-center gap-1 "
                >
                  <img
                    className=" w-[85%] rounded-md"
                    src={s_7}
                    style={{
                      boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
                <div
                  onClick={() => {
                    setRows([...rows, ...section_8_row]);
                    setThirdLevel("");
                  }}
                  className="w-[88%]  bg-lvl_3_bg py-[16px] rounded-md flex flex-col text-gray-500 items-center justify-center gap-1 "
                >
                  <img
                    className=" w-[85%] rounded-md"
                    src={s_8}
                    style={{
                      boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
                <div
                  onClick={() => {
                    setRows([...rows, ...section_9_row]);
                    setThirdLevel("");
                  }}
                  className="w-[88%]  bg-lvl_3_bg py-[16px] rounded-md flex flex-col text-gray-500 items-center justify-center gap-1 "
                >
                  <img
                    className=" w-[85%] rounded-md"
                    src={s_9}
                    style={{
                      boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
                <p className="text-lvl_2_txt w-full text-left text-sm px-[16px]">
                  Cost module
                </p>
                <div
                  onClick={() => {
                    setRows([...rows, ...section_10_row]);
                    setThirdLevel("");
                  }}
                  className="w-[88%]  bg-lvl_3_bg py-[16px] rounded-md flex flex-col text-gray-500 items-center justify-center gap-1 "
                >
                  <img
                    className=" w-[85%] rounded-md"
                    src={s_10}
                    style={{
                      boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
                <div
                  onClick={() => {
                    setRows([...rows, ...section_11_row]);
                    setThirdLevel("");
                  }}
                  className="w-[88%]  bg-lvl_3_bg py-[16px] rounded-md flex flex-col text-gray-500 items-center justify-center gap-1 "
                >
                  <img
                    className=" w-[85%] rounded-md"
                    src={s_11}
                    style={{
                      boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
                <div
                  onClick={() => {
                    setRows([...rows, ...section_12_row]);
                    setThirdLevel("");
                  }}
                  className="w-[88%]  bg-lvl_3_bg py-[16px] rounded-md flex flex-col text-gray-500 items-center justify-center gap-1 "
                >
                  <img
                    className=" w-[85%] rounded-md"
                    src={s_12}
                    style={{
                      boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
              </div>
            ) : thirdLevel === "pages" ? (
              <div
                ref={headingRef}
                style={{
                  boxShadow: "5px 0 10px rgba(0, 0, 0, 0.1)",
                  height: "calc(100vh - 65px)",
                }}
                className=" scrollbar-thinabsolute left-0 w-[200px] flex flex-col items-center pt-10 gap-4 border-r border-gray-300 bg-white z-50 overflow-auto pb-20 text-xs text-gray-400 text-center  "
              >
                <div
                  onClick={() => {
                    setRows([...rows, ...page_1_row]);
                    setThirdLevel("");
                  }}
                  className="w-[80%] h-44  bg-gray-100 rounded-md flex flex-col text-gray-500 items-center justify-center "
                >
                  <img className="h-[100%] w-[100%]" src={page_1} />
                </div>
              </div>
            ) : thirdLevel === "saved" ? (
              <div
                ref={headingRef}
                style={{
                  boxShadow: "5px 0 10px rgba(0, 0, 0, 0.1)",
                  height: "calc(100vh - 65px)",
                }}
                className=" absolute left-0 w-[220px] flex flex-col items-center pt-[16px] gap-[16px] bg-white z-30 overflow-auto pb-20 scrollbar-hide border-r border-gray-100    "
              >
                {user?.goals ? (
                  user.goals?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[88%] bg-lvl_3_bg py-[15px] flex flex-col items-center justify-center gap-2"
                        onClick={() => {
                          setRows([...rows, ...item.data]);
                          setThirdLevel("");
                        }}
                      >
                        {item.link && (
                          <img
                            src={item.link}
                            alt="No Imahe"
                            style={{
                              boxShadow: "1px 2px 8px 0px rgba(0, 0, 0, 0.2)",
                            }}
                            className="w-[85%] rounded-md "
                          />
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </div>
            ) : thirdLevel === "cover" ? (
              <div
                ref={headingRef}
                style={{
                  boxShadow: "5px 0 10px rgba(0, 0, 0, 0.1)",
                  height: "calc(100vh - 65px)",
                }}
                className=" absolute left-0 w-[220px] flex flex-col items-center pt-[16px] gap-[16px] bg-white z-30 overflow-auto pb-20 scrollbar-hide border-r border-gray-100    "
              >
                <div className="w-full flex items-center justify-center">
                  <input
                    id={`file-upload`}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      handleUpload(e);
                    }}
                  />
                  {/* Upload Image Label */}
                  <label
                    htmlFor={`file-upload`}
                    className="w-[88%] py-2 flex items-center justify-center gap-2  text-center rounded cursor-pointer text-xs bg-graidient_bottom text-white hover:bg-gradient_darker"
                  >
                    <IoCloudUploadOutline />
                    {loading ? "Loading..." : "Upload Cover Page"}
                  </label>
                </div>
                <img
                  src={cover_img_1}
                  onClick={() => insertCoverPage(cover_1)}
                  className="w-[88%] cursor-pointer"
                />
                <img
                  src={cover_img_2}
                  onClick={() => insertCoverPage(cover_2)}
                  className="w-[88%] cursor-pointer"
                />
                <img
                  src={cover_img_3}
                  onClick={() => insertCoverPage(cover_3)}
                  className="w-[88%] cursor-pointer"
                />
                <img
                  src={cover_img_4}
                  onClick={() => insertCoverPage(cover_4)}
                  className="w-[88%] cursor-pointer"
                />
                <img
                  src={cover_img_5}
                  onClick={() => insertCoverPage(cover_5)}
                  className="w-[88%] cursor-pointer"
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
