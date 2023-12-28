import logo from "../../assets/logo.svg";
import domainButton from "../../assets/domainButton.svg";
import webButton from "../../assets/websiteButton.svg";
import timeline from "../../assets/timeline.svg";
import result from "../../assets/result.svg";
import arrRight from "../../assets/arrRight.svg";
import { useState } from "react";
import "./Navbar.css";
export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-[10vh] max-w-[1300px] m-auto flex items-center justify-between">
      <div className="flex w-[60%] justify-between">
        <a
          href="#"
          className="flex items-center gap-2 rounded-[2.9375rem] w-[6.5vw] justify-center">
          <img src={`${logo}`} alt="Logo" />
          <div className="text-logo">GDSC JSS</div>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 rounded-[2.9375rem] hover:bg-nav-hover w-[6.5vw] justify-center">
          <img src={`${domainButton}`} alt="Domains" />
          <div className="text-blue">Domains</div>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 rounded-[2.9375rem] hover:bg-nav-hover w-[6.5vw] justify-center">
          <img src={`${webButton}`} alt="Website" />
          <div className="text-blue">Website</div>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 rounded-[2.9375rem] hover:bg-nav-hover w-[6.5vw] justify-center">
          <img src={`${timeline}`} alt="Timeline" />
          <div className="text-blue">Timeline</div>
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
          className="flex items-center justify-center w-[8vw] h-[5.5vh] bg-lime rounded-[2.125rem]"
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
  );
}
