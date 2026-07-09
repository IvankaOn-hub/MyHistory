import heroImage from "../../../assets/images/hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <img src={heroImage} alt="Album MyHistory" />
      </div>

      <div className="hero__content">
        <h1>
          Twoje wspomnienia,
          zapisane na zawsze
        </h1>

        <p className="hero__text">
          Zbieraj chwile, które tworzą Twoją historię.
        </p>
      </div>
    </section>
  );
}

export default Hero;