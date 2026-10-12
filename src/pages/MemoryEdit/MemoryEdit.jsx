import {
  useNavigate,
  useParams,
} from "react-router-dom";

import Container from "../../components/ui/Container/Container";
import Header from "../../components/features/Header/Header";
import Footer from "../../components/features/Footer/Footer";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";

import MemoryForm from "../../components/features/MemoryForm/MemoryForm";

import memories from "../../data/memories";

function MemoryEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const memory = memories.find(
    (item) => item.id === Number(id)
  );

  function handleUpdateMemory(updatedMemory) {
    console.log(
      "Zaktualizowane wspomnienie:",
      updatedMemory
    );

    navigate(`/memory/${updatedMemory.id}`);
  }

  if (!memory) {
    return (
      <main className="app">
        <Container>
          <Header />

          <section className="section">
            <h1 className="text-center">
              Nie znaleziono wspomnienia
            </h1>
          </section>

          <Footer />
        </Container>
      </main>
    );
  }

  return (
    <main className="app">
      <Container>
        <Header />

        <section className="section">
          <SectionHeader
            eyebrow="Edycja wspomnienia"
            title={`Edytuj: ${memory.title}`}
            description="Zmień informacje, zdjęcia i szczegóły wspomnienia."
          />

          <MemoryForm
            initialData={memory}
            submitLabel="Zapisz zmiany"
            onSubmit={handleUpdateMemory}
            onCancel={() =>
              navigate(`/memory/${memory.id}`)
            }
          />
        </section>

        <Footer />
      </Container>
    </main>
  );
}

export default MemoryEditPage;