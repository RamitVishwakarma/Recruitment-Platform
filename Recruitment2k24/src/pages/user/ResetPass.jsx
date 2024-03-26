import React from "react";
import Header from "../../components/Header";
import Toast from "../../components/Toast";
import Password from "../../assets/input-password.svg";
import { useState } from "react";
import Input from "../../components/Input";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import axios from "axios";

const ResetPass = () => {
  const [toast, setToast] = useState(false);
  const [toastText, setToastText] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] =
    useState("Invalid Password");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordSchema = z.string().min(6);

  const navigate = useNavigate();

  const params = useParams();

  const handlenNewPassword = (e) => {
    setNewPassword(e.target.value);
    if (passwordSchema.safeParse(e.target.value).success) {
      setPasswordError(false);
    } else {
      setPasswordErrorText("Invalid Password");
      setPasswordError(true);
    }
  };

  const handleConfirmNewPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      const passwordResetData = { newPassword, confirmPassword };
      setPasswordError(false);
      axios
        .put(
          `${import.meta.env.VITE_URL}api/user/auth/reset_password/${
            params.id
          }`,
          passwordResetData
        )
        .then((res) => {
          if (res.status === 200) {
            setToast(true);
            setToastText("Password reset successful");
            setTimeout(() => {
              navigate("/auth", { state: "login" });
            }, 4100);
          }
        })
        .catch((e) => {
          console.log(e.response);
          console.log(e);
          setToast(true);
          setToastText("Token expired please get new reset link.");
          setTimeout(() => {
            setToast(false);
          }, 4100);
        });
    } else {
      setPasswordErrorText("Passwords does not match");
      setPasswordError(true);
    }
  };

  return (
    <>
      <div className="lg:h-screen max-lg:bg-none bg-login-bg bg-left-bottom bg-no-repeat">
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
              className={`text-grey font-bold max-lg:text-center mt-8 md:mt-10 lg:mt-32 text-3xl md:text-4xl lg:text-8xl xl:text-8xl 2xl:text-9xl`}>
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
                  id="newPassword"
                  label="Enter new password"
                  icon={Password}
                  type="password"
                  placeholder="6 characters or more"
                  onChangeHandler={handlenNewPassword}
                  errorHandler={passwordError}
                  errorMessage={passwordErrorText}
                />
                {/* Password */}
                <Input
                  id="confNewPassword"
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
    </>
  );
};

export default ResetPass;
