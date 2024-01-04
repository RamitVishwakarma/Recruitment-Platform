import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Logo from "../../assets/header-logo.svg";

const AdminLogin = () => {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="mx-40">
          <div className="flex my-6 justify-between">
            <img src={Logo} alt="Logo" />
            <h1 className="text-6xl font-bold text-grey">Admin Login</h1>
          </div>
          <div className="w-80 mt-36 ease-in-out duration-200 mx-auto flex flex-col justify-center gap-6">
            <div>
              <label className="text-grey text-xl">Username</label>
              <input
                type="text"
                className="w-full h-12 px-4 rounded-lg border border-grey"
                placeholder=""
              />
            </div>
            <div>
              <label className="text-grey text-xl">Password</label>
              <input
                type="password"
                className="w-full h-12 px-4 rounded-lg border border-grey"
                placeholder=""
              />
            </div>
            <button className="mx-auto mt-10 font-bold text-4xl text-button-text bg-lime rounded-lg hover:bg-button-hover px-14 py-4">
              Log In
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLogin;
