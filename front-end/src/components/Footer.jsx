import React from "react";
import Arrow from "../assets/arraw.png";

const Footer = () => {
  return (
    <div className="w-full h-[600px]">
      <div className="w-full h-1/2 bg-gradient-to-b pt-20 from-overlap via-footer_gradient_bot   to-footer_gradient_top">
        <div className="w-full flex flex-col items-center gap-1 text-white">
          <h1 className="text-[25px] font-bold">
            Get Started at Simple Quotes. Speed Today.
          </h1>
          <p className="text-[10px]">14-day Trial. No Credit card required</p>
          <div className="flex flex-row gap-3 mt-4">
            <button className="pl-3 pr-3 pt-2 pb-2 bg-home_button_color border-[1px] border-botton_white_text shadow-lg shadow-shadow_Bottom rounded-md flex">
              TRY IT FOR FREE
              <img src={Arrow} alt="no" className="w-5 m-[2px]" />
            </button>
            <button className="pl-3 pr-3 pt-2 pb-2 bg-transparent border-[1px] border-white rounded-md flex">
              TALK TO US
              <img src={Arrow} alt="no" className="w-5 m-[2px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 bg-graidient_top">
        <div>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
