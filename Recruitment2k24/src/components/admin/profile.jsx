import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/header-logo.svg"
import back from "../../assets/arrRight.svg"
import checked from "../../assets/checked.svg"
import error from "../../assets/error.svg"
import extlink from "../../assets/extlink.svg"
import { Link } from "react-router-dom";

const Profile = () => {
    const users = {
        name: 'Lorem Ipsum',
        year:'1st',
        admNumber:'23AIML069', 
        project: 'https://github.com/funinkina/manjaro-minimal-bootsplash', 
        quizResults: '18/20', 
        interviewStatus: 'Scheduled', 
        shortlisted: true,
        github: 'https://something.com'
    };

    return ( 
        <>
        <Navbar/>

        <div className="mx-40">
            <div className="flex my-6 justify-between items-center">
                <img src={Logo} alt="Logo" />
                <h1 className="text-6xl font-bold text-grey">Design Candidates</h1>
            </div>
        </div>
        <div className="flex justify-between mx-40 text-button-text text-2xl">
            <Link to='/allusers'>
                <div className="flex items-center hover:underline">
                    <img className="rotate-180" src={back} alt="" />
                    <div>All Users</div>
                </div>
            </Link>
            <div className="flex flex-row gap-6">
                <p>Total Users: <span className="font-bold">{users.length}</span></p>
                <p>Shortlisted Users: <span className="font-bold">16</span></p>
            </div>
        </div>
        <div className="mx-40 mt-20 flex justify-between">
            <div className="flex flex-col gap-10 text-grey">
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
                <div>
                    <p className="text-xl">Quiz Result</p>
                    <p className="text-5xl font-bold">{users.quizResults}</p>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end">
                <button className= {`flex py-2 px-6 rounded-lg ${users.shortlisted ? 'bg-light-blue/40' : 'bg-lime'} `}>
                    <img src={checked} />
                    <div className="p-2 text-4xl text-grey">{users.shortlisted?"Shortlisted":"Shortlist"}</div>
                </button>
                <div className="flex flex-col items-end gap-10">

                    <div>
                        <p className="text-xl text-right">Project Status</p>
                        {
                            users.project?
                            <div className="flex">
                                <a className="text-light-blue text-right overflow-hidden line-clamp-1 text-ellipsis text-4xl w-[30vw] hover:underline" target="_blank" href={users.project}>{users.project}</a>
                                <img src={extlink} alt="" />
                            </div>
                            :
                            <p className="text-5xl flex text-red"><img className="pr-4" src={error} alt="" />Not Submitted</p>
                        }
                    </div>

                    <div className="text-grey">
                        <p className="text-xl text-right">Interview Status</p>
                        <p className="text-5xl font-bold">{users.interviewStatus}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Profile;