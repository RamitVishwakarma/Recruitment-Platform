import logo from "../../assets/logo.svg";
import domainButton from "../../assets/domainButton.svg";
import webButton from "../../assets/websiteButton.svg";
import timeline from "../../assets/timeline.svg";
import result from "../../assets/result.svg";
import arrRight from "../../assets/arrRight.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="flex">
        <div className="border-t-[6px] border-red w-[25vw]"></div>
        <div className="border-t-[6px] border-purple w-[25vw]"></div>
        <div className="border-t-[6px] border-lime w-[25vw]"></div>
        <div className="border-t-[6px] border-light-blue w-[25vw]"></div>
      </div>
      <div className="h-[8vh] mx-[10rem] flex items-center justify-between">
        <div className="flex w-[50%] justify-between">
          <Link to="/" className="flex items-center gap-2 justify-center">
            <img src={`${logo}`} alt="Logo" />
            <div className="text-grey">GDSC JSSATEN</div>
          </Link>
          <Link
            to="/domains"
            className="flex items-center gap-2 rounded-[2.9375rem] hover:bg-nav-hover w-[6.5vw] justify-center">
            <img src={`${domainButton}`} alt="Domains" />
            <div className="text-blue">Domains</div>
          </Link>
          <a
            href="https://gdscjss.in/"
            target="_blank"
            className="flex items-center gap-2 rounded-[2.9375rem] hover:bg-nav-hover w-[6.5vw] justify-center">
            <img src={`${webButton}`} alt="Website" />
            <div className="text-blue">Website</div>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-[2.9375rem] hover:bg-nav-hover w-[6.5vw] justify-center">
            <img src={`${result}`} alt="result" />
            <div className="text-blue">Results</div>
          </a>
        </div>
        <div>
          <button
            className="flex items-center justify-center w-[10rem] h-[5.5vh] bg-lime rounded-[2.125rem]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className="p-2">Let's Go</div>
            <img
              className={isHovered ? "button-hover" : ""}
              src={`${arrRight}`}
            />
          </button>
        </div>
      </div>
    </>
  );
}
