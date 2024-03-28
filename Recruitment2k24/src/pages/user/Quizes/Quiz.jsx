import Header from "../../../components/Header";
import HeaderProfile from "../../../components/HeaderProfile";
import axios from "axios";
import { useEffect, useState } from "react";

export default function QuizPage() {
  const [questions, setQuestions] = useState([]);
  let questionId = "65e325f9611125494f62001e";
  const [questionNumber, setQuestionNumber] = useState(2);

  useEffect(() => {
    // Fetch the questions from the server
    axios
      .get(
        `${
          import.meta.env.VITE_URL
        }api/user/quizTaken/showQuestions?quizId=${questionId}&page=${questionNumber}`,
        {
          headers: {
            Authorization: `${sessionStorage.getItem("Authorization")}`,
          },
        }
      )
      .then((res) => {
        setQuestions(res.data.question);
        console.log(res.data.question);
      });
  }, [questionNumber]);

  const name = sessionStorage.getItem("name");
  const photo = sessionStorage.getItem("photo");

  return (
    <>
      <div className="h-screen">
        <div className="mx-40">
          <Header>
            <div className="min-w-80 max-md:mt-10">
              <HeaderProfile name={name} photo={photo} />
            </div>
          </Header>
          {/* Questions */}
          {questions.questionText ? (
            <div>
              <div>{questions.questionText}</div>
              {/* Options */}
              {questions.options.map((option, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <input
                      type="radio"
                      id={option.optionText}
                      name="option"
                      value={option.optionText}
                    />
                    <label htmlFor={option.optionText}>
                      {option.optionText}
                    </label>
                  </div>
                );
              })}
            </div>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </>
  );
}
