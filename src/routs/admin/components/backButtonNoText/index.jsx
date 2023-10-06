import { arrowBackIcon } from "../../../../assets/icons";
import "./index.css";
export function BackBTNNoText(props) {
  return (
    <div className="backBTNNoText">
      <div onClick={() => props.backFunction()} className="imgContainer">
        <img src={arrowBackIcon} alt="back button" />
      </div>
    </div>
  );
}
