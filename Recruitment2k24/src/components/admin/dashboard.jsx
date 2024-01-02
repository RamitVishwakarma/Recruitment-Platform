import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/header-logo.svg";
import ProjectIcon from "../../assets/project.svg";
import QuizIcon from "../../assets/quiz.svg";
import UserIcon from "../../assets/users.svg";
import CheckBox from "../../assets/shortlist.svg";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="mx-40">
        <div className="flex my-6 justify-between items-center">
          <img src={Logo} alt="Logo" />
          <h1 className="text-6xl font-bold text-grey">Dashboard</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-10 mx-40 mb-16">
        <Link to="/allusers" className="justify-self-end">
          <div className="w-80 h-80 rounded-xl flex flex-col justify-center items-center text-light-blue font-bold hover:border-2 bg-light-blue/15 justify-self-end">
            <img className="w-1/5 mb-6" src={UserIcon} alt="" />
            <h3 className="text-4xl">162</h3>
            <h6 className="text-2xl">Registered Users</h6>
          </div>
        </Link>
        <div className="w-80 h-80 rounded-xl flex flex-col justify-center items-center text-purple font-bold hover:border-2 bg-purple/15">
          <img className="w-1/5 mb-6" src={ProjectIcon} alt="" />
          <h3 className="text-4xl">33</h3>
          <h6 className="text-2xl">Projects Submitted</h6>
        </div>
        <div className="w-80 h-80 rounded-xl flex flex-col justify-center items-center text-lime font-bold hover:border-2 bg-lime/15 justify-self-end">
          <img className="w-1/5 mb-6" src={CheckBox} alt="" />
          <h3 className="text-4xl">16</h3>
          <h6 className="text-2xl">Users Shortlisted</h6>
        </div>
        <div className="w-80 h-80 rounded-xl flex flex-col justify-center items-center text-red font-bold border-4 border-dashed bg-red/15">
          <img className="w-1/5 mb-6" src={QuizIcon} alt="" />
          <h3 className="text-4xl"></h3>
          <h6 className="text-2xl">Create Quiz</h6>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
