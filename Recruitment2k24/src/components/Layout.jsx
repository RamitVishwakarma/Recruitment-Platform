import { Outlet } from "react-router-dom";
import loadable from "@loadable/component";

const Navbar = loadable(() => import("./Navbar"));
const Footer = loadable(() => import("./Footer"));

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
