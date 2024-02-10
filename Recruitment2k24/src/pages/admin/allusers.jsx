<<<<<<< HEAD
import Header from "../../components/Header";
import Back from "../../assets/arrRight.svg";
import Close from "../../assets/close.svg?react";
import search from "../../assets/search.svg";
=======
// import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
>>>>>>> b5474ea185adab0d15079e43ea40cbdecb5ffcd8
import { Link } from "react-router-dom";
import { useState } from "react";
import validator from "validator";

const AllUsers = () => {
  const domain = {
    domain: "Machine Learning",
    total: 120,
    projects: 18,
    shortlisted: 10,
    interviewed: 25,
  }
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
    {
      name: "Elakshi Gandhi",
      year: "1st",
      project:
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D",
      quizResults: "17/20",
      interviewStatus: "PR Scheduled",
      shortlisted: false,
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
    {
      name: "Elakshi Gandhi",
      year: "1st",
      project:
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D",
      quizResults: "17/20",
      interviewStatus: "PR Scheduled",
      shortlisted: false,
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
    {
      name: "Elakshi Gandhi",
      year: "1st",
      project:
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D",
      quizResults: "17/20",
      interviewStatus: "PR Scheduled",
      shortlisted: false,
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
    {
      name: "Elakshi Gandhi",
      year: "1st",
      project:
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D",
      quizResults: "17/20",
      interviewStatus: "PR Scheduled",
      shortlisted: false,
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
<<<<<<< HEAD
      <div className="mx-40">
        <Header>
          <h1 className="text-6xl font-bold text-grey">Design Candidates</h1>
        </Header>
=======
      {/* <Navbar /> */}
      <div className="mx-40 flex my-6 justify-between">
        <Link to="/admin/dashboard">
            <div className="flex items-center hover:underline">
              <span className="material-symbols-rounded text-xl">arrow_back_ios</span>
              <p className="text-2xl">Dashboard</p>
            </div>
          </Link>
          <h2 className="text-4xl">{domain.domain} Candidates</h2>
>>>>>>> b5474ea185adab0d15079e43ea40cbdecb5ffcd8
      </div>

      <div className="flex justify-between mx-40">
        <div className="flex items-center gap-5 text-button-text text-2xl">

          {/* searchbar */}
          <div className="relative">
            <input
              className={"pl-10 pr-3 py-2 text-sm rounded-full border border-grey"}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <span className="material-symbols-rounded icon absolute left-2 top-1/2 transform -translate-y-1/2 text-grey">search</span>
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
            {project ? <span className="material-symbols-rounded">close</span> : ""}
            <p>Projects&nbsp;Submitted:&nbsp;</p>
            <span className="font-bold">{domain.projects}</span>
          </button>
          {/* interview filter */}
          <button
            onClick={toggleInterviewed}
            className={`flex items-center px-5 py-1 gap-2 border rounded-full border-grey ${
              interviewed ? "bg-red/30" : ""
            }`}>
            {interviewed ? <span className="material-symbols-rounded">close</span> : ""}
            <p>Interviewed:&nbsp;</p>
            <span className="font-bold">{domain.interviewed}</span>
          </button>
          {/* shortlist filter */}
          <button
            onClick={toggleShortlist}
            className={`flex items-center px-5 py-1 gap-2 border rounded-full border-grey ${
              shortlist ? "bg-text-green/10" : ""
            }`}>
            {shortlist ? <span className="material-symbols-rounded">close</span> : ""}
            <p>Shortlisted&nbsp;Users:&nbsp;</p>
            <span className="font-bold">{domain.shortlisted}</span>
          </button>
          <p className="text-grey text-xl">
            Total&nbsp;Users:&nbsp;
            <span className="font-bold">{domain.total}</span>
          </p>
        </div>
      </div>

      <div className="mx-40 mt-5 text-2xl mb-20">
        <table className="w-full text-center">
          <tr className="bg-light-blue text-text-box">
            <th className="py-4 px-2">#</th>
            <th className=" text-left">Name</th>
            <th className="w-12">Year</th>
            <th>Project Status</th>
            <th>Quiz Results</th>
            <th>Interview Status</th>
            <th className="w-1/12 pr-4">Shortlisted</th>
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
                  <td className="overflow-hidden line-clamp-1 text-ellipsis">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                      href={user.project}>
                      Submitted
                      <span className="ml-2 material-symbols-rounded">
                        open_in_new
                      </span>
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
    </>
  );
};

export default AllUsers;
