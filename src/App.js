import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Empower from "./Pages/Empower";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route to="/" element={<HomePage />} />
          <Route to="/about-us" element={<AboutUs />} />
          <Route to="/contact-us" element={<ContactUs />} />
          <Route to="/empower" element={<Empower />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
