import React, { useEffect } from "react";
import { useState } from "react";
import TaskData from "../../data/tasks.json";

// NEED TO CALL IN DATA FROM SOME JSON FILE
function Tasks() {
  const [tasks, setTasks] = useState();
  const yearOptions = ["First Year", "Second Year"];
  const domainOptions = [
    "Programming",
    "Web Club",
    "Android Club",
    "Flutter Dev",
    "Design Club",
    "ML Club",
  ];
  const [year, setYear] = useState(yearOptions[0]);
  const [domain, setDomain] = useState(domainOptions[0]);

  const yearSelect = (e) => {
    setYear(e.target.value);
    console.log(e.target.value);
  };

  const domainSelect = (e) => {
    setDomain(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    // ?fetching the data from the json files
    setTasks(TaskData[year][domain]);
  }, [year, domain]);

  return (
    <div>
      {/* Select options */}
      <div>
        <select onChange={yearSelect} name="tasks" id="tasks">
          {yearOptions.map((year, index) => {
            return (
              <option key={index} value={year}>
                {year}
              </option>
            );
          })}
        </select>
        <select onChange={domainSelect} name="tasks" id="tasks">
          {domainOptions.map((domain, index) => {
            return (
              <option key={index} value={domain}>
                {domain}
              </option>
            );
          })}
        </select>
      </div>
      {/* Displaying the tasks */}
      {tasks && (
        <div>
          <h1 className="text-center font-bold text-purple text-3xl">
            {tasks.Heading}
          </h1>
          <div className="flex ">
            <div className="w-1/2 flex flex-col items-center justify-center text-center">
              <h1>Task 1</h1>
              <h1>{tasks.Tasks.Task1.Title}</h1>
              <p>{tasks.Tasks.Task1.Description}</p>
              <img src={tasks.Tasks.Task1.Image} alt="TaskImg" />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center text-center">
              <h1>Task 2</h1>
              <h1>{tasks.Tasks.Task2.Title}</h1>
              <p>{tasks.Tasks.Task2.Description}</p>
              <img src={tasks.Tasks.Task2.Image} alt="TaskImg" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;
