
import Container from "../../components/ui/Container/Container";
import Header from "../../components/features/Header/Header";
import Footer from "../../components/features/Footer/Footer";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";

function FavoritesPage() {
  return (
    <main className="app">
      <Container>
        <Header />
        <SectionHeader
          eyebrow="Ulubione"
          title="Twoje ulubione wspomnienia"
          description="Wszystkie chwile oznaczone sercem."
        />

        <Footer />
      </Container>
    </main>
  );
}

export default FavoritesPage;