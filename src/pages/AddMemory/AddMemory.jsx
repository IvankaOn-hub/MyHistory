import { useNavigate } from "react-router-dom";

import Container from "../../components/ui/Container/Container";
import Header from "../../components/features/Header/Header";
import Footer from "../../components/features/Footer/Footer";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";

import MemoryForm from "../../components/features/MemoryForm/MemoryForm";

function AddMemoryPage() {
  const navigate = useNavigate();

  function handleCreateMemory(formData) {
    const newMemory = {
      ...formData,
      id: Date.now(),
    };

    console.log(
      "Nowe wspomnienie:",
      newMemory
    );

    navigate("/memories");
  }

  return (
    <main className="app">
      <Container>
        <Header />

        <section className="section">
          <SectionHeader
            eyebrow="Nowe wspomnienie"
            title="Dodaj wspomnienie"
            description="Zapisz chwilę, do której chcesz wracać."
          />

          <MemoryForm
            submitLabel="Dodaj wspomnienie"
            onSubmit={handleCreateMemory}
            onCancel={() => navigate(-1)}
          />
        </section>

        <Footer />
      </Container>
    </main>
  );
}

export default AddMemoryPage;