import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";
import Name from "../../assets/input-name.svg";
import Admission from "../../assets/input-admission.svg";
import Year from "../../assets/input-year.svg";
import DomainIco from "../../assets/input-domain.svg";
import Email from "../../assets/input-email.svg";
import Password from "../../assets/input-password.svg";
import { z } from "zod";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RegistrationForm() {
  const [activeBtn, setactiveBtn] = useState("register");

  useEffect(() => {
    console.log();
  });
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

  const registrationSchema = z.object({
    name: nameSchema,
    admissionNumber: admissionNumberSchema,
    year: yearSchema,
    Domain: domainSchema,
    email: emailSchema,
    password: passwordSchema,
  });

  const handleName = async (e) => {
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

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (activeBtn === "register") {
      const registrationData = {
        name,
        email,
        password,
        admissionNumber,
        year,
        Domain,
      };
      year === "" ? setYearError(true) : setYearError(false);
      Domain === "" ? setDomainError(true) : setDomainError(false);
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
            if (e.response.status === 409) {
              alert("User already exists");
            } else {
              alert("Something went wrong");
            }
          });
      }
    }
    if (activeBtn === "login") {
      const loginData = {
        email,
        password,
      };
      // console.log(loginData);
      axios
        .post(`${import.meta.env.VITE_URL}user/auth/login`, loginData, {
          withCredentials: true,
        })
        .then((res) => {
          // console.log(res);
          if (res.status == 200) {
            localStorage.setItem("Authorization", res.headers["authorization"]);
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
  // Need to do transitions
  // need to change the dropdown menu styles
  // Handle the input and send it to the backend for saving purposes
  // And the error message handling
  return (
    <>
      <div
        className={`h-screen bg-no-repeat  ${
          activeBtn === "register"
            ? "bg-reg-bg bg-right-bottom"
            : "bg-login-bg bg-left-bottom"
        }`}>
        <Navbar />
        <div className="mx-40">
          <Header>
            <div>
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

          <h1
            className={`text-grey text-5xl font-bold text-center m-8 mt-16 ${
              activeBtn === "login" ? "" : ""
            }`}>
            {activeBtn === "register"
              ? "Fill your details correctly!"
              : "Welcome back!"}
          </h1>

          {/* Form */}
          {/* Turned off autocomplete coz it was causing issues with the onchange handler if i get time i will fix it */}
          <form onSubmit={formSubmitHandler} autoComplete="off">
            <div
              className={`flex w-3/4 m-auto flex-wrap gap-4 items-center justify-center
              ${activeBtn === "login" ? "flex-col" : ""}`}>
              {/* NAME */}
              <Input
                hide={activeBtn === "login" ? true : false}
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
                hide={activeBtn === "login" ? true : false}
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
                hide={activeBtn === "login" ? true : false}
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
                hide={activeBtn === "login" ? true : false}
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
                errorDisplay={false}
                id="email"
                label="Email ID"
                icon={Email}
                type="email"
                placeholder="vishwakarmaramit@gmail.com"
                onChangeHandler={handleEmail}
                errorHandler={emailError}
                errorMessage={"Invalid Email"}
              />
              {/* Password */}
              <Input
                errorDisplay={false}
                id="password"
                label="Password"
                icon={Password}
                type="password"
                placeholder="6 characters or more"
                onChangeHandler={handlePassword}
                errorHandler={passwordError}
                errorMessage={"Password must be strong"}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-10 text-button-text font-bold text-2xl rounded-lg bg-lime  hover:bg-button-hover px-16 py-4">
                {activeBtn === "register" ? "Register" : "Log In"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Input({
  errorDisplay = true,
  hide = false,
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
    <div className={`w-96 ${hide ? "hidden" : ""}`}>
      <div className="flex justify-between ">
        <label className="ml-12" htmlFor={id}>
          {label}
        </label>
        {errorHandler && errorDisplay && (
          <div className="text-red mr-6 ">{errorMessage}</div>
        )}
      </div>
      <div className="flex gap-3 items-center">
        <img className="w-8" src={icon} />
        <input
          className={`
          ${
            errorHandler && errorDisplay
              ? "outline outline-2 outline-red border-red"
              : ""
          }
            border p-3 w-80 rounded-lg border-grey hover:outline hover:outline-grey hover:outline-2 focus:outline focus:outline-2 focus:outline-light-blue focus:border-light-blue `}
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
  hide,
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
    <div className={`w-96 ${hide ? "hidden" : ""}`}>
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
          } w-80 h-12 border p-3  rounded-lg text-grey border-grey hover:outline hover:outline-grey hover:outline-2 focus:outline focus:outline-2 focus:outline-light-blue focus:border-light-blue`}
          name={id}
          onChange={onChangeHandler}
          defaultValue={selected}>
          <option value={selected} disabled>
            {selected}
          </option>
          {data.map((option) => {
            return (
              //cant figure out how to change he border styles
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
