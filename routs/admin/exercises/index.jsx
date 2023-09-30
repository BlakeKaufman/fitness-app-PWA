import { useEffect, useState } from "react";
import { CheveronArrowIcon } from "../../../assets/icons";

import listOfExercises from "../../../../exercisesDictionar.json";

import "./index.css";

const EXERCISETYPECONSTANTS = [
  "All",
  "Abs",
  "Back",
  "Biceps",
  "Calves",
  "Chest",
  "Forearms",
  "Glutes",
  "Hamstrings",
  "Lower Back",
  "Quads",
  "Shoulders",
  "Trapezious",
  "Triceps",
];

export function ExerciseLibrary() {
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
  const [selectedExerciseType, setSelectedExerciseType] = useState("All");
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const exercises = listOfExercises;

    setExercises(
      exercises
        .map((exercise) => {
          return (
            <div className="exercise">
              <span className="name">
                {exercise.name.length > 10
                  ? exercise.name.slice(0, 10) + "..."
                  : exercise.name}
              </span>
              <div className="info">
                <span className="label">Level</span>
                <span className="description">{exercise.level}</span>
                <span className="label">Mucle Group</span>
                <span className="description">{exercise.primaryMuscles}</span>
                <span className="label">Equipment</span>
                <span className="description">{exercise.equipment}</span>
              </div>
            </div>
          );
        })
        .splice(0, 50)
    );
  }, [selectedExerciseType]);

  function handleDropdown(e) {
    const targetEvent = e.target;

    if (targetEvent.classList.contains("dropdownScreen")) {
      setIsDropdownDisplayed((prev) => !prev);
    } else if (targetEvent.classList.contains("exerciseTypeOption")) {
      setSelectedExerciseType(targetEvent.textContent);
      setIsDropdownDisplayed(false);
    } else if (isDropdownDisplayed) {
      setIsDropdownDisplayed(false);
    }
  }

  const dropdownStyle = { display: isDropdownDisplayed ? "block" : "none" };
  const arrowIconStyle = {
    transform: isDropdownDisplayed ? "rotate(180deg)" : "rotate(0)",
  };

  const dropdownListOptions = EXERCISETYPECONSTANTS.map((exercise, id) => {
    if (exercise.toLowerCase() === selectedExerciseType.toLowerCase())
      return null;

    return (
      <li key={id} className="exerciseTypeOption">
        {exercise}
      </li>
    );
  }).filter((element) => element);
  return (
    <section onClick={(e) => handleDropdown(e)} id="exerciseLibrary">
      <h1>Excersise Library</h1>
      <input
        type="search"
        name="exersizeSearch"
        id="exersizeSearch"
        placeholder="Search exercises"
      />
      <span className="exerciseTypeLabel">Exercise Type</span>
      <div className="dropdownContainer">
        <span className="selectedExercise">{selectedExerciseType}</span>
        <div className="imgContainer">
          <img
            style={arrowIconStyle}
            src={CheveronArrowIcon}
            alt="arrow Icon"
          />
        </div>
        <div className="screen dropdownScreen"></div>
        <ul style={dropdownStyle} className="dropdown">
          {dropdownListOptions}
        </ul>
      </div>

      <div className="allExercisesContainer">
        {exercises}
        {/* <div className="exercise">
          <span className="name">3/4 sit up</span>
          <div className="info">
            <span className="label">Level</span>
            <span className="description">Beginner</span>
            <span className="label">Mucle Group</span>
            <span className="description">Abs</span>
            <span className="label">Equipment</span>
            <span className="description">Bodyweight</span>
          </div>
        </div> */}
      </div>

      {/* <label htmlFor="exerciseType">Exercise Type</label>
      <select name="exerciseType" id="exerciseType">
        <option value="All" selected>
          All
        </option>
        <option value="Back">Back</option>
      </select> */}
    </section>
  );
}
