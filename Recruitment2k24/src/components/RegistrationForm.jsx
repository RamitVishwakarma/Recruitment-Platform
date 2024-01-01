import Navbar from "../components/Navbar/Navbar.jsx";
import Logo from "../assets/header-logo.svg";
import Name from "../assets/input-name.svg";
import Admission from "../assets/input-admission.svg";
import Year from "../assets/input-year.svg";
import Domain from "../assets/input-domain.svg";
import Email from "../assets/input-email.svg";
import Password from "../assets/input-password.svg";
import { useState } from "react";
export default function RegistrationForm() {
  const [activeBtn, setactiveBtn] = useState("register");
  const yearOptions = ["1st", "2nd"];
  const domainOptions = [
    "Programming",
    "Web Development",
    "Android",
    "Design",
    "Machine Learning",
  ];

  // Need to do transitions
  // need to change the dropdown menu styles
  return (
    <>
      <Navbar />
      <div className="mx-[10rem]">
        <div className="flex my-[3rem] justify-between">
          <img src={Logo} alt="Logo" />
          <div>
            <button
              className={`w-[10rem] font-ProductSans duration-300 ease-in-out pr-[0.5rem] h-[3rem] rounded-[2.3125rem]  text-white bg-light-red relative left-[1.21rem]
              ${activeBtn === "register" ? "font-bold" : "opacity-60 "}`}
              onClick={() => setactiveBtn("register")}>
              Register
            </button>
            <button
              className={`w-[10rem] font-ProductSans duration-300 ease-in-out h-[3rem] rounded-[2.3125rem] text-white bg-light-red relative right-[1.21rem]
              ${activeBtn === "login" ? "font-bold" : "opacity-60"}`}
              onClick={() => setactiveBtn("login")}>
              Log in
            </button>
          </div>
        </div>
      </div>

      <h1 className="text-grey text-5xl font-bold text-center m-[2rem]">
        {activeBtn === "register"
          ? "Fill your details correctly!"
          : "Welcome back!"}
      </h1>

      <form action="/register">
        <div
          className={`flex w-[61rem] m-auto flex-wrap gap-4 items-center justify-center
          ${activeBtn === "login" ? "flex-col" : ""}
        `}>
          {/* NAME */}
          <div
            className={`w-[23rem] ${activeBtn === "register" ? "" : "hidden"}`}>
            <label className="ml-[3.1rem]" htmlFor="name">
              Name
            </label>
            <div className="flex gap-3 items-center">
              <img className="w-8" src={Name} />
              <input
                className="border p-3 w-[18rem] rounded-lg hover:duration-0 border-grey focus:text-input-blue hover:border-2 focus:outline-2 focus:outline-light-blue"
                type="text"
                id="name"
                name="name"
              />
            </div>
          </div>
          {/* Admission number */}
          <div
            className={`w-[23rem] ${activeBtn === "register" ? "" : "hidden"}`}>
            <label className="ml-[3.1rem]" htmlFor="admission number">
              Admission Number
            </label>
            <div className="flex gap-3 items-center">
              <img className="w-8" src={Admission} />
              <input
                className="border p-3 w-[18rem] rounded-lg hover:duration-0 border-grey focus:text-input-blue hover:border-2 focus:outline-2 focus:outline-light-blue"
                type="text"
                id="admission number"
                name="admission number"
              />
            </div>
          </div>
          {/* Year */}
          <div
            className={`w-[23rem] ${activeBtn === "register" ? "" : "hidden"}`}>
            <label className="ml-[3.1rem]" htmlFor="Year">
              Year
            </label>
            <div className="flex gap-3 items-center">
              <img className="w-8" src={Year} />
              <select
                className="w-[18rem] h-[3.1rem] border p-3 rounded-lg hover:duration-0 text-grey border-grey hover:border-2 focus:outline-2 focus:outline-light-blue focus:bg-[#FBFBFB]"
                name="Year">
                <option value="" disabled selected>
                  Select Year
                </option>
                {yearOptions.map((option) => {
                  return (
                    //cant figure out how to change he border styles

                    <option className=" text-grey" key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {/* Domain */}
          <div
            className={`w-[23rem] ${activeBtn === "register" ? "" : "hidden"}`}>
            <label className="ml-[3.1rem]" htmlFor="Domain">
              Domain
            </label>
            <div className="flex gap-3 items-center">
              <img className="w-8" src={Domain} />
              <select
                className="w-[18rem] h-[3.1rem] border p-3 rounded-lg hover:duration-0 text-grey border-grey hover:border-2 focus:outline-2 focus:outline-light-blue focus:bg-[#FBFBFB]"
                name="Domain">
                <option value="" disabled selected>
                  Select your preferred domain
                </option>
                {domainOptions.map((option) => {
                  return (
                    //cant figure out how to change he border styles
                    <option className=" text-grey" key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* Email */}
          <div className="w-[23rem]">
            <label className="ml-[3.1rem]" htmlFor="email">
              Email
            </label>
            <div className="flex gap-3 items-center">
              <img className="w-8" src={Email} />
              <input
                className="border p-3 w-[18rem] rounded-lg hover:duration-0 border-grey focus:text-input-blue hover:border-2 focus:outline-2 focus:outline-light-blue"
                type="email"
                id="email"
                name="email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="w-[23rem]">
            <label className="ml-[3.1rem]" htmlFor="password">
              Set password
            </label>
            <div className="flex gap-3 items-center">
              <img className="w-8" src={Password} />
              <input
                className="border p-3 w-[18rem] rounded-lg hover:duration-0 border-grey focus:text-input-blue hover:border-2 focus:outline-2 focus:outline-light-blue"
                type="psasword"
                id="password"
                name="password"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="mx-auto mt-10  text-grey font-bold text-2xl rounded-lg bg-lime  hover:bg-button-hover px-10 py-4">
            {activeBtn === "register" ? "Register" : "Log In"}
          </button>
        </div>
      </form>
    </>
  );
}
