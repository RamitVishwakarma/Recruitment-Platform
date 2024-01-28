import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Toast from "../../components/Toast";
import Password from "../../assets/input-password.svg";
import { useState } from "react";
import { Input } from "./Auth";

const ResetPass = () => {
  const [toast, setToast] = useState(false);
  const [toastText, setToastText] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlenNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const passError = (e) => {
    setPasswordError(e);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setToast(true);
      setToastText("Passwords do not match");
      setTimeout(() => {
        setToast(false);
      }, 4000);
    } else {
      setToast(true);
      setToastText("Password Changed Successfully");
      setTimeout(() => {
        setToast(false);
      }, 4000);
    }
  };

  return (
    <>
      <div className="lg:h-screen max-lg:bg-none bg-login-bg bg-left-bottom bg-no-repeat">
        <Navbar />
        <div className="mx-5 md:mx-20 xl:mx-40">
          <Header>
            <h1 className="text-6xl text-grey font-bold max-md:mt-10">
              Reset Password
            </h1>
          </Header>

          <div className="lg:flex lg:justify-between">
            {/* Toast */}
            {toast && <Toast text={toastText} />}
            <div
              className={`text-grey font-bold text-center mt-8 md:mt-10 lg:mt-32 text-3xl md:text-4xl lg:ml-10 lg:text-8xl xl:text-8xl 2xl:text-9xl`}>
              Set a new
              <br className="max-lg:hidden" /> password now
            </div>
            <div>
              <form
                className="w-96 mx-auto flex flex-wrap mt-5 lg:mt-20 gap-4 items-center justify-center"
                onSubmit={formSubmitHandler}
                autoComplete="off">
                {/* New Password */}
                <Input
                  id="email"
                  label="Enter new password"
                  icon={Password}
                  type="password"
                  placeholder="6 characters or more"
                  onChangeHandler={handlenNewPassword}
                  errorHandler={passError}
                  errorMessage={"Invalid Password"}
                />
                {/* Password */}
                <Input
                  id="password"
                  label="Confirm new Password"
                  icon={Password}
                  type="text"
                  placeholder="Repeat new Password"
                  onChangeHandler={handleConfirmNewPassword}
                />
                <div className="flex flex-col justify-center items-center my-8 lg:ml-12">
                  <button
                    type="submit"
                    className="px-24 py-4 text-button-text font-bold text-2xl rounded-lg bg-lime hover:bg-button-hover">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResetPass;
