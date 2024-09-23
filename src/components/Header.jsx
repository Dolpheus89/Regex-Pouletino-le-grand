import Pouletino from "../assets/Pouletino.png";
import Regexlogo from "../assets/regex-tutorial.png";

export default function Header() {
  return (
    <header>
      <img src={Pouletino} alt="happy chicken kid" id="pouletino" />
      <h1>
        Les Aventures de <br /> Pouletino le Grand{" "}
      </h1>
      <img src={Regexlogo} alt="Regex logo" id="regexLogo" />
    </header>
  );
}
