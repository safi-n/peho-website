import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About/AboutUs";
import ContactUs from "./Pages/Contact/ContactUs";
// import Empower from "./Pages/Empower/Empower";
import Navbar from "./components/Shared/header/Navbar";
import Footer from "./components/Shared/footer/Footer";

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* <Route path="/empower" element={<Empower />} /> */}
          </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
