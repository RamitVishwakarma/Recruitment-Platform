import Profile from "../assets/prof.svg";
import arrow from "../assets/arw-circle-right.svg";
import { Link } from "react-router-dom";

export default function HeaderProfile() {
  return (
    <div className="flex flex-col">
      <div className="flex text-right gap-3">
        <div className="flex flex-col">
          <span className="text-grey text-xl">Hello</span>
          <span className="text-grey text-2xl font-bold">
            Ramit Vishwakarma
          </span>
        </div>
        <div>
          <img src={Profile} />
        </div>
      </div>
      {/* Need to add a condition to only show for those who didnt complete their profile */}
      {/* <Link to="/user-profile">
        <div className="flex ml-32 mt-1 border-b-2 border-red">
          <span className=" text-red text-lg">Complete Profile &nbsp;</span>
          <img className="w-6" src={arrow} />
        </div>
      </Link> */}
    </div>
  );
}
