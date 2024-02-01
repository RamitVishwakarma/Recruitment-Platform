import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Programming from "../../assets/programming.svg";
import WebCLub from "../../assets/webclub.svg";
import Android from "../../assets/android.svg";
import Design from "../../assets/design.svg";
import MachineLearning from "../../assets/machinelearning.svg";

export default function Domains() {
  return (
    <>
      <Navbar />
      {/* Margin left and right */}
      <div className="mx-40">
        <div className="h-[92vh]">
          <Header>
            <h1 className="text-6xl text-grey font-bold">Domains</h1>
          </Header>
          <div className="flex justify-center mt-48">
            <p className="text-5xl text-para-blue text-center w-8/12">
              There are 5 domains in GDSC, with each of their speciality,
              discover what’s the fit for you and get a chance to hone your
              skills in the domain of your preference.
            </p>
          </div>
        </div>
        {/* programming */}
        <div className="flex h-screen items-center justify-between">
          <div className="flex flex-col content-normal">
            <h1 className="text-8xl text-purple font-bold">Programming</h1>
            <p className="text-para-blue text-xl w-8/12 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, dolore, quibusdam aperiam ab omnis accusantium
              tenetur laboriosam repudiandae officia nihil possimus reiciendis
              iste architecto iure facere dignissimos eligendi veritatis
              maiores? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem maxime vero incidunt harum? Deserunt reiciendis
              architecto totam eum facere nobis nemo est vero nisi, iusto minus
              omnis veritatis earum tenetur.
            </p>
          </div>
          <img className="mt-5" src={Programming} alt="Programming" />
        </div>
        {/* webclub */}
        <div className="flex h-screen items-center justify-between">
          <img className="mt-5" src={WebCLub} alt="WebCLub" />
          <div className="flex flex-col items-end">
            <h1 className="text-8xl text-red font-bold">Web Club</h1>
            <p className="text-para-blue text-right text-xl w-8/12 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, dolore, quibusdam aperiam ab omnis accusantium
              tenetur laboriosam repudiandae officia nihil possimus reiciendis
              iste architecto iure facere dignissimos eligendi veritatis
              maiores? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem maxime vero incidunt harum? Deserunt reiciendis
              architecto totam eum facere nobis nemo est vero nisi, iusto minus
              omnis veritatis earum tenetur.
            </p>
          </div>
        </div>
        {/* android */}
        <div className="flex h-screen items-center justify-between">
          <div>
            <h1 className="text-8xl text-lime font-bold">Android</h1>
            <p className="text-para-blue text-xl w-8/12 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, dolore, quibusdam aperiam ab omnis accusantium
              tenetur laboriosam repudiandae officia nihil possimus reiciendis
              iste architecto iure facere dignissimos eligendi veritatis
              maiores? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem maxime vero incidunt harum? Deserunt reiciendis
              architecto totam eum facere nobis nemo est vero nisi, iusto minus
              omnis veritatis earum tenetur.
            </p>
          </div>
          <img className="mt-5" src={Android} alt="Android" />
        </div>
        {/* Design */}
        <div className="flex h-screen items-center justify-between">
          <img className="mt-5" src={Design} alt="Design" />
          <div className="flex flex-col items-end">
            <h1 className="text-8xl text-light-blue font-bold">Design</h1>
            <p className="text-para-blue text-right text-xl w-8/12 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, dolore, quibusdam aperiam ab omnis accusantium
              tenetur laboriosam repudiandae officia nihil possimus reiciendis
              iste architecto iure facere dignissimos eligendi veritatis
              maiores? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem maxime vero incidunt harum? Deserunt reiciendis
              architecto totam eum facere nobis nemo est vero nisi, iusto minus
              omnis veritatis earum tenetur.
            </p>
          </div>
        </div>
        {/* MachineLearning */}
        <div className="flex h-screen items-center justify-between">
          <div>
            <h1 className="text-8xl text-light-purple font-bold">
              Machine Learning
            </h1>
            <p className="text-para-blue text-xl w-8/12 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, dolore, quibusdam aperiam ab omnis accusantium
              tenetur laboriosam repudiandae officia nihil possimus reiciendis
              iste architecto iure facere dignissimos eligendi veritatis
              maiores? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem maxime vero incidunt harum? Deserunt reiciendis
              architecto totam eum facere nobis nemo est vero nisi, iusto minus
              omnis veritatis earum tenetur.
            </p>
          </div>
          <img className="mt-5" src={MachineLearning} alt="MachineLearning" />
        </div>
      </div>
      <Footer />
    </>
  );
}
