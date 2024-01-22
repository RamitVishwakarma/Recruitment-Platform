import logo from "../assets/logo.svg";
import separator from "../assets/separator.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="sticky z-50 top-0 bg-white/70 backdrop-blur-lg">
        <div className="flex">
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
            <img src={separator} alt="separator" className="ml-6 mr-3" />
            <Link
              to="/domains"
              className="text-blue flex items-center gap-2 px-6 rounded-full hover:bg-nav-hover">
              <span className="material-symbols-rounded">cards</span>
              <div>Domains</div>
            </Link>
            <Link
            to="/tasks"
            className="flex items-center gap-2 px-6 rounded-full hover:bg-nav-hover">
              <span className="material-symbols-rounded">editor_choice</span>
              <div>Tasks</div>
            </Link>
            <Link
              to="https://gdscjss.in/"
              target="_blank"
              className="text-blue flex items-center gap-2 px-6 rounded-full hover:bg-nav-hover">
              <span className="material-symbols-rounded">language</span>
              <div>Website</div>
            </Link>
            <Link
              href="/"
              className="text-blue flex items-center gap-2 px-6 rounded-full opacity-40">
              <span className="material-symbols-rounded">bar_chart</span>
              <div>Results</div>
            </Link>
          </div>
          <div>
            <Link to="/register">
              <button
                id="login"
                className="flex items-center justify-center px-10 py-2 rounded-lg bg-lime text-grey hover:bg-button-hover">
                <div className="p-1 text-xl font-bold">Login</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
