import logo from "../../assets/logo.svg";
import domainButton from "../../assets/domainButton.svg";
import webButton from "../../assets/websiteButton.svg";
import result from "../../assets/result.svg";
import separator from "../../assets/separator.svg";
import arrRight from "../../assets/arrRight.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="flex font-ProductSans">
        <div className="border-t-[6px] border-red w-[25vw]"></div>
        <div className="border-t-[6px] border-purple w-[25vw]"></div>
        <div className="border-t-[6px] border-lime w-[25vw]"></div>
        <div className="border-t-[6px] border-light-blue w-[25vw]"></div>
      </div>
      <div className="h-[8vh] text-lg mx-40 flex items-center justify-between">
        <div className="flex">

          <Link to="/" className="flex items-center gap-2">
            <img src={`${logo}`} alt="Logo" />
            <div className="text-grey font-bold">GDSC&nbsp;JSSATEN</div>
          </Link>

          <img src={separator} alt="separator" className="ml-6 mr-3"/>

          <Link
            to="/domains"
            className="flex items-center gap-2 px-6 rounded-full hover:bg-nav-hover">
            <img src={`${domainButton}`} alt="Domains" />
            <div className="text-blue">Domains</div>
          </Link>

          <Link
            to="https://gdscjss.in/"
            target="_blank"
            className="flex items-center gap-2 px-6 rounded-full hover:bg-nav-hover">
            <img src={`${webButton}`} alt="Website" />
            <div className="text-blue">Website</div>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 px-6 rounded-full opacity-60 hover:bg-nav-hover">
            <img src={`${result}`} alt="result" />
            <div className="text-blue">Results</div>
          </Link>

        </div>
        <div>

          <Link to="/register">
            <button id="login" className="flex items-center justify-center px-6 py-1 bg-lime rounded-full">
              <div className="p-2 font-bold">Let's go</div>
              <img src={`${arrRight}`} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
