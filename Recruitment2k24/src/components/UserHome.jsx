import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Logo from "../assets/header-logo.svg";
import arrow from "../assets/arw-circle-right.svg";
import Profile from "../assets/prof.svg";
import Quiz from "../assets/userhome-quiz.svg";
import Project from "../assets/userhome-project.svg";
import Footer from "./Footer";

export default function UserHome() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="mx-40">
          <div className="flex my-[3rem] justify-between">
            <img src={Logo} alt="Logo" />

            <div className="flex flex-col">
              <div className="flex text-right gap-3">
                <div className="flex flex-col">
                  <span className="text-grey text-xl">Hello</span>
                  <span className="text-grey text-2xl font-bold">
                    Ramit Vishwakarma
                  </span>
                </div>
                <div>
                  <img src={Profile} />
                </div>
              </div>
              {/* conditional if the profile is not completed */}
              <Link to="/user-profile">
                <div className="flex ml-[7.8rem] mt-1 border-b-2 border-red">
                  <span className=" text-red text-lg">
                    Complete Profile &nbsp;
                  </span>
                  <img className="w-6" src={arrow} />
                </div>
              </Link>
            </div>
          </div>
          {/* Quiz and project  */}
          <div className="flex justify-center mt-24 gap-32">
            <div
              id="quiz"
              className=" w-[15rem] h-[15rem] bg-red items-center gap-5 justify-center rounded-2xl flex flex-col">
              <img src={Quiz} />
              <span className="text-2xl text-white font-bold opacity-50">
                QUIZ
              </span>
            </div>
            <div className="w-[15rem] h-[15rem] bg-purple items-center gap-5 justify-center rounded-2xl flex flex-col">
              <img src={Project} />
              <span className="text-2xl text-white font-bold">PROJECT</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
