import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Email from "../../assets/input-email.svg";
import Password from "../../assets/input-password.svg";

const AdminLogin = () => {
  return (
    <>
      <div className="h-screen bg-admin-bg bg-no-repeat bg-left-bottom">
        <Navbar />
        <div className="mx-40">
          <Header>
            <h1 className="text-6xl font-bold text-grey">Admin Login</h1>
          </Header>
        </div>
        <div className="mx-60 mt-48 flex items-center justify-between">
          {/* side text */}
          <div>
            <h1 className="text-8xl font-bold leading-normal text-grey">Welcome<br />Admin</h1>
          </div>

          <div className="w-96 flex flex-col gap-4 justify-end items-end">
            {/* email */}
            <div>
              <label className="ml-12" htmlFor="email">
                Email
              </label>
              <div className="flex gap-3 items-center">
                <img className="w-8" src={Email} />
                <input
                  className="border p-3 w-80 rounded-lg border-grey"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            {/* password */}
            <div>
              <label className="ml-12" htmlFor="password">
                Password
              </label>
              <div className="flex gap-3 items-center">
                <img className="w-8" src={Password} />
                <input
                  className="border p-3 w-80 rounded-lg border-grey"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="8 characters or more"
                />
              </div>
            </div>
            <button className="mt-4 w-80 font-bold text-3xl text-button-text bg-lime rounded-lg hover:bg-button-hover py-4">
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
