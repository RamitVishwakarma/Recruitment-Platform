import Header from "../../components/Header";
import Email from "../../assets/input-email.svg";
import Password from "../../assets/input-password.svg";
import { Input } from "../user/Auth";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = () => {
    const data = {
      email,
      password,
    };
    axios
      .post(`${import.meta.env.VITE_URL}api/admin/auth/login`, data)
      .then((res) => {
        sessionStorage.setItem("Authorization", res.headers.authorization);
        navigate("/admin/dashboard");
      })
      .catch((e) => {
        // ? Change to toast
        if (e.response.data.message) alert(e.response.data.message);
        else alert(e.response.data.error);
      });
  };

  return (
    <>
      <div className="h-screen bg-admin-bg bg-no-repeat bg-left-bottom">
        <div className="mx-40">
          <Header>
            <h1 className="text-4xl font-bold text-grey">Admin Login</h1>
          </Header>
        </div>
        <div className="mx-60 mt-48 flex items-center justify-between">
          {/* side text */}
          <div>
            <h1 className="text-8xl font-bold leading-normal text-grey">
              Welcome
              <br />
              Admin
            </h1>
          </div>

          {/* input fields */}
          <div className="pr-14 pl-12 py-10 rounded-xl flex flex-col gap-4 items-center relative overflow-hidden bg-text-box">
            <h3 className="justify-self-center pl-4 text-4xl font-bold mb-8">
              Welcome&nbsp;Admin
            </h3>
            <div className="flex z-10 flex-col items-end">
              {/* Email */}
              <Input
                id="email"
                label="Email ID"
                icon={Email}
                type="text"
                placeholder="someone@gmail.com"
                onChangeHandler={handleEmail}
              />
              {/* Password */}
              <Input
                id="password"
                label="Set Password"
                icon={Password}
                type="password"
                placeholder="6 characters or more"
                onChangeHandler={handlePassword}
              />
              <p className="mt-4 text-light-blue hover:underline">
                Forgot Password?
              </p>
              <button
                onClick={loginHandler}
                className="mt-10 w-80 font-bold text-2xl text-button-text bg-lime rounded-lg hover:bg-button-hover py-4">
                Log In
              </button>
            </div>
            <div className="absolute w-96 h-96 -z-1 left-60 top-64 rounded-full blur-2xl bg-red/10"></div>
            <div className="absolute w-96 h-96 -z-1 right-60 bottom-64 rounded-full blur-2xl bg-red/10"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
