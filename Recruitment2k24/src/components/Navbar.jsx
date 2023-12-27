import logo from "../assets/gdsc_nav.svg"
import domainButton from "../assets/domainButton.svg"
import webButton from "../assets/WebsiteButton.svg"
import timeLine from "../assets/timeline.svg"
import result from "../assets/result.svg"
import login from "../assets/login.svg"
export default function Navbar (){
    return(
        <div className="h-[10vh] flex flex-row justify-between">
        <div className="flex">
        <img className="max-h-[2.5rem] max-w-[7.25rem]"src={`${logo}`} alt="GDSC" />
        <img className="max-h-[] max-w-[]"src={`${domainButton}`} alt="Domain" />
        <img className="max-h-[] max-w-[]"src={`${webButton}`} alt="Web" />
        <img className="max-h-[] max-w-[]"src={`${timeLine}`} alt="timeline" />
        <img className="max-h-[] max-w-[]"src={`${result}`} alt="result" />
        </div>
        <div className="flex">
        <img className="max-h-[] max-w-[]"src={`${login}`} alt="login" />
        </div>
        </div>
    );
}