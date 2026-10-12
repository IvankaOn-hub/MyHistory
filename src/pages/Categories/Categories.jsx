import { useState } from "react";

import Container from "../../components/ui/Container/Container";
import Header from "../../components/features/Header/Header";
import Footer from "../../components/features/Footer/Footer";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
import MemoryGridCard from "../../components/features/MemoryGridCard/MemoryGridCard";

import memories from "../../data/memories";

import "./Categories.css";

function CategoriesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(memories.map((memory) => memory.category)),
  ];

  const filteredMemories =
    activeCategory === "all"
      ? memories
      : memories.filter(
          (memory) => memory.category === activeCategory
        );

  function getCategoryCount(category) {
    if (category === "all") {
      return memories.length;
    }

    return memories.filter(
      (memory) => memory.category === category
    ).length;
  }

  return (
    <main className="app">
      <Container>
        <Header />

        <section>
          <SectionHeader
            eyebrow="Kategorie"
            title="Przeglądaj według kategorii"
            description="Odnajdź wspomnienia z podróży, rodziny, świąt i codzienności."
          />

          <div className="categories-page__filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`
                  categories-page__filter
                  ${
                    activeCategory === category
                      ? "categories-page__filter--active"
                      : ""
                  }
                `}
                onClick={() => setActiveCategory(category)}
              >
                <span>
                  {category === "all"
                    ? "Wszystkie"
                    : category}
                </span>

                <span className="categories-page__count">
                  {getCategoryCount(category)}
                </span>
              </button>
            ))}
          </div>

          <div className="categories-page__summary">
            <p>
              Znaleziono {filteredMemories.length}{" "}
              {filteredMemories.length === 1
                ? "wspomnienie"
                : "wspomnienia"}
            </p>
          </div>

          {filteredMemories.length > 0 ? (
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
          ) : (
            <div className="categories-page__empty">
              <h2>Brak wspomnień w tej kategorii</h2>

              <p>
                Dodaj nowe wspomnienie albo wybierz inną
                kategorię.
              </p>
            </div>
          )}
        </section>

      </Container>
        <Footer />
    </main>
  );
}

export default CategoriesPage;