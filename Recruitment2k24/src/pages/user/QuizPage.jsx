import Header from "../../components/Header";
import HeaderProfile from "../../components/HeaderProfile";
import Hourglass from "../../assets/hourglass-bottom.svg?react";
import { useState } from "react";

export default function QuizPage() {
  const questions = {
    1: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    2: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus2.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    3: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus3.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    4: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus4.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    5: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus5.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    6: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus6.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    7: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    8: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    9: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    10: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    11: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    12: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    13: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    14: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    15: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    16: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    17: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    18: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    19: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
    20: {
      Question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce commodo dolor vel mauris tincidunt, vel gravida leo tempus.",
      Options: {
        1: "Option 1",
        2: "Option 2",
        3: "Option 3",
        4: "Option 4",
      },
    },
  };

  const [currQuestion, setQuestion] = useState(1);

  const handlePrev = () => {
    if (currQuestion > 1) {
      setQuestion(currQuestion - 1);
    }
  };
  const handleNext = () => {
    if (currQuestion < Object.keys(questions).length) {
      setQuestion(currQuestion + 1);
    }
  };

  return (
    <>
      <div className="h-screen">
        <div className="mx-40">
          <Header>
            <HeaderProfile></HeaderProfile>
          </Header>
          <div className="flex justify-between">
            <div className="w-1/2">
              {/* Contains the question header  */}
              <span className="font-bold text-3xl text-grey">
                {`Question ${currQuestion} `}
                <span className="text-xl font-normal">{`/${
                  Object.keys(questions).length
                }`}</span>
              </span>
              {/* Contains body of question */}
              <div className="">
                <div className="text-xl py-6 text-grey">
                  {questions[currQuestion].Question}
                </div>
                {/* Options */}
                <div className="flex flex-col gap-2">
                  <Radio option={questions[currQuestion].Options[1]} id={1} />
                  <Radio option={questions[currQuestion].Options[2]} id={2} />
                  <Radio option={questions[currQuestion].Options[3]} id={3} />
                  <Radio option={questions[currQuestion].Options[4]} id={4} />
                </div>
              </div>
              {/* Prev and next button */}
              <div className="flex gap-6 mt-28">
                <button
                  onClick={handlePrev}
                  className="ctaback w-24 h-10  px-5 bg-lime text-button-text flex gap-2 items-center justify-center rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none">
                    <path
                      d="M2.64594 8.00223L8.72645 14.0827C8.93327 14.2896 9.03323 14.5308 9.02634 14.8066C9.01944 15.0824 8.91259 15.3237 8.70577 15.5305C8.49895 15.7373 8.25766 15.8407 7.9819 15.8407C7.70614 15.8407 7.46485 15.7373 7.25803 15.5305L0.88797 9.1811C0.722514 9.01565 0.598422 8.82951 0.515694 8.62269C0.432966 8.41587 0.391602 8.20905 0.391602 8.00223C0.391602 7.79541 0.432966 7.58859 0.515694 7.38177C0.598422 7.17495 0.722514 6.98881 0.88797 6.82336L7.25803 0.453299C7.46485 0.246479 7.70958 0.146516 7.99224 0.15341C8.27489 0.160304 8.51963 0.267161 8.72645 0.473981C8.93327 0.680801 9.03668 0.922091 9.03668 1.19785C9.03668 1.47361 8.93327 1.7149 8.72645 1.92172L2.64594 8.00223Z"
                      fill="#2F3B00"
                    />
                  </svg>
                  <span>Prev</span>
                </button>

                <button
                  onClick={handleNext}
                  className="cta w-24 h-10 px-5 bg-lime text-button-text flex gap-2 items-center justify-center rounded-lg">
                  <span>Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none">
                    <path
                      d="M7.19811 8.0806L1.11761 2.00009C0.910785 1.79327 0.810822 1.54853 0.817716 1.26588C0.82461 0.983223 0.931467 0.738486 1.13829 0.531666C1.34511 0.324846 1.58984 0.221436 1.8725 0.221436C2.15515 0.221436 2.39989 0.324846 2.60671 0.531666L8.95609 6.90172C9.12154 7.06718 9.24563 7.25332 9.32836 7.46014C9.41109 7.66696 9.45245 7.87378 9.45245 8.0806C9.45245 8.28742 9.41109 8.49424 9.32836 8.70106C9.24563 8.90788 9.12154 9.09401 8.95609 9.25947L2.58603 15.6295C2.37921 15.8363 2.13792 15.9363 1.86216 15.9294C1.5864 15.9225 1.34511 15.8157 1.13829 15.6088C0.931467 15.402 0.828057 15.1573 0.828057 14.8746C0.828057 14.592 0.931467 14.3472 1.13829 14.1404L7.19811 8.0806Z"
                      fill="#2F3B00"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Timer and question selection */}
            <div className="flex flex-col gap-14 items-end">
              <div className="w-24 h-8 mt-2 rounded-full bg-light-blue flex items-center justify-center gap-2">
                <Hourglass className="w-4 h-4" />
                <span className="text-white ">60:00</span>
              </div>
              <div className="flex flex-wrap w-60 gap-2 mt-10">
                {Object.keys(questions).map((item) => {
                  return (
                    // need a way to change state
                    <QuestionButton
                      key={item}
                      state={""}
                      questionNumber={item}
                    />
                  );
                })}
              </div>
              <button className="mt-auto bg-red text-white px-8 py-3 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Radio({ option, id }) {
  // Need to handle the checked situation
  return (
    <div className="w-1/2 flex items-center gap-2">
      <input
        className="appearance-none cursor-pointer w-4 h-4 rounded-full bg-light-blue/50 hover:bg-light-blue/80 "
        type="radio"
        id={id}
        name="options"
        value={option}
      />
      <div className={`m-1 w-2 h-2 bg-light-blue rounded-full absolute`}></div>
      <label className="text-grey text-lg cursor-pointer" htmlFor={id}>
        {option}
      </label>
    </div>
  );
}

function QuestionButton({ state, questionNumber }) {
  return (
    <>
      <button
        className={`w-10 h-10 font-bold flex items-center justify-center bg-footer text-grey
        ${state === "marked" ? "bg-purple text-white rounded-lg" : ""}
        ${state === "selected" ? "bg-lime rounded-full" : "rounded-lg"}
        `}>
        {questionNumber}
      </button>
    </>
  );
}
