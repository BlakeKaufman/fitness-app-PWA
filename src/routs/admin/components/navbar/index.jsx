import "./index.css";
import {
  workoutSplitIcon,
  ExerciseIcon,
  HomeIcon,
} from "../../../../assets/icons";
import { NavItem } from "./components/navItem";

const navOptions = [
  {
    text: "Home",
    icon: HomeIcon,
  },
  {
    text: "Split",
    icon: workoutSplitIcon,
  },
  {
    text: "Exercise",
    icon: ExerciseIcon,
  },
];
export default function AdminNavBar(props) {
  function toggleNav(event) {
    const targetEvent = event.target;
    if (!targetEvent.classList.contains("screen")) return;
    const selectedNav = targetEvent.classList[1];
    props.setSelectedNav(selectedNav);
  }

  const navItems = navOptions.map((item, index) => {
    return <NavItem key={index} {...item} selctedNav={props.selctedNav} />;
  });

  return (
    <section id="navbar">
      <ul className="navItems" onClick={(e) => toggleNav(e)}>
        {navItems}
      </ul>
    </section>
  );
}
