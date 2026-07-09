import CategoriesCard from "../CategoriesCard/CategoriesCard";
import PopularPlacesCard from "../PopularPlacesCard/PopularPlacesCard";
import FavoriteMemoryCard from "../FavoriteMemoryCard/FavoriteMemoryCard";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <CategoriesCard />
      <PopularPlacesCard />
      <FavoriteMemoryCard />
    </aside>
  );
}

export default Sidebar;