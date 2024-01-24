import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ResetPass = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-5 md:mx-20 xl:mx-40">
        <Header>
          <h1 className="text-6xl text-grey font-bold">Reset Password</h1>
        </Header>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPass;
