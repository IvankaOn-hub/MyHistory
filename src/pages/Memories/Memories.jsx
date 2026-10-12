import { useState } from "react";

import Container from "../../components/ui/Container/Container";
import Header from "../../components/features/Header/Header";
import Footer from "../../components/features/Footer/Footer";
import MemoryGridCard from "../../components/features/MemoryGridCard/MemoryGridCard";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
import MemoriesFilters from "../../components/features/MemoriesFilters/MemoriesFilters";
import memories from "../../data/memories";

function MemoriesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [onlyFavorites, setOnlyFavorites] = useState(false);

 const filteredMemories = memories.filter((memory) => {
  const matchesSearch = memory.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "all" || memory.categorySlug === category;

  const matchesFavorite = !onlyFavorites || memory.isFavorite;

  return matchesSearch && matchesCategory && matchesFavorite;
});

  const hasActiveFilters =
    search !== "" || category !== "all" || onlyFavorites;

  function handleClearFilters() {
    setSearch("");
    setCategory("all");
    setOnlyFavorites(false);
  }


  return (
    <main className="app">
      <Container>
        <Header />

        <section className="section">
          <SectionHeader
            eyebrow="Album wspomnień"
            title="Wszystkie wspomnienia"
            description="Przeglądaj swoje historie według daty, kategorii i miejsca."
          />

          <MemoriesFilters
            search={search}
            category={category}
            onlyFavorites={onlyFavorites}
            onSearchChange={setSearch}
            onCategoryChange={setCategory}
            onOnlyFavoritesChange={setOnlyFavorites}
          />
          
          <div className="memories-page__summary">
            <p>
              Znaleziono {filteredMemories.length}{" "}
              {filteredMemories.length === 1 ? "wspomnienie" : "wspomnienia"}
            </p>

            {hasActiveFilters && (
              <button
                className="memories-page__clear"
                type="button"
                onClick={handleClearFilters}
              >
                Wyczyść filtry
              </button>
            )}
          </div>

          <div className="grid grid--3">

            {filteredMemories.map((memory) => (
              <MemoryGridCard
                key={memory.id}
                memory={memory}
                key={memory.id}
                id={memory.id}
                image={memory.image}
                title={memory.title}
                date={memory.date}
                location={memory.location}
                category={memory.category}
                description={memory.description}
                isFavorite={memory.isFavorite}
              />
            ))}
          </div>
        </section>

      </Container>
        <Footer />

    </main>
  );
}

export default MemoriesPage;