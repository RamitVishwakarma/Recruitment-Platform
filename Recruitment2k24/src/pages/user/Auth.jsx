import Header from "../../components/Header.jsx";
import Toast from "../../components/Toast.jsx";
import Popup from "../../components/Popup.jsx";
import app from "../../utils/firebase.js";
// Svgs
import Name from "../../assets/input-name.svg";
import Admission from "../../assets/input-admission.svg";
import Year from "../../assets/input-year.svg";
import DomainIco from "../../assets/input-domain.svg";
import Email from "../../assets/input-email.svg";
import Password from "../../assets/input-password.svg";
import Google from "../../assets/google-logo.svg";
import Close from "../../assets/close.svg";
import ForgotEmail from "../../assets/forgot-email.svg?react";

import { z } from "zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

function Auth() {
  const [activeBtn, setactiveBtn] = useState("register");
  const [toolTip, setToolTip] = useState(true);

  let { state } = useLocation();
  if (state === "login") {
    useEffect(() => {
      setactiveBtn(state);
    }, []);
  }
  return (
    <>
      {/* Header section */}
      <div
        className={`lg:h-screen max-lg:bg-none bg-no-repeat ${
          activeBtn === "register"
            ? "bg-reg-bg bg-right-bottom"
            : "bg-login-bg bg-left-bottom"
        }`}>
        <div className="mx-5 md:mx-20 xl:mx-40">
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
            <div className="max-lg:hidden absolute lg:right-10 top-[9.45rem] xl:right-28 flex justify-between items-center w-44 px-4 py-2 bg-nav-hover rounded-lg z-10">
              <div className="absolute bottom-14 w-0 h-0 border-l-[12px] border-l-white/0 border-b-[12px] border-b-nav-hover border-r-[12px] border-r-white/0"></div>
              <div className="text-grey text-sm">
                Already registered?
                <br /> Log in here
              </div>
              <button
                onClick={() => {
                  setToolTip(false);
                }}>
                <img className="w-3" src={Close} />
              </button>
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
  const [Domain, SetDomain] = useState("");
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
    Domain: domainSchema,
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
      Domain,
    };
    // On click of submit button, check if any of the fields are empty, if yes, set the error state to true, else false.
    year === "" ? setYearError(true) : setYearError(false);
    Domain === "" ? setDomainError(true) : setDomainError(false);
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
          case "Domain":
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
        .post(`${import.meta.env.VITE_URL}user/auth/signup`, registrationData)
        .then((res) => {
          if (res.status === 201) {
            // alert("Successfull Signup kindly login");
            setToast(true);
            setToastText("Successfully registered!  You can login now.");
            setTimeout(() => {
              setToast("false");
            }, 4500);
          }
        })
        .catch((e) => {
          // console.log(e);
          if (e.response.status === 409) {
            setToast(true);
            setToastText("User already exists!  Please login.");
            setTimeout(() => {
              setToast("false");
            }, 4500);
          } else {
            setToast(true);
            setToastText("Something went wrong!  Please try again.");
            setTimeout(() => {
              setToast("false");
            }, 4500);
          }
        });
    }
  };
  return (
    <>
      <h1
        className={`text-grey text-3xl font-bold text-center md:text-4xl lg:text-5xl m-8 md:mt-10 lg:mt-16 xl:mt-[8vh]`}>
        Fill your details correctly!
      </h1>

      {toast && <Toast text={toastText} />}

      <form onSubmit={formSubmitHandler}>
        <div
          className={`flex m-auto flex-wrap gap-4 items-center justify-center`}>
          {/* NAME */}
          <Input
            id="name"
            label="Name"
            icon={Name}
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
            icon={Admission}
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
            icon={Year}
            selected="Select your year"
            data={yearOptions}
            onChangeHandler={handleYear}
            errorHandler={yearError}
            errorMessage={"Select an Year"}
          />
          {/* Domain */}
          <Select
            id="Domain"
            label="Domain"
            icon={DomainIco}
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
            icon={Email}
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
            icon={Password}
            type="password"
            placeholder="6 characters or more"
            onChangeHandler={handlePassword}
            errorHandler={passwordError}
            errorMessage={"Password must be strong"}
          />
        </div>
        <div className="flex max-lg:flex-col-reverse justify-center items-center my-10">
          <GoogleAuthentication
            text="Sign Up with Google"
            btnStyle={
              "px-10 py-3 bg-[#fff] flex gap-4 items-center justify-center rounded-lg shadow-sm hover:shadow-md"
            }
          />

          <hr className="lg:hidden w-52 mt-3 mb-6 border-grey/40" />
          <div className="lg:hidden relative top-5 text-grey/60 px-3 bg-white">
            OR
          </div>

          <hr className="max-lg:hidden w-16 rotate-90 mr-2 ml-8 border-grey/40" />
          <button
            type="submit"
            className="px-20 py-4 text-button-text font-bold text-2xl rounded-lg bg-lime hover:bg-button-hover">
            Register
          </button>
        </div>
      </form>
      {/* <GoogleAuthentication text="Sign Up with Google" /> */}
    </>
  );
}

