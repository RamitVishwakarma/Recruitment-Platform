import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderProfile from "../../components/HeaderProfile";
import {
  ProfileNotComplete,
  ProfileCompleted,
  QuizYetToStart,
  QuizTakeTheQiz,
  QuizCompleted,
  ProjectSubmitted,
  ProjectNotSubmitted,
} from "../../data/UserHome.jsx";

// Images
import profile from "../../assets/User_Home/ProfileIco.svg";
import quiz from "../../assets/quiz.svg";
import project from "../../assets/project.svg";

import arrRight from "../../assets/arrRight.svg";
// imports
import { useState } from "react";

export default function UserHome() {
  // State manager
  const [profileState, setProfileState] = useState(ProfileNotComplete);
  const [quizState, setQuizState] = useState(QuizYetToStart);
  const [projectState, setProjectState] = useState(ProjectNotSubmitted);

  return (
    <>
      <div className="h-screen">
        <div className="mx-40mx-5 md:mx-20 xl:mx-40">
          <Header>
            <div className="min-w-80 max-md:mt-10">
              <HeaderProfile />
            </div>
          </Header>
          <div className="flex gap-6 flex-col">
            <HomePageComponents
              img={profile}
              imgBgColor={"bg-light-blue/30"}
              text="Profile"
              state={profileState}
            />
            <HomePageComponents
              img={quiz}
              imgBgColor={"bg-light-red/30"}
              text="Quiz"
              state={quizState}
            />
            <HomePageComponents
              img={project}
              imgBgColor={"bg-light-purple/30"}
              text="Project"
              state={projectState}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function HomePageComponents({ img, imgBgColor, text, state }) {
  return (
    <div className="flex gap-4 cursor-pointer homePageComponent">
      <div
        className={`w-12 h-12 rounded-full ${imgBgColor} flex items-center justify-center`}>
        <img className="w-6 h-6" src={img} />
      </div>
      <div className="flex-col w-40">
        <div>{text}</div>
        <div className="flex gap-1 items-center text-sm">
          <div>{state.img}</div>
          <div className={`${state.textColor}`}>{state.text}</div>
        </div>
      </div>
      <button className="pl-5 flex items-center cursor-pointer ">
        <img className="w-6" src={arrRight} />
      </button>
    </div>
  );
}
