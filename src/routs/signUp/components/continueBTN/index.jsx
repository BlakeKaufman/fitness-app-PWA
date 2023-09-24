import { useNavigate } from "react-router-dom";
import "./index.css";

export default function ContinueButton(props) {
  const navigate = useNavigate();

  function sendTo(address) {
    navigate(address);

    if (props.clickFunc) props.clickFunc();
  }

  return (
    <div onClick={() => sendTo(props.address)} className="continueBTN">
      <span>{props.text}</span>
    </div>
  );
}
