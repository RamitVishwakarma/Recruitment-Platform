import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ NavButtonType }) => {
  return (
    <>
      <Navbar buttonType={NavButtonType} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
