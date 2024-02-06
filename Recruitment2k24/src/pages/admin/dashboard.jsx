// import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserIcon from "../../assets/users.svg";
import ProjectIcon from "../../assets/project.svg";
import QuizIcon from "../../assets/quiz.svg";
import Shortlist from "../../assets/shortlist.svg";

const Dashboard = () => {
  const admininfo = {
    domain: "Design",
    photo: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
    total_users: 234,
    shortlisted: 34,
    total_projects: 92,
    quizCreated: false,
    quiz_taken: 184,
  };

  return (
    <>
      {/* navbar */}
      <div className="bg-cover bg-background">
        <div className="h-[95vh] mx-40 mt-10 ">
          <h2 className="text-4xl">{admininfo.domain} Dashboard</h2>

          {/* cards */}
          <div className="bg-text-box relative overflow-hidden w-fit mt-28 mx-auto px-16 py-16 rounded-3xl">
            <div className="grid grid-cols-2 grid-rows-2 place-content-center gap-16">

              <a href="/admin/users">
                <div className="flex z-10 justify-center items-center gap-8 bg-white w-80 py-6 rounded-2xl">
                  <div className="w-16 h-16 rounded-full grid place-items-center bg-light-blue/30"><img className="w-10" src={UserIcon} alt="" /></div>
                  <div>
                    <h2 className="text-3xl">{admininfo.total_users}</h2>
                    <h3 className="text-xl opacity-60">Registered Users</h3>
                  </div>
                </div>
              </a>

              <div className="flex z-10 justify-center items-center gap-8 bg-white w-80 py-6 rounded-2xl">
                <div className="w-16 h-16 rounded-full grid place-items-center bg-purple/30"><img className="w-8" src={ProjectIcon} alt="" /></div>
                <div>
                  <h2 className="text-3xl">{admininfo.total_projects}</h2>
                  <h3 className="text-xl opacity-60">Projects Submitted</h3>
                </div>
              </div>

              <div className="flex z-10 justify-center items-center gap-8 bg-white w-80 py-6 rounded-2xl">
                <div className="w-16 h-16 rounded-full grid place-items-center bg-lime/30"><img className="w-10" src={Shortlist} alt="" /></div>
                <div>
                  <h2 className="text-3xl">{admininfo.shortlisted}</h2>
                  <h3 className="text-xl opacity-60">Users Shortlisted</h3>
                </div>
              </div>

              <div className="flex z-10 justify-center items-center gap-8 bg-white w-80 py-6 rounded-2xl">
                <div className="w-16 h-16 rounded-full grid place-items-center bg-red/30"><img className="w-8" src={QuizIcon} alt="" /></div>
                <div>
                  <h3 className="text-2xl underline">Manage Quiz</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
