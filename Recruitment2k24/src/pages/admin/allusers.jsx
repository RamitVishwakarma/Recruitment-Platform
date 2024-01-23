import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Back from "../../assets/arrRight.svg";
import Close from "../../assets/close.svg?react";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import validator from "validator";

const AllUsers = () => {
  const users = [
    {
      name: "Bodhan Kapoor",
      year: "1st",
      project:
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D",
      quizResults: "19/20",
      interviewStatus: "Scheduled",
      shortlisted: false,
    },
    {
      name: "Nimit Mukhopadhyay",
      year: "2nd",
      project:
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D",
      quizResults: "20/20",
      interviewStatus: "Cleared",
      shortlisted: true,
    },
    {
      name: "Umang Jha",
      year: "1st",
      project: "",
      quizResults: "19/20",
      interviewStatus: "PR Scheduled",
      shortlisted: false,
    },
    {
      name: "Balachandra Singh",
      year: "1st",
      project:
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D",
      quizResults: "20/20",
      interviewStatus: "Cleared",
      shortlisted: false,
    },
    {
      name: "Jagdeep Panicker",
      year: "1st",
      project: "",
      quizResults: "14/20",
      interviewStatus: "Cleared",
      shortlisted: true,
    },
    {
      name: "Elakshi Gandhi",
      year: "1st",
      project:
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D",
      quizResults: "17/20",
      interviewStatus: "PR Scheduled",
      shortlisted: false,
    },
  ];

  const [shortlist, setshortlist] = useState(false);
  const toggleShortlist = () => {
    setshortlist(!shortlist);
  };

  const [interviewed, setinterviewed] = useState(false);
  const toggleInterviewed = () => {
    setinterviewed(!interviewed);
  };

  const [project, setproject] = useState(false);
  const toggleProject = () => {
    setproject(!project);
  };

  const [year_filter, setFilter] = useState("");
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Navbar />
      <div className="mx-40">
        <Header>
          <h1 className="text-6xl font-bold text-grey">Design Candidates</h1>
        </Header>
      </div>

      <div className="flex justify-between mx-40">
        <div className="flex items-center gap-5 text-button-text text-2xl">
          <Link to="/admin/dashboard">
            <div className="flex items-center hover:underline">
              <img className="rotate-180 w-6" src={Back} alt="" />
              <div>Dashboard</div>
            </div>
          </Link>
          {/* searchbar */}
          <div className="relative">
            <input
              className={`pl-10 pr-3 py-2 text-sm rounded-full border border-grey ${
                searchValue ? "w-full" : "w-1/2"
              }`}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <img
              src={search}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-grey"
              alt=""
            />
          </div>
        </div>

        {/* filters */}
        <div className="flex flex-row text-base text-grey items-center gap-6">
          {/* year filter */}
          <div>
            <select
              className={`border rounded-full border-grey py-1 px-5 ${
                year_filter ? "bg-light-blue/30" : "bg-white"
              }`}
              name="year-filter"
              value={year_filter}
              onChange={handleChangeFilter}>
              <option value="">Year</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
            </select>
          </div>
          {/* projects filter */}
          <button
            onClick={toggleProject}
            className={`flex items-center px-5 py-1 gap-2 border rounded-full border-grey ${
              project ? "bg-purple/30" : ""
            }`}>
            {project ? <Close id="project-filter-close" /> : ""}
            <p>Projects&nbsp;Submitted:&nbsp;</p>
            <span className="font-bold">38</span>
          </button>
          {/* interview filter */}
          <button
            onClick={toggleInterviewed}
            className={`flex items-center px-5 py-1 gap-2 border rounded-full border-grey ${
              interviewed ? "bg-red/30" : ""
            }`}>
            {interviewed ? <Close id="interview-filter-close" /> : ""}
            <p>Interviewed:&nbsp;</p>
            <span className="font-bold">34</span>
          </button>
          {/* shortlist filter */}
          <button
            onClick={toggleShortlist}
            className={`flex items-center px-5 py-1 gap-2 border rounded-full border-grey ${
              shortlist ? "bg-text-green/10" : ""
            }`}>
            {shortlist ? <Close id="shortlist-filter-close" /> : ""}
            <p>Shortlisted&nbsp;Users:&nbsp;</p>
            <span className="font-bold">16</span>
          </button>
          <p className="text-grey text-xl">
            Total Users: <span className="font-bold">{users.length}</span>
          </p>
        </div>
      </div>

      <div className="mx-40 mt-5 text-2xl mb-20">
        <table className="w-full text-center">
          <tr className="bg-light-blue text-text-box">
            <th className="py-4 px-2">#</th>
            <th className=" text-left">Name</th>
            <th className="w-12">Year</th>
            <th className="w-96">Project Status</th>
            <th>Quiz Results</th>
            <th>Interview Status</th>
            <th className="w-1/12">Shortlisted</th>
          </tr>
          {users.map((user, index) => (
            <tr
              key={index}
              className={`text-grey ${
                index % 2 == 0 ? "bg-light-blue/5" : "bg-light-blue/15"
              }`}>
              <td className="py-4">{index + 1}</td>
              <td className="text-left">{user.name}</td>
              <td>{user.year}</td>
              {/* <td className="overflow-hidden line-clamp-1 text-ellipsis w-[15vw]">{user.project}</td> */}
              <td>
                {validator.isURL(user.project) ? (
                  <td className="overflow-hidden line-clamp-1 text-ellipsis w-96">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                      href={user.project}>
                      {user.project}
                    </a>
                  </td>
                ) : (
                  <p className="text-grey/60">Not Submitted</p>
                )}
              </td>
              <td>{user.quizResults}</td>
              <td>{user.interviewStatus}</td>
              <td className="w-1/12">{user.shortlisted ? "Yes" : "No"}</td>
            </tr>
          ))}
        </table>
      </div>
      <Footer />
    </>
  );
};

export default AllUsers;
