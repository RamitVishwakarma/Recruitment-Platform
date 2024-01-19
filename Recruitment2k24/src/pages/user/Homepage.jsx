import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Flame from "../../../src/assets/flame.svg";
import Sapling from "../../../src/assets/sapling.svg";
import GDSClogo from "../../../src/assets/gdsc_logo_centered.svg";
import Homebg from "../../../src/assets/homepagebg.svg";
import Recruitments from "../../../src/assets/recruitments-text.svg";

import Lenis from '@studio-freight/lenis'

export default function Homepage() {
  const lenis = new Lenis({
    //larp: 0.5,
    duration: 0.7,
    easing: (t) => 1 - Math.pow(1 - t, 5),
  });
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-12 items-center mb-20 text-grey">
        <img className="mt-60 mx-auto" src={Recruitments}></img>

        <div className="flex items-center gap-12">
          <h2 className="font-bold text-4xl">Register Here</h2>
          <button className="cta flex items-center gap-6 bg-lime px-10 rounded-xl py-4">
            <h5 className="text-2xl">Let&apos;s Go</h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="24" viewBox="0 0 33 24" fill="none">
            <path d="M28.9491 13.1501H2.08261C1.75223 13.1501 1.47618 13.0392 1.25448 12.8175C1.03274 12.5958 0.921875 12.3197 0.921875 11.9894C0.921875 11.659 1.03274 11.3829 1.25448 11.1612C1.47618 10.9395 1.75223 10.8286 2.08261 10.8286H28.9491L20.2793 2.15882C20.0531 1.93264 19.9348 1.66627 19.9244 1.35972C19.914 1.05317 20.0323 0.771921 20.2793 0.51598C20.5353 0.259999 20.8114 0.129787 21.1075 0.125337C21.4036 0.120849 21.6797 0.246595 21.9356 0.502576L32.1099 10.6769C32.3123 10.8792 32.4544 11.0861 32.5363 11.2974C32.6181 11.5087 32.659 11.7393 32.659 11.9894C32.659 12.2394 32.6181 12.47 32.5363 12.6813C32.4544 12.8927 32.3123 13.0995 32.1099 13.3019L21.9356 23.4762C21.7094 23.7023 21.4408 23.8207 21.1298 23.8311C20.8188 23.8415 20.5353 23.7187 20.2793 23.4627C20.0323 23.2068 19.9066 22.933 19.9021 22.6413C19.8976 22.3496 20.0234 22.0758 20.2793 21.8199L28.9491 13.1501Z" fill="#2F3B00"/>
            </svg>
          </button>
        </div>
        {/* flame */}
        <div className="mt-48 relative">
          <img src={Flame} alt="" />
          <p className="text-7xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">Every talent is precious to us</p>
        </div>

        {/* sapling */}
        <div className="mt-48 mb-20 relative">
          <img src={Sapling} alt="" />
          <p className="text-7xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">A place to hone your skills and grow</p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="204" viewBox="0 0 3 204" fill="none">
          <path opacity="0.4" d="M1.5 0L1.50001 204" stroke="#353535" strokeWidth="3"/>
        </svg>

        {/* club intro */}
        <div className="mt-20 flex flex-col gap-6 items-center mb-28">
          <h3 className="text-5xl">Welcome to</h3>
          <div className="relative">
            <img src={Homebg} className="w-screen" alt="" />
            <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={GDSClogo} alt="" />
          </div>
          <h3 className="text-5xl">and find a place in our domains</h3>
        </div>
      
      </div>
      <Footer />
    </>
  );
}
