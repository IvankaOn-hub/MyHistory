import "./PopularPlacesCard.css";

import { Link } from "react-router-dom";

import Card from "../../ui/Card/Card";

import memories from "../../../data/memories";

const places = Object.values(
  memories.reduce((acc, memory) => {
    const city = memory.location.split(",")[0].trim();

    if (!acc[city]) {
      acc[city] = {
        city,
        image: memory.image,
        memories: 0,
      };
    }

    acc[city].memories++;

    return acc;
  }, {})
)
  .sort((a, b) => b.memories - a.memories)
  .slice(0, 4);

function PopularPlacesCard() {
  return (
    <Card
      className="popular-places"
      title="Najczęstsze miejsca"
    >
      <ul className="popular-places__list">
        {places.map((place) => (
          <li
            key={place.city}
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
                {place.memories}{" "}
                {place.memories === 1
                  ? "wspomnienie"
                  : "wspomnienia"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default PopularPlacesCard;