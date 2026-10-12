import Container from "../../components/ui/Container/Container";
import Header from "../../components/features/Header/Header";
import Hero from "../../components/features/Hero/Hero";
import Timeline from "../../components/features/Timeline/Timeline";
import Sidebar from "../../components/features/Sidebar/Sidebar";
import Footer from "../../components/features/Footer/Footer";

function HomePage() {
  return (
    <main className="app">
      <Container>
        <Header />
        <Hero />
        <section className="dashboard">
          <Timeline />
          <Sidebar />
        </section>
      </Container>
        <Footer />
    </main>
  );
}

export default HomePage;