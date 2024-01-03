import Navbar from "./Navbar/Navbar";
import Logo from "../assets/header-logo.svg";
import Programming from "../assets/programming.svg";
import WebCLub from "../assets/webclub.svg";
import Android from "../assets/android.svg";
import Design from "../assets/design.svg";
import MachineLearning from "../assets/MachineLearning.svg";
import Footer from "./Footer";
export default function Domains() {
  return (
    <>
      <Navbar />
      {/* Margin left and right */}
      <div className="mx-40">
        <div className="h-[50vh]">
          <div className="flex my-6 justify-between">
            <img src={Logo} alt="Logo" />
            <h1 className="text-6xl text-grey font-bold">Domains</h1>
          </div>
          <div className="flex justify-center mt-48">
            <p className="text-5xl text-para-blue text-center w-8/12">
              There are 5 domains in GDSC, with each of their speciality,
              discover what’s the fit for you and get a chance to hone your
              skills in the domain of your preference.
            </p>
          </div>
        </div>
        {/* programming */}
        <div className="flex items-center justify-between mt-48">
          <div className="flex flex-col content-normal">
            <h1 className="text-8xl text-grey font-bold mt-10">Programming</h1>
            <p className="text-para-blue text-xl w-8/12 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolore, 
              quibusdam aperiam ab omnis accusantium tenetur laboriosam repudiandae officia nihil
              possimus reiciendis iste architecto iure facere dignissimos eligendi veritatis maiores?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem 
              maxime vero incidunt harum? Deserunt reiciendis architecto totam eum 
              facere nobis nemo est vero nisi, iusto minus omnis veritatis earum tenetur.
            </p>
          </div>
          <img src={Programming} alt="Programming" />
        </div>
        {/* webclub */}
        <div className="flex items-center justify-between mt-48">
          <img src={WebCLub} alt="WebCLub" />
          <div className="flex flex-col items-end">
            <h1 className="text-8xl text-grey font-bold mt-10">Web Club</h1>
            <p className="text-para-blue text-right text-xl w-8/12 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolore, 
              quibusdam aperiam ab omnis accusantium tenetur laboriosam repudiandae officia nihil
              possimus reiciendis iste architecto iure facere dignissimos eligendi veritatis maiores?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem 
              maxime vero incidunt harum? Deserunt reiciendis architecto totam eum 
              facere nobis nemo est vero nisi, iusto minus omnis veritatis earum tenetur.
            </p>
          </div>
        </div>
        {/* android */}
        <div className="flex items-center justify-between mt-48">
          <div>
            <h1 className="text-8xl text-grey font-bold mt-10">Android</h1>
            <p className="text-para-blue text-xl w-8/12 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolore, 
              quibusdam aperiam ab omnis accusantium tenetur laboriosam repudiandae officia nihil
              possimus reiciendis iste architecto iure facere dignissimos eligendi veritatis maiores?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem 
              maxime vero incidunt harum? Deserunt reiciendis architecto totam eum 
              facere nobis nemo est vero nisi, iusto minus omnis veritatis earum tenetur.
            </p>
          </div>
          <img src={Android} alt="Android" />
        </div>
        {/* Design */}
        <div className="flex items-center justify-between mt-48">
          <img src={Design} alt="Design" />
          <div className="flex flex-col items-end">
            <h1 className="text-8xl text-grey font-bold mt-10">Design</h1>
            <p className="text-para-blue text-right text-xl w-8/12 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolore, 
              quibusdam aperiam ab omnis accusantium tenetur laboriosam repudiandae officia nihil
              possimus reiciendis iste architecto iure facere dignissimos eligendi veritatis maiores?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem 
              maxime vero incidunt harum? Deserunt reiciendis architecto totam eum 
              facere nobis nemo est vero nisi, iusto minus omnis veritatis earum tenetur.
            </p>
          </div>
        </div>
        {/* MachineLearning */}
        <div className="flex items-center justify-between mt-48">
          <div>
            <h1 className="text-8xl text-grey font-bold mt-10">Machine Learning</h1>
            <p className="text-para-blue text-xl w-8/12 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolore, 
              quibusdam aperiam ab omnis accusantium tenetur laboriosam repudiandae officia nihil
              possimus reiciendis iste architecto iure facere dignissimos eligendi veritatis maiores?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem 
              maxime vero incidunt harum? Deserunt reiciendis architecto totam eum 
              facere nobis nemo est vero nisi, iusto minus omnis veritatis earum tenetur.
            </p>
          </div>
          <img src={MachineLearning} alt="MachineLearning" />
        </div>
      </div>
      <Footer />
    </>
  );
}
