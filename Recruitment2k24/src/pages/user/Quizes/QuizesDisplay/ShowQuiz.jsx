import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ShowQuiz() {
  const { domain } = useParams();
  const year = sessionStorage.getItem("year");
  const [quizId, setQuizId] = useState();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questions, setQuestions] = useState({});

  const [totalQuestions, setTotalQuestions] = useState(0);
  const [arrayWithQuestionNumbers, setArrayWithQuestionNumbers] = useState([]);

  const prevClickHandler = () => {
    if (questionNumber > 1) {
      setQuestionNumber(questionNumber - 1);
    }
  };
  const nextClickHandler = () => {
    if (questionNumber < totalQuestions) {
      setQuestionNumber(questionNumber + 1);
    }
  };
  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= totalQuestions; i++) {
      arr.push(i);
    }
    setArrayWithQuestionNumbers(arr);
  }, [totalQuestions]);

  useEffect(() => {
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
        setTotalQuestions(res.data.quizzes[0].questions.length);
        setQuizId(res.data.quizzes[0]._id);
      })
      .catch(() => {
        console.log("error in fetching total questions");
      });
  }, []);

  useEffect(() => {
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
        setQuestions(res.data.question);
      })
      .catch(() => {
        console.log("error in fetching questions");
      });
  }, [questionNumber, quizId]);

  return (
    <>
      <div className="h-screen">
        <div className="mx-40">
          <div className="flex justify-between">
            <div>
              <div className="flex flex-col mt-[8vh]">
                <div className="text-3xl font-bold text-grey">
                  Question&nbsp;{questionNumber}&nbsp;
                  {/* Hardcoded 20 here need to get a way to get all the questions in the quiz */}
                  <span className="text-lg text-grey">
                    &#47;{totalQuestions}
                  </span>
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
                      <div key={index} className="flex gap-4 items-center ">
                        <span className="text-xl text-grey">{index + 1}.</span>
                        <div className="text-xl">{option.optionText}</div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                "Loading..."
              )}

              <div className="flex items-center gap-40 mt-16">
                <button
                  onClick={prevClickHandler}
                  className="ctaback flex gap-4 items-center bg-lime p-2 px-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="12"
                    viewBox="0 0 9 16"
                    fill="none">
                    <path
                      d="M8 1C5.44171 2.85861 3.15026 5.03738 1.18514 7.47872C0.938285 7.7854 0.938285 8.2146 1.18514 8.52128C3.15026 10.9626 5.44171 13.1414 8 15"
                      stroke="#2F3B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Prev
                </button>
                <button
                  onClick={nextClickHandler}
                  className="cta flex gap-4 items-center bg-lime p-2 px-6 rounded-lg">
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none">
                    <path
                      d="M5.25072 5.83833L0.763545 1.35115C0.61092 1.19853 0.537151 1.01792 0.542238 0.809331C0.547326 0.600744 0.626182 0.420137 0.778807 0.267512C0.931433 0.114887 1.11204 0.0385742 1.32063 0.0385742C1.52921 0.0385742 1.70982 0.114887 1.86245 0.267512L6.54804 4.96837C6.67014 5.09047 6.76171 5.22783 6.82276 5.38045C6.88381 5.53308 6.91434 5.68571 6.91434 5.83833C6.91434 5.99096 6.88381 6.14358 6.82276 6.29621C6.76171 6.44883 6.67014 6.58619 6.54804 6.70829L1.84718 11.4091C1.69456 11.5618 1.5165 11.6355 1.313 11.6305C1.1095 11.6254 0.931433 11.5465 0.778807 11.3939C0.626182 11.2413 0.54987 11.0607 0.54987 10.8521C0.54987 10.6435 0.626182 10.4629 0.778807 10.3102L5.25072 5.83833Z"
                      fill="#2F3B00"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-[10vh] w-4/12 flex flex-col gap-10 items-end">
              {/* Question Numbers */}
              <div className="h-[30vh]">
                {arrayWithQuestionNumbers.map((number) => {
                  return (
                    <button
                      onClick={() => setQuestionNumber(number)}
                      key={number}
                      className={`${
                        questionNumber === number
                          ? "bg-lime  text-white rounded-full"
                          : "bg-purple text-white rounded-lg"
                      } 
                      p-2 px-4  m-2`}>
                      {number}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Timer End */}
        </div>
      </div>
    </>
  );
}

export default ShowQuiz;
