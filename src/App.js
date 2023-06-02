import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeDetails from "./pages/HomeDetails";
import Index from "./pages/Index";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/homedetails/:externalId" element={<HomeDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
