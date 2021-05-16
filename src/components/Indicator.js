import icon from "../icons/microphone.png";

function Indicator() {
  return (
    <div className="indicator mx-auto my-2 d-flex justify-content-center align-items-center">
      <img className="icon" src={icon} alt="icon" />
    </div>
  );
}

export default Indicator;
