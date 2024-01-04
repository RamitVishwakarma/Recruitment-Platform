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
      <div className="bg-footer h-[30vh] ">
        {/* left */}
        <div className="flex justify-between items-center ">
          <div className="ml-40 mt-[10vh]">
            <div className="mx-2 text-grey">
              <p>Created with ❤️ by</p>
              <img className="mt-4" src={Logo} alt="" />
            </div>
          </div>
          {/* right */}
          {/* NEED TO FIX THE HOVER STATE */}
          <div className="mr-40 flex gap-6 mt-[12.5vh]">
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
        {/* copyright */}
        <div className="flex items-center justify-center mt-[3vh] ">
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
