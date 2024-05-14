import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { z } from "zod";
import Input from "../../../components/Input";
import Popup from "../../../components/Popup";
import GoogleAuthentication from "./GoogleAuthentication";

export default function Login() {
  // ? All states belong to forget password popup
  const [popup, setPopup] = useState(false);
  const [popupEmailError, setPopupEmailError] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [popupEmail, setPopupEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  // email schema for validation
  const emailSchema = z.string().email();
  // navigate to change pages
  const navigate = useNavigate();
  // Forgot password
  const handlePopupEmail = (e) => {
    setPopupEmail(e.target.value);
  };
  // Forgot password
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const forgetPassData = {
      email: popupEmail,
    };
    axios
      .post(
        `${import.meta.env.VITE_URL}api/user/auth/forget-password`,
        forgetPassData
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Password reset link has been sent to your email");
        }
      })
      .catch((e) => {
        if (e.response.status === 404) {
          setPopupEmailError(true);
        }
      });
  };
  // login logic
  const handleLoginForm = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      emailSchema.safeParse(e.target.value).success
        ? setEmailError(false)
        : setEmailError(true);
    }
  };
  // Login
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    // Validation of form data
    const validate = emailSchema.safeParse(loginData.email);
    if (!validate.success) {
      setEmailError(true);
      return;
    }
    // Sending data to backend
    axios
      .post(`${import.meta.env.VITE_URL}api/user/auth/login`, loginData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status == 200) {
          console.log(res);
          sessionStorage.setItem("Authorization", res.headers["authorization"]);
          sessionStorage.setItem("userId", res.data._id);
          sessionStorage.setItem("name", res.data.name);
          sessionStorage.setItem("photo", res.data.photo);
          sessionStorage.setItem("domain", res.data.domain);
          sessionStorage.setItem("year", res.data.year);
          navigate("/user");
        }
      })
      .catch((e) => {
        if (
          e.response.status === 401 ||
          e.response.status === 404 ||
          e.response.status === 400
        ) {
          alert("Invalid Credentials");
        } else {
          alert("Something went wrong");
        }
      });
  };

  // login
  return (
    <>
      {/* When button is clicked this will appear */}
      {popup && (
        <Popup>
          {/* close button */}
          <button
            type="button"
            onClick={() => setPopup(false)}
            className="absolute right-5 top-5">
            <span className="material-symbols-rounded text-5xl">close</span>
          </button>
          <div className="text-grey mt-10 max-md:w-8/12 font-bold text-center text-4xl">
            Reset your password
          </div>
          <div className="text-light-blue mt-8 font-bold text-center text-2xl">
            Enter your registered Email ID
          </div>
          {/* Input box */}
          <div className=" relative w-96 mt-2 flex items-center justify-center">
            <div className="absolute left-2 w-8 h-8 bg-light-blue/30 grid place-items-center rounded-full">
              <span className="material-symbols-rounded text-2xl">
                alternate_email
              </span>
            </div>
            <input
              className={` bg-text-box shadow-xl p-3 w-full pl-14 rounded-lg focus:outline focus:outline-2 focus:outline-light-blue `}
              type="text"
              id="email"
              name="email"
              placeholder="someone@gmail.com"
              onInput={handlePopupEmail}
            />
          </div>
          <div className="text-md text-grey/60">
            A password reset link will be sent to this email ID
          </div>
          <div
            className={`${
              popupEmailError ? "" : "hidden"
            } text-red text-lg flex  gap-2 items-center justify-center`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 30 30"
              fill="none">
              <path
                d="M15.0011 22.125C15.2257 22.125 15.4136 22.0491 15.5648 21.8974C15.7161 21.7457 15.7917 21.5576 15.7917 21.3333V14.2083C15.7917 13.984 15.7157 13.796 15.5637 13.6443C15.4118 13.4925 15.2236 13.4167 14.9989 13.4167C14.7743 13.4167 14.5864 13.4925 14.4352 13.6443C14.284 13.796 14.2083 13.984 14.2083 14.2083V21.3333C14.2083 21.5576 14.2843 21.7457 14.4363 21.8974C14.5882 22.0491 14.7764 22.125 15.0011 22.125ZM15 11.1635C15.2761 11.1635 15.5075 11.0701 15.6943 10.8833C15.881 10.6966 15.9743 10.4652 15.9743 10.1891C15.9743 9.91303 15.881 9.68162 15.6943 9.49487C15.5075 9.30811 15.2761 9.21474 15 9.21474C14.7239 9.21474 14.4925 9.30811 14.3057 9.49487C14.119 9.68162 14.0257 9.91303 14.0257 10.1891C14.0257 10.4652 14.119 10.6966 14.3057 10.8833C14.4925 11.0701 14.7239 11.1635 15 11.1635ZM15.0053 29.25C13.0348 29.25 11.1821 28.8761 9.44741 28.1282C7.71268 27.3804 6.2037 26.3654 4.92046 25.0834C3.63725 23.8014 2.62137 22.2938 1.87282 20.5607C1.12427 18.8276 0.75 16.9758 0.75 15.0053C0.75 13.0348 1.12392 11.1821 1.87175 9.44741C2.61961 7.71268 3.63456 6.2037 4.91658 4.92046C6.19861 3.63725 7.70616 2.62137 9.43925 1.87282C11.1724 1.12427 13.0242 0.75 14.9947 0.75C16.9652 0.75 18.8179 1.12392 20.5526 1.87175C22.2873 2.61961 23.7963 3.63456 25.0795 4.91658C26.3628 6.19861 27.3786 7.70616 28.1272 9.43925C28.8757 11.1724 29.25 13.0242 29.25 14.9947C29.25 16.9652 28.8761 18.8179 28.1282 20.5526C27.3804 22.2873 26.3654 23.7963 25.0834 25.0795C23.8014 26.3628 22.2938 27.3786 20.5607 28.1272C18.8276 28.8757 16.9758 29.25 15.0053 29.25ZM15 27.6667C18.5361 27.6667 21.5312 26.4396 23.9854 23.9854C26.4396 21.5312 27.6667 18.5361 27.6667 15C27.6667 11.4639 26.4396 8.46875 23.9854 6.01458C21.5312 3.56042 18.5361 2.33333 15 2.33333C11.4639 2.33333 8.46875 3.56042 6.01458 6.01458C3.56042 8.46875 2.33333 11.4639 2.33333 15C2.33333 18.5361 3.56042 21.5312 6.01458 23.9854C8.46875 26.4396 11.4639 27.6667 15 27.6667Z"
                fill="#EB6B6B"
              />
            </svg>
            This Email is not registered
          </div>
          <button
            onClick={handleForgotPassword}
            className="px-14 py-4 text-button-text font-bold text-2xl rounded-lg bg-lime hover:bg-button-hover">
            Send
          </button>
        </Popup>
      )}
      {/* Popup end */}
      <div
        className={`w-fit mb-10 z-10 mx-auto rounded-3xl px-4 md:px-10 ${
          popup ? "overflow-visible static" : "overflow-hidden relative"
        }`}>
        <div className="text-grey font-bold text-center mt-2 md:mt-4 pt-8 text-3xl md:text-3xl lg:ml-4 lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Welcome back!
        </div>
        <div className="z-10 pb-10">
          <form
            className="md:w-full flex-col mx-auto flex flex-wrap mt-8 gap-4 items-center justify-center"
            onSubmit={formSubmitHandler}>
            {/* Email */}
            <Input
              grow={false}
              id="email"
              label="Email ID"
              icon="alternate_email"
              type="text"
              placeholder="example@gmail.com"
              onChangeHandler={handleLoginForm}
              errorHandler={emailError}
              errorMessage={"Invalid Email"}
              className="w-1/2 md:w-full"
            />
            {/* Password */}
            <Input
              grow={false}
              id="password"
              label="Password"
              icon="key"
              type="password"
              placeholder="Enter your password"
              onChangeHandler={handleLoginForm}
            />
            <button
              onClick={() => setPopup(true)}
              type="button"
              className=" text-light-blue text-base hover:underline self-end mr-6 max-sm:mr-12">
              Forgot Password?
            </button>
            <div className="flex w-10/12 ml-4 p-2 flex-col justify-center items-center mb-6 md:my-4">
              <button
                type="submit"
                className="px-16 md:px-24 w-full py-3 -mr-5 text-button-text font-bold max-w-72 text-2xl rounded-lg bg-lime hover:bg-button-hover shadow-lg">
                Log&nbsp;In
              </button>
              <div className="flex gap-4 -mr-5 my-3 justify-center opacity-40">
                <p>----------------------</p>
                <p>OR</p>
                <p>----------------------</p>
              </div>
              <GoogleAuthentication
                text="Log in with Google"
                btnStyle={
                  "bg-[#fff] bottom-4 -mr-6 px-10 py-3 flex gap-4 items-center justify-center rounded-lg shadow-xl hover:shadow-2xl"
                }
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
