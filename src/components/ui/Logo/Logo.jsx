import { Link } from "react-router-dom";

import "./Logo.css";
import logoImage from "../../../assets/images/logo.png";

function Logo() {
  return (
    <Link to="/" className="logo" aria-label="MyHistory - Home">
      <img src={logoImage} alt="MyHistory" />
    </Link>
  );
}

export default Logo;