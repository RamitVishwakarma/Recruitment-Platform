import EditProfile from "./EditProfile";
import UpdateLinks from "./UpdateLinks";
import UpdatePassword from "./UpdatePassword";
import Links from "./SocialLinks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// svgs
import Popup from "../../../components/Popup";
import Close from "../../../assets/close.svg";
import LinkIco from "../../../assets/link.svg";
import LinkedIN from "../../../assets/footer-li.svg";
import Behance from "../../../assets/behance.svg";
import Hackerrank from "../../../assets/hackerrank.svg";
import Github from "../../../assets/footer-git.svg";
import Dribble from "../../../assets/dribble.svg";
import ResumeOverlay from "../../../assets/resumeOverlay.svg";

export default function Profile() {
  const [user, setUser] = useState("");
  const [file, setFile] = useState("");

  const [hoverImage, setHoverImage] = useState(false);

  // changing data if the user updates the profile
  const [updateData, setUpdateData] = useState(false);
  // update data if any data changes from the update profile
  const updateDataFunc = () => {
    setUpdateData(!updateData);
  };

  // Getting user profile
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}api/user/profile/myProfile`, {
        headers: {
          Authorization: sessionStorage.getItem("Authorization"),
        },
      })
      .then((res) => {
        setUser(res.data.user);
        setFile(res.data.user.resume);
      })
      .catch((e) => {
        console.log(e);
        alert("Some error occured, please try again later");
      });
  }, [updateData]);

  // Updating user prof
  const [popup, setPopup] = useState(false);
  const [activeBtn, setactiveBtn] = useState("profile");

  // active button changing
  const changeActiveButtonToPassword = () => {
    setactiveBtn("password");
  };
  const changeActiveButtonToProfile = () => {
    setactiveBtn("profile");
  };

  // resume upload
  const handleFileUploadButton = () => {
    document.querySelector(".imgfile").click();
  };
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      if (e.target.files[0].size > 2000000) {
        alert("File should be below 2MB im size");
      } else {
        const formData = {
          resume: e.target.files[0],
        };
        axios
          .put(
            `${import.meta.env.VITE_URL}api/user/profile/Updateresume`,
            formData,
            {
              headers: {
                Authorization: sessionStorage.getItem("Authorization"),
                "content-type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            setUser(res.data.user);
            setFile(res.data.user.resume);
            // ? Add toast in here
            alert("Resume Uploaded Successfully");
          })
          .catch((e) => {
            console.log(e);
            // ? Add toast in here
            alert("Some error occured, please try again later");
          });
      }
    } else {
      alert("Please select a file");
    }
  };

  return (
    <>
      {!user ? (
        <div>Loading...</div>
      ) : (
        <div className="mx-5 md:mx-20 xl:mx-40 min-h-[89vh]">
          {/* Header Start */}
          <div className="flex my-6 max-md:flex-col items-center justify-between max-md:gap-4">
            <Link className="max-lg:hidden" to="/user">
              <button className="ctaback flex gap-2 items-center text-3xl text-grey">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 9 16"
                  fill="none">
                  <path
                    d="M8 1C5.44171 2.85861 3.15026 5.03738 1.18514 7.47872C0.938285 7.7854 0.938285 8.2146 1.18514 8.52128C3.15026 10.9626 5.44171 13.1414 8 15"
                    stroke="#353535"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Dashboard
              </button>
            </Link>
            <div className="max-md:mt-10 max-lg:mx-auto">
              <div className="text-3xl text-right max-lg:text-4xl">
                Your Profile
              </div>
            </div>
          </div>
          {/* Header end */}
          <div className="mx-10 flex gap-6 justify-between max-lg:flex-col max-lg:items-center">
            {/* Image section */}
            <div className="flex gap-6 max-lg:flex-col max-lg:items-center">
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
                  src={user.photo}
                />
              </div>
              {/* Details section */}
              <div className="p-4">
                <div className="text-grey text-3xl font-bold">{user.name}</div>
                <div className="text-grey">{user.email}</div>
                {/* Phone , */}
                <div className="text-grey">
                  {user.phoneNumber
                    ? `+91 ${user.phoneNumber}`
                    : "Please update number in editprofile"}
                </div>
                <div className="flex gap-2  text-grey">
                  <div>{user.year === 1 ? "1st Year" : "2nd Year"}</div>{" "}
                  &#x2022;
                  <div>
                    {user.admissionNumber
                      ? user.admissionNumber
                      : "Please update admission number in edit profile"}
                  </div>
                </div>
                {/*  This needs to be dynamic */}
                <div className="text-purple font-bold">
                  {user.domain
                    ? user.domain
                    : "Please update domain in edit profile"}
                </div>
                {/* Edit profile Button */}
                <button
                  onClick={() => setPopup(true)}
                  className="mt-5 bg-purple rounded-full text-white flex items-center gap-2 px-4 py-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none">
                    <path
                      d="M1.04778 12.0609C1.0545 11.7887 1.05786 11.6525 1.09077 11.5247C1.11995 11.4113 1.16616 11.3031 1.22782 11.2037C1.29735 11.0916 1.39321 10.9953 1.58493 10.8027L11.0119 1.33436C11.39 0.954557 11.9806 0.890913 12.4304 1.1815C12.9636 1.526 13.4191 1.97869 13.7678 2.5105L13.7922 2.54777C13.8099 2.57471 13.8187 2.58818 13.8262 2.60032C14.1031 3.04625 14.0445 3.62379 13.6838 4.00448C13.674 4.01484 13.6626 4.02624 13.6399 4.04905L4.2703 13.4598C4.07142 13.6596 3.97198 13.7595 3.85592 13.8308C3.75302 13.8941 3.64083 13.9407 3.52349 13.9688C3.39113 14.0006 3.2505 14.0004 2.96925 13.9999L1 13.9968L1.04778 12.0609Z"
                      stroke="#F5F5F5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Edit Profile
                </button>
                {/* Popup logic */}
                {popup && (
                  <Popup>
                    {/* close button */}
                    <button
                      type="button"
                      onClick={() => setPopup(false)}
                      className="absolute w-10 h-10 flex items-center justify-center right-5 top-5 hover:bg-light-red rounded-full">
                      <img className="w-6" src={Close} />
                    </button>
                    {/* Form Selector */}
                    <div className="min-w-80 max-md:mt-10">
                      <button
                        type="button"
                        className={`w-40 font-ProductSans duration-300 ease-in-out pr-2 h-12 rounded-full  text-white bg-light-red relative left-5
              ${
                activeBtn === "profile" || activeBtn === "password"
                  ? "font-bold"
                  : "opacity-60 "
              }`}
                        onClick={() => setactiveBtn("profile")}>
                        Edit Profile
                      </button>
                      <button
                        type="button"
                        className={`w-40 font-ProductSans duration-300 ease-in-out h-12 rounded-full text-white bg-light-red relative right-5
              ${activeBtn === "links" ? "font-bold" : "opacity-60"}`}
                        onClick={() => setactiveBtn("links")}>
                        Update Links
                      </button>
                    </div>
                    <div>
                      {activeBtn === "profile" ? (
                        <EditProfile
                          user={user}
                          changeActiveButtonToPass={
                            changeActiveButtonToPassword
                          }
                          updateDataFunc={updateDataFunc}
                        />
                      ) : activeBtn === "links" ? (
                        <UpdateLinks user={user} />
                      ) : activeBtn === "password" ? (
                        <UpdatePassword
                          user={user}
                          changeActiveButtonToProfile={
                            changeActiveButtonToProfile
                          }
                        />
                      ) : null}
                    </div>
                  </Popup>
                )}
              </div>
            </div>
            {/* Resume */}
            <div>
              <input
                type="file"
                accept=".jpg,.png,.jpeg"
                className="imgfile absolute invisible bg-lime w-60 h-52 "
                onChange={handleFileChange}
              />
              <button
                onClick={handleFileUploadButton}
                className="flex flex-col justify-between items-center w-60 h-52 outline outline-2 outline-light-blue rounded-xl ">
                <div
                  onMouseLeave={() => setHoverImage(false)}
                  onMouseEnter={() => setHoverImage(true)}
                  className="flex items-center justify-center">
                  <img
                    src={file}
                    className="relative w-60 h-52 rounded-xl object-cover object-top "
                  />
                  {hoverImage &&
                    (user.resume ? (
                      <div className="absolute flex items-center justify-center">
                        <div className="absolute text-white flex gap-2 flex-col mb-[5vh]">
                          <span class=" material-symbols-rounded text-white text-5xl">
                            upload
                          </span>
                          <span className="text-xl">Reupload Resume</span>
                          <span className="text-xs">
                            .jpg/.png only (under 2mb)
                          </span>
                        </div>
                        <img
                          src={ResumeOverlay}
                          className=" w-60 h-52 rounded-xl object-cover object-top bg-black"
                        />
                      </div>
                    ) : (
                      <div className="absolute flex items-center justify-center">
                        <div className="absolute text-white flex gap-2 flex-col mb-[5vh]">
                          <span class=" material-symbols-rounded text-white text-5xl">
                            upload
                          </span>
                          <span className="text-xl">Upload Resume</span>
                          <span className="text-xs">
                            .jpg/.png only (under 2mb)
                          </span>
                        </div>
                        <img
                          src={ResumeOverlay}
                          className=" w-60 h-52 rounded-xl object-cover object-top bg-black"
                        />
                      </div>
                    ))}
                </div>
              </button>
              <div className="relative bottom-12 flex justify-between items-center bg-light-blue w-full rounded-b-xl text-center text-white p-3">
                {user.name}'s Resume
                <a href={user.resume} target="_blank">
                  <span className="material-symbols-rounded">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
          {/* Submitted links */}
          <div className="flex items-center justify-center">
            <div className="inline-flex flex-col gap-4 mb-20 mt-2 bg-text-box p-8 lg:px-20 max-lg:py-16 rounded-xl shadow-lg">
              <div className="text-4xl text-center font-bold text-light-red">
                Submitted Links
              </div>
              <div className="mx-auto grid grid-cols-2 gap-x-8 gap-5 max-lg:grid-cols-1">
                <Links
                  ico={LinkIco}
                  text={
                    user.socialLinks.portfolio
                      ? user.socialLinks.portfolio
                      : "Not Submitted"
                  }
                />
                <Links
                  ico={LinkedIN}
                  text={
                    user.socialLinks.linkedin
                      ? user.socialLinks.linkedin
                      : "Not Submitted"
                  }
                />
                <Links
                  ico={Behance}
                  text={
                    user.socialLinks.behance
                      ? user.socialLinks.behance
                      : "Not Submitted"
                  }
                />
                <Links
                  ico={Hackerrank}
                  text={
                    user.socialLinks.hackerrank
                      ? user.socialLinks.hackerrank
                      : "Not Submitted"
                  }
                />
                <Links
                  ico={Github}
                  text={
                    user.socialLinks.github
                      ? user.socialLinks.github
                      : "Not Submitted"
                  }
                />
                <Links
                  ico={Dribble}
                  text={
                    user.socialLinks.dribble
                      ? user.socialLinks.dribble
                      : "Not Submitted"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
