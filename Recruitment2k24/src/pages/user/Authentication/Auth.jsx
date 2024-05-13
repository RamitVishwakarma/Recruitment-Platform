import Header from "../../../components/Header.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";

export default function Auth() {
  const [activeBtn, setactiveBtn] = useState("register");
  // Custom tooltip
  const [toolTip, setToolTip] = useState(true);
  // Checking if the user comes after clicking on login button
  let { state } = useLocation();
  if (state === "login") {
    useEffect(() => {
      setactiveBtn(state);
    }, []);
  }
  return (
    <>
      {/* Header section */}
      <div className="lg:h-[90vh] bg-background">
        <div className="mx-5 md:mx-20 xl:mx-40 relative">
          <Header>
            <div className="min-w-80 max-md:mt-10">
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
          {/* ToolTip */}
          {activeBtn === "register" && toolTip ? (
            // ToolTip Start
            <div className="absolute -right-20 -top-20">
              <div className="absolute max-lg:hidden z-30 lg:right-10 top-[9.45rem] xl:right-28 2xl:right-4 flex justify-between items-center w-44 px-4 py-2 bg-nav-hover rounded-lg">
                <div className="absolute bottom-14 w-0 h-0 border-l-[12px] border-l-white/0 border-b-[12px] border-b-nav-hover border-r-[12px] border-r-white/0"></div>
                <div className="text-grey text-sm">
                  Already registered?
                  <br /> Log in here
                </div>
                <button
                  onClick={() => {
                    setToolTip(false);
                  }}
                  className="flex items-center">
                  <span className="material-symbols-rounded">close</span>
                </button>
              </div>
            </div>
          ) : // ToolTip End
          null}
        </div>
        {/* Toggle through Registration and Login section */}
        {activeBtn === "register" ? <Registration /> : <Login />}
      </div>
    </>
  );
}
