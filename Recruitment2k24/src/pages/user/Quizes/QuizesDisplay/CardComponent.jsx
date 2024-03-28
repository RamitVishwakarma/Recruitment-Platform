import React from "react";
import arrRight from "../../../../assets/arrRight.svg";

export default function Components({ img, imgBgColor, text }) {
  return (
    <div className="flex gap-4 cursor-pointer homePageComponent">
      <div
        className={`w-12 h-12 rounded-full ${imgBgColor} flex items-center justify-center`}>
        <img className="w-6 h-6" src={img} />
      </div>
      <div className="flex font-bold w-40 items-center">
        <div>{text}</div>
      </div>
      <button className="pl-5 flex items-center cursor-pointer ">
        <img className="w-6" src={arrRight} />
      </button>
    </div>
  );
}
