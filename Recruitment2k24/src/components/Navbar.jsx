import logo from "../assets/logo.svg";
import separator from "../assets/separator.svg";
import { Link, useNavigate } from "react-router-dom";
import { Login, Logout, LetsGo, Back } from "../data/Navbar";
import axios from "axios";
import { Menu } from "@headlessui/react";

export default function Navbar({ buttonType }) {
  let buttonState;
  if (buttonType === "back") {
    buttonState = Back;
  }
  if (buttonType === "login") {
    buttonState = Login;
  }
  if (buttonType === "logout") {
    buttonState = Logout;
  }
  if (buttonType === "letsgo") {
    buttonState = LetsGo;
  }

  const navigate = useNavigate();
  const logoutHandler = () => {
    axios.post(
      `${import.meta.env.VITE_URL}api/user/auth/logout`,
      {},
      {
        headers: {
          Authorization: sessionStorage.getItem("Authorization"),
        },
      }
    );
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="sticky z-40 top-0 bg-white/70 backdrop-blur-lg">
        <div className="flex">
          <div className="border-t-[6px] border-red w-[25vw]"></div>
          <div className="border-t-[6px] border-purple w-[25vw]"></div>
          <div className="border-t-[6px] border-lime w-[25vw]"></div>
          <div className="border-t-[6px] border-light-blue w-[25vw]"></div>
        </div>
        <div className="h-[8vh] min-h-14 text-lg mx-5 md:mx-20 xl:mx-40 flex items-center justify-between">
          <div className="flex ">
            <div className="lg:hidden">
              <MenuNav />
            </div>

            <Link to="/" className="flex items-center gap-2">
              <img src={`${logo}`} alt="Logo" />
              <div className="text-grey md:text-lg font-bold">
                GDSC&nbsp;JSSATEN
              </div>
            </Link>
            <img
              src={separator}
              alt="separator"
              className="ml-6 mr-3 max-lg:hidden"
            />
            <Link
              to="/#domains"
              className="text-para-blue flex items-center gap-2 px-4 text-base rounded-full hover:bg-nav-hover max-lg:hidden">
              <span className="material-symbols-rounded text-md">cards</span>
              <div>Domains</div>
            </Link>
            <Link
              to="/#timeline"
              className="text-para-blue flex items-center gap-2 px-4 text-base rounded-full hover:bg-nav-hover max-lg:hidden">
              <span className="material-symbols-rounded text-md">timeline</span>
              <div>Timeline</div>
            </Link>
            <Link
              to="https://gdscjss.in/"
              target="_blank"
              className="text-para-blue flex items-center gap-2 px-4 text-base rounded-full hover:bg-nav-hover max-lg:hidden">
              <span className="material-symbols-rounded text-md">language</span>
              <div>Website</div>
            </Link>
            <Link
              to="https://www.instagram.com/p/C5vJ2f7Ry3o/"
              target="_blank"
              className="text-para-blue flex items-center gap-2 px-4 text-base rounded-full hover:bg-nav-hover max-lg:hidden">
              <span className="material-symbols-rounded text-md">
                bar_chart
              </span>
              <div>Results</div>
            </Link>
          </div>
          <div className="max-lg:hidden">
            {buttonType != "logout" && (
              <Link to={buttonState.link} state={buttonState.useNavigateState}>
                <button
                  className={`${
                    buttonType === "back" ? "ctaback" : "cta"
                  } flex items-center justify-center px-8 py-1 rounded-lg bg-lime text-para-blue hover:bg-button-hover`}>
                  <div className="p-1 text-xl flex items-center justify-center gap-4 text-button-text">
                    {buttonState.style}
                  </div>
                </button>
              </Link>
            )}
            {buttonType === "logout" && (
              <button
                onClick={logoutHandler}
                className="cta flex items-center justify-center px-8 py-1 rounded-lg bg-lime text-para-blue hover:bg-button-hover">
                <div className="p-1 text-xl flex items-center justify-center gap-4 text-button-text">
                  {buttonState.style}
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

import { Transition } from "@headlessui/react";
import { Fragment } from "react";

export function MenuNav() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          <div className="md:block mr-5 text-grey">
            <span className="material-symbols-rounded text-4xl">menu</span>
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 left-5 min-w-min origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="p-1">
            <Menu.Item>
              <Link
                to="/#domains"
                className="text-para-blue flex items-center gap-2 px-4 text-base rounded-md hover:bg-nav-hover">
                <span className="material-symbols-rounded text-md">cards</span>
                <div>Domains</div>
              </Link>
            </Menu.Item>
          </div>
          <div className="p-1">
            <Menu.Item>
              <Link
                to="/#timeline"
                className="text-para-blue flex items-center gap-2 px-4 text-base rounded-md hover:bg-nav-hover">
                <span className="material-symbols-rounded text-md">
                  timeline
                </span>
                <div>Timeline</div>
              </Link>
            </Menu.Item>
          </div>
          <div className="p-1">
            <Menu.Item>
              <Link
                to="https://gdscjss.in/"
                target="_blank"
                className="text-para-blue flex items-center gap-2 px-4 text-base rounded-md hover:bg-nav-hover">
                <span className="material-symbols-rounded text-md">
                  language
                </span>
                <div>Website</div>
              </Link>
            </Menu.Item>
          </div>
          <div className="p-1">
            <Menu.Item>
              <Link
                to="https://www.instagram.com/p/C5vJ2f7Ry3o/"
                target="_blank"
                className="text-para-blue flex items-center gap-2 px-4 text-base rounded-md hover:bg-nav-hover">
                <span className="material-symbols-rounded text-md">
                  bar_chart
                </span>
                <div>Results</div>
              </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
