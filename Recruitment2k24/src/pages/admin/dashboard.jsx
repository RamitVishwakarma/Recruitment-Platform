import Header from "../../components/Header";
import Edit_icon from "../../assets/edit-icon.svg";
import UserIcon from "../../assets/users.svg";
import ProjectIcon from "../../assets/project.svg";
import QuizIcon from "../../assets/quiz.svg";
import Shortlist from "../../assets/shortlist.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const domain = sessionStorage.getItem("Domain");
  const photo = sessionStorage.getItem("Photo");
  const [adminInfo, setAdminInfo] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}api/admin/profile/statistics`, {
        headers: {
          Authorization: sessionStorage.getItem("Admin Token"),
        },
      })
      .then((res) => {
        setAdminInfo(res.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  return (
    <>
      {!adminInfo ? (
        <div>Loading...</div>
      ) : (
        <div className="h-screen bg-admin-dashboard-bg bg-no-repeat bg-left-bottom">
          <div className="mx-40">
            <Header>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <p className="text-4xl font-bold">{domain} Lead</p>
                  <Link
                    to="/admin/profile"
                    className="flex gap-4 font-3xl text-purple">
                    <img src={Edit_icon} alt="" />
                    <p>Edit&nbsp;Profile</p>
                  </Link>
                </div>
                <div>
                  <img src={photo} alt="" className="w-16" />
                </div>
              </div>
            </Header>
          </div>
          <div className="mx-60 mt-20 flex items-center justify-between">
            {/* side text */}
            <div>
              <h1 className="text-8xl font-bold text-grey leading-normal">
                {domain}
                <br />
                Dashboard
              </h1>
            </div>
            {/* cards */}
            <div className="bg-text-box relative overflow-hidden w-fit mt-28 mx-auto px-16 py-16 rounded-3xl">
              <div className="grid grid-cols-2 grid-rows-2 place-content-center gap-16">
                <a href="/admin/users">
                  <div className="flex z-10 justify-center items-center gap-8 bg-white w-80 py-6 rounded-2xl">
                    <div className="w-16 h-16 rounded-full grid place-items-center bg-light-blue/30">
                      <img className="w-10" src={UserIcon} alt="" />
                    </div>
                    <div>
                      <h2 className="text-3xl">
                        {adminInfo.registeredUsersCount}
                      </h2>
                      <h3 className="text-xl opacity-60">Registered Users</h3>
                    </div>
                  </div>
                </a>

                <div className="flex z-10 justify-center items-center gap-8 bg-white w-80 py-6 rounded-2xl">
                  <div className="w-16 h-16 rounded-full grid place-items-center bg-purple/30">
                    <img className="w-8" src={ProjectIcon} alt="" />
                  </div>
                  <div>
                    <h2 className="text-3xl">
                      {adminInfo.submittedProjectsCount}
                    </h2>
                    <h3 className="text-xl opacity-60">Projects Submitted</h3>
                  </div>
                </div>

                <div className="flex z-10 justify-center items-center gap-8 bg-white w-80 py-6 rounded-2xl">
                  <div className="w-16 h-16 rounded-full grid place-items-center bg-lime/30">
                    <img className="w-10" src={Shortlist} alt="" />
                  </div>
                  <div>
                    <h2 className="text-3xl">
                      {adminInfo.shortlistedUsersCount}
                    </h2>
                    <h3 className="text-xl opacity-60">Users Shortlisted</h3>
                  </div>
                </div>

                <div className="flex z-10 justify-center items-center gap-8 bg-white w-80 py-6 rounded-2xl">
                  <div className="w-16 h-16 rounded-full grid place-items-center bg-red/30">
                    <img className="w-8" src={QuizIcon} alt="" />
                  </div>
                  <div>
                    <h3 className="text-2xl underline">Manage Quiz</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
