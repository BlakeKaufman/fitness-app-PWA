import { useNavigate } from "react-router-dom";
import "./index.css";
import { CheveronArrowIcon } from "../../../../assets/icons";
export default function BackButton(props) {
  const navigate = useNavigate();

  function sendTo(address) {
    navigate(address);
  }

  return (
    <div onClick={() => sendTo(props.address)} className="backBTN">
      <img
        src={CheveronArrowIcon}
        alt="Arrow left icon to signify back button"
      />
      <span>Back</span>
    </div>
  );
}
