import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Logo from "../../assets/header-logo.svg";
import add from "../../assets/add.svg";
import avatar from "../../assets/avatar.svg";
import back from "../../assets/arrRight.svg";
import checked from "../../assets/checked.svg";
import error from "../../assets/error.svg";
import extlink from "../../assets/extlink.svg";
import Github from "../../assets/footer-git.svg";
import hackerrank from "../../assets/hackerrank.svg";
import linkedin from "../../assets/footer-li.svg";
import dribbble from "../../assets/dribbble.svg";
import behance from "../../assets/behance.svg";
import custom from "../../assets/customlink.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Profile = () => {
  var users = {
    name: "Lorem Ipsum",
    year: "1st",
    admNumber: "23AIML069",
    project: "https://github.com/funinkina/manjaro-minimal-bootsplash",
    quizResults: "18/20",
    interviewStatus: "Scheduled",
    shortlisted: false,
    github: "https://something.com",
    hackerrank: "",
    linkedin: "https://linkedin.com",
    dribble: "https://dribble.com",
    behance: "https://behance.com",
    custom: "https://custom.com",
  };

  const toggleShortlisted = () => {
    users[shortlisted] = !users.shortlisted;
  };

  return (
    <>
      <Navbar />

      <div className="mx-40">
        <div className="flex my-6 justify-between items-center">
          <img src={Logo} alt="" />
          <h1 className="text-6xl font-bold text-grey">Design Candidates</h1>
        </div>
      </div>
      <div className="flex justify-between mx-40 text-button-text text-2xl">
        <Link to="/allusers">
          <div className="flex items-center hover:underline">
            <img className="rotate-180" src={back} alt="" />
            <div>All Users</div>
          </div>
        </Link>
        <p>
          Shortlisted Users: <span className="font-bold">16</span>
        </p>
      </div>
      <div className="mx-40 mt-20 mb-32 flex justify-between">
        <div className="flex flex-col gap-10 text-grey">
          <img src={avatar} alt="" className="w-1/3" />
          <div>
            <p className="text-xl">Name</p>
            <p className="text-5xl font-bold">{users.name}</p>
          </div>
          <div>
            <p className="text-xl">Year</p>
            <p className="text-5xl font-bold">{users.year}</p>
          </div>
          <div>
            <p className="text-xl">Admission Number</p>
            <p className="text-5xl font-bold">{users.admNumber}</p>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-between items-end">
          <button
            onClick={toggleShortlisted}
            className={`flex py-2 px-6 rounded-lg ${
              users.shortlisted ? "bg-light-blue/20" : "bg-lime"
            } `}>
            <img src={users.shortlisted ? checked : add} />
            <div className="p-2 text-4xl text-grey">
              {users.shortlisted ? "Shortlisted" : "Shortlist"}
            </div>
          </button>

          <div className="flex flex-col items-end gap-10">
            <div className="text-grey">
              <p className="text-xl text-right">Quiz Result</p>
              <p className="text-5xl font-bold">{users.quizResults}</p>
            </div>

            <div>
              <p className="text-xl text-right">Project Status</p>
              {users.project ? (
                <div className="flex">
                  <a
                    className="text-light-blue text-right overflow-hidden line-clamp-1 text-ellipsis text-4xl w-[30vw] hover:underline"
                    target="_blank"
                    href={users.project}>
                    {users.project}
                  </a>
                  <img src={extlink} alt="" />
                </div>
              ) : (
                <p className="text-4xl flex text-red">
                  <img className="pr-4" src={error} alt="" />
                  Not Submitted
                </p>
              )}
            </div>
            <div className="text-grey flex flex-col items-end">
              <p className="text-xl">Submitted Links</p>
              <div className="flex gap-6 items-center">
                {users.github ? (
                  <a target="_blank" href={users.github}>
                    <img src={Github} alt="" />
                  </a>
                ) : null}
                {users.hackerrank ? (
                  <a target="_blank" href={users.hackerrank}>
                    <img src={hackerrank} alt="" />
                  </a>
                ) : null}
                {users.linkedin ? (
                  <a target="_blank" href={users.linkedin}>
                    <img src={linkedin} alt="" />
                  </a>
                ) : null}
                {users.dribble ? (
                  <a target="_blank" href={users.dribble}>
                    <img src={dribbble} alt="" />
                  </a>
                ) : null}
                {users.behance ? (
                  <a target="_blank" href={users.behance}>
                    <img src={behance} alt="" />
                  </a>
                ) : null}
                {users.custom ? (
                  <a target="_blank" href={users.custom}>
                    <img src={custom} alt="" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
