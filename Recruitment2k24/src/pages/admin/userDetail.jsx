import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Svgs
import LinkIco from "../../assets/link.svg";
import LinkedIN from "../../assets/footer-li.svg";
import Behance from "../../assets/behance.svg";
import Hackerrank from "../../assets/hackerrank.svg";
import Github from "../../assets/footer-git.svg";
import Dribble from "../../assets/dribble.svg";

export default function userDetail() {
  // call in user details from backend
  // get id from params
  const params = useParams();

  const [user, setUser] = useState("");
  // populate user details
  useEffect(() => {
    // fetch user details
    axios
      .get(
        `${import.meta.env.VITE_URL}api/admin/profile/findUser/${params.id}`,
        {
          headers: {
            Authorization: sessionStorage.getItem("Admin Token"),
          },
        }
      )
      .then((res) => {
        setUser(res.data.userProfileDetails);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  console.log(user);
  return (
    <div>
      <div className="mx-5 md:mx-20 xl:mx-40">
        {/* Header */}
        <div className="flex items-center justify-between py-5">
          <Link to="/admin/users" className="flex items-center">
            <button className="ctaback flex gap-2 items-center text-grey text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="16"
                viewBox="0 0 9 16"
                fill="none">
                <path
                  d="M8 1C5.44171 2.85861 3.15026 5.03738 1.18514 7.47872C0.938285 7.7854 0.938285 8.2146 1.18514 8.52128C3.15026 10.9626 5.44171 13.1414 8 15"
                  stroke="#353535"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All Users
            </button>
          </Link>
          <div className="text-3xl">
            Shorlisted Users:&nbsp;<b>23</b>
          </div>
        </div>
        {/* User details */}
        {!user ? (
          <h1>Loading...</h1>
        ) : (
          // used 83vh to keep footer outside screen
          <div className="h-[83vh]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-16">
                {/* Image section */}
                <div className="relative flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="264"
                    height="264"
                    viewBox="0 0 264 264"
                    fill="none">
                    <path
                      d="M123.419 3.05513C128.414 -1.01838 135.586 -1.01838 140.581 3.05513L151.351 11.8383C154.742 14.6019 159.255 15.5641 163.476 14.4231L176.858 10.8069C183.072 9.12759 189.611 12.042 192.516 17.7852L198.839 30.2871C200.808 34.1776 204.524 36.8863 208.831 37.5685L222.583 39.7468C228.919 40.7506 233.689 46.0524 234.018 52.4587L234.741 66.5631C234.964 70.8997 237.249 74.8683 240.888 77.2396L252.654 84.9076C258.011 88.4 260.205 95.1584 257.919 101.132L252.857 114.358C251.308 118.404 251.785 122.946 254.138 126.583L261.822 138.456C265.294 143.822 264.553 150.883 260.041 155.411L250.089 165.401C247.029 168.473 245.619 172.821 246.298 177.104L248.513 191.085C249.513 197.409 245.957 203.573 239.981 205.876L226.933 210.898C222.872 212.462 219.806 215.876 218.689 220.082L215.076 233.681C213.426 239.893 207.647 244.096 201.229 243.752L187.368 243.011C183.005 242.777 178.798 244.656 176.061 248.059L167.32 258.93C163.282 263.952 156.27 265.443 150.537 262.5L138.201 256.168C134.308 254.171 129.692 254.171 125.799 256.168L113.462 262.5C107.73 265.443 100.718 263.952 96.6804 258.93L87.9392 248.059C85.2021 244.656 80.9944 242.777 76.6325 243.011L62.7712 243.752C56.3532 244.096 50.5735 239.893 48.9236 233.681L45.3104 220.082C44.1933 215.876 41.128 212.462 37.067 210.898L24.0192 205.876C18.0418 203.573 14.4861 197.409 15.4878 191.085L17.7019 177.104C18.38 172.821 16.9713 168.473 13.9108 165.401L3.9583 155.411C-0.552776 150.883 -1.29414 143.822 2.17807 138.456L9.86144 126.583C12.2153 122.946 12.6912 118.404 11.1426 114.358L6.08034 101.132C3.79414 95.1584 5.98795 88.4 11.3466 84.9076L23.1127 77.2396C26.7511 74.8683 29.0353 70.8997 29.2578 66.5631L29.9818 52.4587C30.3106 46.0524 35.0797 40.7506 41.4166 39.7468L55.169 37.5685C59.4756 36.8863 63.1925 34.1776 65.1604 30.2871L71.484 17.7852C74.389 12.042 80.9284 9.12758 87.1426 10.8069L100.524 14.4231C104.746 15.5641 109.259 14.6019 112.648 11.8383L123.419 3.05513Z"
                      fill="#6B83FF"
                    />
                  </svg>
                  <img
                    className="absolute w-[223px] h-[223px] object-cover z-10 rounded-full"
                    src={user.user.photo}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  {/* Name */}
                  <div className="text-grey text-3xl font-bold">
                    {user.user.name.toUpperCase()}
                  </div>
                  {/* Email */}
                  <div className="text-grey">{user.user.email}</div>
                  {/* Phone */}
                  <div className="text-grey">
                    {`${
                      user.user.phoneNumber
                        ? `+91${user.user.phoneNumber}`
                        : "Number not submitted"
                    }`}
                  </div>
                  {/* Year & admission no. */}
                  <div className="flex gap-2  text-grey">
                    <div>year:&nbsp;{user.user.year}</div>
                    <div>{user.user.admissionNumber}</div>
                  </div>
                  {/* Domain */}
                  <div className="text-purple font-bold">
                    {user.user.Domain}
                  </div>
                  {/* Shortlist btn */}
                  {/* Shortlist button not working */}
                  <button className="px-6 py-2 bg-lime text-button-text flex items-center gap-4 rounded-lg">
                    <span class="material-symbols-rounded text-grey">
                      kid_star
                    </span>
                    Shortlist
                  </button>
                </div>
              </div>
              {/* Resume */}
              <div>
                <div className="flex flex-col justify-between items-center w-60 h-52 outline outline-2 outline-light-blue rounded-xl ">
                  <div className="flex items-center justify-center">
                    <img
                      src={user.user.resume}
                      className="w-60 h-52 rounded-xl object-cover object-top"
                    />
                  </div>
                </div>
                <a
                  href={user.user.resume}
                  target="_blank"
                  className="relative bottom-12 flex justify-between items-center bg-light-blue w-full rounded-b-xl text-center text-white p-3">
                  {user.user.name}'s Resume
                  <span className="material-symbols-rounded">open_in_new</span>
                </a>
              </div>
            </div>
            {/* Submission Section */}
            <h1 className="text-light-red font-bold text-6xl mt-12">
              Submissions
            </h1>
            <div className="flex justify-between">
              <div className="flex bg-[#fff] mt-4 w-[65%] p-6 rounded-xl">
                {/* Social Links */}
                <div className="flex w-full flex-wrap rounded-xl ">
                  {/* Portfolio */}
                  <div className="flex p-2 gap-2  w-[50%] items-center text-xl">
                    <img className="w-6 h-6" src={LinkIco} />
                    <a href={user.user.socialLinks.portfolio} target="_blank">
                      {`${
                        user.user.socialLinks.portfolio
                          ? user.user.socialLinks.portfolio
                              .slice(0, 30)
                              .concat("...")
                          : "Not Submitted"
                      }`}
                    </a>
                  </div>
                  {/* LinkedIN */}
                  <div className="flex p-2 gap-2  w-[50%] items-center text-xl">
                    <img className="w-6 h-6" src={LinkedIN} />
                    <a href={user.user.socialLinks.linkedin} target="_blank">
                      {`${
                        user.user.socialLinks.linkedin
                          ? user.user.socialLinks.linkedin
                              .slice(0, 30)
                              .concat("...")
                          : "Not Submitted"
                      }`}
                    </a>
                  </div>
                  {/* Behance */}
                  <div className="flex p-2 gap-2  w-[50%] items-center text-xl">
                    <img className="w-6 h-6" src={Behance} />
                    <a href={user.user.socialLinks.behance} target="_blank">
                      {`${
                        user.user.socialLinks.behance
                          ? user.user.socialLinks.behance
                              .slice(0, 30)
                              .concat("...")
                          : "Not Submitted"
                      }`}
                    </a>
                  </div>
                  {/* HackerRank */}
                  <div className="flex p-2 gap-2  w-[50%] items-center text-xl">
                    <img className="w-6 h-6" src={Hackerrank} />
                    <a href={user.user.socialLinks.hackerrank} target="_blank">
                      {`${
                        user.user.socialLinks.hackerrank
                          ? user.user.socialLinks.hackerrank
                              .slice(0, 30)
                              .concat("...")
                          : "Not Submitted"
                      }`}
                    </a>
                  </div>
                  {/* Github */}
                  <div className="flex p-2 gap-2  w-[50%] items-center text-xl">
                    <img className="w-6 h-6" src={Github} />
                    <a href={user.user.socialLinks.github} target="_blank">{`${
                      user.user.socialLinks.github
                        ? user.user.socialLinks.github
                            .slice(0, 30)
                            .concat("...")
                        : "Not Submitted"
                    }`}</a>
                  </div>
                  {/* Dribble */}
                  <div className="flex p-2 gap-2  w-[50%] items-center text-xl">
                    <img className="w-6 h-6" src={Dribble} />
                    <a href={user.user.socialLinks.dribble} target="_blank">{`${
                      user.user.socialLinks.dribble
                        ? user.user.socialLinks.dribble
                            .slice(0, 30)
                            .concat("...")
                        : "Not Submitted"
                    }`}</a>
                  </div>
                </div>
              </div>
              {/* Project Link */}
              {user.ProjectSubmission.length > 0 ? (
                <div className="w-60 h-24 outline outline-2 outline-purple flex flex-col rounded-xl">
                  <div className="flex items-center justify-between rounded-t-xl h-1/2 px-3">
                    <a
                      href={
                        user.ProjectSubmission[0].submissionLink
                          ? user.ProjectSubmission[0].submissionLink
                          : ""
                      }
                      target="_blank">
                      {user.ProjectSubmission[0].submissionLink
                        ? user.ProjectSubmission[0].submissionLink
                            .slice(0, 30)
                            .concat("...")
                        : "Not Submitted"}
                    </a>
                    <span class="material-symbols-rounded">open_in_new</span>
                  </div>
                  <div className="h-1/2 bg-purple flex items-center justify-between px-3">
                    <div className="text-white text-xl rounded-b-xl">
                      Submitted Project
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.8947 0L21.7895 5.75V12.604H19.3684V8.17777L12.1052 12.0111V22.3611L10.8947 23L0 17.25V5.75L10.8947 0ZM19.3684 13.7106L19.3684 17.0304H23V19.2436L19.3684 19.2435L19.3684 22.5633H16.9474L16.9473 19.2435L13.3158 19.2436V17.0304H16.9473L16.9474 13.7106H19.3684ZM2.42101 8.17772L2.42105 15.9722L9.68417 19.8055V12.0111L2.42101 8.17772ZM10.8947 2.55556L3.75263 6.325L10.8947 10.0944L18.0368 6.325L10.8947 2.55556Z"
                        fill="#F5F5F5"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                // ? When No project link is submitted
                <div className="w-60 h-24 outline outline-2 outline-purple flex flex-col rounded-xl">
                  <div className="flex items-center gap-3 rounded-t-xl h-1/2 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none">
                      <path
                        d="M11 16.5C11.3117 16.5 11.5729 16.3946 11.7838 16.1838C11.9946 15.9729 12.1 15.7117 12.1 15.4C12.1 15.0883 11.9946 14.8271 11.7838 14.6163C11.5729 14.4054 11.3117 14.3 11 14.3C10.6883 14.3 10.4271 14.4054 10.2163 14.6163C10.0054 14.8271 9.9 15.0883 9.9 15.4C9.9 15.7117 10.0054 15.9729 10.2163 16.1838C10.4271 16.3946 10.6883 16.5 11 16.5ZM9.9 12.1H12.1V5.5H9.9V12.1ZM11 22C9.47833 22 8.04833 21.7113 6.71 21.1338C5.37167 20.5562 4.2075 19.7725 3.2175 18.7825C2.2275 17.7925 1.44375 16.6283 0.86625 15.29C0.28875 13.9517 0 12.5217 0 11C0 9.47833 0.28875 8.04833 0.86625 6.71C1.44375 5.37167 2.2275 4.2075 3.2175 3.2175C4.2075 2.2275 5.37167 1.44375 6.71 0.86625C8.04833 0.28875 9.47833 0 11 0C12.5217 0 13.9517 0.28875 15.29 0.86625C16.6283 1.44375 17.7925 2.2275 18.7825 3.2175C19.7725 4.2075 20.5562 5.37167 21.1338 6.71C21.7113 8.04833 22 9.47833 22 11C22 12.5217 21.7113 13.9517 21.1338 15.29C20.5562 16.6283 19.7725 17.7925 18.7825 18.7825C17.7925 19.7725 16.6283 20.5562 15.29 21.1338C13.9517 21.7113 12.5217 22 11 22ZM11 19.8C13.4567 19.8 15.5375 18.9475 17.2425 17.2425C18.9475 15.5375 19.8 13.4567 19.8 11C19.8 8.54333 18.9475 6.4625 17.2425 4.7575C15.5375 3.0525 13.4567 2.2 11 2.2C8.54333 2.2 6.4625 3.0525 4.7575 4.7575C3.0525 6.4625 2.2 8.54333 2.2 11C2.2 13.4567 3.0525 15.5375 4.7575 17.2425C6.4625 18.9475 8.54333 19.8 11 19.8Z"
                        fill="#EB6B6B"
                      />
                    </svg>
                    <div className="text-red">No Project Submitted</div>
                  </div>
                  <div className="h-1/2 bg-purple flex items-center justify-between px-3">
                    <div className="text-white text-xl rounded-b-xl">
                      Submitted Project
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.8947 0L21.7895 5.75V12.604H19.3684V8.17777L12.1052 12.0111V22.3611L10.8947 23L0 17.25V5.75L10.8947 0ZM19.3684 13.7106L19.3684 17.0304H23V19.2436L19.3684 19.2435L19.3684 22.5633H16.9474L16.9473 19.2435L13.3158 19.2436V17.0304H16.9473L16.9474 13.7106H19.3684ZM2.42101 8.17772L2.42105 15.9722L9.68417 19.8055V12.0111L2.42101 8.17772ZM10.8947 2.55556L3.75263 6.325L10.8947 10.0944L18.0368 6.325L10.8947 2.55556Z"
                        fill="#F5F5F5"
                      />
                    </svg>
                  </div>
                </div>
              )}
              {/* Project link end */}
            </div>
            {/* Prev and next Candidate Not working right now */}
            <div className="flex justify-center mt-20">
              <button className=" flex items-center rounded-l-xl p-1 px-3 outline-2 outline outline-grey">
                <span class="material-symbols-rounded">chevron_left</span>
                Prev Candidate
              </button>
              <button className=" flex items-center rounded-r-xl p-1 px-3 outline-2 outline outline-grey">
                Next Candidate
                <span class="material-symbols-rounded">chevron_right</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
