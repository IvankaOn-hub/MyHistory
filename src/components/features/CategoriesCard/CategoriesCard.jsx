import "./CategoriesCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../ui/Card/Card";
import memories from "../../../data/memories";
import {
  faPlane,
  faTree,
  faCakeCandles,
  faBriefcase,
  faEllipsis,
  faHeartSolid,
} from "../../../assets/icons";

const categoryIcons = {
  Podróże: faPlane,
  Rodzina: faHeartSolid,
  Święta: faTree,
  Urodziny: faCakeCandles,
  Codzienność: faBriefcase,
};

const categories = Object.values(
  memories.reduce((acc, memory) => {
  const key = memory.category;

    if (!acc[key]) {
      acc[key] = {
        name: memory.category,
        slug: memory.categorySlug,
        count: 0,
        icon: categoryIcons[memory.category] || faEllipsis,
      };
    }

    acc[key].count++;

    return acc;
  }, {})
);

function CategoriesCard() {
  return (
    <Card
      className="categories-card"
      title="Kategorie"
      action={
        <Link
          to="/categories"
          className="categories-card__all"
        >
          Zobacz wszystkie
        </Link>
      }
    >
      <ul className="categories-card__list">
        {categories.map((category) => (
          <li key={category.slug}>
            <Link
              to={`/categories?category=${category.slug}`}
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