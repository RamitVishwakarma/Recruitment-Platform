import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Recruitments from "../../../src/assets/recruitments-text.svg";
import Timeline from "../../../src/assets/timeline-home.svg";
export default function Homepage() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <img
          className="mt-[20vh] w-[55%] mx-auto"
          src={`${Recruitments}`}></img>
        <img className="mt-[20vh] w-[70vw] mx-auto" src={`${Timeline}`} />
      </div>
      <Footer />
    </>
  );
}
