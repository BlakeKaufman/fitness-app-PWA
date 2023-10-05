import "./index.css";

export function FullExercisePopup(props) {
  if (!props.clickedExercise) return;

  const popupDisplay = { display: props.clickedExercise ? "flex" : "none" };
  return (
    <div
      onClick={() => props.setClickedExercise("")}
      style={popupDisplay}
      className="fullExercisePopup"
    >
      <div className="exerciseContent">
        <span className="name">{props.clickedExercise.name}</span>
        <div className="information">
          <span className="label">Level</span>
          <span className="description">{props.clickedExercise.level}</span>
          <span className="label">Primary Muscles</span>
          <span className="description">
            {props.clickedExercise.primaryMuscles}
          </span>
          {props.clickedExercise.secondaryMuscles.length != 0 && (
            <span className="label">Secondary Muscles</span>
          )}
          {props.clickedExercise.secondaryMuscles.length != 0 && (
            <span className="description">
              {props.clickedExercise.secondaryMuscles}
            </span>
          )}
          {props.clickedExercise.mechanic && (
            <span className="label">Mechanic</span>
          )}
          {props.clickedExercise.mechanic && (
            <span className="description">
              {props.clickedExercise.mechanic}
            </span>
          )}
        </div>
        <ol className="instructions">
          {props.clickedExercise.instructions.map((instruction, id) => {
            return <li key={id}>{instruction}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
