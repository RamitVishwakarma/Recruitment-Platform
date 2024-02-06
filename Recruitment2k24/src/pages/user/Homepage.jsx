import Flame from "../../../src/assets/flame.svg";
import Sapling from "../../../src/assets/sapling.svg";
import GDSClogo from "../../../src/assets/gdsc_logo_centered.svg";
import Homebg from "../../../src/assets/homepagebg.svg";
import Recruitments from "../../../src/assets/recruitments-text.svg";
import Timeline from "../../../src/assets/timeine.svg";
import Pointer from "../../../src/assets/tri.svg";

import Android from "../../../src/assets/android.svg";
import WebClub from "../../../src/assets/webclub.svg";
import Programming from "../../../src/assets/programming.svg";
import Design from "../../../src/assets/design.svg";
import ML from "../../../src/assets/machinelearning.svg";

import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Homepage() {
  const lenis = new Lenis({
    lerp: 0.3,
    easing: (t) => 1 - Math.pow(1 - t, 5),
    //duration: 0.2,
  });

  // Scroll to domain logic
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".gdsclogo", { opacity: 0 });
    gsap.to(".text1", {
      scrollTrigger: {
        trigger: ".text1",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: -120,
    });
    gsap.to(".text2", {
      scrollTrigger: {
        trigger: ".text2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: -120,
    });
    gsap.to(".gdsclogo", {
      scrollTrigger: {
        duration: 1,
        trigger: ".gdsclogo",
        start: "top 50%",
        end: "bottom 90%",
        scrub: false,
      },
      opacity: 1,
    });
  });

  return (
    <>
      <div className="flex flex-col gap-20 items-center mb-20 text-grey">
        <img className="mt-52 w-11/12 mx-auto md:w-fit" src={Recruitments}></img>

        <div className="flex flex-col justify-center items-center gap-12">
          <h2 className="text-2xl mx-10 text-center md:text-2xl md:whitespace-nowrap">Your journey into GDSC begins here.</h2>
          <Link to="/auth">
            <button className="bg-lime px-10 rounded-xl py-4">
              <h5 className="text-3xl">Register Now</h5>
            </button>
          </Link>
        </div>
        {/* flame */}
        <div className="mt-36 flex justify-center text-center relative">
          <img src={Flame} className="w-3/4 md:w-fit" alt="" />
          <p className="text1 text-4xl md:text-6xl md:whitespace-nowrap absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Every&nbsp;talent&nbsp;is precious&nbsp;to us
          </p>
        </div>

        {/* sapling */}
        <div className="mt-48 flex justify-center text-center mb-4 relative">
          <img src={Sapling} className="w-3/4 md:w-fit" alt="" />
          <p className="text2 text-4xl md:text-6xl md:whitespace-nowrap absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            A place to hone&nbsp;your skills&nbsp;and grow
          </p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="204"
          viewBox="0 0 3 204"
          fill="none">
          <path
            opacity="0.4"
            d="M1.5 0L1.50001 204"
            stroke="#353535"
            strokeWidth="3"
          />
        </svg>

        {/* club intro */}
        <div className="mt-4 flex text-center flex-col gap-6 items-center justify-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl">Welcome to</h3>
          <div className="md:relative flex justify-center my-4">
            <img src={Homebg} className="hidden md:block md:w-screen" alt="" />
            <img
              className="w-3/4 md:w-fit gdsclogo md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
              src={GDSClogo}
              alt=""
            />
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl" id="domains">
            and find a place in our domains
          </h3>
        </div>

        {/* domains */}
        <div className="cards">
          <div className="row1">
            <div className="card bg-purple/20 text-purple font-bold">
              <img src={Programming} alt="" />
              <h2>Programming</h2>
              <p>
                The art of instructing computers through code to perform
                specific tasks, solve problems, and create software
                applications.
              </p>
              <span>01</span>
            </div>
            <div className="card bg-red/20 text-red font-bold">
              <img src={WebClub} alt="" />
              <h2>Web Club</h2>
              <p>
                Creating wonders in web apps, encompassing both front-end and
                back-end development to ensure a seamless online user
                experience.
              </p>
              <span>02</span>
            </div>
            <div className="card bg-lime/20 text-lime font-bold">
              <img src={Android} alt="" />
              <h2>Android</h2>
              <p>
                The domain focused on developing applications and systems for
                the Android operating system, powering a vast majority of mobile
                devices.
              </p>
              <span>03</span>
            </div>
          </div>

          <div className="row2">
            <div className="card bg-light-blue/20 text-light-blue font-bold">
              <img src={Design} alt="" />
              <h2>Design</h2>
              <p>
                The creative process of shaping the visual and user interface
                aspects of digital products, including websites, apps to enhance
                user engagement and satisfaction.
              </p>
              <span>04</span>
            </div>
            <div className="card bg-[#D2BD0026] text-[#ECCD2A] font-bold">
              <img src={ML} alt="" />
              <h2>
                Machine
                <br />
                Learning
              </h2>
              <p>
                Harnessing algorithms to enable computers to learn from data,
                recognize patterns, and make predictions autonomously.
              </p>
              <span>05</span>
            </div>
          </div>
        </div>

        {/* ready? */}
        <div className="mt-10">
          <p className="text-4xl md:text-5xl lg:text-6xl w-3/5 mx-auto text-center">
            Ready to be a part of a thriving community of geeks?
          </p>
        </div>
        {/* timeline */}
        <div className="flex items-stretch md:items-end gap-4 md:gap-8">
          <div className="flex">
            <img src={Timeline} className="w-[4vh] md:w-full" alt="" />
            <img
              className="absolute mt-2 -translate-x-2"
              src={Pointer}
              alt=""
            />
          </div>
          <div className="flex gap-14 text-2xl md:text-4xl flex-col pr-8">
            <div className="flex flex-col md:flex-row gap-2 md:gap-14 justify-between">
              <h3>Registrations&nbsp;Start</h3>
              <h3 className="font-bold date">
                <span className="text-light-blue">20</span>{" "}
                <span className="text-purple">Feb</span>{" "}
                <span className="text-red">2024</span>
              </h3>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-14 justify-between">
              <h3>Project&nbsp;Submissions</h3>
              <h3 className="font-bold date">
                <span className="text-light-blue">27</span>{" "}
                <span className="text-purple">Feb</span>{" "}
                <span className="text-red">2024</span>
              </h3>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-14 justify-between">
              <h3>Quiz&nbsp;Round</h3>
              <h3 className="font-bold date">
                <span className="text-light-blue">03</span>{" "}
                <span className="text-purple">Mar</span>{" "}
                <span className="text-red">2024</span>
              </h3>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-14 justify-between">
              <h3>Interview&nbsp;Shortlisting</h3>
              <h3 className="font-bold date">
                <span className="text-light-blue">05</span>{" "}
                <span className="text-purple">Mar</span>{" "}
                <span className="text-red">2024</span>
              </h3>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-14 justify-between">
              <h3>Results</h3>
              <h3 className="font-bold date">
                <span className="text-light-blue">10</span>{" "}
                <span className="text-purple">Mar</span>{" "}
                <span className="text-red">2024</span>
              </h3>
            </div>
          </div>
        </div>

        {/* easter */}
        <div className="flex text-xl gap-8 opacity-40 mt-12">
          <p>------------------------------</p>
          <p>May the force be with you</p>
          <p>------------------------------</p>
        </div>

        {/* admin login */}
        <Link href="/admin/login">
          <button className="hidden md:flex gap-4 rounded-full bg-text-box py-1 px-4 hover:bg-grey/5">
            <p>Admin Login</p>
            <span className="material-symbols-rounded">arrow_circle_right</span>
          </button>
        </Link>
      </div>
    </>
  );
}
