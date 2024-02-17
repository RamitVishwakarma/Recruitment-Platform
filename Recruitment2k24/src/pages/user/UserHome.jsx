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
import axios from "axios";

import { Link } from "react-router-dom";

// Images
import profile from "../../assets/User_Home/ProfileIco.svg";
import quiz from "../../assets/quiz.svg";
import project from "../../assets/project.svg";
import arrRight from "../../assets/arrRight.svg";
// imports
import { useEffect, useState } from "react";

export default function UserHome() {
  // State manager
  const [profileState, setProfileState] = useState(ProfileNotComplete);
  const [quizState, setQuizState] = useState(QuizYetToStart);
  const [projectState, setProjectState] = useState(ProjectNotSubmitted);
  // * fetching user from session storage
  // const user = JSON.parse(sessionStorage.getItem("user"));
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}api/user/profile/myProfile`, {
        headers: {
          Authorization: sessionStorage.getItem("Authorization"),
        },
      })
      .then((res) => {
        console.log(res);
        setUser(res.data.user);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  // console.log(user);
  // Managing states here
  // * Profile
  useEffect(() => {
    if (
      user.socialLinks == {} ||
      user.projectStatus === false ||
      user.resume === undefined ||
      user.admissionNumber === undefined ||
      user.domain === undefined
    ) {
      setProfileState(ProfileNotComplete);
    } else {
      setProfileState(ProfileCompleted);
    }
  }, [
    user.socialLinks,
    user.projectStatus,
    user.resume,
    user.admissionNumber,
    user.domain,
  ]);
  // * Quiz
  const date = new Date();
  useEffect(() => {
    //If the array is not empty then quiz is completed
    if (user.quizzesTaken == []) {
      setQuizState(QuizCompleted);
    }
    // 3 march 2024 is hardcoded here
    if (
      date.getFullYear() == "2024" &&
      date.getMonth() == "2" &&
      date.getDate() == "3"
    ) {
      setQuizState(QuizTakeTheQiz);
    }
  }, [date]);
  // * Project
  useEffect(() => {
    if (user.projectStatus) {
      setProjectState(ProjectSubmitted);
    }
  }, [user.projectStatus]);

  return (
    <>
      {!user ? (
        <div>Loading...</div>
      ) : (
        <div className="h-[88vh]">
          <div className="mx-40mx-5 md:mx-20 xl:mx-40">
            <Header>
              <div className="min-w-80 max-md:mt-10">
                <HeaderProfile name={user.name} photo={user.photo} />
              </div>
            </Header>
            <div className="flex justify-center items-center">
              <div
                className={`w-1/2 text-grey font-bold  mt-8 md:mt-10 lg:mt-32 text-3xl md:text-4xl lg:ml-10 lg:text-8xl xl:text-8xl 2xl:text-9xl`}>
                Your <br /> Dashboard
              </div>
              <div className="w-1/2 flex gap-6 flex-col items-center">
                <Link to="/user/profile">
                  <HomePageComponents
                    img={profile}
                    imgBgColor={"bg-light-blue/30"}
                    text="Profile"
                    state={profileState}
                  />
                </Link>
                <Link to="/user/quizes">
                  <HomePageComponents
                    img={quiz}
                    imgBgColor={"bg-light-red/30"}
                    text="Quiz"
                    state={quizState}
                  />
                </Link>
                <Link to="/user/project">
                  <HomePageComponents
                    img={project}
                    imgBgColor={"bg-light-purple/30"}
                    text="Project"
                    state={projectState}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
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
