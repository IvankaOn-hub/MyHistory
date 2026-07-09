import "./PopularPlacesCard.css";
import Card from "../../ui/Card/Card";
import zakopane from "../../../assets/images/memory-1.jpg";
import wroclaw from "../../../assets/images/memory-2.jpg";
import krakow from "../../../assets/images/memory-3.jpg";
import warszawa from "../../../assets/images/memory-1.jpg";

const places = [
  {
    id: 1,
    image: zakopane,
    city: "Zakopane",
    memories: 5,
  },
  {
    id: 2,
    image: wroclaw,
    city: "Wrocław",
    memories: 8,
  },
  {
    id: 3,
    image: krakow,
    city: "Kraków",
    memories: 3,
  },
  {
    id: 4,
    image: warszawa,
    city: "Warszawa",
    memories: 2,
  },
];

function PopularPlacesCard() {
  return (
    <Card
      className="popular-places"
      title="Najczęstsze miejsca"
    >
      <ul className="popular-places__list">

        {places.map((place) => (

          <li
            key={place.id}
            className="popular-places__item"
          >

            <div className="popular-places__image">
              <img
                src={place.image}
                alt={place.city}
              />
            </div>

            <div className="popular-places__content">

              <h3 className="popular-places__city">
                {place.city}
              </h3>

              <p className="popular-places__count">
                {place.memories} wspomnień
              </p>

            </div>

          </li>

        ))}

      </ul>
    </Card>
  );
}

export default PopularPlacesCard;