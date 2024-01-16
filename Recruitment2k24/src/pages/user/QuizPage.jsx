import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import HeaderProfile from "../../components/HeaderProfile";
import Hourglass from "../../assets/hourglass-bottom.svg?react";
import ArrowRight from "../../assets/arrRight.svg";
import ArrowLeft from "../../assets/arrLeft.svg";
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
        <Navbar />
        <div className="mx-40">
          <Header>
            {/* REMOVE THE COMPLETE PROFILE FROM HERE */}
            <HeaderProfile></HeaderProfile>
          </Header>
          {/* Question section and question navigator will be using states*/}
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
                  className="w-24 h-10 bg-lime text-button-text flex gap-2 items-center rounded-lg">
                  <img className="pl-2" src={ArrowLeft} />
                  <span>Prev</span>
                </button>
                <button
                  onClick={handleNext}
                  className="w-24 h-10 bg-lime text-button-text flex gap-2 items-center rounded-lg">
                  <span className="ml-4">Next</span>
                  <img src={ArrowRight} />
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
