import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Arrow_right from "../../assets/arrRight.svg";
import Edit_icon from "../../assets/edit-icon.svg";
import UserIcon from "../../assets/users.svg";
import ProjectIcon from "../../assets/project.svg";
import QuizIcon from "../../assets/quiz.svg";
import CheckBox from "../../assets/shortlist.svg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const admininfo = {
    domain: "Design",
    photo : "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
    total_users: 234,
    shortlisted: 34,
    total_projects: 92,
    quizCreated: false,
    quiz_taken: 184
  }

  return (
    <>
      <div className="h-screen bg-admin-dashboard-bg bg-no-repeat bg-left-bottom">
        <Navbar />
        <div className="mx-40">
          <Header>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <p className="text-4xl font-bold">{admininfo.domain} Lead</p>
                <div className="flex gap-4 font-3xl text-purple">
                  <img src={Edit_icon} alt="" />
                  <p>Edit&nbsp;Profile</p>
                </div>
              </div>
              <div>
                <img src={admininfo.photo} alt="" className="w-16" />
              </div>
            </div>
          </Header>
        </div>
        <div className="mx-60 mt-20 flex items-center justify-between">
          {/* side text */}
          <div>
            <h1 className="text-8xl font-bold text-grey leading-normal">{admininfo.domain}<br />Dashboard</h1>
          </div>
          {/* cards */}
          <div className="flex flex-col gap-4 content-stretch">
            {/* users card */}
            <div className="dashboard-card flex bg-text-box items-center gap-8 px-10 rounded-2xl py-6">
              {/* icon */}
              <div className="bg-light-blue/30 w-16 h-16 flex items-center flex-shrink-0 justify-center rounded-full">
                <img className="w-9" src={UserIcon} alt="" />
              </div>
              {/* info */}
              <div>
                <p className="text-4xl text-light-blue font-bold">{admininfo.total_users}</p>
                <p className="text-2xl text-grey">Registered&nbsp;Users</p>
              </div>
              <img className="ml-auto" src={Arrow_right} alt="" />
            </div>
            {/* projects card */}
            <div className="dashboard-card flex bg-text-box items-center gap-8 px-10 rounded-2xl py-6">
              {/* icon */}
              <div className="bg-purple/30 w-16 h-16 flex items-center flex-shrink-0 justify-center rounded-full">
                <img className="w-9" src={ProjectIcon} alt="" />
              </div>
              {/* info */}
              <div>
                <p className="text-4xl text-purple font-bold">{admininfo.total_projects}</p>
                <p className="text-2xl text-grey">Projects&nbsp;Submitted</p>
              </div>
              <img className="ml-auto" src={Arrow_right} alt="" />
            </div>
            {/* shortlisted card */}
            <div className="dashboard-card flex bg-text-box items-center gap-8 px-10 rounded-2xl py-6">
              {/* icon */}
              <div className="bg-lime/30 w-16 h-16 flex items-center flex-shrink-0 justify-center rounded-full">
                <img className="w-9" src={CheckBox} alt="" />
              </div>
              {/* info */}
              <div>
                <p className="text-4xl text-lime font-bold">{admininfo.shortlisted}</p>
                <p className="text-2xl text-grey">Users&nbsp;Shortlisted</p>
              </div>
              <img className="ml-auto" src={Arrow_right} alt="" />
            </div>
            {/* quiz card */}
            <div className="dashboard-card flex bg-text-box items-center gap-8 px-10 rounded-2xl py-6">
              {/* icon */}
              <div className="bg-red/30 w-16 h-16 flex items-center flex-shrink-0 justify-center rounded-full">
                <img className="w-8" src={QuizIcon} alt="" />
              </div>
              {/* info */}
              <div>
                {admininfo.quizCreated ? (
                  <>
                    <p className="text-4xl text-red font-bold">{admininfo.quiz_taken}</p>
                    <p className="text-2xl text-grey">Quiz&nbsp;Taken</p>
                  </>
                ) : <p className="text-3xl text-grey" >Create Quiz</p>}
              </div>
              <img className="ml-auto" src={Arrow_right} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
