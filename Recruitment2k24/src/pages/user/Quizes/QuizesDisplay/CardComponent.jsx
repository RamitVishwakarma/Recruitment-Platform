import React from "react";
import arrRight from "../../../../assets/arrRight.svg";
import { Link } from "react-router-dom";

export default function Components({ img, imgBgColor, text, domain }) {
  return (
    <Link className="lg:w-7/12 max-lg:w-full" to={`/user/showquiz/${domain}`}>
      <div className="flex justify-between shadow-lg p-3 rounded-xl bg-text-box cursor-pointer homePageComponent">
        <div className="flex gap-4">
          <div
            className={`w-12 h-12 rounded-full ${imgBgColor} flex items-center justify-center`}>
            <img className="w-6 h-6" src={img} />
          </div>

          <div className="font-bold my-auto text-center">{text}</div>
        </div>
        <button className="pl-6 flex items-center cursor-pointer ">
          <img className="w-6" src={arrRight} />
        </button>
      </div>
    </Link>
  );
}
