import Logo from "../assets/header-logo.svg";

export default function Header({ children }) {
  return (
    <>
      <div className="flex my-6 max-md:flex-col items-center justify-between">
        <img
          className="max-w-sm max-h-sm md:max-w-md md:max-h-md lg:max-w-lg lg-max-h-lg"
          src={Logo}
          alt="Logo"
        />
        {children}
        {/* <h1 className="text-6xl text-grey font-bold">Domains</h1> */}
      </div>
    </>
  );
}
