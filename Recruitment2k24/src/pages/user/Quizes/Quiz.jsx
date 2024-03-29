import axios from "axios";
import { useEffect, useState } from "react";
export default function QuizPage() {
  const [responses, setresponses] = useState({
    questionId: "",
    optionMarked: "",
  });
  let quizId = "65e325f9611125494f62001e";
  // const quizId = sessionStorage.getItem("quizId");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questions, setQuestions] = useState({});
  const domain = sessionStorage.getItem("domain");
  const year = sessionStorage.getItem("year");
  let totalQuestions;

  useEffect(() => {
    // Fetch the total number of questions in the quiz
    axios
      .get(
        `${
          import.meta.env.VITE_URL
        }api/user/quizTaken/quizzesByDomain&year/${domain}/${year}`,
        {
          headers: {
            Authorization: `${sessionStorage.getItem("Authorization")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        totalQuestions = res.data.quizzes[0].questions.length;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Fetch the questions from the server
    axios
      .get(
        `${
          import.meta.env.VITE_URL
        }api/user/quizTaken/showQuestions?quizId=${quizId}&page=${questionNumber}`,
        {
          headers: {
            Authorization: `${sessionStorage.getItem("Authorization")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setQuestions(res.data.question);
        console.log(res.data.question);
      });
  }, [questionNumber]);

  // Timer Logic
  const [timeInSec, setTimeInSec] = useState(59);
  const [timeInMin, setTimeInMin] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeInMin === 0 && timeInSec === 0) {
        // Submit the Quiz when the time is up
        console.log("Submit the Quiz");
        clearInterval(interval);
      }
      if (timeInSec === 0) {
        setTimeInSec(59);
        setTimeInMin((prev) => prev - 1);
      }
      setTimeInSec((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeInSec]);

  return (
    <>
      <div className="h-screen">
        <div className="mx-40">
          <div className="flex flex-col mt-[8vh]">
            <div className="text-3xl font-bold text-grey">
              Question&nbsp;{questionNumber}&nbsp;
              {/* Hardcoded 20 here need to get a way to get all the questions in the quiz */}
              <span className="text-lg text-grey">&#47;20</span>
            </div>
            <div className="text-grey text-md">
              Domain:&nbsp;{domain}&nbsp;&#124;&nbsp;Year:&nbsp;{year}
            </div>
          </div>
          {/* Question display */}
          {questions.questionText ? (
            <div className="mt-10 text-grey">
              <div className="w-8/12 h-40 ">{questions.questionText}</div>
              {/* Options */}
              {questions.options.map((option, index) => {
                return (
                  <div key={index} className="flex gap-2">
                    <button
                      key={index}
                      value={option.optionText}
                      className="blueRadio flex items-center gap-2 justify-center ">
                      <div className="radioHover relative w-6 h-6 bg-light-blue/50 rounded-full flex items-center justify-center">
                        <div className="absolute invisible w-3 h-3 bg-light-blue rounded-full"></div>
                      </div>
                      <div className="text-xl">{option.optionText}</div>
                    </button>
                  </div>

                  // <div key={index} className="flex gap-2">
                  //   <input
                  //     type="radio"
                  //     id={option.optionText}
                  //     name="option"
                  //     value={option.optionText}
                  //   />
                  //   <label htmlFor={option.optionText}>
                  //     {option.optionText}
                  //   </label>
                  // </div>
                );
              })}
            </div>
          ) : (
            "Loading..."
          )}
          {/* // ? Timer */}
          <div className="bg-light-blue flex items-center justify-around w-24 rounded-2xl p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none">
              <path
                d="M6 6.55714C6.825 6.55714 7.53125 6.27179 8.11875 5.70107C8.70625 5.13036 9 4.44429 9 3.64286V1.45714H3V3.64286C3 4.44429 3.29375 5.13036 3.88125 5.70107C4.46875 6.27179 5.175 6.55714 6 6.55714ZM0.75 14.5714C0.5375 14.5714 0.359375 14.5016 0.215625 14.362C0.071875 14.2223 0 14.0493 0 13.8429C0 13.6364 0.071875 13.4634 0.215625 13.3237C0.359375 13.1841 0.5375 13.1143 0.75 13.1143H1.5V10.9286C1.5 10.1879 1.67813 9.49268 2.03438 8.84303C2.39062 8.19339 2.8875 7.67428 3.525 7.28571C2.8875 6.89714 2.39062 6.37804 2.03438 5.72839C1.67813 5.07875 1.5 4.38357 1.5 3.64286V1.45714H0.75C0.5375 1.45714 0.359375 1.38732 0.215625 1.24768C0.071875 1.10804 0 0.935 0 0.728571C0 0.522143 0.071875 0.349107 0.215625 0.209464C0.359375 0.0698214 0.5375 0 0.75 0H11.25C11.4625 0 11.6406 0.0698214 11.7844 0.209464C11.9281 0.349107 12 0.522143 12 0.728571C12 0.935 11.9281 1.10804 11.7844 1.24768C11.6406 1.38732 11.4625 1.45714 11.25 1.45714H10.5V3.64286C10.5 4.38357 10.3219 5.07875 9.96563 5.72839C9.60938 6.37804 9.1125 6.89714 8.475 7.28571C9.1125 7.67428 9.60938 8.19339 9.96563 8.84303C10.3219 9.49268 10.5 10.1879 10.5 10.9286V13.1143H11.25C11.4625 13.1143 11.6406 13.1841 11.7844 13.3237C11.9281 13.4634 12 13.6364 12 13.8429C12 14.0493 11.9281 14.2223 11.7844 14.362C11.6406 14.5016 11.4625 14.5714 11.25 14.5714H0.75Z"
                fill="#fff"
              />
            </svg>
            <span className="countdown text-lg">
              <span style={{ "--value": timeInMin }}></span>:&nbsp;
              <span style={{ "--value": timeInSec }}></span>
            </span>
          </div>
          {/* Timer End */}
        </div>
      </div>
    </>
  );
}
