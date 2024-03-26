import React, { useState } from "react";
import { set, z } from "zod";
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

    if (data.year === "" || data.year === "Select an Year") {
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
    console.log(data);
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
      <div className="bg-text-box relative z-10 w-full md:w-10/12 overflow-hidden pl-6 mx-auto py-8 rounded-3xl mb-16">
        <h1
          className={`text-grey text-2xl font-bold text-center mb-8 md:text-4xl lg:text-5xl lg:my-6`}>
          Fill your details correctly!
        </h1>
        {/* {toast && <Toast text={toastText} />} */}
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
            {/* Year */}
            <Dropdown
              options={["Select an Year", "1", "2"]}
              name="year"
              icon="school"
              label="Year"
              onChangeOptionHandler={dropDownHandler}
              error={error.year}
              errorMessage={"Select an Year"}
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
            {/* <Dropdown options={["Option 1", "Option 2", "Option 3"]} /> */}
            {/* Year
            <Select
              id="year"
              label="Year"
              icon="school"
              selected="Select your year"
              data={yearOptions}
              onChangeHandler={handleFormData}
              errorHandler={handleFormData}
              errorMessage={"Select an Year"}
            />

            <Select
              id="domain"
              label="Domain"
              icon="cards"
              onChangeHandler={handleDomain}
              selected="Select your preferred domain"
              data={domainOptions}
              errorHandler={handleFormData}
              errorMessage={"Select a Domain"}
            /> */}
            {/* Email */}
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
          <div className="flex max-lg:flex-col-reverse justify-center items-center my-10">
            {/* Google Auth */}
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
    </>
  );
}
