
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
            eyebrow="Kategorie"
            title="Przeglądaj według kategorii"
            description="Odnajdź wspomnienia z podróży, rodziny, świąt i codzienności."
        />
        <Footer />
      </Container>
    </main>
  );
}

export default FavoritesPage;