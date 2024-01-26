import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";
import Toast from "../../components/Toast.jsx";
import app from "../../utils/firebase.js";
// Svgs
import Name from "../../assets/input-name.svg";
import Admission from "../../assets/input-admission.svg";
import Year from "../../assets/input-year.svg";
import DomainIco from "../../assets/input-domain.svg";
import Email from "../../assets/input-email.svg";
import Password from "../../assets/input-password.svg";
import ArrLeft from "../../assets/arrleft.svg";
import Google from "../../assets/google-logo.svg";
import Close from "../../assets/close.svg";

import { z } from "zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

function Auth() {
  const [activeBtn, setactiveBtn] = useState("register");
  const [toolTip, setToolTip] = useState(true);

  let { state } = useLocation();
  if (state) {
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
        <Navbar>
          <div>
            <Link to="/">
              <button className="flex items-center justify-center px-8 py-1 rounded-lg bg-lime text-grey hover:bg-button-hover">
                <span>
                  <img src={ArrLeft} />
                </span>
                <div className="p-1 text-xl text-button-text font-bold">
                  Back
                </div>
              </button>
            </Link>
          </div>
        </Navbar>

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
            <div className="max-lg:hidden absolute lg:right-10 top-[9.45rem] xl:right-28 flex justify-between items-center w-44 px-4 py-2 bg-light-blue/30 rounded-lg z-10">
              <div className="absolute bottom-14 w-0 h-0 border-l-[12px] border-l-white/0 border-b-[12px] border-b-light-blue/30 border-r-[12px] border-r-white/0"></div>
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
          <Toast text="Your project has been submitted successfully" />
        </div>
      </div>
      <Footer />
    </>
  );
}

function Registration() {
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
    nameSchema.safeParse(name).success
      ? setNameError(false)
      : setNameError(true);
  };
  const handleAdmissionNumber = (e) => {
    SetAdmissionNumber(e.target.value);
    admissionNumberSchema.safeParse(admissionNumber).success
      ? setAdmissionNumberError(false)
      : setAdmissionNumberError(true);
  };
  const handleYear = (e) => {
    SetYear(e.target.value);
    yearSchema.safeParse(year).success
      ? setYearError(false)
      : setYearError(true);
  };
  const handleDomain = (e) => {
    SetDomain(e.target.value);
    domainSchema.safeParse(Domain).success
      ? setDomainError(false)
      : setDomainError(true);
  };
  const handleEmail = (e) => {
    SetEmail(e.target.value);
    emailSchema.safeParse(email).success
      ? setEmailError(false)
      : setEmailError(true);
  };
  const handlePassword = (e) => {
    SetPassword(e.target.value);
    passwordSchema.safeParse(password).success
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
            alert("Successfull Signup kindly login");
            setactiveBtn("login");
          }
        })
        .catch((e) => {
          console.log(e);
          e.response.status === 409
            ? alert("User already exists")
            : alert("Something went wrong");
        });
    }
  };
  return (
    <>
      <h1
        className={`text-grey text-3xl font-bold text-center md:text-4xl lg:text-5xl m-8 md:mt-10 lg:mt-16`}>
        Fill your details correctly!
      </h1>

      <form onSubmit={formSubmitHandler} autoComplete="off">
        <div
          className={`flex m-auto flex-wrap gap-4 items-center justify-center`}>
          {/* NAME */}
          <Input
            id="name"
            label="Name"
            icon={Name}
            type="text"
            placeholder="Ramit Vishwakarma"
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
            placeholder="22CSDS064"
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
        <div className="flex max-md:flex-col-reverse justify-center items-center my-10">
          <GoogleAuthentication
            text="Sign Up with Google"
            btnStyle={
              "px-10 py-3 flex gap-4 items-center justify-center rounded-lg shadow-sm hover:shadow-md"
            }
          />

          <hr className="md:hidden w-52 mt-3 mb-6 border-grey/40" />
          <div className="md:hidden relative top-5 text-grey/60 px-3 bg-white">
            OR
          </div>

          <hr className="max-md:hidden w-16 rotate-90 mr-2 ml-8 border-grey/40" />
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
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const emailSchema = z.string().email();

  const handleEmail = (e) => {
    SetEmail(e.target.value);
    emailSchema.safeParse(email).success
      ? setEmailError(false)
      : setEmailError(true);
  };
  const handlePassword = (e) => {
    SetPassword(e.target.value);
  };

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
          if (res.status == 200) {
            localStorage.setItem("Authorization", res.headers["authorization"]);
            // alert("Successfull Login");
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
    }
  };
  return (
    <>
      <div className="lg:flex lg:justify-between">
        <div
          className={`text-grey text-3xl lg:mt-32 font-bold text-center md:text-5xl lg:text-8xl xl:text-9xl`}>
          Welcome
          <br className="max-lg:hidden" /> back!
        </div>
        <div>
          <form
            className="w-96 mx-auto flex flex-wrap mt-5 lg:mt-20 gap-4 items-center justify-center"
            onSubmit={formSubmitHandler}
            autoComplete="off">
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
              <button className=" text-light-blue text-sm ">
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
                <button className=" text-light-blue text-sm ">
                  Forgot Password?
                </button>
              </div>

              <hr className="w-52 mt-6 mb-3 border-grey/40" />
              <div className="relative bottom-6 text-grey/60 px-3 bg-white">
                OR
              </div>
              <GoogleAuthentication
                text="Log in with Google"
                btnStyle={
                  " relative bottom-4 px-10 py-3 flex gap-4 items-center justify-center rounded-lg shadow-sm hover:shadow-md"
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
    <div className={`w-96 ${grow ? "xl:w-4/12" : ""} `}>
      <div className="flex justify-between ">
        <label className="ml-12" htmlFor={id}>
          {label}
        </label>
        {errorHandler && <div className="text-red mr-6 ">{errorMessage}</div>}
      </div>
      <div className="flex gap-3 flex-auto items-center">
        <img className="w-8" src={icon} />
        <input
          className={`
          ${
            errorHandler ? "outline outline-2 outline-red border-red" : ""
          } bg-text-box border p-3 w-80 ${
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
    <div className={"w-96 xl:w-4/12 "}>
      <div className="flex justify-between ">
        <label className="ml-12" htmlFor={id}>
          {label}
        </label>
        {errorHandler && <div className="text-red mr-6 ">{errorMessage}</div>}
      </div>
      <div className="flex gap-3 items-center">
        <img className="w-8" src={icon} />
        <select
          className={`${
            errorHandler ? "outline outline-2 outline-red border-red" : ""
          } w-80 xl:w-11/12 h-12 border p-3  rounded-lg text-grey border-grey hover:outline hover:outline-grey hover:outline-2 focus:outline focus:outline-2 focus:outline-light-blue focus:border-light-blue`}
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
    <button onClick={signInWithGoogle} className={btnStyle}>
      <img src={Google} />
      <span className="text-grey/60">{text}</span>
    </button>
  );
}

export { Auth, Input };
