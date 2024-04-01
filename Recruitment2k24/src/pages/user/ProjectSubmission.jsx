import HeaderProfile from "../../components/HeaderProfile";
import Header from "../../components/Header";
import Project from "../../assets/ProjectLink.svg";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";
import Input from "../../components/Input";
export default function ProjectSubmission() {
  const [projectLink, setProjectLink] = useState("");
  const [projectLinkError, setProjectLinkError] = useState(false);
  const linkSchema = z.string().url();
  // getting user data  from session storage
  const userId = sessionStorage.getItem("userId");
  const userName = sessionStorage.getItem("name");
  const userPhoto = sessionStorage.getItem("photo");
  // Handelling project link change
  const projectLinkOnChangeHandler = (e) => {
    setProjectLink(e.target.value);
  };
  // Handelling project link submission
  const projectSubmissionHandler = (e) => {
    e.preventDefault();
    if (linkSchema.safeParse(projectLink).success) {
      setProjectLinkError(false);
      // * API call to submit the project
      const projectData = {
        submissionLink: projectLink,
      };

      axios
        .post(
          `${import.meta.env.VITE_URL}api/user/project/submission/${userId}`,
          projectData,
          {
            headers: { Authorization: sessionStorage.getItem("Authorization") },
          }
        )
        .then((res) => {
          //? add toast in here
          alert("Project link submitted successfully");
        })
        .catch((e) => {
          if (e.response.status === 400) {
            //? add toast in here
            alert("You already submitted a project link");
          } else {
            //? Add toast in here
            alert("Something went wrong, please try again later");
          }
        });
    } else {
      setProjectLinkError(true);
    }
  };

  return (
    <>
      <div className="h-screen">
        <div className="mx-40">
          <Header>
            <HeaderProfile name={userName} photo={userPhoto} />
          </Header>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/5 h-64 bg-purple/20  border-2 rounded-xl border-purple/30 flex flex-col justify-center items-center">
            <div className="text-purple text-4xl mb-6 ml-14 font-bold">
              Paste your project link here
            </div>
            <div className="flex items-center gap-6">
              <img src={Project} />
              <form id="projectLink" onSubmit={projectSubmissionHandler}>
                <Input
                  id={"projectLink"}
                  type="text"
                  placeholder="Paste your project link here"
                  onChangeHandler={projectLinkOnChangeHandler}
                  errorHandler={projectLinkError}
                  errorMessage={"Invalid link"}
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
    </>
  );
}
