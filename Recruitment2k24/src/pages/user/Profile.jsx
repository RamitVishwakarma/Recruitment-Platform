import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import link from "../../assets/link.svg";
import linkedIN from "../../assets/footer-li.svg";
import behance from "../../assets/behance.svg";
import hackerrank from "../../assets/hackerrank.svg";
import github from "../../assets/footer-git.svg";
import dribble from "../../assets/dribble.svg";
import { ProjectNotSubmitted } from "../../data/UserHome";

export default function Profile() {
  const photo = localStorage.getItem("Photo");
  return (
    <>
      <div className="mx-5 md:mx-20 xl:mx-40">
        <Header>
          <div className="min-w-80 max-md:mt-10">
            <div className="text-6xl font-bold">Your Profile</div>
          </div>
        </Header>
        <Link to="/user/home">
          <button className="ctaback flex gap-2 items-center text-grey">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="16"
              viewBox="0 0 9 16"
              fill="none">
              <path
                d="M8 1C5.44171 2.85861 3.15026 5.03738 1.18514 7.47872C0.938285 7.7854 0.938285 8.2146 1.18514 8.52128C3.15026 10.9626 5.44171 13.1414 8 15"
                stroke="#353535"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Dashboard
          </button>
        </Link>
        <div className="mx-10 flex gap-6 justify-between">
          {/* Image section */}
          <div className="flex gap-6">
            <div className="relative flex items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="264"
                height="264"
                viewBox="0 0 264 264"
                fill="none">
                <path
                  d="M123.419 3.05513C128.414 -1.01838 135.586 -1.01838 140.581 3.05513L151.351 11.8383C154.742 14.6019 159.255 15.5641 163.476 14.4231L176.858 10.8069C183.072 9.12759 189.611 12.042 192.516 17.7852L198.839 30.2871C200.808 34.1776 204.524 36.8863 208.831 37.5685L222.583 39.7468C228.919 40.7506 233.689 46.0524 234.018 52.4587L234.741 66.5631C234.964 70.8997 237.249 74.8683 240.888 77.2396L252.654 84.9076C258.011 88.4 260.205 95.1584 257.919 101.132L252.857 114.358C251.308 118.404 251.785 122.946 254.138 126.583L261.822 138.456C265.294 143.822 264.553 150.883 260.041 155.411L250.089 165.401C247.029 168.473 245.619 172.821 246.298 177.104L248.513 191.085C249.513 197.409 245.957 203.573 239.981 205.876L226.933 210.898C222.872 212.462 219.806 215.876 218.689 220.082L215.076 233.681C213.426 239.893 207.647 244.096 201.229 243.752L187.368 243.011C183.005 242.777 178.798 244.656 176.061 248.059L167.32 258.93C163.282 263.952 156.27 265.443 150.537 262.5L138.201 256.168C134.308 254.171 129.692 254.171 125.799 256.168L113.462 262.5C107.73 265.443 100.718 263.952 96.6804 258.93L87.9392 248.059C85.2021 244.656 80.9944 242.777 76.6325 243.011L62.7712 243.752C56.3532 244.096 50.5735 239.893 48.9236 233.681L45.3104 220.082C44.1933 215.876 41.128 212.462 37.067 210.898L24.0192 205.876C18.0418 203.573 14.4861 197.409 15.4878 191.085L17.7019 177.104C18.38 172.821 16.9713 168.473 13.9108 165.401L3.9583 155.411C-0.552776 150.883 -1.29414 143.822 2.17807 138.456L9.86144 126.583C12.2153 122.946 12.6912 118.404 11.1426 114.358L6.08034 101.132C3.79414 95.1584 5.98795 88.4 11.3466 84.9076L23.1127 77.2396C26.7511 74.8683 29.0353 70.8997 29.2578 66.5631L29.9818 52.4587C30.3106 46.0524 35.0797 40.7506 41.4166 39.7468L55.169 37.5685C59.4756 36.8863 63.1925 34.1776 65.1604 30.2871L71.484 17.7852C74.389 12.042 80.9284 9.12758 87.1426 10.8069L100.524 14.4231C104.746 15.5641 109.259 14.6019 112.648 11.8383L123.419 3.05513Z"
                  fill="#6B83FF"
                />
              </svg>
              <img className="absolute w-[223px] z-10" src={photo} />
            </div>
            {/* Details section */}
            <div>
              <div className="text-grey text-3xl font-bold">
                Ramit Vishwakarma
              </div>
              <div className="text-grey">vishwakarmaramit@gmail.com</div>
              <div className="text-grey">+91 9305786097</div>
              <div className="flex gap-2  text-grey">
                <div>1st Year</div> &#x2022; <div>22CSDS064</div>
              </div>
              <div className="text-purple font-bold">
                Aspiring Web Developer
              </div>
              <button className="mt-5 bg-purple rounded-full text-white flex items-center gap-2 px-4 py-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none">
                  <path
                    d="M1.04778 12.0609C1.0545 11.7887 1.05786 11.6525 1.09077 11.5247C1.11995 11.4113 1.16616 11.3031 1.22782 11.2037C1.29735 11.0916 1.39321 10.9953 1.58493 10.8027L11.0119 1.33436C11.39 0.954557 11.9806 0.890913 12.4304 1.1815C12.9636 1.526 13.4191 1.97869 13.7678 2.5105L13.7922 2.54777C13.8099 2.57471 13.8187 2.58818 13.8262 2.60032C14.1031 3.04625 14.0445 3.62379 13.6838 4.00448C13.674 4.01484 13.6626 4.02624 13.6399 4.04905L4.2703 13.4598C4.07142 13.6596 3.97198 13.7595 3.85592 13.8308C3.75302 13.8941 3.64083 13.9407 3.52349 13.9688C3.39113 14.0006 3.2505 14.0004 2.96925 13.9999L1 13.9968L1.04778 12.0609Z"
                    stroke="#F5F5F5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Edit Profile
              </button>
            </div>
          </div>
          {/* Resume */}
          <div className="w-60 h-40 relative outline:blue bg-blue rounded-xl ">
            <button className="absolute rounded-b-xl bottom-0 w-60 flex px-4 items-center justify-between h-12 bg-light-blue text-sm text-white">
              Ramit Vishwakarma Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  d="M1.86751 15.7915C1.40447 15.7915 1.01253 15.6311 0.691699 15.3103C0.370866 14.9895 0.210449 14.5975 0.210449 14.1345V1.86531C0.210449 1.40227 0.370866 1.01034 0.691699 0.689502C1.01253 0.368669 1.40447 0.208252 1.86751 0.208252H6.96202C7.1571 0.208252 7.32045 0.274069 7.45207 0.405703C7.58369 0.537321 7.6495 0.70067 7.6495 0.895752C7.6495 1.09083 7.58369 1.25418 7.45207 1.3858C7.32045 1.51742 7.1571 1.58323 6.96202 1.58323H1.86751C1.79699 1.58323 1.73234 1.61261 1.67356 1.67137C1.61481 1.73014 1.58543 1.79479 1.58543 1.86531V14.1345C1.58543 14.205 1.61481 14.2697 1.67356 14.3284C1.73234 14.3872 1.79699 14.4166 1.86751 14.4166H14.1367C14.2072 14.4166 14.2718 14.3872 14.3306 14.3284C14.3894 14.2697 14.4188 14.205 14.4188 14.1345V9.03997C14.4188 8.84489 14.4846 8.68154 14.6162 8.54992C14.7478 8.4183 14.9112 8.35249 15.1062 8.35249C15.3013 8.35249 15.4647 8.4183 15.5963 8.54992C15.7279 8.68154 15.7937 8.84489 15.7937 9.03997V14.1345C15.7937 14.5975 15.6333 14.9895 15.3125 15.3103C14.9917 15.6311 14.5997 15.7915 14.1367 15.7915H1.86751ZM14.4188 2.54924L6.3944 10.5736C6.26747 10.7005 6.10794 10.7655 5.91581 10.7684C5.72366 10.7713 5.56119 10.7064 5.42839 10.5736C5.2956 10.4408 5.2292 10.2798 5.2292 10.0906C5.2292 9.90139 5.2956 9.74039 5.42839 9.60759L13.4528 1.58323H10.5229C10.3278 1.58323 10.1645 1.51742 10.0329 1.3858C9.90124 1.25418 9.83543 1.09083 9.83543 0.895752C9.83543 0.70067 9.90124 0.537321 10.0329 0.405703C10.1645 0.274069 10.3278 0.208252 10.5229 0.208252H15.7937V5.47909C15.7937 5.67417 15.7279 5.83752 15.5963 5.96914C15.4647 6.10075 15.3013 6.16656 15.1062 6.16656C14.9112 6.16656 14.7478 6.10075 14.6162 5.96914C14.4846 5.83752 14.4188 5.67417 14.4188 5.47909V2.54924Z"
                  fill="#F5F5F5"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Submitted links */}
        <div className="flex flex-col gap-4 mb-20">
          <div className="text-xl text-center text-grey">Submitted Links</div>
          <div className="flex gap-4 mx-auto w-[31rem] flex-wrap">
            <Links ico={link} text={"NotSubmitted"} />
            <Links ico={linkedIN} text={"NotSubmitted"} />
            <Links ico={behance} text={"NotSubmitted"} />
            <Links ico={hackerrank} text={"NotSubmitted"} />
            <Links ico={github} text={"NotSubmitted"} />
            <Links ico={dribble} text={"NotSubmitted"} />
          </div>
        </div>
      </div>
    </>
  );
}

function Links({ ico, text }) {
  return (
    <div className="flex w-60 gap-2">
      <img className="w-4" src={ico} />
      <div className="text-lg">{text}</div>
    </div>
  );
}
