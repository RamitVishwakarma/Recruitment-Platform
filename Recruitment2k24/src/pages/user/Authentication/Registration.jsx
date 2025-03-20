import React, { useState } from "react";
import { z } from "zod";
import Input from "../../../components/Input";
import Dropdown from "../../../components/DropDown";
import GoogleAuthentication from "./GoogleAuthentication";
import axios from "axios";

export default function Registration() {
  // form data
  const [data, setData] = useState({
    name: "",
    admissionNumber: "",
    year: "",
    domain: "",
    email: "",
    password: "",
  });
  // schema for validation
  const formSchema = z.object({
    name: z.string().min(1),
    admissionNumber: z.string().min(6),
    year: z.string(),
    domain: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });
  // error states
  const [error, setError] = useState({
    name: false,
    admissionNumber: false,
    year: false,
    domain: false,
    email: false,
    password: false,
  });
  // handle form data
  const handleFormData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    formSchema
      .pick({ [e.target.name]: true })
      .safeParse({ [e.target.name]: e.target.value }).success
      ? setError({ ...error, [e.target.name]: false })
      : setError({ ...error, [e.target.name]: true });
  };
  // handling domain and year selection
  const dropDownHandler = (value, name) => {
    setData({ ...data, [name]: value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let invalidData = false;
    // On click of submit button, check if any of the fields are empty, if yes, set the error state to true, else false and continue.
    if (data.domain === "" || data.domain === "Select a Domain") {
      setError((prevError) => ({ ...prevError, domain: true }));
      invalidData = true;
    } else {
      setError((prevError) => ({ ...prevError, domain: false }));
    }
    if (data.year === "" || data.year === "Select a Year") {
      setError((prevError) => ({ ...prevError, year: true }));
      invalidData = true;
    } else {
      setError((prevError) => ({ ...prevError, year: false }));
    }
    // ? Parsing the data and validating
    if (!invalidData) {
      let validation = formSchema.safeParse(data);
      if (!validation.success) {
        invalidData = true;
      }
    }
    // ? If all the data is valid, then send the data to the backend
    if (!invalidData) {
      axios
        .post(`${import.meta.env.VITE_URL}api/user/auth/signup`, data)
        .then((res) => {
          if (res.status === 201) {
            alert("Successfull Signup kindly login");
          }
        })
        .catch((e) => {
          console.log(e);
          if (e.response.status === 409) {
            alert("User already exists!  Please login.");
          } else {
            alert("Something went wrong!  Please try again.");
          }
        });
    }
  };
  return (
    <>
      <div className="mx-5 md:mx-20 xl:mx-40 relative">
        <div className="h-full relative z-10 w-full md:w-10/12 overflow-hidden mx-auto py-8 rounded-3xl mb-16">
          <h1
            className={`text-grey text-3xl font-bold text-center mb-8 md:text-4xl lg:text-5xl lg:my-6`}>
            Fill your details correctly!
          </h1>
          <form
            onSubmit={formSubmitHandler}
            className="flex flex-col items-center">
            <div
              className={`flex pr-2 w-full md:pl-0 m-auto flex-wrap gap-x-8 gap-y-4 items-center justify-center`}>
              {/* NAME */}
              <div>
                <div className="xl:flex gap-x-8 gap-y-4  ">
                  <Input
                    id="name"
                    label="Name"
                    icon="account_box"
                    type="text"
                    placeholder="Enter Your Name"
                    onChangeHandler={handleFormData}
                    errorHandler={error.name}
                    errorMessage={"Name is required"}
                  />
                  {/* Admission number */}
                  <Input
                    id="admissionNumber"
                    label="Admission Number"
                    icon="badge"
                    type="text"
                    placeholder="Enter Your Admission Number"
                    onChangeHandler={handleFormData}
                    errorHandler={error.admissionNumber}
                    errorMessage={"Invalid Number"}
                  />
                </div>
                {/* Year */}
                <div className="xl:flex gap-x-8 gap-y-4 ">
                  <Dropdown
                    options={["Select a Year", "1", "2"]}
                    name="year"
                    icon="school"
                    label="Year"
                    onChangeOptionHandler={dropDownHandler}
                    error={error.year}
                    errorMessage={"Select a Year"}
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
                    error={error.domain}
                    errorMessage={"Select a Domain"}
                  />
                </div>
                {/* Email */}
                <div className="xl:flex gap-x-8 gap-y-4 ">
                  <Input
                    id="email"
                    label="Email ID"
                    icon="alternate_email"
                    type="text"
                    placeholder="someone@gmail.com"
                    onChangeHandler={handleFormData}
                    errorHandler={error.email}
                    errorMessage={"Invalid Email"}
                  />
                  {/* Password */}
                  <Input
                    id="password"
                    label="Set Password"
                    icon="key"
                    type="password"
                    placeholder="8 characters or more"
                    onChangeHandler={handleFormData}
                    errorHandler={error.password}
                    errorMessage={"Weak Password"}
                  />
                </div>
              </div>
            </div>
            <div className="flex max-lg:flex-col-reverse gap-4 justify-center items-center my-10">
              {/* Google Auth */}
              <GoogleAuthentication
                text="Sign Up with Google"
                btnStyle={
                  "sm:px-10 px-6 py-3 bg-[#fff] flex gap-4 items-center justify-center rounded-lg shadow-xl hover:shadow-2xl"
                }
              />
              <div className="flex md:hidden gap-4 my-3 justify-center opacity-40">
                <p className="w-full">-------------------</p>
                <p>OR</p>
                <p className="w-full">-------------------</p>
              </div>
              <hr className="max-lg:hidden w-16 rotate-90 mr-2 ml-8 border-grey/40" />
              <button
                type="submit"
                className="sm:px-20 px-10 w-11/12 md:w-fit max-w-56 py-3 text-grey font-bold text-2xl rounded-lg bg-lime hover:bg-button-hover shadow-lg">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
