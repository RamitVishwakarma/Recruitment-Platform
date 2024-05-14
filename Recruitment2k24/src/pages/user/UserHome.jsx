import {
  ProfileNotComplete,
  ProfileCompleted,
  QuizYetToStart,
  QuizTakeTheQiz,
  QuizCompleted,
  ProjectSubmitted,
  ProjectNotSubmitted,
  Interview,
} from "../../data/UserHome.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
// Images
import profile from "../../assets/User_Home/ProfileIco.svg";
import quiz from "../../assets/quiz.svg";
import project from "../../assets/project.svg";
import interview from "../../assets/User_Home/InterviewIco.svg";
// imports
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserHome() {
  // State manager
  const [profileState, setProfileState] = useState(ProfileNotComplete);
  const [quizState, setQuizState] = useState(QuizYetToStart);
  const [projectState, setProjectState] = useState(ProjectNotSubmitted);
  const [interviewState, setInterviewState] = useState(Interview);
  // * fetching user from session storage
  // const user = JSON.parse(sessionStorage.getItem("user"));
  const [user, setUser] = useState("");
  //getting domain just to check if the domain is provided or not for quiz
  const domain = sessionStorage.getItem("domain");
  const navigate = useNavigate();
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

  // On click handler for quiz
  const onClickQuizHandler = (e) => {
    e.preventDefault();
    console.log(domain);
    if (domain === null) {
      alert("Please select a domain in the profile section to take the quiz");
    } else {
      navigate("/user/quizes");
    }
  };
  return (
    <>
      {!user ? (
        <div>Loading...</div>
      ) : (
        <div className="h-[88vh] bg-background">
          <div className="mx-40mx-5 md:mx-20 xl:mx-40">
            <div className="flex my-6 max-md:flex-col items-center justify-between">
              <div className="flex flex-col">
                <div className="text-5xl text-grey font-bold">
                  Hello {user.name}
                </div>
                <div className="mt-3">
                  {/* When profile is not completed this should pop up */}
                  {profileState.text === "Not Complete" ? (
                    <div className="text-light-red flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 30 30"
                        fill="none">
                        <path
                          d="M15.0011 22.125C15.2257 22.125 15.4136 22.0491 15.5648 21.8974C15.7161 21.7457 15.7917 21.5576 15.7917 21.3333V14.2083C15.7917 13.984 15.7157 13.796 15.5637 13.6443C15.4118 13.4925 15.2236 13.4167 14.9989 13.4167C14.7743 13.4167 14.5864 13.4925 14.4352 13.6443C14.284 13.796 14.2083 13.984 14.2083 14.2083V21.3333C14.2083 21.5576 14.2843 21.7457 14.4363 21.8974C14.5882 22.0491 14.7764 22.125 15.0011 22.125ZM15 11.1635C15.2761 11.1635 15.5075 11.0701 15.6943 10.8833C15.881 10.6966 15.9743 10.4652 15.9743 10.1891C15.9743 9.91303 15.881 9.68162 15.6943 9.49487C15.5075 9.30811 15.2761 9.21474 15 9.21474C14.7239 9.21474 14.4925 9.30811 14.3057 9.49487C14.119 9.68162 14.0257 9.91303 14.0257 10.1891C14.0257 10.4652 14.119 10.6966 14.3057 10.8833C14.4925 11.0701 14.7239 11.1635 15 11.1635ZM15.0053 29.25C13.0348 29.25 11.1821 28.8761 9.44741 28.1282C7.71268 27.3804 6.2037 26.3654 4.92046 25.0834C3.63725 23.8014 2.62137 22.2938 1.87282 20.5607C1.12427 18.8276 0.75 16.9758 0.75 15.0053C0.75 13.0348 1.12392 11.1821 1.87175 9.44741C2.61961 7.71268 3.63456 6.2037 4.91658 4.92046C6.19861 3.63725 7.70616 2.62137 9.43925 1.87282C11.1724 1.12427 13.0242 0.75 14.9947 0.75C16.9652 0.75 18.8179 1.12392 20.5526 1.87175C22.2873 2.61961 23.7963 3.63456 25.0795 4.91658C26.3628 6.19861 27.3786 7.70616 28.1272 9.43925C28.8757 11.1724 29.25 13.0242 29.25 14.9947C29.25 16.9652 28.8761 18.8179 28.1282 20.5526C27.3804 22.2873 26.3654 23.7963 25.0834 25.0795C23.8014 26.3628 22.2938 27.3786 20.5607 28.1272C18.8276 28.8757 16.9758 29.25 15.0053 29.25ZM15 27.6667C18.5361 27.6667 21.5312 26.4396 23.9854 23.9854C26.4396 21.5312 27.6667 18.5361 27.6667 15C27.6667 11.4639 26.4396 8.46875 23.9854 6.01458C21.5312 3.56042 18.5361 2.33333 15 2.33333C11.4639 2.33333 8.46875 3.56042 6.01458 6.01458C3.56042 8.46875 2.33333 11.4639 2.33333 15C2.33333 18.5361 3.56042 21.5312 6.01458 23.9854C8.46875 26.4396 11.4639 27.6667 15 27.6667Z"
                          fill="#EB6B6B"
                        />
                      </svg>
                      &nbsp; Your profile is not complete!&nbsp;
                      <Link
                        className="underline  font-bold text-[#000]"
                        to="/user/profile">
                        Complete now
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="text-3xl ">Your Dashboard</div>
            </div>
            <div className="flex justify-center items-center">
              <div className=" flex gap-6 items-center">
                <Link to="/user/quizes" onClick={onClickQuizHandler}>
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
                <Link to="#">
                  <HomePageComponents
                    img={interview}
                    imgBgColor={"bg-light-blue/30"}
                    text="Interview"
                    state={interviewState}
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
    <div className="bg-text-box w-[20vw] h-[50vh] mt-8 shadow-xl rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer homePageComponent ">
      <div
        className={`w-32 h-32 mt-5 rounded-full ${imgBgColor} flex items-center justify-center`}>
        <img className="w-16 h-16" src={img} />
      </div>
      <div className="flex-col flex items-center">
        <div className="text-xl">{text}</div>
        <div className="flex gap-1 mt-2 items-center text-sm">
          <div>{state.img}</div>
          <div className={`${state.textColor}`}>{state.text}</div>
        </div>
      </div>
    </div>
  );
}
