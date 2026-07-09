import "./CategoriesCard.css";
import { Link } from "react-router-dom";
import Card from "../../ui/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlane,
  faTree,
  faCakeCandles,
  faBriefcase,
  faEllipsis,
  faHeartSolid,
} from "../../../assets/icons";

const categories = [
  {
    id: 1,
    icon: faPlane,
    name: "Podróże",
    count: 12,
  },
  {
    id: 2,
    icon: faHeartSolid,
    name: "Rodzina",
    count: 8,
  },
  {
    id: 3,
    icon: faTree,
    name: "Święta",
    count: 6,
  },
  {
    id: 4,
    icon: faCakeCandles,
    name: "Urodziny",
    count: 5,
  },
  {
    id: 5,
    icon: faBriefcase,
    name: "Codzienność",
    count: 7,
  },
  {
    id: 6,
    icon: faEllipsis,
    name: "Inne",
    count: 4,
  },
];

function CategoriesCard() {
  return (
    <Card
      className="categories-card"
      title="Kategorie"
      action={
        <a className="categories-card__all" href="#">
          Zobacz wszystkie
        </a>
      }
    >
      <ul className="categories-card__list">
      {categories.map((category) => (
        <li key={category.id}>
          <Link
            to={`/category/${category.slug}`}
            className="categories-card__link"
          >
            <span className="categories-card__left">
              <span className="categories-card__icon">
                <FontAwesomeIcon icon={category.icon} />
              </span>

              <span className="categories-card__name">
                {category.name}
              </span>
            </span>

            <span className="categories-card__count">
              {category.count}
            </span>
          </Link>
        </li>
      ))}
    </ul>
    </Card>
  );
}

export default CategoriesCard;