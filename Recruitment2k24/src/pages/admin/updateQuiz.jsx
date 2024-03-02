import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UpdateQuiz() {
  const [quizes, setQuizes] = useState();

  // * Fetching all the quizes of the domain form database
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}api/admin/Quiz/showAllQuestions`, {
        headers: {
          Authorization: sessionStorage.getItem("Admin Token"),
        },
      })
      .then((res) => {
        setQuizes(res.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  return (
    <div className="mt-5 h-screen">
      <div className="font-bold text-purple text-center text-5xl">
        Edit Quiz
      </div>
      {quizes ? (
        quizes.map((quiz) => {
          return (
            <div key={quiz._id} className="flex justify-evenly mt-5">
              <div className="text-2xl font-semibold w-96">{quiz.title}</div>
              <div>
                <Link
                  to={`/${quiz._id}`}
                  className="bg-purple text-white p-2 px-6 rounded-md">
                  Edit
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default UpdateQuiz;
