import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import HeaderProfile from "../../components/HeaderProfile";
import Header from "../../components/Header";
import Project from "../../assets/userhome-project.svg?react";
export default function ProjectSubmission() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="mx-40">
          <Header>
            <HeaderProfile />
          </Header>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/5 h-64 bg-purple/20  border-2 rounded-xl border-purple/30 flex flex-col justify-center items-center">
            <div className="text-purple text-4xl mb-6 ml-14 font-bold">
              Paste your project link here
            </div>
            <div className="flex items-center gap-6">
              {/* Need to check how to do svg fill */}
              {/* <img src={Project} /> */}
              <Project className="project-icon-svg" />
              {/* form action to be changed */}
              <form id="projectLink" action="/home">
                <input
                  className="w-[35rem] h-12 border-2 rounded-lg p-3 border-purple hover:outline-purple"
                  type="text"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            form="projectLink"
            type="submit"
            className="mx-auto mt-14 font-bold text-2xl text-button-text bg-lime rounded-lg hover:bg-button-hover px-10 py-3">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
