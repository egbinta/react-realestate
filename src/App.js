import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeDetails from "./pages/HomeDetails";
import Index from "./pages/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/homedetails/:externalId" element={<HomeDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
