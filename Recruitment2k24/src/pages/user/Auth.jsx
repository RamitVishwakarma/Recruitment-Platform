import Header from "../../components/Header.jsx";
import Toast from "../../components/Toast.jsx";
import Popup from "../../components/Popup.jsx";
import app from "../../utils/firebase.js";
// Svgs
import Google from "../../assets/google-logo.svg";

import { z } from "zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

function Auth() {
  const [activeBtn, setactiveBtn] = useState("register");
  const [toolTip, setToolTip] = useState(true);

  // Checking if the user comes after clicking on login button
  let { state } = useLocation();
  if (state === "login") {
    useEffect(() => {
      setactiveBtn(state);
    }, []);
  }
  return (
    <>
      {/* Header section */}
      <div className="lg:h-[90vh]">
        <div className="mx-5 md:mx-20 xl:mx-40 relative">
          <Header>
            <div className="min-w-80 max-md:mt-10">
              <button
                className={`w-40 font-ProductSans duration-300 ease-in-out pr-2 h-12 rounded-full  text-white bg-light-red relative left-5
              ${activeBtn === "register" ? "font-bold" : "opacity-60 "}`}
                onClick={() => setactiveBtn("register")}>
                Register
              </button>
              <button
                className={`w-40 font-ProductSans duration-300 ease-in-out h-12 rounded-full text-white bg-light-red relative right-5
              ${activeBtn === "login" ? "font-bold" : "opacity-60"}`}
                onClick={() => setactiveBtn("login")}>
                Log in
              </button>
            </div>
          </Header>
          {/* ToolTip */}
          {activeBtn === "register" && toolTip ? (
            // ToolTip Start
            <div className="absolute -right-20 -top-20">
              <div className="absolute max-lg:hidden z-30 lg:right-10 top-[9.45rem] xl:right-28 flex justify-between items-center w-44 px-4 py-2 bg-nav-hover rounded-lg">
                <div className="absolute bottom-14 w-0 h-0 border-l-[12px] border-l-white/0 border-b-[12px] border-b-nav-hover border-r-[12px] border-r-white/0"></div>
                <div className="text-grey text-sm">
                  Already registered?
                  <br /> Log in here
                </div>
                <button
                  onClick={() => {
                    setToolTip(false);
                  }}
                  className="flex items-center">
                  <span className="material-symbols-rounded">close</span>
                </button>
              </div>
            </div>
          ) : (
            // ToolTip End
            ""
          )}
          {/* Register and Login Section */}
          {activeBtn === "register" ? <Registration /> : <Login />}
        </div>
      </div>
    </>
  );
}

