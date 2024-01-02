import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/header-logo.svg";
import back from "../../assets/arrRight.svg";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const AllUsers = () => {
  const users = [
    {
      name: "Lorem Ipsum",
      projectStatus: "Not Completed",
      quizResults: "18/20",
      interviewStatus: "Scheduled",
      shortlisted: "No",
    },
    {
      name: "Lijf Obneg",
      projectStatus: "Completed",
      quizResults: "20/20",
      interviewStatus: "Cleared",
      shortlisted: "Yes",
    },
    {
      name: "Frgijreg Kwsefjiwj",
      projectStatus: "Completed",
      quizResults: "20/20",
      interviewStatus: "PR Scheduled",
      shortlisted: "No",
    },
  ];

  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="mx-40">
          <div className="flex my-6 justify-between items-center">
            <img src={Logo} alt="Logo" />
            <h1 className="text-6xl font-bold text-grey">All Designers</h1>
          </div>
        </div>
        <div className="flex justify-between mx-40 text-button-text text-2xl">
          <Link to="/dashboard">
            <div className="flex items-center hover:underline">
              <img className="rotate-180" src={back} alt="" />
              <div>Dashboard</div>
            </div>
          </Link>
          <div className="flex flex-row gap-6">
            <p>
              Total Users: <span className="font-bold">{users.length}</span>
            </p>
            <p>
              Shortlisted Users: <span className="font-bold">16</span>
            </p>
          </div>
        </div>
        <div className="mx-40 mt-10 text-2xl">
          <table className="w-full text-center">
            <tr className="bg-light-blue text-text-box">
              <th className="py-4">#</th>
              <th className="w-3/12">Name</th>
              <th>Project Status</th>
              <th>Quiz Results</th>
              <th>Interview Status</th>
              <th className="w-1/12">Shortlisted</th>
            </tr>
            {users.map((user, index) => (
              <tr
                key={index}
                className={
                  index % 2 == 0 ? "bg-light-blue/5" : "bg-light-blue/15"
                }>
                <td className="py-4">{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.projectStatus}</td>
                <td>{user.quizResults}</td>
                <td>{user.interviewStatus}</td>
                <td className="w-1/12">{user.shortlisted}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllUsers;
