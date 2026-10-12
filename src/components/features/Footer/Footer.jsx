import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../../ui/Container/Container";
import {
  faInstagram,
  faPinterest,
  faFacebook,
} from "../../../assets/icons";

function Footer() {
  return (
    <footer className="footer">
    <Container>

      <p className="footer__copy">
        © 2026 MyHistory. Wszystkie prawa zastrzeżone.
      </p>

      <div className="footer__socials">
        <a className="footer__social" href="#" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a className="footer__social" href="#" aria-label="Pinterest">
          <FontAwesomeIcon icon={faPinterest} />
        </a>

        <a className="footer__social" href="#" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </Container>

    </footer>
  );
}

export default Footer;