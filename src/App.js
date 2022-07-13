import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Empower from "./Pages/Empower";
import Navbar from "./components/Navbar";
import Footer from "./components/Shared/footer/Footer";
function App() {
  return (
      <div className="App h-screen">
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/empower" element={<Empower />} />
          </Routes>
        </Router>
          <Footer/>
      </div>
  );
}

export default App;
