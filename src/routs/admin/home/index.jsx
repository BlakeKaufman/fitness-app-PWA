import { useEffect, useState } from "react";
import "./index.css";
import { EditIcon, SettingsIcon, TrophyIcon } from "../../../assets/icons";
import { GeneratedQuote } from "./components/quote";
import { SettingsPopup } from "./components/settingsPopup";

export function HomePage() {
  const [usersName, setUsersName] = useState("");
  const [workoutCounter, setWorkoutCounter] = useState(0);
  const [displaySettings, setDisplaySettings] = useState(false);

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
        <div onClick={() => setDisplaySettings(true)} className="imgContainer">
          <img src={SettingsIcon} alt="edit icon" />
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
      <SettingsPopup
        isDisplayed={displaySettings}
        setDisplayFunc={setDisplaySettings}
      />
    </section>
  );
}
