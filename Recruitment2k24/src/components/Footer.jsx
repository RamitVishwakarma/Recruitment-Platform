import Logo from "../assets/complete-logo.svg";
// footer svgs
import Copy from "../assets/copyright.svg";
import Li from "../assets/footer-li.svg?react";
import Insta from "../assets/footer-insta.svg?react";
import X from "../assets/footer-X.svg?react";
import Med from "../assets/footer-medium.svg?react";
import Git from "../assets/footer-git.svg?react";
import Ytb from "../assets/footer-ytb.svg?react";

const Footer = () => {
  return (
    <>
      <div className="bg-footer md:h-[30vh] w-full">
        <div className="flex justify-between items-center max-md:flex-col ">
          {/* left */}
          <div className="mx-5 md:mx-20 xl:mx-40 mt-8 md:mt-[10vh]">
            <div className="mx-2 text-grey max-md:flex max-md:flex-col max-md:items-center max-md:justify-center ">
              <p>Created with ❤️ by</p>
              <img className="mt-4 max-sm:max-w-80" src={Logo} alt="" />
            </div>
          </div>
          {/* right */}
          <div className="mt-8 md:mt-[10vh]">
            <div>
              <p className="text-xl text-grey md:text-right md:mr-20 xl:mr-40 max-md:text-center">
                Follow us on
              </p>
            </div>
            <div className="mr-5 md:mr-20 xl:mr-40 flex gap-6 mt-4">
              <a
                href="https://www.linkedin.com/company/dsc-jssaten/"
                target="__blank">
                <Li className="w-8 nav-icons-svg" />
              </a>
              <a href="https://www.instagram.com/gdscjssaten/" target="__blank">
                <Insta className="w-8 nav-icons-svg" />
              </a>
              <a href="https://twitter.com/GDSCJSSATEN" target="__blank">
                <X className="w-8 nav-icons-svg" />
              </a>
              <a href="https://medium.com/dsc-jss-noida" target="__blank">
                <Med className="w-8 nav-icons-svg" />
              </a>
              <a href="https://github.com/DSC-JSS-NOIDA" target="__blank">
                <Git className="w-8 nav-icons-svg" />
              </a>
              <a
                href="https://m.youtube.com/channel/UCkELk5JFDceaSf8pBa19kDQ"
                target="__blank">
                <Ytb className="w-8 nav-icons-svg" />
              </a>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="flex items-center justify-center md:mt-[3vh] mt-8 mb-4  ">
          <img className="w-3" src={Copy} />
          <span className="text-grey text-xs">&nbsp;2023 GDSC JSSATEN</span>
        </div>
      </div>
      {/* Lines */}
      <div className="flex relative bottom-0">
        <div className="border-t-[6px] border-red w-[25vw]"></div>
        <div className="border-t-[6px] border-purple w-[25vw]"></div>
        <div className="border-t-[6px] border-lime w-[25vw]"></div>
        <div className="border-t-[6px] border-light-blue w-[25vw]"></div>
      </div>
    </>
  );
};

export default Footer;
