//import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Email from "../../assets/input-email.svg";
import Password from "../../assets/input-password.svg";

const AdminLogin = () => {
  return (
    <>
        {/* <Navbar /> */}
      <div className="h-screen bg-contain bg-background bg-left-bottom">
        <div className="mx-40">
          <Header>
            <h1 className="text-4xl font-bold text-grey">Admin Login</h1>
          </Header>
        </div>
        <div className="mx-60 mt-40 flex items-center justify-center">

          {/* input fields */}
          <div className="pr-14 pl-12 py-10 rounded-xl flex flex-col gap-4 items-center relative overflow-hidden bg-text-box">
            <h3 className="justify-self-center pl-4 text-4xl font-bold mb-8">Welcome&nbsp;Admin</h3>
            <div className="flex z-10 flex-col items-end">
            {/* email */}
              <div className="mb-6">
                <label className="ml-12 text-lg" htmlFor="email">
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
                <label className="ml-12 text-lg" htmlFor="password">
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
              <p className="mt-4 text-light-blue hover:underline">Forgot Password?</p>
              <button className="mt-10 w-80 font-bold text-2xl text-button-text bg-lime rounded-lg hover:bg-button-hover py-4">
                Log In
              </button>
            </div>
            <div className="absolute w-96 h-96 -z-1 left-60 top-64 rounded-full blur-2xl bg-red/10"></div>
            <div className="absolute w-96 h-96 -z-1 right-60 bottom-64 rounded-full blur-2xl bg-red/10"></div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AdminLogin;
