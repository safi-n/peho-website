import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Empower from "./Pages/Empower";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Fragment>   
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/empower" element={<Empower />} />
        </Routes>
      <Footer />
      </Router>
    </div>
    </Fragment> 
  );
}

export default App;
