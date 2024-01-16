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
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegistrationForm() {
  const [activeBtn, setactiveBtn] = useState("register");
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

  const registrationSchema = z.object({
    name: z.string().min(1),
    admissionNumber: z.string().min(6),
    year: z.string(),
    Domain: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const handleName = (e) => {
    SetName(e.target.value);
  };
  const handleAdmissionNo = (e) => {
    SetAdmissionNumber(e.target.value);
  };
  const handleYear = (e) => {
    SetYear(e.target.value);
  };
  const handleDomain = (e) => {
    SetDomain(e.target.value);
  };
  const handleEmail = (e) => {
    SetEmail(e.target.value);
  };
  const handlePassword = (e) => {
    SetPassword(e.target.value);
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
      // console.log(registrationData);
      registrationSchema.safeParse(registrationData);

      axios
        .post("http://localhost:3000/api/user/auth/signup", registrationData)
        .then((res) => {
          if (res.status === 201) {
            alert("Successfull Signup kindly login");
            setactiveBtn("login");
          }
        })
        .catch((e) => console.log(e));
    }
    if (activeBtn === "login") {
      const loginData = {
        email,
        password,
      };
      axios
        .post("http://localhost:3000/api/user/auth/login", loginData)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            localStorage.setItem("Authorization", res.headers["authorization"]);
          }
        })
        .catch((e) => console.log(e));
    }
  };

  // Need to do transitions
  // need to change the dropdown menu styles
  // Handle the input and send it to the backend for saving purposes
  // And the error message handling
  return (
    <>
      <div className="h-screen">
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

          <h1 className="text-grey text-5xl font-bold text-center m-8 mt-16">
            {activeBtn === "register"
              ? "Fill your details correctly!"
              : "Welcome back!"}
          </h1>

          <form onSubmit={formSubmitHandler}>
            <div
              className={`flex w-3/4 m-auto flex-wrap gap-4 items-center justify-center
          ${activeBtn === "login" ? "flex-col" : ""}`}>
              {/* NAME */}
              <div
                className={`w-96 ${activeBtn === "register" ? "" : "hidden"}`}>
                <label className="ml-12" htmlFor="name">
                  Name
                </label>
                <div className="flex gap-3 items-center">
                  <img className="w-8" src={Name} />
                  <input
                    className="border p-3 w-80 rounded-lg border-grey"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ramit Vishwakarma"
                    onChange={handleName}
                  />
                </div>
              </div>
              {/* Admission number */}
              <div
                className={`w-96 ${activeBtn === "register" ? "" : "hidden"}`}>
                <label className="ml-12" htmlFor="admission number">
                  Admission Number
                </label>
                <div className="flex gap-3 items-center">
                  <img className="w-8" src={Admission} />
                  <input
                    className="border p-3 w-80 rounded-lg border-grey"
                    type="text"
                    id="admission number"
                    name="admission number"
                    placeholder="22CSDS064"
                    onChange={handleAdmissionNo}
                  />
                </div>
              </div>
              {/* Year */}
              <div
                className={`w-96 ${activeBtn === "register" ? "" : "hidden"}`}>
                <label className="ml-12" htmlFor="Year">
                  Year
                </label>
                <div className="flex gap-3 items-center">
                  <img className="w-8" src={Year} />
                  <select
                    className="w-80 h-12 border p-3 bg-white rounded-lg text-grey border-grey"
                    name="Year"
                    onChange={handleYear}>
                    <option value="" disabled selected>
                      Select Year
                    </option>
                    {yearOptions.map((option) => {
                      return (
                        //cant figure out how to change he border styles
                        <option
                          className=" text-grey bg-white border-light-blue"
                          key={option}
                          value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              {/* Domain */}
              <div
                className={`w-96 ${activeBtn === "register" ? "" : "hidden"}`}>
                <label className="ml-12" htmlFor="Domain">
                  Domain
                </label>
                <div className="flex gap-3 items-center">
                  <img className="w-8" src={DomainIco} />
                  <select
                    className="w-80 h-12 border p-3 rounded-lg bg-white text-grey border-grey"
                    name="Domain"
                    onChange={handleDomain}>
                    <option value="" disabled selected>
                      Select your preferred domain
                    </option>
                    {domainOptions.map((option) => {
                      return (
                        //cant figure out how to change he border styles
                        <option
                          className=" text-grey"
                          key={option}
                          value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* Email */}
              <div className="w-96">
                <label className="ml-12" htmlFor="email">
                  Email
                </label>
                <div className="flex gap-3 items-center">
                  <img className="w-8" src={Email} />
                  <input
                    className="border p-3 w-80 rounded-lg border-grey"
                    id="email"
                    name="email"
                    placeholder="vishwakarmaramit@gmail.com"
                    onChange={handleEmail}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="w-96">
                <label className="ml-12" htmlFor="password">
                  Set password
                </label>
                <div className="flex gap-3 items-center">
                  <img className="w-8" src={Password} />
                  <input
                    className="border p-3 w-80 rounded-lg border-grey"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="6 characters or more"
                    onChange={handlePassword}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-10  text-button-text font-bold text-2xl rounded-lg bg-lime  hover:bg-button-hover px-16 py-4">
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