function Registration() {
  const [toast, setToast] = useState(false);
  const [toastText, setToastText] = useState(false);

  const yearOptions = ["1", "2"];
  const domainOptions = [
    "Programmming",
    "Web Club",
    "Android Club",
    "Flutter Dev",
    "Design Club",
    "ML Club",
  ];

  const [name, SetName] = useState("");
  const [admissionNumber, SetAdmissionNumber] = useState("");
  const [year, SetYear] = useState("");
  const [domain, SetDomain] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const [nameError, setNameError] = useState(false);
  const [admissionNumberError, setAdmissionNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [domainError, setDomainError] = useState(false);

  const nameSchema = z.string().min(1);
  const admissionNumberSchema = z.string().min(6);
  const yearSchema = z.string();
  const domainSchema = z.string();
  const emailSchema = z.string().email();
  const passwordSchema = z.string().min(6);

  const handleName = (e) => {
    SetName(e.target.value);
    nameSchema.safeParse(e.target.value).success
      ? setNameError(false)
      : setNameError(true);
  };
  const handleAdmissionNumber = (e) => {
    SetAdmissionNumber(e.target.value);
    admissionNumberSchema.safeParse(e.target.value).success
      ? setAdmissionNumberError(false)
      : setAdmissionNumberError(true);
  };
  const handleYear = (e) => {
    SetYear(e.target.value);
    yearSchema.safeParse(e.target.value).success
      ? setYearError(false)
      : setYearError(true);
  };
  const handleDomain = (e) => {
    SetDomain(e.target.value);
    domainSchema.safeParse(e.target.value).success
      ? setDomainError(false)
      : setDomainError(true);
  };
  const handleEmail = (e) => {
    SetEmail(e.target.value);
    emailSchema.safeParse(e.target.value).success
      ? setEmailError(false)
      : setEmailError(true);
  };
  const handlePassword = (e) => {
    SetPassword(e.target.value);
    passwordSchema.safeParse(e.target.value).success
      ? setPasswordError(false)
      : setPasswordError(true);
  };

  const registrationSchema = z.object({
    name: nameSchema,
    admissionNumber: admissionNumberSchema,
    year: yearSchema,
    domain: domainSchema,
    email: emailSchema,
    password: passwordSchema,
  });

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setToast(false);
    const registrationData = {
      name,
      email,
      password,
      admissionNumber,
      year,
      domain,
    };
    // On click of submit button, check if any of the fields are empty, if yes, set the error state to true, else false.
    year === "" ? setYearError(true) : setYearError(false);
    domain === "" ? setDomainError(true) : setDomainError(false);
    // Validation of form data
    const validate = registrationSchema.safeParse(registrationData);
    if (!validate.success) {
      validate.error.errors.forEach((error) => {
        switch (error.path[0]) {
          case "name":
            setNameError(true);
            break;
          case "admissionNumber":
            setAdmissionNumberError(true);
            break;
          case "year":
            setYearError(true);
            break;
          case "domain":
            setDomainError(true);
            break;
          case "email":
            setEmailError(true);
            break;
          case "password":
            setPasswordError(true);
            break;
        }
      });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_URL}api/user/auth/signup`,
          registrationData
        )
        .then((res) => {
          if (res.status === 201) {
            // alert("Successfull Signup kindly login");
            setToast(true);
            setToastText("Successfully registered!  You can login now.");
            setTimeout(() => {
              setToast(false);
            }, 4500);
          }
        })
        .catch((e) => {
          // console.log(e);
          if (e.response.status === 409) {
            setToast(true);
            setToastText("User already exists!  Please login.");
            setTimeout(() => {
              setToast(false);
            }, 4500);
          } else {
            setToast(true);
            setToastText("Something went wrong!  Please try again.");
            setTimeout(() => {
              setToast(false);
            }, 4500);
          }
        });
    }
  };
  return (
    <>
      <div className="bg-text-box relative z-10 w-full md:w-10/12 overflow-hidden pl-6 mx-auto py-8 rounded-3xl mb-16">
        <h1
          className={`text-grey text-2xl font-bold text-center mb-8 md:text-4xl lg:text-5xl lg:my-6`}>
          Fill your details correctly!
        </h1>
        {toast && <Toast text={toastText} />}
        <form onSubmit={formSubmitHandler}>
          <div
            className={`flex pr-2 w-full md:pl-0 m-auto flex-wrap gap-x-8 gap-y-4 items-center justify-center`}>
            {/* NAME */}
            <Input
              id="name"
              label="Name"
              icon="account_box"
              type="text"
              placeholder="Enter Your Name"
              onChangeHandler={handleName}
              errorHandler={nameError}
              errorMessage={"Name is required"}
            />
            {/* Admission number */}
            <Input
              id="admission number"
              label="Admission Number"
              icon="badge"
              type="text"
              placeholder="Enter Your Admission Number"
              onChangeHandler={handleAdmissionNumber}
              errorHandler={admissionNumberError}
              errorMessage={"Invalid Number"}
            />
            {/* Year */}
            <Select
              id="year"
              label="Year"
              icon="school"
              selected="Select your year"
              data={yearOptions}
              onChangeHandler={handleYear}
              errorHandler={yearError}
              errorMessage={"Select an Year"}
            />
            {/* Domain */}
            <Select
              id="domain"
              label="Domain"
              icon="cards"
              onChangeHandler={handleDomain}
              selected="Select your preferred domain"
              data={domainOptions}
              errorHandler={domainError}
              errorMessage={"Select a Domain"}
            />
            {/* Email */}
            <Input
              id="email"
              label="Email ID"
              icon="alternate_email"
              type="text"
              placeholder="someone@gmail.com"
              onChangeHandler={handleEmail}
              errorHandler={emailError}
              errorMessage={"Invalid Email"}
            />
            {/* Password */}
            <Input
              id="password"
              label="Set Password"
              icon="key"
              type="password"
              placeholder="8 characters or more"
              onChangeHandler={handlePassword}
              errorHandler={passwordError}
              errorMessage={"Weak Password"}
            />
          </div>
          <div className="flex max-lg:flex-col-reverse justify-center items-center my-10">
            <GoogleAuthentication
              text="Sign Up with Google"
              btnStyle={
                "px-10 py-3 bg-[#fff] flex gap-4 items-center justify-center rounded-lg shadow-sm hover:shadow-md"
              }
            />
            <div className="flex md:hidden gap-4 my-3 justify-center opacity-40">
              <p>----------------------</p>
              <p>OR</p>
              <p>----------------------</p>
            </div>
            <hr className="max-lg:hidden w-16 rotate-90 mr-2 ml-8 border-grey/40" />
            <button
              type="submit"
              className="px-20 w-11/12 md:w-fit max-w-72 py-3 text-grey font-bold text-2xl rounded-lg bg-lime hover:bg-button-hover">
              Register
            </button>
          </div>
        </form>
        <div className="absolute w-96 h-96 -z-10 -right-20 -bottom-40 rounded-full blur-2xl bg-light-blue/10"></div>
        <div className="absolute w-96 h-96 -z-10 -left-20 -top-40 rounded-full blur-2xl bg-light-blue/10"></div>
      </div>
      {/* <GoogleAuthentication text="Sign Up with Google" /> */}
    </>
  );
}

function Login() {
  // Toast states
  const [toast, setToast] = useState(false);
  const [toastText, setToastText] = useState(false);
  // forget Pass states
  const [popup, setPopup] = useState(false);
  const [popupEmailError, setPopupEmailError] = useState(false);
  // Email and password states
  const [email, SetEmail] = useState("");
  const [popupEmail, setPopupEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  // email schema for validation
  const emailSchema = z.string().email();
  // navigate to change pages
  const navigate = useNavigate();
  // Forgot password
  const handlePopupEmail = (e) => {
    setPopupEmail(e.target.value);
  };
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
          setToastText("Reset link sent to your email ID");
          setToast(true);
          if (Toast) {
            setTimeout(() => {
              setToast(false);
            }, 4500);
          }
        }
      })
      .catch((e) => {
        if (e.response.status === 404) {
          setPopupEmailError(true);
        }
        console.log(e);
      });
  };
  // login logic
  const handleEmail = (e) => {
    SetEmail(e.target.value);
    emailSchema.safeParse(e.target.value).success
      ? setEmailError(false)
      : setEmailError(true);
  };
  const handlePassword = (e) => {
    SetPassword(e.target.value);
  };
  // Login
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    // Validation of form data
    const validate = emailSchema.safeParse(loginData.email);
    if (!validate.success) {
      setEmailError(true);
      return;
    }
    axios
      .post(`${import.meta.env.VITE_URL}api/user/auth/login`, loginData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status == 200) {
          sessionStorage.setItem("Authorization", res.headers["authorization"]);
          navigate("/user");
        }
      })
      .catch((e) => {
        if (
          e.response.status === 401 ||
          e.response.status === 404 ||
          e.response.status === 400
        ) {
          setToast(true);
          setToastText("Invalid Credentials! Please try again.");
          setTimeout(() => {
            setToast(false);
          }, 4500);
        } else {
          setToast(true);
          setToastText("Something went wrong! Please Try again. ");
          setTimeout(() => {
            setToast(false);
          }, 4500);
        }
      });
  };

  // login
  return (
    <>
      <div
        className={`bg-text-box md:w-fit mb-10 z-10 mx-auto rounded-3xl px-4 md:px-10 ${
          popup ? "overflow-visible static" : "overflow-hidden relative"
        }`}>
        {/* Toast */}
        {toast && <Toast text={toastText} />}
        <div className="text-grey font-bold text-center mt-2 md:mt-4 pt-8 text-3xl md:text-4xl lg:ml-4 lg:text-3xl">
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
              placeholder="someone@gmail.com"
              onChangeHandler={handleEmail}
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
              placeholder="8 characters or more"
              onChangeHandler={handlePassword}
            />
            <button
              onClick={() => setPopup(true)}
              type="button"
              className=" text-light-blue text-base hover:underline self-end max-sm:mr-12 md:mr-4">
              Forgot Password?
            </button>
            <div className="flex w-10/12 ml-4 flex-col justify-center items-center mb-6 md:my-4">
              <button
                type="submit"
                className="px-16 md:px-24 w-full py-3 mr-5 text-button-text font-bold max-w-72 text-2xl rounded-lg bg-lime hover:bg-button-hover">
                Log&nbsp;In
              </button>
              {/* When button is clicked this will appear */}
              {popup && (
                <Popup>
                  {/* close button */}
                  <button
                    type="button"
                    onClick={() => setPopup(false)}
                    className="absolute right-5 top-5">
                    <span className="material-symbols-rounded text-5xl">
                      close
                    </span>
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
                      className={` bg-text-box border p-3 w-full pl-14 rounded-lg border-grey hover:outline hover:outline-grey hover:outline-2 focus:outline focus:outline-2 focus:outline-light-blue focus:border-light-blue `}
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

              <div className="flex gap-4 mr-5 my-3 justify-center opacity-40">
                <p>----------------------</p>
                <p>OR</p>
                <p>----------------------</p>
              </div>
              <GoogleAuthentication
                text="Log in with Google"
                btnStyle={
                  "bg-[#fff] bottom-4 mr-6 px-10 py-3 flex gap-4 items-center justify-center rounded-lg shadow-sm hover:shadow-md"
                }
              />
            </div>
          </form>
        </div>
        <div className="absolute w-96 h-96 -z-10 left-60 top-64 rounded-full blur-2xl bg-purple/10"></div>
        <div className="absolute w-96 h-96 -z-10 right-60 bottom-64 rounded-full blur-2xl bg-purple/10"></div>
      </div>
    </>
  );
}

function Input({
  grow = true,
  id,
  label,
  icon,
  type,
  placeholder,
  onChangeHandler,
  errorHandler,
  errorMessage,
  value,
}) {
  return (
    <div
      className={`min-w-96
    ${grow ? "xl:w-4/12" : ""} `}>
      <div className="flex justify-between">
        <label className="ml-12" htmlFor={id}>
          {label}
        </label>
        {errorHandler && (
          <div className="text-red sm:mr-3 xl:mr-0 ">{errorMessage}</div>
        )}
      </div>
      <div className="flex gap-3 flex-auto items-center">
        <span className="material-symbols-rounded text-4xl">{icon}</span>
        <input
          className={`
          ${
            errorHandler ? "outline outline-2 outline-red border-red" : ""
          } bg-text-box border p-3 md:min-w-80 min-w-72 ${
            grow ? " xl:w-10/12" : ""
          } rounded-lg border-grey hover:outline hover:outline-grey hover:outline-2 focus:outline focus:outline-2 focus:outline-light-blue focus:border-light-blue `}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={value}
        />
      </div>
    </div>
  );
}

function Select({
  id,
  label,
  icon,
  onChangeHandler,
  selected,
  data,
  errorHandler,
  errorMessage,
  selectedValue,
}) {
  return (
    <div className={"min-w-96 xl:w-4/12 "}>
      <div className="flex justify-between ">
        <label className="ml-12" htmlFor={id}>
          {label}
        </label>
        {errorHandler && (
          <div className="text-red lg:mr-6 ">{errorMessage}</div>
        )}
      </div>
      <div className="flex gap-3 items-center">
        <span className="material-symbols-rounded text-4xl">{icon}</span>
        <select
          className={`${
            errorHandler ? "outline outline-2 outline-red border-red" : ""
          } md:min-w-80 min-w-72 xl:w-10/12 h-12 bg-text-box border p-3 rounded-lg text-grey border-grey hover:outline hover:outline-grey hover:outline-2 focus:outline focus:outline-2 focus:outline-light-blue focus:border-light-blue`}
          name={id}
          onChange={onChangeHandler}
          defaultValue={selectedValue}>
          <option value={selected} disabled>
            {selected}
          </option>
          {data.map((option) => {
            return (
              //cant figure out how to change he border styles
              // Need to use map and filter and create my own one.
              <option
                className="text-grey divide-y-2 bg-text-box border-light-blue"
                key={option}
                value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

function GoogleAuthentication({ text, btnStyle }) {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const Data = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        axios
          .post(`${import.meta.env.VITE_URL}api/user/auth/google`, Data)
          .then((res) => {
            if (res.status == 200) {
              sessionStorage.setItem(
                "Authorization",
                res.headers["authorization"]
              );
              navigate("/user/");
            }
          })
          .catch((e) => {
            console.log(e);
            alert("Something went wrong with Google Authentication");
          });
      })
      .catch((error) => {
        console.log(error);
        alert("Cannot sign in with google try again later");
      });
  };

  return (
    <button type="button" onClick={signInWithGoogle} className={btnStyle}>
      <img src={Google} />
      <span className="text-grey/60">{text}</span>
    </button>
  );
}

export { Auth, Input, Select };
