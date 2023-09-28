import { useState } from "react";
import { AdminNavBar } from "./components/index";
import { HomePage } from "./home";
import "./index.css";

export default function AdminIndex() {
  const [selctedNav, setSelectedNav] = useState("home");

  return (
    <section id="adminIndex">
      <div className="content">
        {selctedNav.toLowerCase() === "home" && <HomePage />}
        {/* <h1>{selctedNav}</h1> */}
      </div>
      <AdminNavBar selctedNav={selctedNav} setSelectedNav={setSelectedNav} />
    </section>
  );
}
