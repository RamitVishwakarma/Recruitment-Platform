import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/header-logo.svg"
import back from "../../assets/arrRight.svg"
import close from "../../assets/close.svg"
import search from "../../assets/search.svg"
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const AllUsers = () => {
    const users = [
        {name: 'Lorem Ipsum',year:'1st', project: 'Not Completed', quizResults: '18/20', interviewStatus: 'Scheduled', shortlisted: false },
        {name: 'Lijf Obneg',year:'1st', project: 'Completed', quizResults: '20/20', interviewStatus: 'Cleared', shortlisted: true },
        {name: 'Frgijreg Kwsefjiwj',year:'1st', project: 'Completed', quizResults: '20/20', interviewStatus: 'PR Scheduled', shortlisted: false },
    ];

    const [shortlist, setshortlist] = useState(false);
    const toggleShortlist = () => {
        setshortlist(!shortlist);
    };

    const [interviewed, setinterviewed] = useState(false);
    const toggleInterviewed = () => {
        setinterviewed(!interviewed);
    }

    const [project, setproject] = useState(false);
    const toggleProject = () => {
        setproject(!project);
    }

    return ( 
        <>
        <Navbar/>
        <div className="mx-40">
            <div className="flex my-6 justify-between items-center">
                <img src={Logo} alt="Logo" />
                <h1 className="text-6xl font-bold text-grey">Design Candidates</h1>
            </div>
        </div>

        <div className="flex justify-between mx-40">
            <div className="flex items-center gap-5 text-button-text text-2xl">
                <Link to='/dashboard'>
                    <div className="flex items-center hover:underline">
                        <img className="rotate-180" src={back} alt="" />
                        <div>Dashboard</div>
                    </div>
                </Link>
            {/* searchbar */}
                <div className="relative">
                    <input className="w-1/2 pl-10 pr-3 py-2 text-sm rounded-full border border-grey focus:w-full" type="text" />
                    <img src={search} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-grey" alt="" />
                </div>
            </div>


            {/* filters */}
            <div className="flex flex-row text-base items-center gap-6">

                <button onClick={toggleProject} className={`flex items-center px-5 py-1 gap-2 border-2 rounded-full border-purple text-purple ${project ? 'bg-purple/10' : ''}`}>
                    {project ? <img src={close} alt="" /> : ''}
                    <p>Projects&nbsp;Submitted:&nbsp;</p>
                    <span className="font-bold">38</span>
                </button>

                <button onClick={toggleInterviewed} className={`flex items-center px-5 py-1 gap-2 border-2 rounded-full border-red text-red ${interviewed ? 'bg-red/10' : ''}`}>
                    {interviewed ? <img src={close} alt="" /> : ''}
                    <p>Interviewed:&nbsp;</p>
                    <span className="font-bold">34</span>
                </button>

                <button onClick={toggleShortlist} className={`flex items-center px-5 py-1 gap-2 border-2 rounded-full border-text-green text-text-green ${shortlist ? 'bg-text-green/10' : ''}`}>
                    {shortlist ? <img src={close} alt="" /> : ''}
                    <p>Shortlisted&nbsp;Users:&nbsp;</p>
                    <span className="font-bold">16</span>
                </button>
                <p className="text-grey text-xl">Total Users: <span className="font-bold">{users.length}</span></p>
            </div>
        </div>

        <div className="mx-40 mt-5 text-2xl">
            <table className="w-full text-center">
                <tr className="bg-light-blue text-text-box">
                    <th className="py-4">#</th>
                    <th className="w-3/12 text-left">Name</th>
                    <th>Year</th>
                    <th>Project Status</th>
                    <th>Quiz Results</th>
                    <th>Interview Status</th>
                    <th className="w-1/12">Shortlisted</th>
                </tr>
                {users.map((user, index) => (
                    <tr key={index} className={`text-grey ${(index)%2 == 0 ? "bg-light-blue/5" : "bg-light-blue/15"}`}>
                        <td className="py-4">{index+1}</td>
                        <td className="text-left">{user.name}</td>
                        <td>{user.year}</td>
                        <td>{user.project}</td>
                        <td>{user.quizResults}</td>
                        <td>{user.interviewStatus}</td>
                        <td className="w-1/12">{user.shortlisted ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
            </table>
        </div>
        </>
    );
}

export default AllUsers;