import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

const AllUsers = () => {
  const domainName = sessionStorage.getItem("Domain");
  const [users, setUser] = useState("");
  const [domain, setDomain] = useState(domainName);

  // ? Get user data acc to the domain
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}api/admin/profile/listUsers`, {
        headers: {
          Authorization: sessionStorage.getItem("Admin Token"),
        },
      })
      .then((res) => {
        setUser(res.data.userList);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);
  // Export to Excel Handler
  const exportToExcelHandler = () => {
    axios
      .get(`${import.meta.env.VITE_URL}api/admin/project/export-to-excel`, {
        responseType: "blob", // specify response type as blob
        headers: {
          Authorization: sessionStorage.getItem("Admin Token"),
        },
      })
      .then((response) => {
        // Create a blob from the response data
        const blob = new Blob([response.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        // Use FileSaver.js to save the blob as a file
        saveAs(blob, "UserDetailsAndSubmissions.xlsx");
      })
      .catch((error) => {
        console.error("Error exporting to Excel:", error);
      });
  };

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
      <div className="mx-40">
        <Header>
          <h1 className="text-6xl font-bold text-grey">
            {domainName} Candidates
          </h1>
        </Header>
      </div>

      <div className="flex justify-between mx-40">
        <div className="flex items-center gap-5 text-button-text text-2xl">
          {/* searchbar */}
          {/* //? Need to use debouncing here to get in the data from the backend using search */}
          <div className="relative">
            <input
              className={
                "pl-10 pr-3 py-2 text-sm rounded-full border border-grey"
              }
              type="text"
              value={searchValue}
              placeholder="Search by name"
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <span className="material-symbols-rounded icon absolute left-2 top-1/2 transform -translate-y-1/2 text-grey">
              search
            </span>
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
            {project ? (
              <span className="material-symbols-rounded">close</span>
            ) : (
              ""
            )}
            <p>Projects&nbsp;Submitted:&nbsp;</p>
            <span className="font-bold">{domain.projects}</span>
          </button>
          {/* interview filter */}
          <button
            onClick={toggleInterviewed}
            className={`flex items-center px-5 py-1 gap-2 border rounded-full border-grey ${
              interviewed ? "bg-red/30" : ""
            }`}>
            {interviewed ? (
              <span className="material-symbols-rounded">close</span>
            ) : (
              ""
            )}
            <p>Interviewed:&nbsp;</p>
            <span className="font-bold">{domain.interviewed}</span>
          </button>
          {/* shortlist filter */}
          <button
            onClick={toggleShortlist}
            className={`flex items-center px-5 py-1 gap-2 border rounded-full border-grey ${
              shortlist ? "bg-text-green/10" : ""
            }`}>
            {shortlist ? (
              <span className="material-symbols-rounded">close</span>
            ) : (
              ""
            )}
            <p>Shortlisted&nbsp;Users:&nbsp;</p>
            <span className="font-bold">{domain.shortlisted}</span>
          </button>
          <p className="text-grey text-xl">
            Total&nbsp;Users:&nbsp;
            <span className="font-bold">{users.length}</span>
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="mx-40 mt-5 text-2xl mb-20">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-light-blue text-text-box">
              <th className="py-4 px-2">#</th>
              <th className=" text-left w-60">Name</th>
              <th>Year</th>
              {/*//? Data doesnt give in project link*/}
              <th>Project Status</th>
              {/* //? The data doesnt send in quiz results maybe : ) */}
              <th>Quiz Results</th>
              <th>Interview Status</th>
              <th className="w-1/12 pr-4">Shortlisted</th>
            </tr>
          </thead>
          <tbody>
            {!users ? (
              <tr>
                <td> Loading </td>
              </tr>
            ) : (
              users.map((user, index) => {
                return (
                  <tr
                    key={index}
                    className={`text-grey ${
                      index % 2 == 0 ? "bg-[#C4CDFF]" : "bg-white"
                    }`}>
                    <td className="py-4">{index + 1}</td>
                    <td className="text-left">
                      <Link to={`/admin/user/${user._id}`}>{user.name}</Link>
                    </td>
                    <td>{user.year}</td>
                    <td>
                      {user.projectStatus ? "Submitted" : "Not Submitted"}
                    </td>
                    <td>{user.quizTaken ? user.quizTaken : "Not taken"}</td>
                    <td>
                      {user.interviewStatus
                        ? user.interviewStatus
                        : "Not interviewed"}
                    </td>
                    <td>{user.Shortlist ? "Yes" : "No"}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        {/* Export List */}
        <div className="flex mt-10 justify-end">
          <button
            onClick={exportToExcelHandler}
            className="bg-purple text-white p-2 rounded-xl flex items-center gap-2">
            <span className="material-symbols-rounded">system_update_alt</span>
            Export List
          </button>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
