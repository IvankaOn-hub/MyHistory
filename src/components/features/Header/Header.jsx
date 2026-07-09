
import { useState } from "react";
import Logo from "../../ui/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Button from "../../ui/Button/Button";
import Avatar from "../../ui/Avatar/Avatar";
import avatarImage from "../../../assets/images/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "../../../assets/icons";


import "./Header.css";

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={`header ${isMenuOpen ? "header--open" : ""}`}>
      <Logo />

      <Navigation isOpen={isMenuOpen} />

      <div className="header__actions">
        <Button
            icon={<FontAwesomeIcon icon={faPlus} />}
            variant="primary"
          >
            Dodaj wspomnienie
        </Button>

        <Avatar src={avatarImage} alt="Avatar" size="lg" />
      </div>

      <button
        className="header__burger"
        type="button"
        aria-label="Otwórz menu"
        onClick={handleToggleMenu}
      >
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
      </button>
    </header>
  );
}

export default Header;