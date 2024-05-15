import { Link } from "react-router-dom";

export default function Guidelines() {
  return (
    <>
      <div className="min-h-[90vh] bg-background">
        <div className="mx-5 md:mx-20 xl:mx-40">
          <h1 className="text-5xl font-bold mt-[6vh] text-center pb-2">
            Lets start the Quiz!
          </h1>
          <div className="mx-auto bg-text-box shadow-xl mt-2 w-3/5 max-md:w-4/5 min-h-[60vh] justify-center items-center rounded-2xl">
            <div className="text-red font-bold text-4xl text-center p-6 ">
              Guidelines
            </div>

            <ul className="text-red w-[95%] list-disc px-20 pb-10 text-2xl flex flex-col p-6">
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
            <div className="flex justify-center mx-auto my-[7vh]">
              <button className=" font-bold text-xl text-button-text bg-lime rounded-lg hover:bg-button-hover px-20 py-3">
                Begin
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
