import logo from "../assets/logo.svg";
import separator from "../assets/separator.svg";
import { Link, useNavigate } from "react-router-dom";
import { Login, Logout, LetsGo, Back } from "../data/Navbar";
import axios from "axios";

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

  const navigate = useNavigate();
  const logoutHandler = () => {
    axios
      .post(
        `${import.meta.env.VITE_URL}api/user/auth/logout`,
        {},
        {
          headers: {
            Authorization: sessionStorage.getItem("Authorization"),
          },
        }
      )
      .then((res) => {
        sessionStorage.clear();
      })
      .catch((e) => {
        console.log(e);
      });
    navigate("/");
  };

  return (
    <>
      <div className="sticky z-40 top-0 bg-white/70 backdrop-blur-lg">
        <div className="flex">
          <div className="border-t-[6px] border-red w-[25vw]"></div>
          <div className="border-t-[6px] border-purple w-[25vw]"></div>
          <div className="border-t-[6px] border-lime w-[25vw]"></div>
          <div className="border-t-[6px] border-light-blue w-[25vw]"></div>
        </div>
        <div className="h-[8vh] min-h-14 text-lg mx-5 md:mx-20 xl:mx-40 flex items-center justify-between">
          <div className="flex">
            {/* Need to do hamburger logic The design is not available */}
            <button className="lg:hidden md:block mr-5">
              <span className="material-symbols-rounded text-4xl">menu</span>
            </button>

            <Link to="/" className="flex items-center gap-2">
              <img src={`${logo}`} alt="Logo" />
              <div className="text-grey md:text-lg font-bold">
                GDSC&nbsp;JSSATEN
              </div>
            </Link>
            <img
              src={separator}
              alt="separator"
              className="ml-6 mr-3 max-lg:hidden"
            />
            <Link
              to="/#domains"
              className="text-grey flex items-center gap-2 px-4 text-base rounded-full hover:bg-nav-hover max-lg:hidden">
              <span className="material-symbols-rounded text-md">cards</span>
              <div>Domains</div>
            </Link>
            <Link
              to="/#timeline"
              className="text-grey flex items-center gap-2 px-4 text-base rounded-full hover:bg-nav-hover max-lg:hidden">
              <span className="material-symbols-rounded text-md">timeline</span>
              <div>Timeline</div>
            </Link>
            <Link
              to="/tasks"
              className="text-grey flex items-center gap-2 px-4 text-base rounded-full hover:bg-nav-hover max-lg:hidden">
              <span className="material-symbols-rounded text-md">
                editor_choice
              </span>
              <div>Tasks</div>
            </Link>
            <Link
              to="https://gdscjss.in/"
              target="_blank"
              className="text-grey flex items-center gap-2 px-4 text-base rounded-full hover:bg-nav-hover max-lg:hidden">
              <span className="material-symbols-rounded text-md">language</span>
              <div>Website</div>
            </Link>
            <Link
              href="/"
              className="text-grey flex items-center gap-2 px-4 text-base rounded-full opacity-40 max-lg:hidden">
              <span className="material-symbols-rounded text-md">
                bar_chart
              </span>
              <div>Results</div>
            </Link>
          </div>
          <div>
            {buttonType != "logout" && (
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
            )}
            {buttonType === "logout" && (
              <button
                onClick={logoutHandler}
                className="cta flex items-center justify-center px-8 py-1 rounded-lg bg-lime text-grey hover:bg-button-hover">
                <div className="p-1 text-xl flex items-center justify-center gap-4 text-button-text">
                  {buttonState.style}
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
