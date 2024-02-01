import React from "react";
import arrRight from "../../assets/arrRight.svg";
import Header from "../../components/Header";
import HeaderProfile from "../../components/HeaderProfile";

// Images
import programming from "../../assets/programming.svg";
import web from "../../assets/webclub.svg";
import android from "../../assets/android.svg";
import ml from "../../assets/machinelearning.svg";
import design from "../../assets/design.svg";

import { Link } from "react-router-dom";
const Quizes = () => {
  return (
    <>
      <div className="h-[88vh]">
        <div className="mx-40mx-5 md:mx-20 xl:mx-40">
          <Header>
            <div className="min-w-80 max-md:mt-10">
              <HeaderProfile />
            </div>
          </Header>
          <div className="flex">
            <div className="w-1/2">
              <div className="font-bold text-grey text-4xl">Qther Quizes</div>
              <div className="text-grey/50  text-sm flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 30 30"
                  fill="none">
                  <path
                    d="M15.0011 22.125C15.2257 22.125 15.4136 22.0491 15.5648 21.8974C15.7161 21.7457 15.7917 21.5576 15.7917 21.3333V14.2083C15.7917 13.984 15.7157 13.796 15.5637 13.6443C15.4118 13.4925 15.2236 13.4167 14.9989 13.4167C14.7743 13.4167 14.5864 13.4925 14.4352 13.6443C14.284 13.796 14.2083 13.984 14.2083 14.2083V21.3333C14.2083 21.5576 14.2843 21.7457 14.4363 21.8974C14.5882 22.0491 14.7764 22.125 15.0011 22.125ZM15 11.1635C15.2761 11.1635 15.5075 11.0701 15.6943 10.8833C15.881 10.6966 15.9743 10.4652 15.9743 10.1891C15.9743 9.91303 15.881 9.68162 15.6943 9.49487C15.5075 9.30811 15.2761 9.21474 15 9.21474C14.7239 9.21474 14.4925 9.30811 14.3057 9.49487C14.119 9.68162 14.0257 9.91303 14.0257 10.1891C14.0257 10.4652 14.119 10.6966 14.3057 10.8833C14.4925 11.0701 14.7239 11.1635 15 11.1635ZM15.0053 29.25C13.0348 29.25 11.1821 28.8761 9.44741 28.1282C7.71268 27.3804 6.2037 26.3654 4.92046 25.0834C3.63725 23.8014 2.62137 22.2938 1.87282 20.5607C1.12427 18.8276 0.75 16.9758 0.75 15.0053C0.75 13.0348 1.12392 11.1821 1.87175 9.44741C2.61961 7.71268 3.63456 6.2037 4.91658 4.92046C6.19861 3.63725 7.70616 2.62137 9.43925 1.87282C11.1724 1.12427 13.0242 0.75 14.9947 0.75C16.9652 0.75 18.8179 1.12392 20.5526 1.87175C22.2873 2.61961 23.7963 3.63456 25.0795 4.91658C26.3628 6.19861 27.3786 7.70616 28.1272 9.43925C28.8757 11.1724 29.25 13.0242 29.25 14.9947C29.25 16.9652 28.8761 18.8179 28.1282 20.5526C27.3804 22.2873 26.3654 23.7963 25.0834 25.0795C23.8014 26.3628 22.2938 27.3786 20.5607 28.1272C18.8276 28.8757 16.9758 29.25 15.0053 29.25ZM15 27.6667C18.5361 27.6667 21.5312 26.4396 23.9854 23.9854C26.4396 21.5312 27.6667 18.5361 27.6667 15C27.6667 11.4639 26.4396 8.46875 23.9854 6.01458C21.5312 3.56042 18.5361 2.33333 15 2.33333C11.4639 2.33333 8.46875 3.56042 6.01458 6.01458C3.56042 8.46875 2.33333 11.4639 2.33333 15C2.33333 18.5361 3.56042 21.5312 6.01458 23.9854C8.46875 26.4396 11.4639 27.6667 15 27.6667Z"
                    fill="#35353580"
                  />
                </svg>
                Click to view quizzes of other domains
              </div>
              <div className="flex flex-col gap-4">
                <Components
                  img={programming}
                  imgBgColor="bg-light-purple/30"
                  text="Programming"
                />
                <Components
                  img={web}
                  imgBgColor="bg-light-red/30"
                  text="Web Club"
                />
                <Components
                  img={android}
                  imgBgColor="bg-lime/30"
                  text="Android"
                />
                <Components
                  img={ml}
                  imgBgColor="bg-light-yellow/30"
                  text="Machine Learning"
                />
              </div>
            </div>

            <div className="w-1/2 flex flex-col items-center">
              <div className="text-center font-bold text-4xl">
                Start your
                <br /> domain quiz
              </div>
              <div className=" shadowCard w-80 mt-5 flex flex-col items-center justify-center p-8 rounded-xl outline outline-1 outline-light-blue shadow-light-blue  ">
                <div className="w-32 h-32 rounded-full bg-light-blue/30 flex items-center justify-center">
                  <img className="w-20 h-20" src={design} />
                </div>
                <div className="font-bold text-4xl p-4">Design</div>
                <Link to="/user/quiz_guidelines">
                  <button className="rounded-full bg-light-blue p-1 px-7 text-white">
                    Start now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Components({ img, imgBgColor, text }) {
  return (
    <div className="flex gap-4 cursor-pointer homePageComponent">
      <div
        className={`w-12 h-12 rounded-full ${imgBgColor} flex items-center justify-center`}>
        <img className="w-6 h-6" src={img} />
      </div>
      <div className="flex font-bold w-40 items-center">
        <div>{text}</div>
      </div>
      <button className="pl-5 flex items-center cursor-pointer ">
        <img className="w-6" src={arrRight} />
      </button>
    </div>
  );
}
export default Quizes;
