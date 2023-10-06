import { arrowBackIcon } from "../../../../../../../assets/icons";
import "./index.css";

export function OptionsPopup(props) {
  const popupDisplay = { left: props.selectedPopup ? "0" : "120%" };
  return (
    <div
      onClick={() => props.setSelectedPopup("")}
      style={popupDisplay}
      className="optionsPopup"
    >
      <div className="imgContainer">
        <img src={arrowBackIcon} alt="back arrow to get out of popup" />
      </div>

      <span>{props.selectedPopup}</span>
    </div>
  );
}
