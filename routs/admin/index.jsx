import { useState } from "react";
import { AdminNavBar } from "./components/index";
import { HomePage } from "./home";
import "./index.css";
import { ExerciseLibrary } from "./exercises";

export default function AdminIndex() {
  const [selctedNav, setSelectedNav] = useState("home");

  return (
    <section id="adminIndex">
      <div className="content">
        {selctedNav.toLowerCase() === "home" && <HomePage />}
        {selctedNav.toLowerCase() === "exercise" && <ExerciseLibrary />}
        {/* <h1>{selctedNav}</h1> */}
      </div>
      <AdminNavBar selctedNav={selctedNav} setSelectedNav={setSelectedNav} />
    </section>
  );
}
