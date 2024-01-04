import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Logo from "../../assets/header-logo.svg";
import Profile from "../../assets/prof.svg";
import Pfp from "../../assets/userprofile-pfp.svg";
import Upload from "../../assets/userprofile-upload.svg";
import Github from "../../assets/github.svg";
import Hackerrank from "../../assets/hackerrank.svg";
import Dribble from "../../assets/dribble.svg";
import Behance from "../../assets/behance.svg";
import Link from "../../assets/link.svg";
import Linkedin from "../../assets/footer-li.svg";

export default function UserProfile() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="mx-40">
          <div className="flex my-[3rem] justify-between">
            <img src={Logo} alt="Logo" />
            {/* solicitation section */}
            <div className="flex flex-col">
              <div className="flex text-right gap-3">
                <div className="flex flex-col">
                  <span className="text-grey text-xl">Hello</span>
                  <span className="text-grey text-2xl font-bold">
                    Ramit Vishwakarma
                  </span>
                </div>
                <div>
                  <img src={Profile} />
                </div>
              </div>
            </div>
          </div>
          {/* whole form wrapper */}
          <div className="flex gap-7 justify-center items-center">
            {/* wrapper div */}
            <div className="flex flex-col gap-7">
              {/* Upload Pic */}
              <div className="w-40 h-40 border-2 rounded-2xl border-dashed flex flex-col justify-center items-center ">
                <img src={Pfp} />
                <div className="flex flex-col items-center">
                  <span className="mt-3 font-bold text-grey">
                    Set Profile Photo
                  </span>
                  <span className="text-grey text-xs ">.jpg or .png only</span>
                </div>
              </div>
              {/* Upload Resume */}
              <div className="w-40 h-40 border-2 rounded-2xl border-dashed flex flex-col justify-center items-center ">
                {/* Need to change the image to a tick mark and change the name will make it after backend */}
                <img src={Upload} />
                <div className="flex flex-col items-center">
                  <span className="mt-3 font-bold text-grey">
                    Upload Resume
                    <span className="text-red">*</span>
                  </span>
                  <span className="text-grey text-[0.55rem] ">
                    .PDF or .DOCX only{" "}
                  </span>
                </div>
                {/* Upload end */}
              </div>
              {/* wrapper div end */}
            </div>
            {/* Form div */}
            <div>
              <form action="/user-profile">
                <div className="flex flex-wrap gap-x-12 w-[48vw] items-center justify-center">
                  {/* input start */}
                  <div className="flex flex-col">
                    <label className="mx-0.5 text-grey" htmlFor="Github">
                      Github Profile
                    </label>
                    <input
                      className="border p-2 pl-10 w-80 h-12 rounded-lg border-grey"
                      type="url"
                      id="Github"
                      name="Github"
                    />
                    <img
                      className="w-6 h-6 relative bottom-9 left-3 "
                      src={Github}
                    />
                  </div>
                  {/*input end */}
                  {/* input start */}
                  <div className="flex flex-col">
                    <label className="mx-0.5 text-grey" htmlFor="Hackerrank">
                      HackerRank Profile
                    </label>
                    <input
                      className="border p-2 pl-10 w-80 h-12 rounded-lg border-grey"
                      type="url"
                      id="Hackerrank"
                      name="Hackerrank"
                    />
                    <img
                      className="w-6 h-6 relative bottom-9 left-3 "
                      src={Hackerrank}
                    />
                  </div>
                  {/*input end */}
                  {/* input start */}
                  <div className="flex flex-col">
                    <label className="mx-0.5 text-grey" htmlFor="Linkedin">
                      LinkedIn Profile
                    </label>
                    <input
                      className="border p-2 pl-10 w-80 h-12 rounded-lg border-grey"
                      type="url"
                      id="Linkedin"
                      name="Linkedin"
                    />
                    <img
                      className="w-6 h-6 relative bottom-9 left-3"
                      src={Linkedin}
                    />
                  </div>
                  {/*input end */}
                  {/* input start */}
                  <div className="flex flex-col">
                    <label className="mx-0.5 text-grey" htmlFor="Dribble">
                      Dribble Profile
                    </label>
                    <input
                      className="border p-2 pl-10 w-80 h-12 rounded-lg border-grey"
                      type="url"
                      id="Dribble"
                      name="Dribble"
                    />
                    <img
                      className="w-6 h-6 relative bottom-9 left-3"
                      src={Dribble}
                    />
                  </div>
                  {/*input end */}
                  {/* input start */}
                  <div className="flex flex-col">
                    <label className="mx-0.5 text-grey" htmlFor="Behance">
                      Behance Profile
                    </label>
                    <input
                      className="border p-2 pl-10 w-80 h-12 rounded-lg border-grey"
                      type="url"
                      id="Behance"
                      name="Behance"
                    />
                    <img
                      className="w-6 h-6 relative bottom-9 left-3"
                      src={Behance}
                    />
                  </div>
                  {/*input end */}
                  {/* input start */}
                  <div className="flex flex-col">
                    <label className="mx-0.5 text-grey" htmlFor="Portfolio">
                      Portfolio Profile
                    </label>
                    <input
                      className="border p-2 pl-10 w-80 h-12 rounded-lg border-grey"
                      type="url"
                      id="Portfolio"
                      name="Portfolio"
                    />
                    <img
                      className="w-6 h-6 relative bottom-9 left-3"
                      src={Link}
                    />
                  </div>
                  {/*input end */}
                </div>
              </form>
            </div>
            {/* wrapper of wrapper end */}
          </div>
          <div className="flex items-center justify-center">
            <button className="mt-3 font-bold text-3xl text-button-text bg-lime rounded-lg hover:bg-button-hover px-12 py-3">
              Save
            </button>
          </div>
          {/* margin div*/}
        </div>
      </div>
      <Footer />
    </>
  );
}