function Login() {
  const [toast, setToast] = useState(false);
  const [toastText, setToastText] = useState(false);
  // forget Pass states
  const [popup, setPopup] = useState(false);
  const [popupEmailError, setPopupEmailError] = useState(false);

  const [email, SetEmail] = useState("");
  const [popupEmail, setPopupEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const emailSchema = z.string().email();

  const navigate = useNavigate();

  // Saving the data coming from the backend into the recoil state
  const [user, setUser] = useRecoilState(userAtom);
  // Forgot password
  const handlePopupEmail = (e) => {
    setPopupEmail(e.target.value);
  };

  const handleForgotPassword = (e) => {
    const forgetPassData = {
      email: popupEmail,
    };
    axios
      .post(
        `${import.meta.env.VITE_URL}user/auth/forget-password`,
        forgetPassData
      )
      .then((res) => {
        if (res.status === 200) {
          setToastText("Reset link sent to your email ID");
          setToast(true);
          if (Toast) {
            setTimeout(() => {
              setToast("false");
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
  // normal login
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
    } else {
      axios
        .post(`${import.meta.env.VITE_URL}user/auth/login`, loginData, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            localStorage.setItem("Authorization", res.headers["authorization"]);
            localStorage.setItem("Name", res.data.name);
            localStorage.setItem("Photo", res.data.photo);
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
              setToast("false");
            }, 4500);
          } else {
            setToast(true);
            setToastText("Something went wrong! Please Try again. ");
            setTimeout(() => {
              setToast("false");
            }, 4500);
          }
        });
    }
  };
  return (
    <>
      <div className="lg:flex lg:justify-between">
        {/* Toast */}
        {toast && <Toast text={toastText} />}
        <div
          className={`text-grey font-bold text-center mt-8 md:mt-10 lg:mt-32 text-3xl md:text-4xl lg:ml-10 lg:text-8xl xl:text-8xl 2xl:text-9xl`}>
          Welcome
          <br className="max-lg:hidden" /> back!
        </div>
        <div>
          <form
            className="w-96 mx-auto flex flex-wrap mt-5 lg:mt-20 gap-4 items-center justify-center"
            onSubmit={formSubmitHandler}>
            {/* Email */}
            <Input
              grow={false}
              id="email"
              label="Email ID"
              icon={Email}
              type="text"
              placeholder="someone@gmail.com"
              onChangeHandler={handleEmail}
              errorHandler={emailError}
              errorMessage={"Invalid Email"}
            />
            {/* Password */}
            <Input
              grow={false}
              id="password"
              label="Password"
              icon={Password}
              type="password"
              placeholder="6 characters or more"
              onChangeHandler={handlePassword}
            />
            <div className="max-lg:hidden flex mr-5 mt-2 items-center justify-end">
              <button
                onClick={() => setPopup(true)}
                type="button"
                className=" text-light-blue text-sm ml-8">
                Forgot Password?
              </button>
            </div>
            <div className="flex flex-col justify-center items-center my-8">
              <button
                type="submit"
                className="px-24 py-4 text-button-text font-bold text-2xl rounded-lg bg-lime hover:bg-button-hover">
                Log In
              </button>

              <div className="lg:hidden flex mt-5 items-center justify-center">
                <button
                  type="button"
                  onClick={() => setPopup(true)}
                  className="lg:mr-8 text-light-blue text-sm">
                  Forgot Password?
                </button>
              </div>
              {/* When button is clicked this will appear */}
              {popup && (
                <Popup>
                  <button
                    type="button"
                    onClick={() => setPopup(false)}
                    className="absolute w-6 right-5 top-5">
                    <img className="w-full" src={Close} />
                  </button>
                  <div className="text-grey mt-5 max-md:w-8/12 font-bold text-center text-4xl">
                    Reset your password
                  </div>
                  <div className="text-light-blue mt-5 font-bold text-center text-2xl">
                    Enter your registered Email ID
                  </div>
                  {/* Input box */}
                  <div className=" relative w-11/12 mt-5 flex items-center justify-center">
                    <div className="absolute left-6 lg:left-8 xl:left-10 2xl:left-11 mx-2 2xl:mx-3 w-9 h-9 bg-light-blue/30 rounded-full flex items-center justify-center">
                      <ForgotEmail className="w-6" />
                    </div>
                    <input
                      className={` bg-text-box border p-3 pl-16 w-11/12 rounded-lg border-grey hover:outline hover:outline-grey hover:outline-2 focus:outline focus:outline-2 focus:outline-light-blue focus:border-light-blue `}
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

              <hr className="w-52 mt-6 mb-3 border-grey/40" />
              <div className="relative bottom-6 text-grey/60 px-3 bg-white">
                OR
              </div>
              <GoogleAuthentication
                text="Log in with Google"
                btnStyle={
                  "relative bg-[#fff] bottom-4 px-10 py-3 flex gap-4 items-center justify-center rounded-lg shadow-sm hover:shadow-md"
                }
              />
            </div>
          </form>
        </div>
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
}) {
  return (
    <div className={`min-w-96 ${grow ? "xl:w-4/12" : ""} `}>
      <div className="flex justify-between">
        <label className="ml-12" htmlFor={id}>
          {label}
        </label>
        {errorHandler && (
          <div className="text-red sm:mr-6 xl:mr-2 2xl:mr-4">
            {errorMessage}
          </div>
        )}
      </div>
      <div className="flex gap-3 flex-auto items-center">
        <img className="w-8" src={icon} />
        <input
          className={`
          ${
            errorHandler ? "outline outline-2 outline-red border-red" : ""
          } bg-text-box border p-3 min-w-80 ${
            grow ? " xl:w-11/12" : ""
          } rounded-lg border-grey hover:outline hover:outline-grey hover:outline-2 focus:outline focus:outline-2 focus:outline-light-blue focus:border-light-blue `}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          onInput={onChangeHandler}
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
        <img className="w-8" src={icon} />
        <select
          className={`${
            errorHandler ? "outline outline-2 outline-red border-red" : ""
          } min-w-80 xl:w-11/12 h-12 border p-3  rounded-lg text-grey border-grey hover:outline hover:outline-grey hover:outline-2 focus:outline focus:outline-2 focus:outline-light-blue focus:border-light-blue`}
          name={id}
          onChange={onChangeHandler}
          defaultValue={selected}>
          <option value={selected} disabled>
            {selected}
          </option>
          {data.map((option) => {
            return (
              //cant figure out how to change he border styles
              // Need to use map and filter and create my own one.
              <option
                className="text-grey bg-white border-light-blue"
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
          .post(`${import.meta.env.VITE_URL}user/auth/google`, Data)
          .then((res) => {
            if (res.status == 200) {
              localStorage.setItem(
                "Authorization",
                res.headers["authorization"]
              );
              navigate("/user");
              // Also change the global atom state's photo and name
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

export { Auth, Input };