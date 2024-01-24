import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";

import Name from "../../assets/input-name.svg";
import Admission from "../../assets/input-admission.svg";
import Year from "../../assets/input-year.svg";
import DomainIco from "../../assets/input-domain.svg";
import Email from "../../assets/input-email.svg";
import Password from "../../assets/input-password.svg";
import ArrLeft from "../../assets/arrleft.svg";
import Google from "../../assets/google-logo.svg";
import separator from "../../assets/separator.svg";
import { z } from "zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import app from "../../utils/firebase.js";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export default function RegistrationForm() {
  const [activeBtn, setactiveBtn] = useState("register");

  let { state } = useLocation();
  useEffect(() => {
    if (state) {
      setactiveBtn(state);
    }
  }, [state]);

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
          {/* Register and Login Section */}
          {activeBtn === "register" ? <Registration /> : <Login />}
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
        <div className="flex justify-center">
          <div className="mt-16">
            <GoogleAuthentication text="Sign Up with Google" />
          </div>
          {/* Add in separator */}
          <img src={separator} className="ml-8 mr-3 max-md:hidden" />
          <div>
            <button
              type="submit"
              className="my-14 text-button-text font-bold text-2xl rounded-lg bg-lime  hover:bg-button-hover px-16 py-4">
              Register
            </button>
          </div>
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
      <h1
        className={`text-grey text-3xl font-bold text-center md:text-4xl lg:text-5xl m-8 md:mt-10 lg:mt-16`}>
        Welcome back!
      </h1>

      <form onSubmit={formSubmitHandler} autoComplete="off">
        <div
          className={`flex m-auto flex-wrap gap-4 items-center justify-center`}>
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
            label="Password"
            icon={Password}
            type="password"
            placeholder="6 characters or more"
            onChangeHandler={handlePassword}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="my-14 text-button-text font-bold text-2xl rounded-lg bg-lime  hover:bg-button-hover px-16 py-4">
            Log In
          </button>
        </div>
      </form>
    </>
  );
}

function Input({
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
    <div className="w-96 2xl:w-4/12 ">
      <div className="flex justify-between ">
        <label className="ml-12" htmlFor={id}>
          {label}
        </label>
        {errorHandler && <div className="text-red mr-6 ">{errorMessage}</div>}
      </div>
      <div className="flex gap-3 items-center">
        <img className="w-8" src={icon} />
        <input
          className={`
          ${
            errorHandler ? "outline outline-2 outline-red border-red" : ""
          } bg-text-box border p-3 w-80 2xl:w-11/12 rounded-lg border-grey hover:outline hover:outline-grey hover:outline-2 focus:outline focus:outline-2 focus:outline-light-blue focus:border-light-blue `}
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
    <div className={"w-96 2xl:w-4/12 "}>
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
          } w-80 2xl:w-11/12 h-12 border p-3  rounded-lg text-grey border-grey hover:outline hover:outline-grey hover:outline-2 focus:outline focus:outline-2 focus:outline-light-blue focus:border-light-blue`}
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

function GoogleAuthentication({ text }) {
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
            console.log(res);
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
        alert("Cannot sign in with google error");
      });
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="px-4 py-3 flex gap-4 items-center justify-center rounded-lg shadow-sm">
      <img src={Google} />
      <span className="text-grey/60">{text}</span>
    </button>
  );
}
