export function NavItem(props) {
  return (
    <li
      className={`navItem ${
        props.selctedNav.toLowerCase() === `${props.text.toLowerCase()}`
          ? "activeNav"
          : ""
      }`}
    >
      <div className="imgContainer">
        <img src={props.icon} alt="workout split icon" />
      </div>
      {props.text}
      <div className={`screen ${props.text.toLowerCase()}`}></div>
    </li>
  );
}
