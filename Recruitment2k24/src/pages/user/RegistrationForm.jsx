import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Logo from "../../assets/header-logo.svg";
import Name from "../../assets/input-name.svg";
import Admission from "../../assets/input-admission.svg";
import Year from "../../assets/input-year.svg";
import Domain from "../../assets/input-domain.svg";
import Email from "../../assets/input-email.svg";
import Password from "../../assets/input-password.svg";
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
      <div className="h-screen">
        <Navbar />
        <div className="mx-40">
          <div className="flex my-6 flex-wrap justify-between">
            <img src={Logo} alt="Logo" />
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
          </div>
        </div>

        <h1 className="text-grey text-5xl font-bold text-center m-8 mt-16">
          {activeBtn === "register"
            ? "Fill your details correctly!"
            : "Welcome back!"}
        </h1>

        <form action="/register">
          <div
            className={`flex w-3/4 m-auto flex-wrap gap-4 items-center justify-center
          ${activeBtn === "login" ? "flex-col" : ""}`}>
            {/* NAME */}
            <div className={`w-96 ${activeBtn === "register" ? "" : "hidden"}`}>
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
                />
              </div>
            </div>
            {/* Admission number */}
            <div className={`w-96 ${activeBtn === "register" ? "" : "hidden"}`}>
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
                />
              </div>
            </div>
            {/* Year */}
            <div className={`w-96 ${activeBtn === "register" ? "" : "hidden"}`}>
              <label className="ml-12" htmlFor="Year">
                Year
              </label>
              <div className="flex gap-3 items-center">
                <img className="w-8" src={Year} />
                <select
                  className="w-80 h-12 border p-3 bg-white rounded-lg text-grey border-grey"
                  name="Year">
                  <option value="" disabled selected>
                    Select Year
                  </option>
                  {yearOptions.map((option) => {
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
            {/* Domain */}
            <div className={`w-96 ${activeBtn === "register" ? "" : "hidden"}`}>
              <label className="ml-12" htmlFor="Domain">
                Domain
              </label>
              <div className="flex gap-3 items-center">
                <img className="w-8" src={Domain} />
                <select
                  className="w-80 h-12 border p-3 rounded-lg bg-white text-grey border-grey"
                  name="Domain">
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
                  type="email"
                  id="email"
                  name="email"
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
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="mt-10  text-button-text font-bold text-2xl rounded-lg bg-lime  hover:bg-button-hover px-10 py-4">
              {activeBtn === "register" ? "Register" : "Log In"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
