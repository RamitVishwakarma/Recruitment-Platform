import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import useDebounce from "../../hooks/useDebouce";
import { set } from "zod";

const AllUsers = () => {
  const domainName = sessionStorage.getItem("Domain");
  const [users, setUser] = useState("");
  //Getting user data using search
  const [searchUser, setSearchUser] = useState("");
  const debouncedSearchUser = useDebounce(searchUser, 50);
  // adding a refresh mech to refresh when the search user is empty
  const [refresh, setRefresh] = useState(false);
  const [project, setProject] = useState(false);

  // * Getting user data acc to the domain
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}api/admin/profile/listUsers`, {
        headers: {
          Authorization: sessionStorage.getItem("Admin Token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data.userList);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, [refresh]);

  // Project Submitted Users

  const showUserByProject = () => {
    setProject(!project);
    if (!project) {
      axios
        .get(
          `${import.meta.env.VITE_URL}api/admin/project/SubmittedprojectsList`,
          {
            headers: {
              Authorization: sessionStorage.getItem("Admin Token"),
            },
          }
        )
        .then((res) => {
          // ? This needs to send all the users in like an object with only the users
          // console.log(res.data);
          setUser(res.data.userDetailsWithSubmissions);
        })
        .catch((e) => {
          console.log("error", e);
        });
    } else {
      setRefresh(!refresh);
    }
  };

  // * Getting user on search
  const searchHandler = (e) => {
    setSearchUser(e.target.value);
  };
  useEffect(() => {
    if (debouncedSearchUser) {
      axios
        .get(
          `${
            import.meta.env.VITE_URL
          }api/admin/profile/search?name=${debouncedSearchUser}`,
          {
            headers: {
              Authorization: sessionStorage.getItem("Admin Token"),
            },
          }
        )
        .then((res) => {
          // ? Need to add what happens when no user is found with the name
          setUser(res.data);
        })
        .catch((e) => {
          console.log("error", e);
        });
    } else {
      setRefresh(!refresh);
    }
  }, [debouncedSearchUser]);

  // * Export to Excel Handler
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
  // *Shortlisted Users
  const [shortlist, setshortlist] = useState(false);
  const showShortlistedUsers = () => {
    setshortlist(!shortlist);
    if (!shortlist) {
      axios
        .get(`${import.meta.env.VITE_URL}api/admin/profile/shortlistedUsers`, {
          headers: {
            Authorization: sessionStorage.getItem("Admin Token"),
          },
        })
        .then((res) => {
          setUser(res.data.shortlistedUsers);
        })
        .catch((e) => {
          console.log("error", e);
        });
    } else {
      setRefresh(!refresh);
    }
  };
  // *Year Filter
  const [yearFilter, setFilter] = useState("");
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
    if (event.target.value) {
      console.log(event.target.value);
      axios
        .get(
          `${import.meta.env.VITE_URL}api/admin/profile/listUsersByYear?year=${
            event.target.value
          }`,
          {
            headers: {
              Authorization: sessionStorage.getItem("Admin Token"),
            },
          }
        )
        .then((res) => {
          setUser(res.data.userList);
        })
        .catch((e) => {
          console.log("error", e);
        });
    } else {
      setRefresh(!refresh);
    }
  };

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
        {/* SearchBar */}
        <div className="flex items-center gap-5 text-button-text text-2xl">
          <div className="relative">
            <input
              className={
                "pl-10 pr-3 py-2 text-sm rounded-full border border-grey"
              }
              type="text"
              value={searchUser}
              placeholder="Search by name"
              onChange={searchHandler}
            />
            <span className="material-symbols-rounded icon absolute left-2 top-1/2 transform -translate-y-1/2 text-grey">
              search
            </span>
          </div>
        </div>
        {/* Filters */}
        <div className="flex flex-row text-base text-grey items-center gap-6">
          {/*  Year filter */}
          <div>
            <select
              className={`border rounded-full border-grey py-1 px-5 ${
                yearFilter ? "bg-light-blue/30" : "bg-white"
              }`}
              name="yearFilter"
              value={yearFilter}
              onChange={handleChangeFilter}>
              <option value="">Year</option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
            </select>
          </div>
          {/* Projects filter */}
          <button
            onClick={showUserByProject}
            className={`flex items-center px-5 py-1 gap-2 border rounded-full border-grey ${
              project ? "bg-purple/30" : ""
            }`}>
            {project ? (
              <span className="material-symbols-rounded">close</span>
            ) : (
              ""
            )}
            <p>Projects&nbsp;Submitted:&nbsp;</p>
            <span className="font-bold"></span>
          </button>
          {/* shortlist filter */}
          <button
            onClick={showShortlistedUsers}
            className={`flex items-center px-5 py-1 gap-2 border rounded-full border-grey ${
              shortlist ? "bg-text-green/10" : ""
            }`}>
            {shortlist ? (
              <span className="material-symbols-rounded">close</span>
            ) : (
              ""
            )}
            <p>Shortlisted&nbsp;Users:&nbsp;</p>
          </button>
          {/* Total users */}
          <p className="text-grey text-xl">
            Total&nbsp;Users:&nbsp;
            <span className="font-bold">{users.length}</span>
          </p>
        </div>
      </div>

      {/* Users List */}
      <div className="mx-40 mt-5 text-2xl mb-20">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-light-blue text-text-box">
              <th className="py-4 px-2">#</th>
              <th className=" text-left w-60">Name</th>
              <th>Year</th>
              <th>Project Status</th>
              {/* //? The data doesnt send in quiz results maybe */}
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
                // ?Prev users and next user wont work until the ids are sent from backend as it wil send static user ids and those wont change until backend is hit
                // console.log(user);
                // console.log(users[index]);
                // let prevUsers = users.slice(0, index);
                // let nextUsers = users.slice(index, users.length - 1);
                // console.log("prev", prevUsers);
                // console.log("next", nextUsers);
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
                    <td>{user.ShortList ? "Yes" : "No"}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        {/* Export List to Excel*/}
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
