import axios from "axios";
import { useEffect, useState } from "react";
import { set } from "zod";
export default function QuizPage() {
  const domain = sessionStorage.getItem("domain");
  const year = sessionStorage.getItem("year");
  const [quizId, setQuizId] = useState();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questions, setQuestions] = useState({});

  const [totalQuestions, setTotalQuestions] = useState(0);
  const [arrayWithQuestionNumbers, setArrayWithQuestionNumbers] = useState([]);

  const [timeInSec, setTimeInSec] = useState(60);
  const [timeInMin, setTimeInMin] = useState();

  const [quizData, setQuizData] = useState([]);
  // Fetching the total number of questions in the quiz
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
        console.log(res);
        setTotalQuestions(res.data.quizzes[0].questions.length);
        setQuizId(res.data.quizzes[0]._id);
        setTimeInMin(res.data.quizzes[0].duration - 1);
      })
      .catch(() => {
        console.log("error in fetching total questions");
      });
  }, []);
  // Creating an array from 1 to the total number of questions in the quiz
  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= totalQuestions; i++) {
      arr.push(i);
    }
    setArrayWithQuestionNumbers(arr);
  }, [totalQuestions]);

  // Fetching the questions based on the question number
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
        const existingQuestion = quizData.find(
          (data) => data.questionId === res.data.question._id
        );
        if (!existingQuestion) {
          setQuizData([
            ...quizData,
            { questionId: res.data.question._id, optionMarked: null },
          ]);
        }
      });
  }, [questionNumber, quizId]);

  // Option Click Handler
  const optionClickHandler = (optionSelected) => {
    const existingResponseIndex = quizData.findIndex(
      (data) => data.questionId === questions._id
    );
    if (existingResponseIndex !== -1) {
      const updatedQuizData = [...quizData];
      updatedQuizData[existingResponseIndex].optionMarked = optionSelected;
      setQuizData(updatedQuizData);
    }
  };

  // prev and next button click handlers
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

  // Timer Logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeInMin === 0 && timeInSec === 0) {
        // Submitting the Quiz when the time is up
        submitQuizHandler();
        setTimeInSec(0);
        setTimeInMin(0);
        clearInterval(interval);
        // ? Send this to the thanks for giving quiz page
      } else {
        if (timeInSec === 0) {
          setTimeInSec(60);
          setTimeInMin((prev) => prev - 1);
        }
        setTimeInSec((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeInSec]);

  // Submit Quiz Handler
  const submitQuizHandler = () => {
    console.log(typeof quizData);
    const data = {
      quizId: quizId,
      responses: quizData,
    };
    console.log(data);
    axios
      .post(`${import.meta.env.VITE_URL}api/user/quizTaken/submit-quiz`, data, {
        headers: {
          Authorization: `${sessionStorage.getItem("Authorization")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert("You already submitted the quiz");
        } else {
          console.log(err);
        }
      });
  };

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
                      <div key={index} className="flex gap-2">
                        <button
                          onClick={() => {
                            optionClickHandler(option.optionText, index);
                          }}
                          key={index}
                          className="blueRadio flex items-center gap-2 justify-center ">
                          <div className="radioHover relative w-6 h-6 bg-light-blue/50 rounded-full flex items-center justify-center">
                            <div
                              className={`${
                                option.optionText ===
                                quizData.find(
                                  (data) => data.questionId === questions._id
                                )?.optionMarked
                                  ? "visible"
                                  : "invisible"
                              } absolute w-3 h-3 bg-light-blue rounded-full`}></div>
                          </div>
                          <div className="text-xl">{option.optionText}</div>
                        </button>
                      </div>
                    );
                  })}
                </div>
              ) : (
                "Loading..."
              )}

              <div className="flex items-center gap-28 mt-16">
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
            {/* // ? Timer */}
            <div className="mt-[10vh] w-4/12 flex flex-col gap-10 items-end">
              <div className="bg-light-blue flex items-center justify-around w-28 rounded-2xl p-2 text-white ">
                <div className="pl-2">
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
                </div>
                <span className="timer text-lg w-24 text-center">
                  <span className="">{timeInMin}</span>:&nbsp;
                  <span>{timeInSec}</span>
                </span>
              </div>
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
              <div className="mt-[12vh]">
                <button
                  onClick={submitQuizHandler}
                  className="bg-light-red px-10 py-2 rounded-lg text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
          {/* Timer End */}
        </div>
      </div>
    </>
  );
}
