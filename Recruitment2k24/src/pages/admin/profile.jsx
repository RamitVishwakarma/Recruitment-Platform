import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Arrow_right from "../../assets/arrRight.svg?react";
import Project from "../../assets/project.svg?react";
import Error from "../../assets/error.svg?react";
import Warning from "../../assets/warning.svg?react";
import Extlink from "../../assets/extlink.svg?react";
import Github from "../../assets/footer-git.svg?react";
import Hackerrank from "../../assets/hackerrank.svg?react";
import Linkedin from "../../assets/footer-li.svg?react";
import Dribbble from "../../assets/dribbble.svg?react";
import Behance from "../../assets/behance.svg?react";
import Customlink from "../../assets/customlink.svg?react";
import { Link } from "react-router-dom";
import { useState } from "react";
import validator from "validator";

const Profile = () => {
  const [users, setUser] = useState({
    name: "Jagdeep Panicker",
    picture: "https://avatar.iran.liara.run/public/92",
    year: "1st",
    contactnumber: "+91 9237554378",
    email: "anujakhila343@gmail.com",
    admNumber: "23AIML069",
    domian: "Machine Learning",
    project: "https://something.com/project/f43uhf38",
    resume:
      "https://cdn.enhancv.com/simple_double_column_resume_template_aecca5d139.png",
    quizResults: "18/20",
    interviewStatus: "Scheduled",
    shortlisted: true,
    links: {
      github: "https://github.com/funinkina",
      hackerrank: "",
      linkedin: "https://linkedin.com",
      dribble: "https://dribble.com",
      behance: "https://behance.com",
      custom: "",
    },
  });

  const toggleShortlisted = () => {
    setUser({
      ...users,
      shortlisted: !users.shortlisted,
    });
  };

  const totalshortlisted = 134;

  return (
    <>
      <div className=" flex flex-col justify-start mb-20">
        <Navbar />
        <div className="mx-40">
          <Header>
            <h1 className="text-6xl font-bold text-grey">User Profile</h1>
          </Header>
        </div>
        {/* navigation bar */}
        <div className="mx-40 flex justify-between text-2xl text-grey">
          <Link to="/admin/users">
            <div className="flex gap-2 items-center hover:border-b">
              <Arrow_right className="rotate-180 w-6" />
              <p>All Users</p>
            </div>
          </Link>
          <p>
            Shortlisted Users:{" "}
            <span className="font-bold">{totalshortlisted}</span>
          </p>
        </div>
        {/* user info */}
        <div className="flex items-center mt-10 justify-between mx-40">
          {/* photo and info */}
          <div className="flex items-center gap-10">
            {/* profile photo */}
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="264"
                height="264"
                viewBox="0 0 264 264"
                fill="none">
                <path
                  d="M123.419 3.05513C128.414 -1.01838 135.586 -1.01838 140.581 3.05513L151.351 11.8383C154.742 14.6019 159.255 15.5641 163.476 14.4231L176.858 10.8069C183.072 9.12759 189.611 12.042 192.516 17.7852L198.839 30.2871C200.808 34.1776 204.524 36.8863 208.831 37.5685L222.583 39.7468C228.919 40.7506 233.689 46.0524 234.018 52.4587L234.741 66.5631C234.964 70.8997 237.249 74.8683 240.888 77.2396L252.654 84.9076C258.011 88.4 260.205 95.1584 257.919 101.132L252.857 114.358C251.308 118.404 251.785 122.946 254.138 126.583L261.822 138.456C265.294 143.822 264.553 150.883 260.041 155.411L250.089 165.401C247.029 168.473 245.619 172.821 246.298 177.104L248.513 191.085C249.513 197.409 245.957 203.573 239.981 205.876L226.933 210.898C222.872 212.462 219.806 215.876 218.689 220.082L215.076 233.681C213.426 239.893 207.647 244.096 201.229 243.752L187.368 243.011C183.005 242.777 178.798 244.656 176.061 248.059L167.32 258.93C163.282 263.952 156.27 265.443 150.537 262.5L138.201 256.168C134.308 254.171 129.692 254.171 125.799 256.168L113.462 262.5C107.73 265.443 100.718 263.952 96.6804 258.93L87.9392 248.059C85.2021 244.656 80.9944 242.777 76.6325 243.011L62.7712 243.752C56.3532 244.096 50.5735 239.893 48.9236 233.681L45.3104 220.082C44.1933 215.876 41.128 212.462 37.067 210.898L24.0192 205.876C18.0418 203.573 14.4861 197.409 15.4878 191.085L17.7019 177.104C18.38 172.821 16.9713 168.473 13.9108 165.401L3.9583 155.411C-0.552776 150.883 -1.29414 143.822 2.17807 138.456L9.86144 126.583C12.2153 122.946 12.6912 118.404 11.1426 114.358L6.08034 101.132C3.79414 95.1584 5.98795 88.4 11.3466 84.9076L23.1126 77.2396C26.7511 74.8683 29.0353 70.8997 29.2578 66.5631L29.9818 52.4587C30.3106 46.0524 35.0797 40.7506 41.4166 39.7468L55.169 37.5685C59.4757 36.8863 63.1925 34.1776 65.1604 30.2871L71.484 17.7852C74.389 12.042 80.9284 9.12758 87.1426 10.8069L100.524 14.4231C104.746 15.5641 109.259 14.6019 112.648 11.8383L123.419 3.05513Z"
                  fill="#6B83FF"
                />
              </svg>
              <img className="absolute w-56" src={users.picture} alt="" />
            </div>
            {/* user details (name and such) */}
            <div className="flex flex-col text-grey text-xl justify-start gap-2 items-start">
              <p className="text-5xl font-bold">{users.name}</p>
              <a href={`mailto:${users.email}`}>{users.email}</a>
              <p className="">{users.contactnumber}</p>
              <p className="">
                {users.year} Year <span> &#8226; </span> {users.admNumber}
              </p>
              <p className="text-xl text-red">{users.domian}</p>
              <button
                onClick={toggleShortlisted}
                className="flex flex-row items-center mt-6 px-4 py-2 gap-4 rounded-lg bg-lime">
                {users.shortlisted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none">
                    <path
                      d="M5.47852 4.21912L8.04518 0.896208C8.22852 0.651763 8.44622 0.472249 8.69831 0.357666C8.95039 0.243083 9.21393 0.185791 9.48893 0.185791C9.76393 0.185791 10.0275 0.243083 10.2796 0.357666C10.5316 0.472249 10.7493 0.651763 10.9327 0.896208L13.4993 4.21912L17.3952 5.52537C17.7924 5.6476 18.1056 5.87294 18.3348 6.20142C18.5639 6.52989 18.6785 6.89274 18.6785 7.28996C18.6785 7.47329 18.6518 7.65662 18.5983 7.83996C18.5448 8.02329 18.457 8.19899 18.3348 8.36704L15.8139 11.942L15.9056 15.7004C15.9209 16.2351 15.7452 16.6858 15.3785 17.0525C15.0118 17.4191 14.5841 17.6025 14.0952 17.6025C14.0646 17.6025 13.8966 17.5795 13.591 17.5337L9.48893 16.3879L5.38685 17.5337C5.31046 17.5643 5.22643 17.5834 5.13477 17.591C5.0431 17.5986 4.95907 17.6025 4.88268 17.6025C4.39379 17.6025 3.96602 17.4191 3.59935 17.0525C3.23268 16.6858 3.05699 16.2351 3.07227 15.7004L3.16393 11.9191L0.666016 8.36704C0.543793 8.19899 0.455946 8.02329 0.402474 7.83996C0.349002 7.65662 0.322266 7.47329 0.322266 7.28996C0.322266 6.90801 0.43303 6.5528 0.654557 6.22433C0.876085 5.89586 1.18546 5.66287 1.58268 5.52537L5.47852 4.21912Z"
                      fill="#353535"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="solid">
                    <path
                      d="M5.27735 4.82508L7.84401 1.50216C8.02735 1.25772 8.24505 1.07821 8.49714 0.963623C8.74922 0.84904 9.01276 0.791748 9.28776 0.791748C9.56276 0.791748 9.8263 0.84904 10.0784 0.963623C10.3305 1.07821 10.5482 1.25772 10.7315 1.50216L13.2982 4.82508L17.194 6.13133C17.5912 6.25355 17.9044 6.4789 18.1336 6.80737C18.3628 7.13585 18.4773 7.49869 18.4773 7.89592C18.4773 8.07925 18.4506 8.26258 18.3971 8.44592C18.3437 8.62925 18.2558 8.80494 18.1336 8.973L15.6128 12.548L15.7044 16.3063C15.7197 16.8411 15.544 17.2918 15.1773 17.6584C14.8107 18.0251 14.3829 18.2084 13.894 18.2084C13.8635 18.2084 13.6954 18.1855 13.3898 18.1397L9.28776 16.9938L5.18568 18.1397C5.10929 18.1702 5.02526 18.1893 4.9336 18.197C4.84193 18.2046 4.7579 18.2084 4.68151 18.2084C4.19262 18.2084 3.76484 18.0251 3.39818 17.6584C3.03151 17.2918 2.85582 16.8411 2.87109 16.3063L2.96276 12.5251L0.464844 8.973C0.342622 8.80494 0.254774 8.62925 0.201302 8.44592C0.14783 8.26258 0.121094 8.07925 0.121094 7.89592C0.121094 7.51397 0.231858 7.15876 0.453386 6.83029C0.674913 6.50182 0.984288 6.26883 1.38151 6.13133L5.27735 4.82508ZM6.40026 6.40633L1.95443 7.873L4.79609 11.9751L4.70443 16.3522L9.28776 15.0918L13.8711 16.3751L13.7794 11.9751L16.6211 7.91883L12.1753 6.40633L9.28776 2.62508L6.40026 6.40633Z"
                      fill="#353535"
                    />
                  </svg>
                )}
                <p className="text-2xl text-grey">
                  {users.shortlisted ? "Shortlisted" : "Shortlist"}
                </p>
              </button>
            </div>
          </div>
          {/* project and resume */}
          <div className="flex items-center gap-10">
            {/* project */}
            <div className="w-72">
              <div className="flex items-center justify-between border-2 border-purple rounded-t-xl py-6 px-4">
                {validator.isURL(users.project) ? (
                  <>
                    <a
                      className="overflow-hidden underline text-grey text-xl line-clamp-1 text-ellipsis"
                      href={users.project}>
                      {users.project}
                    </a>
                    <Extlink className="flex-shrink-0" />
                  </>
                ) : (
                  <>
                    <p className="text-xl text-red">No Project Submitted</p>
                    <Error className="flex-shrink-0" />
                  </>
                )}
              </div>
              <div className="bg-purple rounded-b-xl px-4 py-4 flex items-center justify-between">
                <p className="text-2xl text-white">Submitted Project</p>
                <Project className="project_icon_profile w-7 h-7" />
              </div>
            </div>
            {/* resume */}
            <div className="w-72">
              <div className="">
                {validator.isURL(users.resume) ? (
                  <img
                    className=" border-2 border-light-blue rounded-t-lg h-32 w-72 object-cover"
                    src={users.resume}
                    alt=""
                  />
                ) : (
                  <div className="flex h-30 border-2 border-light-blue rounded-t-xl w-72 justify-center items-center flex-col text-red text-xl py-2">
                    <Warning />
                    No resume uploaded
                  </div>
                )}
              </div>
              <div className="bg-light-blue rounded-b-xl px-4 py-4 flex items-center justify-between">
                <p className="text-xl text-white">Resume</p>
                <Extlink className="project_icon_profile w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
        {/* links section */}
        <div className="flex flex-col mt-16 justify-center mx-96">
          <p className="mx-auto mb-5 font-bold text-3xl text-grey">
            Submitted Links
          </p>
          <div className="grid grid-rows-3 gap-6 grid-cols-2">
            <div
              className={`profile_links flex items-center px-4 py-3 rounded-full justify-between text-2xl text-white ${
                !users.links.github ? "bg-blue/30" : "bg-blue hover:bg-blue/80"
              }`}>
              <Github />
              {users.links.github ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden line-clamp-1 text-ellipsis underline"
                  href={users.links.github}>
                  {users.links.github}
                </a>
              ) : (
                <p className="text-2xl text-grey">Not Submitted</p>
              )}
              <Extlink />
            </div>

            <div
              className={`profile_links flex items-center px-4 py-3 rounded-full justify-between text-2xl text-white ${
                !users.links.linkedin
                  ? "bg-blue/30"
                  : "bg-blue hover:bg-blue/80"
              }`}>
              <Linkedin />
              {users.links.linkedin ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden line-clamp-1 text-ellipsis underline"
                  href={users.links.linkedin}>
                  {users.links.linkedin}
                </a>
              ) : (
                <p className="text-2xl text-grey">Not Submitted</p>
              )}
              <Extlink />
            </div>

            <div
              className={`profile_links flex items-center px-4 py-3 rounded-full justify-between text-2xl text-white ${
                !users.links.hackerrank
                  ? "bg-blue/30"
                  : "bg-blue hover:bg-blue/80"
              }`}>
              <Hackerrank />
              {users.links.hackerrank ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden line-clamp-1 text-ellipsis underline"
                  href={users.links.hackerrank}>
                  {users.links.hackerrank}
                </a>
              ) : (
                <p className="text-2xl text-grey">Not Submitted</p>
              )}
              <Extlink />
            </div>

            <div
              className={`profile_links flex items-center px-4 py-3 rounded-full justify-between text-2xl text-white ${
                !users.links.dribble ? "bg-blue/30" : "bg-blue hover:bg-blue/80"
              }`}>
              <Dribbble />
              {users.links.dribble ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden line-clamp-1 text-ellipsis underline"
                  href={users.links.dribble}>
                  {users.links.dribble}
                </a>
              ) : (
                <p className="text-2xl text-grey">Not Submitted</p>
              )}
              <Extlink />
            </div>

            <div
              className={`profile_links flex items-center px-4 py-3 rounded-full justify-between text-2xl text-white ${
                !users.links.behance ? "bg-blue/30" : "bg-blue hover:bg-blue/80"
              }`}>
              <Behance />
              {users.links.behance ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden line-clamp-1 text-ellipsis underline"
                  href={users.links.behance}>
                  {users.links.behance}
                </a>
              ) : (
                <p className="text-2xl text-grey">Not Submitted</p>
              )}
              <Extlink />
            </div>

            <div
              className={`profile_links flex items-center px-4 py-3 rounded-full justify-between text-2xl text-white ${
                !users.links.custom ? "bg-blue/30" : "bg-blue hover:bg-blue/80"
              }`}>
              <Customlink />
              {users.links.custom ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden line-clamp-1 text-ellipsis underline"
                  href={users.links.custom}>
                  {users.links.custom}
                </a>
              ) : (
                <p className="text-2xl text-grey">Not Submitted</p>
              )}
              <Extlink />
            </div>
          </div>
        </div>

        {/* navigation */}
        <div className="flex mx-auto text-grey mt-20">
          <Link to="next candidate">
            <div className="flex px-4 gap-2 items-center border border-grey rounded-l-full hover:bg-light-blue/30">
              <Arrow_right className="rotate-180 w-4" />
              <p>Prev Candidate</p>
            </div>
          </Link>
          <Link to="prev candidate">
            <div className="flex px-4 gap-2 items-center border border-grey rounded-r-full hover:bg-light-blue/30">
              <p>Next Candidate</p>
              <Arrow_right className="w-4" />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
