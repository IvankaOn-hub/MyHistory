import "./FavoriteMemoryCard.css";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../../ui/Card/Card";

import memories from "../../../data/memories";
import { formatDate } from "../../../utils/date";

import { faHeartSolid } from "../../../assets/icons";

const favoriteMemories = memories
  .filter((memory) => memory.isFavorite)
  .slice(0, 2);

function FavoriteMemoryCard() {
  return (
    <Card
      className="favorite-memory"
      title="Ulubione wspomnienia"
      
    >
      <div className="favorite-memory__items">
        {favoriteMemories.map((memory) => (
          <Link
            key={memory.id}
            to={`/memory/${memory.id}`}
            className="favorite-memory__card"
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
                {formatDate(memory.date)}
              </p>
            </div>

            <span
              className="favorite-memory__button"
              aria-hidden="true"
            >
              <FontAwesomeIcon icon={faHeartSolid} />
            </span>
          </Link>
        ))}
      </div>
    </Card>
  );
}

export default FavoriteMemoryCard;