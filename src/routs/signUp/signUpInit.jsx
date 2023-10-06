import "./index.css";

import { BadgeIcon } from "../../assets/icons";
import { BackButton, ContinueButton } from "./components/index";
import { useState } from "react";

export default function SignUpInit(props) {
  const [name, setName] = useState("");

  function createProfile() {
    let probileObj = {};
    probileObj.username = name ? name : "Annon";
    probileObj.isAnnonomous = !name ? true : false;

    localStorage.setItem("workoutAppData", JSON.stringify(probileObj));
    props.setFunction(true);
  }

  return (
    <section id="signUpHome">
      <BackButton address="/" />
      <div className="content">
        <div className="imgContainer">
          <img src={BadgeIcon} alt="badge icon to signify name input section" />
        </div>
        <h1>Please Enter a Name</h1>
        <p>
          This is purly for your user expirience. If you want to stay annonomous
          leave the field blank.
        </p>

        <input
          type="text"
          name="nameInput"
          id="nameInput"
          className="disable-zoom"
          placeholder="Enter Name"
          onChange={(input) => setName(input.target.value)}
        />

        <ContinueButton
          clickFunc={createProfile}
          address="/admin"
          text="Continue"
        />
      </div>
    </section>
  );
}
