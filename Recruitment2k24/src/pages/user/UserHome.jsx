import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderProfile from "../../components/HeaderProfile";
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
          <Header>
            <HeaderProfile />
          </Header>
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
            {/* need to change styles too on submitted and not submitted */}
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
