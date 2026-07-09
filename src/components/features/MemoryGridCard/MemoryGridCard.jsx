import "./MemoryGridCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../ui/Card/Card";
import Badge from "../../ui/Badge/Badge";

import {
  faHeartRegular,
  faHeartSolid,
  faCalendarDays,
  faLocationDot,
} from "../../../assets/icons";

function MemoryGridCard({
  id,
  image,
  title,
  date,
  location,
  category,
  description,
  isFavorite,
}) {
  return (
    <Link
      to={`/memory/${id}`}
      className="memory-grid-card__link"
    >
      <Card className="memory-grid-card">

        <div className="memory-grid-card__image">
          <img
            src={image}
            alt={title}
          />
        </div>

        <div className="memory-grid-card__content">

          <div className="memory-grid-card__header">

            <Badge>
              {category}
            </Badge>

            <button
              className="memory-grid-card__favorite"
              aria-label="Ulubione"
            >
              <FontAwesomeIcon
                icon={isFavorite ? faHeartSolid : faHeartRegular}
              />
            </button>

          </div>

          <h2 className="memory-grid-card__title">
            {title}
          </h2>

          <div className="memory-grid-card__meta">

            <span>
              <FontAwesomeIcon icon={faCalendarDays} />
              {date}
            </span>

            <span>
              <FontAwesomeIcon icon={faLocationDot} />
              {location}
            </span>

          </div>

          <p className="memory-grid-card__description">
            {description}
          </p>

        </div>

      </Card>
    </Link>
  );
}

export default MemoryGridCard;