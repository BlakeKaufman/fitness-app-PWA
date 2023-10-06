import { arrowBackIcon } from "../../../../../../../assets/icons";
import { BackBTNNoText } from "../../../../../components";
import "./index.css";
import { SettingsNamePage } from "./pages/name";

export function OptionsPopup(props) {
  const popupDisplay = { left: props.selectedPopup ? "0" : "120%" };

  function backFunction() {
    props.setSelectedPopup("");
  }
  return (
    <div style={popupDisplay} className="optionsPopup">
      <BackBTNNoText backFunction={backFunction} />

      <div className="optionsContent">
        <span>{props.selectedPopup}</span>
        {/* calling differnt pages */}
        <SettingsNamePage />
      </div>
    </div>
  );
}
