import "./index.css";
import { workoutSplitIcon, ExerciseIcon } from "../../../../assets/icons";
export default function AdminNavBar(props) {
  function toggleNav(event) {
    const targetEvent = event.target;
    if (!targetEvent.classList.contains("screen")) return;
    const selectedNav = targetEvent.classList[1];
    props.setSelectedNav(selectedNav);
  }

  return (
    <section id="navbar">
      <ul className="navItems" onClick={(e) => toggleNav(e)}>
        <li
          className={`navItem ${
            props.selctedNav.toLowerCase() === "split" ? "activeNav" : ""
          }`}
        >
          <div className="imgContainer">
            <img src={workoutSplitIcon} alt="workout split icon" />
          </div>
          Split
          <div className="screen split"></div>
        </li>
        <li
          className={`navItem ${
            props.selctedNav.toLowerCase() === "exercise" ? "activeNav" : ""
          }`}
        >
          <div className="imgContainer">
            <img src={ExerciseIcon} alt="excersize icon" />
          </div>
          Exercise
          <div className="screen exercise"></div>
        </li>
      </ul>
    </section>
  );
}
