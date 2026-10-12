import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import MemoriesPage from "./pages/Memories/Memories";
import MemoryPage from "./pages/Memory/Memory";
import FavoritesPage from "./pages/Favorites/Favorites";
import CategoriesPage from "./pages/Categories/Categories";
import ScrollToTop from "./components/ui/ScrollToTop/ScrollToTop";
import AddMemoryPage from "./pages/AddMemory/AddMemory";
import MemoryEditPage from "./pages/MemoryEdit/MemoryEdit";


function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/memories" element={<MemoriesPage />} />
      <Route path="/memory/new" element={<AddMemoryPage />} />
      <Route path="/memory/:id" element={<MemoryPage />} />
      <Route path="/memory/:id/edit" element={<MemoryEditPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
    </>
  );
}

export default App;