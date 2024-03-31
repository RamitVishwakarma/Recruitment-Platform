import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function CreateQuiz() {
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState("");
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [explaination, setExplaination] = useState("");
  const [year, setYear] = useState();

  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);

  const formRef = useRef(null);
  const titleDurationRef = useRef(null);
  const [clearForm, setClearForm] = useState();

  const questionTextHandler = (e) => {
    setQuestionText(e.target.value);
  };

  const handleOptions = (index, value) => {
    let newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  // * Clearing the form for another question
  useEffect(() => {
    const inputElements = formRef.current.querySelectorAll("input, textarea");
    inputElements.forEach((element) => {
      element.value = "";
      element.checked = false;
    });
  }, [clearForm]);

  const addQuestionHandler = (index) => {
    // console.log(options);
    let optionsWithIsCorrect = options.map((option, index) => {
      return {
        optionText: option,
        isCorrect: index === parseInt(correctOption) ? true : false,
      };
    });
    // console.log(optionsWithIsCorrect);
    const questionData = {
      questionText: questionText,
      options: optionsWithIsCorrect,
      explanation: explaination,
    };
    let newQuestion = [...questions];
    newQuestion[index] = questionData;
    setQuestions(newQuestion);
    setQuestionNumber(questionNumber + 1);
    setClearForm(!clearForm);
    alert("Question added");
    // console.log(questions);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = {
      title: title,
      domain: sessionStorage.getItem("Domain"),
      questions: questions,
      duration: duration,
      year: year,
    };
    axios
      .post(`${import.meta.env.VITE_URL}api/admin/Quiz/createQuiz`, formData, {
        headers: {
          Authorization: sessionStorage.getItem("Admin Token"),
        },
      })
      .then((res) => {
        console.log(res);
        const inputElements =
          titleDurationRef.current.querySelectorAll("input");
        inputElements.forEach((element) => {
          element.value = "";
        });
        setQuestionNumber(0);
        alert("Quiz added");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // Could add a way to show the number of questions added
  return (
    <div>
      <div className="flex justify-around">
        <h1 className="text-center text-3xl my-10 text-red ">Create Quiz</h1>
        <h1 className="text-center text-3xl my-10 text-red ">
          Questions added:&nbsp;{questionNumber}
        </h1>
      </div>
      <div>
        <div
          ref={titleDurationRef}
          className="flex items-center justify-center">
          <input
            className="w-80 h-12"
            type="text"
            placeholder="Title of the Quiz"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="w-80 h-12"
            type="text"
            placeholder="Year of the Quiz(1/2)"
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            className="w-80 h-12"
            type="text"
            placeholder="Duration of the Quiz"
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <form ref={formRef} onSubmit={formSubmitHandler}>
          <div className="flex items-center justify-center">
            <textarea
              className="w-1/2 h-40 text-white p-2 text-xl rounded-md text-center m-2 bg-grey mt-6"
              onChange={questionTextHandler}
              placeholder="Enter your question here"
            />
          </div>
          <div className="flex flex-col my-2">
            <div className="flex gap-6 items-center justify-center">
              <input
                className="w-80 h-12"
                type="text"
                placeholder="Option 1"
                onChange={(e) => handleOptions(0, e.target.value)}
              />
              <input
                className="w-6 h-6"
                type="radio"
                name="isCorrect"
                id="0"
                onChange={(e) => setCorrectOption(e.target.id)}
              />
            </div>
            <div className="flex gap-6 items-center justify-center">
              <input
                className="w-80 h-12"
                type="text"
                placeholder="Option 2"
                onChange={(e) => handleOptions(1, e.target.value)}
              />
              <input
                className="w-6 h-6"
                type="radio"
                name="isCorrect"
                id="1"
                onChange={(e) => setCorrectOption(e.target.id)}
              />
            </div>
            <div className="flex gap-6 items-center justify-center">
              <input
                className="w-80 h-12"
                type="text"
                placeholder="Option 3"
                onChange={(e) => handleOptions(2, e.target.value)}
              />
              <input
                className="w-6 h-6"
                type="radio"
                name="isCorrect"
                id="2"
                onChange={(e) => setCorrectOption(e.target.id)}
              />
            </div>
            <div className="flex gap-6 items-center justify-center">
              <input
                className="w-80 h-12"
                type="text"
                placeholder="Option 4"
                onChange={(e) => handleOptions(3, e.target.value)}
              />
              <input
                className="w-6 h-6"
                type="radio"
                name="isCorrect"
                id="3"
                onChange={(e) => setCorrectOption(e.target.id)}
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-5">
            <textarea
              className="w-80 h-20 text-white/80 text-lg p-2 rounded-md text-center m-2 bg-grey mt-6"
              onChange={(e) => setExplaination(e.target.value)}
              placeholder="Explaination for the question"
            />
          </div>
          <div className="flex items-center justify-center my-10">
            <button
              type="button"
              onClick={() => addQuestionHandler(questionNumber)}
              className="bg-red text-white px-10 p-2 rounded-md ">
              Add +
            </button>
          </div>
          <div className="flex items-center justify-center my-10">
            <button
              type="submit"
              className="bg-lime text-white px-20 p-2 rounded-md ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
