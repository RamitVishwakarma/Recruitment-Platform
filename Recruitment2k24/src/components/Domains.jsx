import Navbar from "./Navbar/Navbar";
import Logo from "../assets/header-logo.svg";
import Programming from "../assets/programming.svg";
import WebCLub from "../assets/webclub.svg";
import Android from "../assets/android.svg";
import Design from "../assets/design.svg";
import MachineLearning from "../assets/MachineLearning.svg";
export default function Domains() {
  return (
    <>
      <Navbar />
      {/* Margin left and right */}
      <div className="mx-[10rem]">
        <div className="h-[87vh] ">
          <div className="flex my-[3rem] justify-between">
            <img src={Logo} alt="Logo" />
            <h1 className="text-6xl text-grey font-bold">Domains</h1>
          </div>
          <div className="flex justify-center mt-[14rem]">
            <p className="text-5xl text-para-blue text-center font-prod-bold w-[70%]">
              There are 5 domains in GDSC, with each of their speciality,
              discover what’s the fit for you and get a chance to hone your
              skills in the domain of your preference.
            </p>
          </div>
        </div>
        {/* programming */}
        <div className="flex h-screen items-center justify-between ">
          <div className="w-[60%]">
            <h1 className="text-9xl text-left text-purple">Programming</h1>
            <p className="text-4xl text-left text-grey w-[100%] mt-[2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              finibus lectus, ut malesuada libero. Donec suscipit libero sed
              lorem cursus, ac ultrices purus consequat. Aliquam et tincidunt
              neque. Integer id auctor risus, eu finibus tellus. Nullam mauris
              massa, dictum ut libero vel, congue venenatis est. Maecenas eu mi
              id risus egestas accumsan.
            </p>
          </div>
          <div className="w-[40%] flex justify-center mt-[5rem]">
            <img className="w-[60%] " src={Programming} />
          </div>
        </div>
        {/* Web Club */}
        <div className="flex h-screen items-center justify-between ">
          <div className="w-[40%] flex justify-center mt-[5rem]">
            <img className="w-[60%]" src={WebCLub} />
          </div>
          <div className="w-[60%]">
            <h1 className="text-9xl text-right text-red ">Web Club</h1>
            <p className="text-4xl text-right text-grey w-[100%] mt-[2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              finibus lectus, ut malesuada libero. Donec suscipit libero sed
              lorem cursus, ac ultrices purus consequat. Aliquam et tincidunt
              neque. Integer id auctor risus, eu finibus tellus. Nullam mauris
              massa, dictum ut libero vel, congue venenatis est. Maecenas eu mi
              id risus egestas accumsan.
            </p>
          </div>
        </div>
        {/* android */}
        <div className="flex h-screen items-center justify-between ">
          <div className="w-[60%]">
            <h1 className="text-9xl text-left text-lime">Android</h1>
            <p className="text-4xl text-left text-grey w-[100%] mt-[2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              finibus lectus, ut malesuada libero. Donec suscipit libero sed
              lorem cursus, ac ultrices purus consequat. Aliquam et tincidunt
              neque. Integer id auctor risus, eu finibus tellus. Nullam mauris
              massa, dictum ut libero vel, congue venenatis est. Maecenas eu mi
              id risus egestas accumsan.
            </p>
          </div>
          <div className="w-[40%] flex justify-center mt-[5rem]">
            <img className="w-[60%] " src={Android} />
          </div>
        </div>
        {/* design */}
        <div className="flex h-screen items-center justify-between ">
          <div className="w-[40%] flex justify-center mt-[5rem]">
            <img className="w-[60%]" src={Design} />
          </div>
          <div className="w-[60%]">
            <h1 className="text-9xl text-right text-light-blue ">Design</h1>
            <p className="text-4xl text-right text-grey w-[100%] mt-[2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              finibus lectus, ut malesuada libero. Donec suscipit libero sed
              lorem cursus, ac ultrices purus consequat. Aliquam et tincidunt
              neque. Integer id auctor risus, eu finibus tellus. Nullam mauris
              massa, dictum ut libero vel, congue venenatis est. Maecenas eu mi
              id risus egestas accumsan.
            </p>
          </div>
        </div>
        {/* machine learning */}
        <div className="flex h-screen items-center justify-between ">
          <div className="w-[60%]">
            <h1 className="text-9xl text-left text-light-purple">
              Machine Learning
            </h1>
            <p className="text-4xl text-left text-grey w-[100%] mt-[2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              finibus lectus, ut malesuada libero. Donec suscipit libero sed
              lorem cursus, ac ultrices purus consequat. Aliquam et tincidunt
              neque. Integer id auctor risus, eu finibus tellus. Nullam mauris
              massa, dictum ut libero vel, congue venenatis est. Maecenas eu mi
              id risus egestas accumsan.
            </p>
          </div>
          <div className="w-[40%] flex justify-center mt-[5rem]">
            <img className="w-[60%] " src={MachineLearning} />
          </div>
        </div>
      </div>
    </>
  );
}
