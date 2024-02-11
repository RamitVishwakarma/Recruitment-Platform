import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input, Select } from "./Auth";
import axios from "axios";

import Name from "../../assets/input-name.svg";
import Admission from "../../assets/input-admission.svg";
import Year from "../../assets/input-year.svg";
import DomainIco from "../../assets/input-domain.svg";
import Contact from "../../assets/contact.svg";

import LinkIco from "../../assets/link.svg";
import LinkedIN from "../../assets/footer-li.svg";
import Behance from "../../assets/behance.svg";
import Hackerrank from "../../assets/hackerrank.svg";
import Github from "../../assets/footer-git.svg";
import Dribble from "../../assets/dribble.svg";
import Popup from "../../components/Popup";
import Close from "../../assets/close.svg";
import Password from "../../assets/input-password.svg";

// ? Haven't added any client side validations in this page will do it If we have to
export default function Profile() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  // ? Use effect call the myProfile api and set the user state to the response
  // Updating user prof
  const [popup, setPopup] = useState(false);
  const [activeBtn, setactiveBtn] = useState("profile");

  const changeActiveButtonToPassword = () => {
    setactiveBtn("password");
  };

  const changeActiveButtonToProfile = () => {
    setactiveBtn("profile");
  };

  return (
    <>
      <div className="mx-5 md:mx-20 xl:mx-40">
        <Header>
          <div className="min-w-80 max-md:mt-10">
            <div className="text-6xl font-bold">Your Profile</div>
          </div>
        </Header>
        <Link to="/user">
          <button className="ctaback flex gap-2 items-center text-grey">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
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
            Dashboard
          </button>
        </Link>
        <div className="mx-10 flex gap-6 justify-between">
          {/* Image section */}
          <div className="flex gap-6">
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
                className="absolute w-[223px] z-10 rounded-full"
                src={user.photo}
              />
            </div>
            {/* Details section */}
            <div>
              <div className="text-grey text-3xl font-bold">{user.name}</div>
              <div className="text-grey">{user.email}</div>
              {/* Phone , */}
              <div className="text-grey">+91 {user.phoneNumber} </div>
              <div className="flex gap-2  text-grey">
                <div>{user.year}1st Year</div> &#x2022;{" "}
                <div>{user.admissionNumber}</div>
              </div>
              {/*  This needs to be dynamic */}
              <div className="text-purple font-bold">
                {user.domain} Aspiring Web Developer
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
                        changeActiveButtonToPass={changeActiveButtonToPassword}
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
          {/* //? Resume update is left feels a bit odd to upload resume directly on the place where the profile is shown  */}
          <div className="w-60 h-40 relative outline:blue bg-blue rounded-xl ">
            <button className="absolute rounded-b-xl bottom-0 w-60 flex px-4 items-center justify-between h-12 bg-light-blue text-sm text-white">
              {user.name} &#x27;s Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  d="M1.86751 15.7915C1.40447 15.7915 1.01253 15.6311 0.691699 15.3103C0.370866 14.9895 0.210449 14.5975 0.210449 14.1345V1.86531C0.210449 1.40227 0.370866 1.01034 0.691699 0.689502C1.01253 0.368669 1.40447 0.208252 1.86751 0.208252H6.96202C7.1571 0.208252 7.32045 0.274069 7.45207 0.405703C7.58369 0.537321 7.6495 0.70067 7.6495 0.895752C7.6495 1.09083 7.58369 1.25418 7.45207 1.3858C7.32045 1.51742 7.1571 1.58323 6.96202 1.58323H1.86751C1.79699 1.58323 1.73234 1.61261 1.67356 1.67137C1.61481 1.73014 1.58543 1.79479 1.58543 1.86531V14.1345C1.58543 14.205 1.61481 14.2697 1.67356 14.3284C1.73234 14.3872 1.79699 14.4166 1.86751 14.4166H14.1367C14.2072 14.4166 14.2718 14.3872 14.3306 14.3284C14.3894 14.2697 14.4188 14.205 14.4188 14.1345V9.03997C14.4188 8.84489 14.4846 8.68154 14.6162 8.54992C14.7478 8.4183 14.9112 8.35249 15.1062 8.35249C15.3013 8.35249 15.4647 8.4183 15.5963 8.54992C15.7279 8.68154 15.7937 8.84489 15.7937 9.03997V14.1345C15.7937 14.5975 15.6333 14.9895 15.3125 15.3103C14.9917 15.6311 14.5997 15.7915 14.1367 15.7915H1.86751ZM14.4188 2.54924L6.3944 10.5736C6.26747 10.7005 6.10794 10.7655 5.91581 10.7684C5.72366 10.7713 5.56119 10.7064 5.42839 10.5736C5.2956 10.4408 5.2292 10.2798 5.2292 10.0906C5.2292 9.90139 5.2956 9.74039 5.42839 9.60759L13.4528 1.58323H10.5229C10.3278 1.58323 10.1645 1.51742 10.0329 1.3858C9.90124 1.25418 9.83543 1.09083 9.83543 0.895752C9.83543 0.70067 9.90124 0.537321 10.0329 0.405703C10.1645 0.274069 10.3278 0.208252 10.5229 0.208252H15.7937V5.47909C15.7937 5.67417 15.7279 5.83752 15.5963 5.96914C15.4647 6.10075 15.3013 6.16656 15.1062 6.16656C14.9112 6.16656 14.7478 6.10075 14.6162 5.96914C14.4846 5.83752 14.4188 5.67417 14.4188 5.47909V2.54924Z"
                  fill="#F5F5F5"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Submitted links */}
        <div className="flex flex-col gap-4 mb-20">
          <div className="text-4xl text-center font-bold text-light-red">
            Submitted Links
          </div>
          <div className="flex gap-4 mx-auto w-[31rem] flex-wrap">
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
    </>
  );
}

