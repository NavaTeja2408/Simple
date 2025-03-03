import React from "react";
import WebHeader from "../../components/WebHeader";
import Arrow from "../../assets/arraw.png";
import CreditCard from "../../assets/CreditCard.png";
import Calender from "../../assets/Calender.png";
import Home_back_image from "../../assets/Home_back_image.png";
import Home_image_1 from "../../assets/Home_image_1.png";
import Home_image_2 from "../../assets/Home_image_2.png";
import Red_tick from "../../assets/red_tick.png";
import Home_float_1 from "../../assets/Home_Float_1.png";
import Home_Float_2 from "../../assets/Home_Float_2.png";
import Home_Float_3 from "../../assets/Home_Float_3.png";
import Home_Float_4 from "../../assets/Home_Float_4.png";
import PaymentCard from "../../components/PaymentCard";
import Home_asset from "../../assets/Home_asset.png";
import Home_call from "../../assets/Home_call.png";
import Home_time from "../../assets/Home_time.png";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="w-full h-screen bg-overlap block overflow-y-scroll">
        {/*First Body Part Including Header*/}
        <div className="w-full h-[600px] bg-gradient-to-b from-graidient_top from-20% via-graidient_bottom to-overlap text-overlap">
          <WebHeader />
          <div className="w-full flex flex-col items-center justify-center mt-[7%]">
            <h2 className="text-[15px]">
              STRATEGIC RESPONSE MANAGEMENT & RFP SOFTWARE
            </h2>
            <h1 className="text-[30px] font-extrabold">
              The Modern Way To Sell.
            </h1>
            <p>Create beautiful proposals with ease.</p>
            <p>Impress your clients and win more projects.</p>
            <button className="bg-graidient_bottom m-4 p-3 rounded-md flex shadow-lg shadow-graidient_bottom">
              CREATE YOUR FIRST PROPOSAL
              <img src={Arrow} className="w-6 ml-2" alt="no" />
            </button>
            <div className="flex flex-row items-center">
              <img className="w-[25px] h[25px]" src={CreditCard} alt="card" />
              <p>No credit card needed</p>
              <p className="ml-1 mr-1  text-[10px]">|</p>
              <img className="w-[25px] h[25px]" src={Calender} alt="cal" />
              <p>Free 14-days trail</p>
            </div>
          </div>
          <div className="w-[40%] h-2/4 bg-white ml-[30%] mt-[2%] shadow-2xl  "></div>
        </div>
      </div>

      {/* Second body part*/}
      <div className="w-full h-[600px] bg-overlap">
        <div className="w-full flex flex-col items-center gap-1">
          <p className="text-[10spx] text-gray-600">INTRODUCING OUR SERVICE</p>
          <h1 className="text-[25px]">Fast and Simple 3 Steps Process</h1>
          <div className="w-[7%] h-1 bg-botton_white_text"></div>
          <p className="mt-3 text-[10px]">
            Create beautiful proposals with ease. Impress your clients and win
            more projects.
          </p>
        </div>

        <div className="w-[60%] h-[400px] ml-[20%] mt-10 ">
          <div className="flex gap-2">
            <div className="w-[50%] bg-white h-[220px]"></div>
            <div className="w-[50%] bg-white h-[220px]"></div>
          </div>
          <div className="flex  gap-2 mt-2">
            <div className="w-[33%] bg-white h-[150px]"></div>

            <div className="w-[33%] bg-white h-[150px]"></div>
            <div className="w-[33%] bg-white h-[150px]"></div>
          </div>
        </div>
      </div>

      {/* Third Body Part */}

      <div className="w-full h-[500px] bg-overlap ">
        <div className="w-full flex flex-col items-center gap-1">
          <p className="text-[10spx] text-gray-600">HOW IT WORKS?</p>
          <h1 className="text-[25px]">Fast and Simple 3 Steps Process</h1>
          <div className="w-[7%] h-1 bg-botton_white_text"></div>
          <p className="mt-5 text-[10px]">
            Drag-and-drop editing helps you build them fast, with your choice of
            750+ ready-to-use, free templates.
          </p>
          <p className="text-[10px]">
            {" "}
            You can also customize your own dynamic versions.
          </p>
        </div>
        <div className="w-[70%] h-[280px] ml-[15%] mt-10 flex items-center justify-center ">
          <div className="flex  gap-2 mt-2">
            <div className="w-[33%] flex flex-col items-center justify-center ">
              <div className="w-full bg-white h-[150px] shadow-lg rounded-xl"></div>
              <h2 className="text-[12px] lg:text-[16px] font-semibold mt-5">
                Create engaging proposal
              </h2>
              <p className="w-[80%] text-[8px] lg:text-[10px] text-center mt-2 text-gray-600">
                Create professional and attractive proposals easily with our
                proposal builder. Use templates or customize every detail for
                your client.
              </p>
            </div>

            <div className="w-[33%] flex flex-col items-center justify-center ">
              <div className="w-full bg-white h-[150px] shadow-lg rounded-xl"></div>
              <h2 className="text-[12px] lg:text-[16px] font-semibold mt-5">
                Review proposal and approval
              </h2>
              <p className="w-[80%] text-[8px] lg:text-[10px] text-center mt-2 text-gray-600">
                Get faster approval with collaborative review. Let clients see
                and comment on proposals live, for quick feedback and less
                delay.
              </p>
            </div>
            <div className="w-[33%] flex flex-col items-center justify-center ">
              <div className="w-full bg-white h-[150px] shadow-lg rounded-xl"></div>
              <h2 className="text-[12px] lg:text-[16px] font-semibold mt-5">
                Automated track and follow-ups
              </h2>
              <p className="w-[80%] text-[8px] lg:text-[10px] text-center mt-2 text-gray-600">
                Set up follow-up sequences to automate post-proposal steps. Move
                from proposal to contract and signing easily, for a smooth
                project start.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Fourth Body Part*/}
      <div className="relative w-full h-[780px] bg-overlap pt-32 flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute top-24 left-4 right-4 inset-0 h-[750px] bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url(${Home_back_image})` }}
        ></div>

        {/* White Transparent Overlay */}

        <div className="w-full  flex flex-col items-center gap-1 z-40">
          <p className="text-[10spx] text-gray-600">
            GET STARTED WITH OUT TEMPLATES
          </p>
          <h1 className="text-[25px] w-[350px] text-center">
            Business Proposals that inspire immediate trsut
          </h1>
          <div className="w-[7%] h-1 bg-botton_white_text"></div>
          <p className="mt-3 text-[10px] w-[400px] text-center">
            Impressing a client at first sight gets you one step closer to
            closing the deal. With Better Proposals, you can make sure your
            branding, messaging, and design are always on point.
          </p>
          <button className="pl-7 pr-5 pt-2 pb-2 bg-botton_white_text border-[1px] border-botton_white_text text-white rounded-md flex mt-4">
            Try it free
            <img src={Arrow} alt="no" className="w-5 m-[2px]" />
          </button>
        </div>
        <div className="bg-white_transperent rounded-[50%] w-[40%] h-full  blur-2xl absolute"></div>
      </div>

      {/*Fifth Body Part*/}
      <div className="w-full h-[600px] bg-overlap pt-32 flex justify-center">
        <div className=" w-[75%] lg:w-[50%] mt-16  grid grid-cols-2 gap-9">
          <div className="relative ">
            <img
              src={Home_image_1}
              alt="Home-image"
              className=" h-[360px] w-full absolute top-0 z-0 rounded-3xl"
            />
            <div className="flex flex-col mt-[55%] pl-8 bg-home_card_bg z-40   ">
              <h2 className="text-[16px] font-semibold z-40 text-white">
                Stay on top of your deals
              </h2>
              <div className="w-10 h-1 bg-graidient_bottom z-40 mt-1"></div>
              <p className="text-[8px] z-40 w-[80%] mt-1 text-white">
                See when a client has received, opened, read, forwarded, and
                signed your document. Know the right time to follow up by
                knowing which section your client is currently reading.
              </p>
              <button className="w-[95%] pt-1 pb-1 z-40 bg-white text-botton_white_text border-[1px] mt-5 mr-3  rounded-md">
                Learn how it works
              </button>
            </div>
          </div>
          <div className="relative rounded-xl">
            <img
              src={Home_image_2}
              alt="Home-image"
              className=" h-[360px] w-full absolute top-0 z-0 rounded-3xl"
            />
            <div className="flex flex-col mt-[55%] pl-8   ">
              <h2 className="text-[16px] font-semibold z-40 text-white">
                Get support every step of the way
              </h2>
              <div className="w-10 h-1 bg-graidient_bottom z-40 mt-1"></div>
              <p className="text-[8px] z-40 w-[80%] mt-1 text-white">
                No matter the plan you’re on, you deserve help when you need it.
                That’s why our support team is here for you 24/7. With an
                average response time of two minutes, they make sure no question
                remains unanswered.
              </p>
              <button className="w-[95%] pt-1 pb-1 z-40 bg-white text-botton_white_text border-[1px] mt-5 mr-3  rounded-md">
                Check out our Help Center
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Sixth Body Part */}
      <div className="w-full h-[600px] bg-gradient-to-b from-overlap  via-home_blue  to-overlap flex flex-col items-center justify-center gap-10 ">
        <div className="w-full flex flex-col items-center gap-1 ">
          <p className="text-[10px] text-gray-600">
            Easily build your ideal workflow with monday.com building blocks.
          </p>
          <h1 className="text-[25px]">Great features to your signatures</h1>
          <div className="w-[7%] h-1 bg-botton_white_text"></div>
        </div>
        <div className="w-[90%] h-[280px] grid grid-cols-4 gap-2 lg:gap-10 mt-20">
          <div className=" w-full bg-overlap rounded-3xl flex flex-col items-center justify-start relative">
            <div className="W-[10%] rounded-[50%] absolute left-[35] lg:left-[38%] top-[-45px] bg-overlap flex items-center justify-center border border-graidient_bottom">
              <img src={Home_float_1} alt="float" className="w-[75px]" />
            </div>
            <div className="w-[75%] flex items-center justify-center flex-col gap-2 mt-[25%]">
              <h2 className="text-[15px]">Proposals</h2>
              <p className="text-[10px] text-gray-600] text-center">
                Share documents in minutes with pre-built, customizable
                templates.
              </p>
            </div>
            <div className="w-[75%] bg-graidient_bottom h-[2px] mt-4"> </div>
            <div className=" mt-5 flex flex-col gap-2">
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">Over 103+ templates</p>
              </div>
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">Ready-made content</p>
              </div>
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">Flexible elements</p>
              </div>
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">Content library</p>
              </div>
            </div>
          </div>

          <div className=" w-full bg-overlap rounded-3xl flex flex-col items-center justify-start relative">
            <div className="W-[20%] rounded-[50%] absolute left-[35] lg:left-[38%] top-[-45px] bg-overlap flex items-center justify-center border border-graidient_bottom">
              <img
                src={Home_Float_2}
                alt="float"
                className="w-[75px] bg-blend-overlay"
              />
            </div>
            <div className="w-[75%] flex items-center justify-center flex-col gap-2 mt-[25%]">
              <h2 className="text-[15px]">Contracts</h2>
              <p className="text-[10px] text-gray-600 text-center">
                Use our native CRM integration to pull customer data into your
                documents fast.
              </p>
            </div>
            <div className="w-[75%] bg-graidient_bottom h-[2px] mt-4"> </div>
            <div className=" mt-5 flex flex-col gap-2">
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">Over 103+ templates</p>
              </div>
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">Ready-made content</p>
              </div>
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">Flexible elements</p>
              </div>
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">Content library</p>
              </div>
            </div>
          </div>

          <div className=" w-full bg-overlap rounded-3xl flex flex-col items-center justify-start relative">
            <div className="W-[10%] rounded-[50%] absolute left-[35] lg:left-[38%] top-[-45px] bg-overlap flex items-center justify-center border border-graidient_bottom">
              <img src={Home_Float_3} alt="float" className="w-[75px]" />
            </div>
            <div className="w-[75%] flex items-center justify-center flex-col gap-2 mt-[25%]">
              <h2 className="text-[15px]">eSignature</h2>
              <p className="text-[10px] text-gray-600] text-center">
                Keep your data secure with our legally-binding e-Signature
                software.
              </p>
            </div>
            <div className="w-[75%] bg-graidient_bottom h-[2px] mt-4"> </div>
            <div className=" mt-5 flex flex-col gap-2">
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">eSignature</p>
              </div>
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">Sign from any Device</p>
              </div>
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">Type/Upload/Draw Signature</p>
              </div>
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">Content library</p>
              </div>
            </div>
          </div>

          <div className=" w-full bg-overlap rounded-3xl flex flex-col items-center justify-start relative">
            <div className="W-[10%] rounded-[50%] absolute left-[35] lg:left-[38%] top-[-45px] bg-overlap flex items-center justify-center border border-graidient_bottom">
              <img src={Home_Float_4} alt="float" className="w-[75px]" />
            </div>
            <div className="w-[75%] flex items-center justify-center flex-col gap-2 mt-[25%]">
              <h2 className="text-[15px]">Sign and Payment</h2>
              <p className="text-[10px] text-gray-600] text-center">
                Keep your data secure with our legally-binding e-Signature
                software.
              </p>
            </div>
            <div className="w-[75%] bg-graidient_bottom h-[2px] mt-4"> </div>
            <div className=" mt-5 flex flex-col gap-2">
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">How many times opened</p>
              </div>
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">How long it was open for</p>
              </div>
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">Status for each Proposal</p>
              </div>
              <div className="flex gap-2 ">
                <img src={Red_tick} alt="symbol" className="w-4 h-4" />
                <p className="text-[12px]">Email Notification</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Seventh Body Part*/}
      <div className="w-full h-screen bg-overlap flex items-center justify-center">
        <div className="w-full flex flex-col items-center gap-1">
          <h1 className="text-[25px]">
            Supercharge your Sales. Start for Free.
          </h1>
          <p className=" text-[10px] text-gray-600">
            NO CREDIT CARD REQUIRED. UNLIMITED PROPOSALS
          </p>
          <button className="pl-3 pr-3 pt-2 pb-2 mt-4 bg-botton_white_text border-[1px] border-botton_white_text rounded-md flex text-white">
            Try it free
            <img src={Arrow} alt="no" className="w-5 m-[2px]" />
          </button>
          <div className="w-2/3 mt-16">
            <PaymentCard />
          </div>
        </div>
      </div>

      {/*Eight Body Part*/}
      <div className="w-full h-[600px] bg-overlap flex items-center justify-center">
        <div className="w-2/3 flex ">
          <div className="w-1/2">
            <img src={Home_asset} className="w-full h-full" alt="home" />
          </div>
          <div className="flex flex-col text-black w-1/2 items-start justify-center ml-10 gap-1   ">
            <h2 className="text-[16px] font-semibold z-40 w-2/3">
              Supporting your growth every Step of the way
            </h2>
            <div className="w-10 h-1  bg-graidient_bottom z-40 mt-1"></div>
            <p className="text-[8px] z-40 w-[70%] mt-1  ">
              Our support superheroes are a click away to help you get the most
              out of Simple Quotes, so you can focus on working without limits.
            </p>
            <div className="flex flex-row gap-3 mt-7 w-[90%]">
              <button className=" flex flex-row p-2 bg-white shadow-l rounded-lg shadow-gray-600 border border-gray-200">
                <img
                  src={Home_call}
                  className="w-[15%] h-full"
                  alt="home button"
                />
                <div className=" flex flex-col gap -1 items-start justify-center ml-2 mt-1 lg:mt-0 ">
                  <p className="text-[8px] lg:text-[10px] ">24/7</p>
                  <p className="text-gray-400 text-[5px] lg:text-[8px]">
                    Support Anywhere Anytime
                  </p>
                </div>
              </button>
              <button className=" flex flex-row p-2 bg-white shadow-l rounded-lg shadow-gray-600 border border-gray-200">
                <img
                  src={Home_time}
                  className="w-[15%] h-full"
                  alt="home button"
                />
                <div className=" flex flex-col gap -1 items-start justify-center ml-2 mt-1 lg:mt-0">
                  <p className=" text-[8px] lg:text-[10px] ">2 hour</p>
                  <p className="text-gray-400 text-[5px] lg:text-[8px]">
                    Average Time Response
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[600px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
