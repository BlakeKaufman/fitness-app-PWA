import { useNavigate } from "react-router-dom";
import "./index.css";

export default function LoadLandingPage() {
  const navigate = useNavigate();

  function sendToSignUp() {
    navigate("/login");
  }

  return (
    <section id="loadingPage">
      <div className="contentBackground">
        <div className="content">
          <h1>Do, track, and actually progress. </h1>
          <p>
            Join 2 [appname] users who have made a workout habbit that sticks
          </p>

          <span onClick={sendToSignUp} className="CTA_Button">
            Get Started
          </span>

          <p>Privacy-first, no information reqiured</p>
        </div>
      </div>
    </section>
  );
}
