import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import MemoriesPage from "./pages/Memories/Memories";
import MemoryPage from "./pages/Memory/Memory";
import FavoritesPage from "./pages/Favorites/Favorites";
import CategoriesPage from "./pages/Categories/Categories";
import ScrollToTop from "./components/ui/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      <Route path="/memories" element={<MemoriesPage />} />
      {/* <Route path="/memory/new" element={<MemoryEditPage mode="create" />} /> */}
      <Route path="/memory/:id" element={<MemoryPage />} />
    {/*   <Route path="/memory/:id/edit" element={<MemoryEditPage mode="edit" />} /> */}

      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
    </>
  );
}

export default App;