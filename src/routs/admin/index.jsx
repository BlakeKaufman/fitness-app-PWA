import { useState } from "react";
import { AdminNavBar } from "./components/index";
import "./index.css";

export default function AdminIndex() {
  const [selctedNav, setSelectedNav] = useState("split");

  return (
    <section id="adminIndex">
      <div className="content">
        <h1>{selctedNav}</h1>
      </div>
      <AdminNavBar selctedNav={selctedNav} setSelectedNav={setSelectedNav} />
    </section>
  );
}
