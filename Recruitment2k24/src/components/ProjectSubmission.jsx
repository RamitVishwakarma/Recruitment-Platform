import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Logo from "../assets/header-logo.svg";
import Profile from "../assets/prof.svg";
import arrow from "../assets/arw-circle-right.svg";
import Project from "../assets/userhome-project.svg";
import Footer from "./Footer";

export default function ProjectSubmission() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="mx-40">
          <div className="flex my-12 justify-between">
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
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[50rem] h-60 bg-purple/20 flex flex-col justify-center items-center">
            <div className="text-purple text-4xl mb-6 ml-14 font-bold">
              Paste your project link here
            </div>
            <div className="flex items-center gap-6">
              <img className="hello" src={Project} />
              {/* form action to be changed */}
              <form id="projectLink" action="/home">
                <input
                  className="w-[35rem] h-12 border rounded-lg p-3 hover:duration-0 border-grey focus:text-input-blue hover:border-2 focus:outline-2 focus:outline-light-blue"
                  type="text"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            form="projectLink"
            type="submit"
            className="mx-auto mt-10 font-bold text-2xl text-button-text bg-lime rounded-lg hover:bg-button-hover px-10 py-3">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
