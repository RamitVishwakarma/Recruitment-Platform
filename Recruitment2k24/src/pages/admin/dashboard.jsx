import UserIcon from "../../assets/users.svg";
import ProjectIcon from "../../assets/project.svg";
import QuizIcon from "../../assets/quiz.svg";
import Shortlist from "../../assets/shortlist.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const domain = sessionStorage.getItem("Domain");
  const [userStatistics, setuserStatistics] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}api/admin/profile/statistics`, {
        headers: {
          Authorization: sessionStorage.getItem("Admin Token"),
        },
      })
      .then((res) => {
        setuserStatistics(res.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  return (
    <>
      {!userStatistics ? (
        <div>Loading...</div>
      ) : (
        <div className="min-h-screen bg-background">
          <div className="mx-5 md:mx-20 xl:mx-40">
            {/* Header */}
            <div className="flex my-6 md:mt-10 max-md:flex-col items-center max-md:gap-4">
              <div className="text-4xl">{domain} Dashboard</div>
              <div className="flex items-center gap-4"></div>
            </div>
          </div>
          {/* cards */}
          <div className=" px-16 py-16 flex justify-center md:mt-[8vh]">
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 md:gap-16 ">
              {/* user stats */}
              <Link to="/admin/users">
                <div className="flex justify-center items-center gap-8 bg-white w-80 py-6 rounded-md shadow-lg">
                  <div className="w-16 h-16 rounded-full grid place-items-center bg-light-blue/30">
                    <img className="w-10" src={UserIcon} alt="" />
                  </div>
                  <div>
                    <h2 className="text-3xl">
                      {userStatistics.registeredUsersCount}
                    </h2>
                    <h3 className="text-xl opacity-60">Registered Users</h3>
                  </div>
                </div>
              </Link>

              <div className="flex justify-center items-center gap-8 bg-white w-80 py-6 rounded-md shadow-lg ">
                <div className="w-16 h-16 rounded-full grid place-items-center bg-purple/30">
                  <img className="w-8" src={ProjectIcon} alt="" />
                </div>
                <div>
                  <h2 className="text-3xl">
                    {userStatistics.submittedProjectsCount}
                  </h2>
                  <h3 className="text-xl opacity-60">Projects Submitted</h3>
                </div>
              </div>

              <div className="flex  justify-center items-center gap-8 bg-white w-80 py-6 rounded-md shadow-lg ">
                <div className="w-16 h-16 rounded-full grid place-items-center bg-lime/30">
                  <img className="w-10" src={Shortlist} alt="" />
                </div>
                <div>
                  <h2 className="text-3xl">
                    {userStatistics.shortlistedUsersCount}
                  </h2>
                  <h3 className="text-xl opacity-60">Users Shortlisted</h3>
                </div>
              </div>

              <div className="flex  justify-center items-center gap-8 bg-white w-80 py-6 rounded-md shadow-lg ">
                <div className="w-16 h-16 rounded-full grid place-items-center bg-red/30">
                  <img className="w-8" src={QuizIcon} alt="" />
                </div>
                <Link to="/admin/createQuiz">
                  <h3 className="text-2xl underline">Create Quiz</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