function Links({ ico, text }) {
  return (
    <div className="flex w-60 gap-2">
      <img className="w-4" src={ico} />
      <div className="text-lg">{text}</div>
    </div>
  );
}

function EditProfile({ user, changeActiveButtonToPass }) {
  // Edit profile logic

  const [name, SetName] = useState(user.name);
  const [admissionNumber, SetAdmissionNumber] = useState(user.admissionNumber);
  const [year, SetYear] = useState(user.year);
  const [domain, SetDomain] = useState(user.domain);
  const [phoneNumber, SetPhoneNumber] = useState(user.phoneNumber);
  const [file, setFile] = useState(user.photo);

  const handleFileUploadButton = () => {
    document.querySelector(".imgfile").click();
  };
  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleName = (e) => {
    SetName(e.target.value);
  };
  const handleAdmissionNumber = (e) => {
    SetAdmissionNumber(e.target.value);
  };
  const handleYear = (e) => {
    SetYear(e.target.value);
  };
  const handleDomain = (e) => {
    SetDomain(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    SetPhoneNumber(e.target.value);
  };

  const editProfileFormHandler = (e) => {
    e.preventDefault();
    const updatedUser = {
      name: name,
      phoneNumber: phoneNumber,
      photo: file,
      year: year,
      domain: domain,
      admissionNumber: admissionNumber,
    };
    // Need to ask how to go about the photo part
    axios
      .put(
        `${import.meta.env.VITE_URL}api/user/profile/Updateprofile`,
        updatedUser,
        {
          headers: { Authorization: sessionStorage.getItem("Authorization") },
        }
      )
      .then((res) => {
        console.log(res);
        // ? Add toast in here
        alert("Profile Updated Successfully");
      })
      .catch((e) => {
        console.log(e);
        // ? Add toast in here
        alert("SOme error occured, please try again later");
      });
  };

  const yearOptions = ["1", "2"];
  const domainOptions = [
    "Programmming",
    "Web Club",
    "Android Club",
    "Flutter Dev",
    "Design Club",
    "ML Club",
  ];

  // deleting the user's account
  // ? Thinking about a comfirmation popup
  const handleDeleteAccount = () => {
    axios
      .delete(
        `${import.meta.env.VITE_URL}api/user/profile/delete/${user._id}`,
        {
          headers: { Authorization: sessionStorage.getItem("Authorization") },
        }
      )
      .then((res) => {
        console.log(res);
        // ? Add toast in here
        alert("Account Deleted Successfully");
        sessionStorage.clear();
      })
      .catch((e) => {
        console.log(e);
        // ? Add toast in here
        alert("Some error occured, please try again later");
      });
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <form onSubmit={editProfileFormHandler}>
          <img className="w-32 h-32 rounded-full" src={file} />
          <input
            id="imgFile"
            type="file"
            accept=".jpg,.png"
            className="imgfile absolute invisible bg-lime w-44 h-12 "
            onChange={handleFileChange}
          />
          <button
            onClick={handleFileUploadButton}
            type="button"
            className="bg-purple p-2 flex items-center gap-3 text-white rounded-full text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none">
              <path
                d="M1.44497 15C1.0476 15 0.707433 14.8585 0.42446 14.5755C0.141486 14.2926 0 13.9524 0 13.555V2.13301C0 1.73565 0.141486 1.39549 0.42446 1.11253C0.707433 0.829554 1.0476 0.688067 1.44497 0.688067H8.4977C8.62442 0.688067 8.73064 0.730988 8.81636 0.816829C8.90208 0.902656 8.94494 1.00902 8.94494 1.13592C8.94494 1.2628 8.90208 1.36896 8.81636 1.4544C8.73064 1.53984 8.62442 1.58256 8.4977 1.58256H1.44497C1.28442 1.58256 1.15254 1.63417 1.04933 1.73738C0.946107 1.84058 0.894494 1.97246 0.894494 2.13301V13.555C0.894494 13.7156 0.946107 13.8475 1.04933 13.9507C1.15254 14.0539 1.28442 14.1055 1.44497 14.1055H12.867C13.0275 14.1055 13.1594 14.0539 13.2626 13.9507C13.3658 13.8475 13.4174 13.7156 13.4174 13.555V6.50228C13.4174 6.37556 13.4603 6.26934 13.5462 6.18362C13.632 6.09789 13.7384 6.05503 13.8653 6.05503C13.9922 6.05503 14.0983 6.09789 14.1838 6.18362C14.2692 6.26934 14.3119 6.37556 14.3119 6.50228V13.555C14.3119 13.9524 14.1704 14.2926 13.8875 14.5755C13.6045 14.8585 13.2643 15 12.867 15H1.44497ZM12.3165 2.68348H10.9748C10.8481 2.68348 10.7418 2.64056 10.6561 2.55472C10.5704 2.46888 10.5275 2.36251 10.5275 2.23563C10.5275 2.10873 10.5704 2.00257 10.6561 1.91715C10.7418 1.83171 10.8481 1.78899 10.9748 1.78899H12.3165V0.447247C12.3165 0.320527 12.3594 0.214306 12.4453 0.128584C12.5311 0.0428612 12.6375 0 12.7644 0C12.8913 0 12.9974 0.0428612 13.0829 0.128584C13.1683 0.214306 13.211 0.320527 13.211 0.447247V1.78899H14.5528C14.6795 1.78899 14.7857 1.83191 14.8714 1.91775C14.9571 2.00358 15 2.10994 15 2.23684C15 2.36372 14.9571 2.46988 14.8714 2.55532C14.7857 2.64076 14.6795 2.68348 14.5528 2.68348H13.211V4.02522C13.211 4.15194 13.1681 4.25817 13.0822 4.34389C12.9964 4.42961 12.89 4.47247 12.7632 4.47247C12.6363 4.47247 12.5301 4.42961 12.4447 4.34389C12.3592 4.25817 12.3165 4.15194 12.3165 4.02522V2.68348ZM6.45069 11.4564L5.17431 9.91339C5.09633 9.82853 5.00287 9.7861 4.89394 9.7861C4.78499 9.7861 4.69152 9.83426 4.61353 9.93059L3.58142 11.2913C3.48508 11.4174 3.47161 11.5453 3.54099 11.6749C3.61037 11.8045 3.71445 11.8692 3.85321 11.8692H10.5963C10.7351 11.8692 10.8392 11.8045 10.9085 11.6749C10.9779 11.5453 10.9702 11.4174 10.8853 11.2913L9.07914 8.86408C9.00116 8.76776 8.90483 8.7196 8.79015 8.7196C8.67546 8.7196 8.57871 8.76924 8.49989 8.86853L6.45069 11.4564Z"
                fill="#F5F5F5"
              />
            </svg>
            Change Photo
          </button>
          <span className="text-xs text-grey/60">.jpg/.png only</span>
          <Input
            id="name"
            label="Name"
            icon={Name}
            type="text"
            placeholder="Enter Your Name"
            onChangeHandler={handleName}
            value={name}
          />
          <Input
            id="contact"
            label="Contact Number"
            icon={Contact}
            type="text"
            placeholder="+91 XXXXXXXXXX"
            onChangeHandler={handlePhoneNumber}
            value={phoneNumber}
          />
          <Input
            id="admission number"
            label="Admission Number"
            icon={Admission}
            type="text"
            placeholder="Enter Your Admission Number"
            onChangeHandler={handleAdmissionNumber}
            value={admissionNumber}
          />
          {/* Year */}
          {/* //? Will need to select the year and domain again untill I figure out the select thing  */}
          <Select
            id="year"
            label="Year"
            icon={Year}
            selected={"Select Year"}
            selectedValue={year}
            data={yearOptions}
            onChangeHandler={handleYear}
          />
          {/* Domain */}
          <Select
            id="domain"
            label="Domain"
            icon={DomainIco}
            selected={"Select Year"}
            selectedValue={domain}
            onChangeHandler={handleDomain}
            data={domainOptions}
          />
          {/* Save Button */}
          <button
            type="submit"
            className="bg-lime p-2 px-12 rounded-lg text-button-text font-bold">
            Save
          </button>
        </form>
        {/* Delete Acc button */}
        <button
          onClick={handleDeleteAccount}
          type="button"
          className="rounded-md flex items-center justify-center text-white text-sm p-2 gap-4 bg-light-red">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none">
            <path
              d="M2.98092 15.3333C2.57371 15.3333 2.22512 15.1883 1.93514 14.8983C1.64516 14.6084 1.50016 14.2598 1.50016 13.8526V2.49999H1.04183C0.911968 2.49999 0.803114 2.456 0.715267 2.36803C0.62742 2.28006 0.583496 2.17106 0.583496 2.04104C0.583496 1.91099 0.62742 1.8022 0.715267 1.71466C0.803114 1.6271 0.911968 1.58332 1.04183 1.58332H4.25016C4.25016 1.3941 4.32038 1.22928 4.46081 1.08885C4.60126 0.948398 4.76609 0.878174 4.95529 0.878174H9.04504C9.23424 0.878174 9.39906 0.948398 9.53951 1.08885C9.67995 1.22928 9.75016 1.3941 9.75016 1.58332H12.9585C13.0884 1.58332 13.1972 1.6273 13.2851 1.71527C13.3729 1.80323 13.4168 1.91223 13.4168 2.04227C13.4168 2.1723 13.3729 2.28109 13.2851 2.36865C13.1972 2.45621 13.0884 2.49999 12.9585 2.49999H12.5002V13.8526C12.5002 14.2598 12.3552 14.6084 12.0652 14.8983C11.7752 15.1883 11.4266 15.3333 11.0194 15.3333H2.98092ZM11.5835 2.49999H2.41683V13.8526C2.41683 14.0171 2.46971 14.1522 2.57548 14.258C2.68125 14.3638 2.8164 14.4167 2.98092 14.4167H11.0194C11.1839 14.4167 11.3191 14.3638 11.4248 14.258C11.5306 14.1522 11.5835 14.0171 11.5835 13.8526V2.49999ZM5.44951 12.5833C5.57954 12.5833 5.68833 12.5394 5.77589 12.4515C5.86344 12.3637 5.90722 12.2548 5.90722 12.125V4.79165C5.90722 4.66179 5.86324 4.55294 5.77527 4.46509C5.6873 4.37724 5.5783 4.33332 5.44827 4.33332C5.31822 4.33332 5.20942 4.37724 5.12187 4.46509C5.03431 4.55294 4.99053 4.66179 4.99053 4.79165V12.125C4.99053 12.2548 5.03452 12.3637 5.12249 12.4515C5.21046 12.5394 5.31946 12.5833 5.44951 12.5833ZM8.55206 12.5833C8.6821 12.5833 8.7909 12.5394 8.87846 12.4515C8.96601 12.3637 9.00979 12.2548 9.00979 12.125V4.79165C9.00979 4.66179 8.96581 4.55294 8.87784 4.46509C8.78987 4.37724 8.68086 4.33332 8.55082 4.33332C8.42079 4.33332 8.312 4.37724 8.22444 4.46509C8.13688 4.55294 8.0931 4.66179 8.0931 4.79165V12.125C8.0931 12.2548 8.13709 12.3637 8.22506 12.4515C8.31303 12.5394 8.42203 12.5833 8.55206 12.5833Z"
              fill="#FBFBFB"
            />
          </svg>
          Delete Account
        </button>
        {/* change pass button */}
        <button
          onClick={() => changeActiveButtonToPass()}
          type="button"
          className="bg-light-blue text-white px-4 rounded-md flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none">
            <path
              d="M5.41732 6.12805C5.10706 6.12805 4.84146 6.01757 4.62053 5.79663C4.39958 5.5757 4.28911 5.3101 4.28911 4.99984C4.28911 4.68958 4.39958 4.42398 4.62053 4.20305C4.84146 3.9821 5.10706 3.87163 5.41732 3.87163C5.72758 3.87163 5.99318 3.9821 6.21411 4.20305C6.43506 4.42398 6.54553 4.68958 6.54553 4.99984C6.54553 5.3101 6.43506 5.5757 6.21411 5.79663C5.99318 6.01757 5.72758 6.12805 5.41732 6.12805ZM5.41732 9.58317C4.14417 9.58317 3.062 9.13798 2.17078 8.24759C1.27958 7.35718 0.833984 6.27598 0.833984 5.00398C0.833984 3.73199 1.27958 2.6494 2.17078 1.75624C3.062 0.863081 4.14417 0.416504 5.41732 0.416504C6.35866 0.416504 7.20745 0.67152 7.9637 1.18155C8.71995 1.6916 9.27202 2.35325 9.61989 3.1665H17.7553C17.8489 3.1665 17.9396 3.18355 18.0274 3.21763C18.1151 3.2517 18.1989 3.30869 18.2789 3.38861L19.3718 4.48158C19.4517 4.56148 19.5078 4.64393 19.5402 4.72894C19.5725 4.81396 19.5886 4.90505 19.5886 5.0022C19.5886 5.09935 19.5725 5.18964 19.5402 5.27307C19.5078 5.35652 19.4517 5.43819 19.3718 5.5181L17.4309 7.44136C17.37 7.50705 17.2969 7.55961 17.2116 7.59905C17.1263 7.63846 17.0419 7.65993 16.9585 7.66346C16.8751 7.66699 16.7916 7.65641 16.7082 7.63172C16.6247 7.60705 16.5431 7.56828 16.4632 7.5154L15.3949 6.70979L14.1415 7.62469C14.0769 7.67405 14.0105 7.70813 13.9423 7.72692C13.8741 7.74573 13.8001 7.75513 13.7202 7.75513C13.6403 7.75513 13.5654 7.74279 13.4954 7.71812C13.4255 7.69343 13.3582 7.66229 13.2936 7.62469L12.1072 6.83317H9.61989C9.27202 7.63467 8.71995 8.29338 7.9637 8.8093C7.20745 9.32521 6.35866 9.58317 5.41732 9.58317ZM5.41732 8.6665C6.31988 8.6665 7.08994 8.39503 7.7275 7.85209C8.36504 7.30913 8.77314 6.66394 8.95178 5.9165H12.3981L13.7096 6.8032C13.6979 6.8032 13.6949 6.80408 13.7008 6.80585C13.7067 6.80761 13.7096 6.80672 13.7096 6.8032L15.4125 5.58158L16.8986 6.70096L18.5997 4.99984L17.683 4.08317H8.95178C8.77314 3.33574 8.36504 2.69054 7.7275 2.14758C7.08994 1.60464 6.31988 1.33317 5.41732 1.33317C4.40898 1.33317 3.54579 1.6922 2.82773 2.41025C2.10968 3.12831 1.75065 3.9915 1.75065 4.99984C1.75065 6.00817 2.10968 6.87137 2.82773 7.58942C3.54579 8.30748 4.40898 8.6665 5.41732 8.6665Z"
              fill="#F5F5F5"
            />
          </svg>
          Change Password
        </button>
      </div>
    </div>
  );
}

function UpdateLinks({ user }) {
  // Update links logic
  const [github, setGithub] = useState(user.socialLinks.github);
  const [linkedIN, setLinkedIN] = useState(user.socialLinks.linkedIN);
  const [hackerrank, setHackerrank] = useState(user.socialLinks.hackerrank);
  const [dribble, setDribble] = useState(user.socialLinks.dribble);
  const [behance, setBehance] = useState(user.socialLinks.behance);
  const [portfolio, setPortfolio] = useState(user.socialLinks.portfolio);

  const githubHandler = (e) => {
    setGithub(e.target.value);
  };
  const hackerrankHandler = (e) => {
    setHackerrank(e.target.value);
  };
  const dribbleHandler = (e) => {
    setDribble(e.target.value);
  };
  const behanceHandler = (e) => {
    setBehance(e.target.value);
  };
  const portfolioHandler = (e) => {
    setPortfolio(e.target.value);
  };
  const linkedINHandler = (e) => {
    setLinkedIN(e.target.value);
  };

  const linkSubmitHandler = (e) => {
    e.preventDefault();
    console.log("In form submit handler");
    const updatedLinks = {
      socialLinks: {
        github: github,
        linkedin: linkedIN,
        hackerrank: hackerrank,
        dribble: dribble,
        behance: behance,
        portfolio: portfolio,
      },
    };
    axios
      .put(
        `${import.meta.env.VITE_URL}api/user/profile/Updateprofile`,
        updatedLinks,
        {
          headers: { Authorization: sessionStorage.getItem("Authorization") },
        }
      )
      .then((res) => {
        console.log(res);
        // ? Add toast in here
        alert("Links Updated Successfully");
      })
      .catch((e) => {
        console.log(e);
        // ? Add toast in here
        alert("Some error occured, please try again later");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="95"
        height="95"
        viewBox="0 0 95 95"
        fill="none">
        <path
          d="M63.9744 11.6401C70.3118 5.27834 79.5812 5.14474 84.713 10.2963C89.854 15.4575 89.7157 24.7854 83.3742 31.1514L72.6654 41.9019C71.374 43.1986 71.3779 45.2968 72.6742 46.5882C73.971 47.8797 76.0692 47.8757 77.3606 46.579L88.0695 35.8286C96.514 27.3513 97.5744 13.8169 89.4082 5.61912C81.2323 -2.58835 67.7281 -1.51865 59.2791 6.96296L37.8613 28.464C29.4168 36.9412 28.3566 50.4758 36.5227 58.6734C37.8142 59.9701 39.9124 59.9741 41.2087 58.6826C42.5054 57.3912 42.5094 55.293 41.218 53.9963C36.0767 48.8353 36.2152 39.5072 42.5567 33.1411L63.9744 11.6401Z"
          fill="#6B83FF"
        />
        <path
          d="M58.4775 36.323C57.1861 35.0264 55.0879 35.0224 53.7911 36.3139C52.4948 37.6055 52.4909 39.7036 53.7823 40.9999C58.9233 46.1613 58.785 55.489 52.4436 61.8552L31.0258 83.3564C24.6887 89.7182 15.4189 89.852 10.2873 84.7004C5.14601 79.539 5.28452 70.2109 11.626 63.8447L22.335 53.0943C23.6266 51.7976 23.6225 49.6998 22.3259 48.4079C21.0294 47.1165 18.9312 47.1205 17.6397 48.4172L6.9307 59.1676C-1.51383 67.6452 -2.57403 81.1795 5.59202 89.3775C13.7678 97.5848 27.2722 96.5151 35.7211 88.0335L57.1388 66.5323C65.5833 58.0551 66.6437 44.5208 58.4775 36.323Z"
          fill="#6B83FF"
        />
      </svg>
      {/* Inputs */}
      <form
        onSubmit={linkSubmitHandler}
        className="flex flex-wrap justify-center gap-4 ">
        <Input
          id="Github"
          label="Github Profile"
          icon={Github}
          type="url"
          placeholder="Paste Your Github Profile Link"
          onChangeHandler={githubHandler}
          value={github}
        />
        <Input
          id="Linkedin"
          label="Linkedin Profile"
          icon={LinkedIN}
          type="url"
          placeholder="Paste Your Linkedin Profile Link"
          onChangeHandler={linkedINHandler}
          value={linkedIN}
        />
        <Input
          id="Hackerrank"
          label="Hackerrank Profile"
          icon={Hackerrank}
          type="url"
          placeholder="Paste Your HackerRank Profile Link"
          onChangeHandler={hackerrankHandler}
          value={hackerrank}
        />
        <Input
          id="Dribble"
          label="Dribble Profile"
          icon={Dribble}
          type="url"
          placeholder="Paste Your Dribble Profile Link"
          onChangeHandler={dribbleHandler}
          value={dribble}
        />
        <Input
          id="Behance"
          label="Behance Profile"
          icon={Behance}
          type="url"
          placeholder="Paste Your Behance Profile Link"
          onChangeHandler={behanceHandler}
          value={behance}
        />
        <Input
          id="PortfolioLink"
          label="Portfolio Link"
          icon={LinkIco}
          type="url"
          placeholder="Paste Your Portfolio Link"
          onChangeHandler={portfolioHandler}
          value={portfolio}
        />
      </form>
      <div className="flex items-center ">
        <button
          onClick={linkSubmitHandler}
          className="bg-lime px-16 py-3 rounded-lg text-button-text text-center">
          Update
        </button>
      </div>
    </div>
  );
}
function UpdatePassword({ user, changeActiveButtonToProfile }) {
  const [newPassword, setnewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleNewPassword = (e) => {
    setnewPassword(e.target.value);
  };
  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const passwordSubmitHandler = (e) => {
    e.preventDefault();
    if (newPassword === repeatPassword) {
      const updatedPassword = {
        newPassword: newPassword,
        confirmPassword: repeatPassword,
      };
      axios
        .put(
          `${import.meta.env.VITE_URL}api/user/auth/updatePassword/${user._id}`,
          updatedPassword,
          {
            headers: { Authorization: sessionStorage.getItem("Authorization") },
          }
        )
        .then((res) => {
          console.log(res);
          // ? Add toast in here
          alert("Password Updated Successfully");
        })
        .catch((e) => {
          console.log(e);
          // ? Add toast in here
          alert("Some error occured, please try again later");
        });
    } else {
      // ? Add toast in here or something
      alert("Passwords do not match");
    }
  };
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="135"
        height="69"
        viewBox="0 0 135 69"
        fill="none">
        <path
          d="M10.6834 62.0656H124.317C125.211 62.0656 125.961 62.3658 126.566 62.9664C127.171 63.5668 127.473 64.3109 127.473 65.1986C127.473 66.0864 127.171 66.829 126.566 67.4266C125.961 68.0243 125.211 68.3232 124.317 68.3232H10.6834C9.78908 68.3232 9.03941 68.0229 8.43442 67.4224C7.82943 66.822 7.52694 66.0779 7.52694 65.1902C7.52694 64.3024 7.82943 63.5597 8.43442 62.9621C9.03941 62.3644 9.78908 62.0656 10.6834 62.0656ZM16.9964 20.3563L12.2981 28.5633C11.9257 29.2434 11.3673 29.6762 10.6227 29.8616C9.87804 30.047 9.16551 29.9539 8.48508 29.5822C7.80465 29.2105 7.37169 28.6529 7.18619 27.9095C7.00059 27.166 7.10202 26.4614 7.49048 25.7955L12.1887 17.5884H2.79222C1.98553 17.5884 1.31846 17.3275 0.791013 16.8059C0.263671 16.2841 0 15.6242 0 14.8263C0 14.0283 0.263724 13.3666 0.791171 12.8411C1.31851 12.3156 1.98553 12.0529 2.79222 12.0529H12.1887L7.49048 4.15862C7.10202 3.49281 7.00059 2.78815 7.18619 2.04464C7.37169 1.30124 7.80465 0.743683 8.48508 0.371981C9.16551 0.000279574 9.87804 -0.0928562 10.6227 0.0925776C11.3673 0.278011 11.9257 0.710779 12.2981 1.39088L16.9964 9.28501L21.6946 1.39088C22.067 0.710779 22.6255 0.278011 23.3701 0.0925776C24.1147 -0.0928562 24.8272 0.000279574 25.5076 0.371981C26.1881 0.743683 26.621 1.30124 26.8065 2.04464C26.9921 2.78815 26.8907 3.49281 26.5023 4.15862L21.804 12.0529H31.2005C32.0072 12.0529 32.6743 12.3137 33.2017 12.8354C33.7291 13.3572 33.9927 14.0171 33.9927 14.815C33.9927 15.613 33.7291 16.2747 33.2017 16.8002C32.6743 17.3257 32.0072 17.5884 31.2005 17.5884H21.804L26.5023 25.7955C26.8907 26.4614 26.9921 27.166 26.8065 27.9095C26.621 28.6529 26.1881 29.2105 25.5076 29.5822C24.8272 29.9539 24.1147 30.047 23.3701 29.8616C22.6255 29.6762 22.067 29.2434 21.6946 28.5633L16.9964 20.3563ZM67.5 20.3563L62.8017 28.5633C62.4294 29.2434 61.8709 29.6762 61.1263 29.8616C60.3817 30.047 59.6691 29.9539 58.9887 29.5822C58.3083 29.2105 57.8753 28.6529 57.6898 27.9095C57.5042 27.166 57.6057 26.4614 57.9941 25.7955L62.6924 17.5884H53.2959C52.4892 17.5884 51.8221 17.3275 51.2946 16.8059C50.7673 16.2841 50.5036 15.6242 50.5036 14.8263C50.5036 14.0283 50.7673 13.3666 51.2946 12.8411C51.8221 12.3156 52.4892 12.0529 53.2959 12.0529H62.6924L57.9941 4.15862C57.6057 3.49281 57.5042 2.78815 57.6898 2.04464C57.8753 1.30124 58.3083 0.743683 58.9887 0.371981C59.6691 0.000279574 60.3817 -0.0928562 61.1263 0.0925776C61.8709 0.278011 62.4294 0.710779 62.8017 1.39088L67.5 9.28501L72.1983 1.39088C72.5706 0.710779 73.1291 0.278011 73.8737 0.0925776C74.6183 -0.0928562 75.3309 0.000279574 76.0113 0.371981C76.6917 0.743683 77.1247 1.30124 77.3102 2.04464C77.4958 2.78815 77.3943 3.49281 77.0059 4.15862L72.3076 12.0529H81.7041C82.5108 12.0529 83.1779 12.3137 83.7054 12.8354C84.2327 13.3572 84.4964 14.0171 84.4964 14.815C84.4964 15.613 84.2327 16.2747 83.7054 16.8002C83.1779 17.3257 82.5108 17.5884 81.7041 17.5884H72.3076L77.0059 25.7955C77.3943 26.4614 77.4958 27.166 77.3102 27.9095C77.1247 28.6529 76.6917 29.2105 76.0113 29.5822C75.3309 29.9539 74.6183 30.047 73.8737 29.8616C73.1291 29.6762 72.5706 29.2434 72.1983 28.5633L67.5 20.3563ZM118.004 20.3563L113.305 28.5633C112.933 29.2434 112.375 29.6762 111.63 29.8616C110.885 30.047 110.173 29.9539 109.492 29.5822C108.812 29.2105 108.379 28.6529 108.193 27.9095C108.008 27.166 108.109 26.4614 108.498 25.7955L113.196 17.5884H103.799C102.993 17.5884 102.326 17.3275 101.798 16.8059C101.271 16.2841 101.007 15.6242 101.007 14.8263C101.007 14.0283 101.271 13.3666 101.798 12.8411C102.326 12.3156 102.993 12.0529 103.799 12.0529H113.196L108.498 4.15862C108.109 3.49281 108.008 2.78815 108.193 2.04464C108.379 1.30124 108.812 0.743683 109.492 0.371981C110.173 0.000279574 110.885 -0.0928562 111.63 0.0925776C112.375 0.278011 112.933 0.710779 113.305 1.39088L118.004 9.28501L122.702 1.39088C123.074 0.710779 123.633 0.278011 124.377 0.0925776C125.122 -0.0928562 125.834 0.000279574 126.515 0.371981C127.195 0.743683 127.628 1.30124 127.814 2.04464C127.999 2.78815 127.898 3.49281 127.51 4.15862L122.811 12.0529H132.208C133.014 12.0529 133.682 12.3137 134.209 12.8354C134.736 13.3572 135 14.0171 135 14.815C135 15.613 134.736 16.2747 134.209 16.8002C133.682 17.3257 133.014 17.5884 132.208 17.5884H122.811L127.51 25.7955C127.898 26.4614 127.999 27.166 127.814 27.9095C127.628 28.6529 127.195 29.2105 126.515 29.5822C125.834 29.9539 125.122 30.047 124.377 29.8616C123.633 29.6762 123.074 29.2434 122.702 28.5633L118.004 20.3563Z"
          fill="#6B83FF"
        />
      </svg>
      <form
        id="password-form"
        onSubmit={passwordSubmitHandler}
        className="flex flex-col gap-4">
        <Input
          id="newPassword"
          label="New Password"
          icon={Password}
          type="password"
          placeholder="6 characters or more"
          onChangeHandler={handleNewPassword}
        />
        <Input
          id="repeatPassword"
          label="Repeat New Password"
          icon={Password}
          type="password"
          placeholder="Re-enter your new password"
          onChangeHandler={handleRepeatPassword}
        />
      </form>
      <button
        form="password-form"
        type="submit"
        className="bg-lime px-5 py-2 text-button-text rounded-lg">
        Save
      </button>
      {/* Personal info */}
      <button
        onClick={() => changeActiveButtonToProfile()}
        className="bg-light-blue text-white px-2 flex items-center rounded-lg p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none">
          <path
            d="M1.74967 19.0001C1.50405 19.0001 1.28987 18.9117 1.10714 18.7348C0.924384 18.5579 0.833008 18.3408 0.833008 18.0834C0.833008 17.8378 0.924384 17.6236 1.10714 17.4409C1.28987 17.2581 1.50405 17.1668 1.74967 17.1668H18.2497C18.4953 17.1668 18.7095 17.2552 18.8922 17.4321C19.075 17.6089 19.1663 17.8261 19.1663 18.0834C19.1663 18.3291 19.075 18.5432 18.8922 18.726C18.7095 18.9087 18.4953 19.0001 18.2497 19.0001H1.74967ZM4.49967 12.4248H5.48333L13.55 4.36342L13.0617 3.85749L12.561 3.37447L4.49967 11.4411V12.4248ZM3.58301 12.6011V11.3512C3.58301 11.2525 3.59711 11.1605 3.62531 11.0753C3.65351 10.9901 3.70758 10.9076 3.78749 10.8277L13.8673 0.770773C13.9648 0.673224 14.0715 0.60212 14.1873 0.557463C14.303 0.512806 14.4185 0.490479 14.5336 0.490479C14.6606 0.490479 14.7769 0.512806 14.8827 0.557463C14.9885 0.60212 15.0919 0.674988 15.1929 0.776065L16.136 1.72447C16.2371 1.82201 16.3091 1.9266 16.352 2.03825C16.3949 2.1499 16.4163 2.26918 16.4163 2.39609C16.4163 2.50774 16.3949 2.62145 16.352 2.73721C16.3091 2.85297 16.2371 2.96138 16.136 3.06246L6.07916 13.1193C5.99926 13.1993 5.9167 13.2562 5.8315 13.2903C5.7463 13.3244 5.65433 13.3415 5.55561 13.3415H4.32338C4.11066 13.3415 3.93409 13.2712 3.79366 13.1308C3.65322 12.9904 3.58301 12.8138 3.58301 12.6011ZM13.55 4.36342L13.0617 3.85749L12.561 3.37447L13.55 4.36342Z"
            fill="#F5F5F5"
          />
        </svg>
        Edit Personal Info
      </button>
    </div>
  );
}
