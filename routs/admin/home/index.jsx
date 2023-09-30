import { useEffect, useState } from "react";
import "./index.css";
import { EditIcon, TrophyIcon } from "../../../assets/icons";
import { GeneratedQuote } from "./components/quote";

export function HomePage() {
  const [usersName, setUsersName] = useState("");
  const [workoutCounter, setWorkoutCounter] = useState(0);

  useEffect(() => {
    const usersName = JSON.parse(
      localStorage.getItem("workoutAppData")
    ).username;

    if (usersName) setUsersName(usersName);
    else setUsersName("Anonymous");
  }, []);

  return (
    <section id="homePage">
      <section className="welcomeBanner">
        <span className="welcomeMessage">Welcome, {usersName}</span>
        <div className="imgContainer">
          <img src={EditIcon} alt="edit icon" />
        </div>
      </section>
      <section className="completedWorkouts">
        <div className="left">
          <div className="imgContainer">
            <img
              src={TrophyIcon}
              alt="icon to signify conpleted workouts(trophy)"
            />
          </div>
          <span>Total workouts completed</span>
        </div>
        {/* make sure to dynamically laod from local storage */}
        <span className="workoutCounter">{workoutCounter}</span>
      </section>

      <GeneratedQuote />
    </section>
  );
}
