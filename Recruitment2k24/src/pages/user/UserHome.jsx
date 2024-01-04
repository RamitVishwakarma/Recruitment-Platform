import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Logo from "../../assets/header-logo.svg";
import arrow from "../../assets/arw-circle-right.svg";
import Profile from "../../assets/prof.svg";
import Quiz from "../../assets/userhome-quiz.svg";
import Project from "../../assets/userhome-project.svg";
import Hourglass from "../../assets/hourglass.svg";
import Check from "../../assets/greencheck.svg";
import { Link } from "react-router-dom";
export default function UserHome() {
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
                <div className="flex ml-32 mt-1 border-b-2 border-red">
                  <span className=" text-red text-lg">
                    Complete Profile &nbsp;
                  </span>
                  <img className="w-6" src={arrow} />
                </div>
              </Link>
            </div>
          </div>
          {/* Quiz and project  */}
          <div className="flex justify-center mt-20 gap-32">
            <div className="flex flex-col">
              <div className=" w-60 h-60 bg-red items-center gap-5 justify-center rounded-2xl flex flex-col">
                <img src={Quiz} />
                <span className="text-2xl text-white font-bold opacity-50">
                  QUIZ
                </span>
              </div>
              <div className="text-grey flex justify-center mt-2 text-lg">
                <img src={Hourglass} />
                <span>Yet to start</span>
              </div>
            </div>
            {/* Project Section */}
            {/* There needs to be a condition for the project thing if submitted it will be checked if not a it would be clickable and will be redirected to another page to submit the link */}
            <div className="flex flex-col">
              <Link to="/project">
                <div className="w-60 h-60 bg-purple items-center gap-5 justify-center rounded-2xl flex flex-col">
                  <img src={Project} />
                  <span className="text-2xl text-white font-bold">PROJECT</span>
                </div>
              </Link>
              <div className="text-grey flex justify-center mt-2 text-lg">
                <img src={Check} />
                <span className="text-lime">Submitted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
