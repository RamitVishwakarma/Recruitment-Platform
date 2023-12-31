import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/header-logo.svg"

const AdminLogin = () => {
    return ( 
        <>
        <Navbar/>
        <div className="mx-[10rem]">
            <div className="flex my-[3rem] justify-between">
                <img src={Logo} alt="Logo" />
                <h1 className="text-6xl font-bold text-grey">Admin Login</h1>
            </div>
            <div className="w-80 mt-36 ease-in-out duration-200 mx-auto flex flex-col justify-center gap-6">
                <div>
                    <label className="text-grey text-xl">Username</label>
                    <input type="text" className="w-full h-12 px-4 rounded-lg border border-grey hover:border-2 focus:outline-none focus:border-2 focus:border-light-blue" placeholder="" />
                </div>
                <div>
                    <label className="text-grey text-xl">Password</label>
                    <input type="password" className="w-full h-12 px-4 rounded-lg border border-grey hover:border-2 focus:outline-none focus:border-2 focus:border-light-blue" placeholder="" />
                </div>
                <button className="mx-auto mt-10 font-bold text-4xl bg-lime rounded-lg hover:bg-button-hover px-14 py-4">Log In</button>
            </div>
        </div>
        </>
    );
}

export default AdminLogin;