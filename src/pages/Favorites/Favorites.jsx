import Container from "../../components/ui/Container/Container";
import Header from "../../components/features/Header/Header";
import Footer from "../../components/features/Footer/Footer";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
import MemoryGridCard from "../../components/features/MemoryGridCard/MemoryGridCard";

import memories from "../../data/memories";

import "./Favorites.css";

function FavoritesPage() {
  const favoriteMemories = memories.filter(
    (memory) => memory.isFavorite
  );

  return (
    <main className="app">
      <Container>
        <Header />

        <section>
          <SectionHeader
            eyebrow="Ulubione"
            title="Twoje ulubione wspomnienia"
            description="Wszystkie chwile oznaczone sercem."
          />

          {favoriteMemories.length > 0 ? (
            <div className="grid grid--3">
              {favoriteMemories.map((memory) => (
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
            <div>
              <h2>Nie masz jeszcze ulubionych wspomnień</h2>

              <p>
                Kliknij serduszko przy wybranym wspomnieniu,
                aby pojawiło się tutaj.
              </p>
            </div>
          )}
        </section>

      </Container>
        <Footer />
    </main>
  );
}

export default FavoritesPage;