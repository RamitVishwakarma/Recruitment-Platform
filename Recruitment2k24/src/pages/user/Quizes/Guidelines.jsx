import Header from "../../../components/Header";
import HeaderProfile from "../../../components/HeaderProfile";
import { Link } from "react-router-dom";

export default function Guidelines() {
  const name = sessionStorage.getItem("name");
  const photo = sessionStorage.getItem("photo");
  return (
    <>
      <div className="h-full">
        <div className="mx-40">
          <Header>
            <div className="min-w-80 max-md:mt-10">
              <HeaderProfile name={name} photo={photo} />
            </div>
          </Header>
          <h1 className="text-5xl font-bold text-center pb-2">
            Lets start the Quiz!
          </h1>
          <div className="mx-auto mt-2 w-3/5 h-2/5 flex flex-col justify-center items-center rounded-2xl">
            <div className="text-red font-bold text-[1.7em] text-center p-5">
              Guidelines
            </div>

            <ul className="text-red w-[95%] list-disc px-20 pb-10 text-[1.3em]">
              <li className="">
                This is a timed quiz. You will only get 30 mins to complete it.
              </li>
              <li className="mt-3 max-w-4/5">
                You are not allowed to switch tabs or window, if you do, you
                will be disqualified.
              </li>
              <li className="mt-3 max-w-4/5">
                This quiz contains 20 questions, try your best to attempt them
                all.
              </li>
              <li className="mt-3 max-w-4/5">
                All the very best to you. See you later.
              </li>
            </ul>
          </div>
          <Link to="/user/quiz">
            <div className="flex justify-center">
              <button className="mx-auto my-4 font-bold text-xl text-button-text bg-lime rounded-lg hover:bg-button-hover px-10 py-3">
                Begin
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
