import "./FavoriteMemoryCard.css";
import Card from "../../ui/Card/Card";
import favoriteImage from "../../../assets/images/memory-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHeartSolid } from "../../../assets/icons";

const favoriteMemories = [
  {
    id: 1,
    image: favoriteImage,
    title: "Zachód słońca nad morzem",
    date: "12 sierpnia 2025",
  },
  {
    id: 2,
    image: favoriteImage,
    title: "Spacer po plaży",
    date: "18 lipca 2025",
  },
];

function FavoriteMemoryCard() {
  return (
    <Card
      className="favorite-memory"
      title="Ulubione wspomnienie"
    >
      <div className="favorite-memory__items">
      {favoriteMemories.map((memory) => (
          <div
          className="favorite-memory__card"
          key={memory.id}
        >
          <div className="favorite-memory__image">
            <img
              src={memory.image}
              alt={memory.title}
            />
          </div>

          <div className="favorite-memory__content">
            <h4 className="favorite-memory__heading">
              {memory.title}
            </h4>

            <p className="favorite-memory__date">
              {memory.date}
            </p>
          </div>

          <button
            className="favorite-memory__button"
            aria-label={memory.title}
          >
            <FontAwesomeIcon icon={faHeartSolid} />
          </button>
        </div>
      ))}
        </div>

    </Card>
  );
}

export default FavoriteMemoryCard;