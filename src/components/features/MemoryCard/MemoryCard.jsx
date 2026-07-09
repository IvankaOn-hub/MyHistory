import { Link } from "react-router-dom";
import Badge from "../../ui/Badge/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartRegular, faHeartSolid, faLocationDot, faCalendarDays } from "../../../assets/icons";

import "./MemoryCard.css";

function MemoryCard({id, image, title, date, location, description, category, variant, onMouseEnter, onMouseLeave, isFavorite }) {
  return (
    <Link to={`/memory/${id}`} className="memory-card__link">
    <article 
      className="memory-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="memory-card__image">
        <img
            src={image}
            alt={title}
          />
      </div>

      <div className="memory-card__content">
        <h3>{title}</h3>

        <p className="memory-card__meta">
          <FontAwesomeIcon icon={faCalendarDays} />{date} | <FontAwesomeIcon icon={faLocationDot} /> {location}
        </p>

        <p className="memory-card__description">
          {description}
        </p>
      </div>

      <div className="memory-card__aside">
        <button className="memory-card__favorite" type="button">
          <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} />
        </button>

        <Badge variant={variant}>{category}</Badge>
      </div>
    </article>
    </Link>
  );
}

export default MemoryCard;