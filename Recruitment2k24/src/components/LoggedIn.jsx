import Navbar from "./Navbar/Navbar";
import Logo from "../assets/header-logo.svg";

export default function LoggedIn() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="mx-40">
          <div className="flex my-[3rem] justify-between">
            <img src={Logo} alt="Logo" />
            <div className="text-6xl text-grey font-bold">Domains</div>
          </div>
        </div>
      </div>
    </>
  );
}
