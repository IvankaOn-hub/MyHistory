import "./MemoriesFilters.css";

import Input from "../../ui/Input/Input";

function MemoriesFilters({
  search,
  category,
  onlyFavorites,
  onSearchChange,
  onCategoryChange,
  onOnlyFavoritesChange,
}) {
  return (
    <div className="memories-filters">
      <Input
        type="search"
        placeholder="Szukaj wspomnienia..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
      {/* <input
        type="search"
        placeholder="Szukaj wspomnienia..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      /> */}

      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option value="all">Wszystkie kategorie</option>
        <option value="podroze">Podróże</option>
        <option value="rodzina">Rodzina</option>
        <option value="codziennosc">Codzienność</option>
      </select>

      <label className="memories-filters__checkbox">
        <input
          type="checkbox"
          checked={onlyFavorites}
          onChange={(event) => onOnlyFavoritesChange(event.target.checked)}
        />
        Tylko ulubione
      </label>
    </div>
  );
}

export default MemoriesFilters;