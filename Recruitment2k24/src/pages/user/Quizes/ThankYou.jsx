import React from "react";
import Logo from "../../../assets/recruitments-text.svg";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="flex flex-col items-center h-screen bg-background">
      <img className="w-[30vw] mt-16" src={Logo} />

      <div className="text-light-blue font-bold text-4xl mt-28">
        Thank you for taking the quiz
      </div>
      <div className="text-grey text-xl my-5">Stay tuned for the results</div>
      <Link to="/user/">
        <button className="mt-3 text-button-text bg-lime px-10 py-3 rounded-lg font-bold">
          Back to dashboard
        </button>
      </Link>
    </div>
  );
}

export default ThankYou;
