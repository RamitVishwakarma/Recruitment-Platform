import React, { useState } from "react";
import axios from "axios";
import Input from "../../../components/Input";
import Dropdown from "../../../components/DropDown";

export default function EditProfile({
  user,
  changeActiveButtonToPass,
  updateDataFunc,
}) {
  // Edit profile logic
  const [updatedData, setUpdatedData] = useState({
    name: user.name,
    admissionNumber: user.admissionNumber,
    year: user.year,
    domain: user.domain,
    phoneNumber: user.phoneNumber,
    photo: user.photo,
  });
  //File upload
  const handleFileUploadButton = () => {
    document.querySelector(".imgfile").click();
  };
  const handleFileChange = (e) => {
    if (e.target.files[0].size > 2000000) {
      alert("File should be below 2MB im size");
    } else {
      setUpdatedData({ ...updatedData, [photo]: e.target.files[0] });
      console.log(e.target.files[0]);
    }
  };
  // data change
  const dropDownHandler = (value, name) => {
    setUpdatedData({ ...updatedData, [name]: value });
  };
  const handleFormData = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };
  //    Edit profile form handler
  const editProfileFormHandler = (e) => {
    e.preventDefault();
    axios
      .put(
        `${import.meta.env.VITE_URL}api/user/profile/Updateprofile`,
        updatedData,
        {
          headers: {
            Authorization: sessionStorage.getItem("Authorization"),
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        updateDataFunc();
        // ? Add toast in here
        alert("Profile Updated Successfully");
      })
      .catch((e) => {
        console.log(e);
        // ? Add toast in here
        alert("Some error occured, please try again later");
      });
  };

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
        <form onSubmit={editProfileFormHandler} encType="multipart/form-data">
          <img
            className="w-32 h-32 object-cover rounded-full"
            src={
              updatedData.photo === user.photo
                ? updatedData.photo
                : URL.createObjectURL(file)
            }
          />
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
            icon="account_box"
            type="text"
            placeholder="Enter Your Name"
            onChangeHandler={handleFormData}
            value={updatedData.name}
          />
          <Input
            id="contact"
            label="Contact Number"
            icon="call"
            type="text"
            placeholder="+91 XXXXXXXXXX"
            onChangeHandler={handleFormData}
            value={updatedData.phoneNumber}
          />
          <Input
            id="admission number"
            label="Admission Number"
            icon="badge"
            type="text"
            placeholder="Enter Your Admission Number"
            onChangeHandler={handleFormData}
            value={updatedData.admissionNumber}
          />
          {/* Year */}
          {/* //? Will need to select the year and domain again untill I figure out the select thing  */}
          <Dropdown
            options={["Select an Year", "1", "2"]}
            name="year"
            icon="school"
            label="Year"
            onChangeOptionHandler={dropDownHandler}
          />
          {/* Domain */}
          <Dropdown
            options={[
              "Select a Domain",
              "Programming",
              "Web Club",
              "Android Club",
              "Flutter Dev",
              "Design Club",
              "ML Club",
            ]}
            name="domain"
            icon="cards"
            label="Domain"
            onChangeOptionHandler={dropDownHandler}
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
