import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerFlower from "../../../assets/images/footer.jpg";
import {
  faInstagram,
  faPinterest,
  faFacebook,
} from "../../../assets/icons";

function Footer() {
  return (
    <footer 
    className="footer"
      style={{ "--footer-flower": `url(${footerFlower})` }}
    >
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
    </footer>
  );
}

export default Footer;