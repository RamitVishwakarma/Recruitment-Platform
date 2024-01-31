import logo from "../assets/logo.svg";
import separator from "../assets/separator.svg";
import { Link } from "react-router-dom";
import { Login, Logout, LetsGo, Back } from "../data/Navbar";

export default function Navbar({ buttonType }) {
  let buttonState;
  if (buttonType === "back") {
    buttonState = Back;
  }
  if (buttonType === "login") {
    buttonState = Login;
  }
  if (buttonType === "logout") {
    buttonState = Logout;
  }
  if (buttonType === "letsgo") {
    buttonState = LetsGo;
  }

  return (
    <>
      <div className="sticky z-40 top-0 bg-white/70 backdrop-blur-lg">
        <div className="flex">
          <div className="border-t-[6px] border-red w-[25vw]"></div>
          <div className="border-t-[6px] border-purple w-[25vw]"></div>
          <div className="border-t-[6px] border-lime w-[25vw]"></div>
          <div className="border-t-[6px] border-light-blue w-[25vw]"></div>
        </div>
        <div className="h-[8vh] text-lg mx-5 md:mx-20 xl:mx-40 flex items-center justify-between">
          <div className="flex">
            {/* Need to do hamburger logic The design is not available */}
            {/* Hamburger svf */}
            <Link to="/" className="flex items-center gap-2">
              <img src={`${logo}`} alt="Logo" />
              <div className="text-grey font-bold">GDSC&nbsp;JSSATEN</div>
            </Link>
            <img
              src={separator}
              alt="separator"
              className="ml-6 mr-3 max-lg:hidden"
            />
            <Link
              to="/#domains"
              className="text-blue flex items-center gap-2 px-6 rounded-full hover:bg-nav-hover max-lg:hidden">
              <span className="material-symbols-rounded">cards</span>
              <div>Domains</div>
            </Link>
            <Link
              to="/tasks"
              className="text-blue flex items-center gap-2 px-6 rounded-full hover:bg-nav-hover max-lg:hidden">
              <span className="material-symbols-rounded">editor_choice</span>
              <div>Tasks</div>
            </Link>
            <Link
              to="https://gdscjss.in/"
              target="_blank"
              className="text-blue flex items-center gap-2 px-6 rounded-full hover:bg-nav-hover max-lg:hidden">
              <span className="material-symbols-rounded">language</span>
              <div>Website</div>
            </Link>
            <Link
              href="/"
              className="text-blue flex items-center gap-2 px-6 rounded-full opacity-40 max-lg:hidden">
              <span className="material-symbols-rounded">bar_chart</span>
              <div>Results</div>
            </Link>
          </div>
          <div>
            <Link to={buttonState.link} state={buttonState.useNavigateState}>
              <button
                className={`${
                  buttonType === "back" ? "ctaback" : "cta"
                } flex items-center justify-center px-8 py-1 rounded-lg bg-lime text-grey hover:bg-button-hover`}>
                <div className="p-1 text-xl flex items-center justify-center gap-4 text-button-text">
                  {buttonState.style}
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
