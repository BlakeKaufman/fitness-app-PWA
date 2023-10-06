import { useEffect, useState } from "react";

export function SettingsNamePage() {
  const [usersName, setUsersName] = useState("");
  const [inputFormValue, setInputFormValue] = useState("");
  console.log(inputFormValue);
  useEffect(() => {
    const workoutData = JSON.parse(localStorage.getItem("workoutAppData"));

    setUsersName(workoutData.username);
  }, []);
  return (
    <div className="settingsNamePage">
      <h1>Hello {usersName}</h1>
      <span>
        If you're on this page you must want to change your name! enter the name
        in the input below and it'll be all changed.
      </span>

      <input
        type="text"
        name="newNameInput"
        id="newNameInput"
        placeholder={usersName}
        onChange={(e) => setInputFormValue(e.target.value)}
      />
    </div>
  );
}
