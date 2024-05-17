import Header from "../../components/Header";
import Input from "../../components/Input";
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
        sessionStorage.setItem("Admin Token", res.headers.authorization);
        sessionStorage.setItem("Domain", res.data.domain);
        sessionStorage.setItem("Photo", res.data.photo);
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
      <div className="min-h-screen bg-background ">
        <div className="mx-5 md:mx-20 xl:mx-40 ">
          <Header>
            <h1 className="text-4xl font-bold text-grey max-lg:mt-5">
              Admin Login
            </h1>
          </Header>
        </div>
        <div className=" flex items-center justify-center xl:mt-32 lg:mt-20 md:mt-16 mt-12">
          {/* input fields */}
          <div className="flex flex-col gap-4 items-center ">
            <h3 className="justify-self-center pl-4 text-4xl font-bold mb-8">
              Welcome&nbsp;Admin
            </h3>
            <div className="flex z-10 flex-col ">
              {/* Email */}
              <Input
                id="email"
                label="Email ID"
                icon="alternate_email"
                type="text"
                placeholder="someone@gmail.com"
                onChangeHandler={handleEmail}
              />
              {/* Password */}
              <Input
                id="password"
                label="Password"
                icon="key"
                type="password"
                placeholder="6 characters or more"
                onChangeHandler={handlePassword}
              />
              <button
                onClick={loginHandler}
                className="mt-10 px-24 py-4 max-w-72 mx-auto mr-10 font-bold text-2xl text-button-text bg-lime rounded-lg hover:bg-button-hover ">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
