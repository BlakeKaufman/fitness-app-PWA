import { useState } from "react";
import {
  BadgeIcon,
  WeightIcon,
  arrowBackIcon,
  calculateIcon,
  notificationsIcon,
} from "../../../../../assets/icons";
import { OptionsPopup } from "./component/optionsPopup";
import "./index.css";

const settingsOPTIONS = [
  {
    name: "Name",
    screenName: "name",
    img: BadgeIcon,
  },
  {
    name: "Measurement Units",
    screenName: "MeasurementUnits",
    img: WeightIcon,
  },
  {
    name: "Notifications",
    screenName: "notifications",
    img: notificationsIcon,
  },
  {
    name: "Macro Calculator",
    screenName: "MacroCalculator",
    img: calculateIcon,
  },
];

export function SettingsPopup(props) {
  const [selectedPopup, setSelectedPopup] = useState("");
  const settingsElements = createSettingsElements(
    settingsOPTIONS,
    setSelectedPopup
  );

  const popupDisplay = { left: props.isDisplayed ? "0" : "120%" };

  return (
    <div style={popupDisplay} className="settingsPopup">
      <div className="settingsContent">
        <div className="top">
          <div
            onClick={() => props.setDisplayFunc(false)}
            className="imgContainer"
          >
            <img src={arrowBackIcon} alt="back arrow to get out of settings" />
          </div>
          <h1 className="header">Settings</h1>
        </div>
        <div className="settingsOptions">{settingsElements}</div>
      </div>

      <OptionsPopup
        selectedPopup={selectedPopup}
        setSelectedPopup={setSelectedPopup}
      />
    </div>
  );
}

function createSettingsElements(settingsOPTIONS, setSelectedPopup) {
  return settingsOPTIONS.map((option, id) => {
    return (
      <div key={id} className="option">
        <div className="imgContainer">
          <img src={option.img} alt={`Icon for ${option.name} selctor`} />
        </div>
        <span className="optionName">{option.name}</span>
        <div
          onClick={(e) => {
            setSelectedPopup(e.target.classList[1]);
          }}
          className={`screen ${option.screenName}`}
        ></div>
      </div>
    );
  });
}
