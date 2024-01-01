import Navbar from "../components/Navbar/Navbar.jsx";
import Logo from "../assets/header-logo.svg";
import { useState } from "react";
export default function RegistrationForm() {
  const [activeBtn, setactiveBtn] = useState("register");
  return (
    <>
      <Navbar />
      <div className="mx-[10rem]"> 
      {/* //change mx to mx-40 */}
        <div className="flex my-[3rem] justify-between">
          {/* change my to my-6 */}
          <img src={Logo} alt="Logo" />
          <div>
            <button className="w-[10rem] h-[3rem] rounded-[2.3125rem] bg-light-red relative left-[10rem]">
              Register
            </button>
            <button className="w-[20rem] pl-[5rem] h-[3rem] rounded-[2.3125rem] bg-light-red ">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
