import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Sobre from "./pages/Sobre";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden bg-[#FEF9E1]">
        <Navbar />
        <main className="flex-grow p-6 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Product />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
