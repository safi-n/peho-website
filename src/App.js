import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Empower from './Pages/Empower'
function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route to='/' element={<HomePage/>}/>
        <Route to='/' element={<AboutUs/>}/>
        <Route to='/' element={<ContactUs/>}/>
        <Route to='/' element={<Empower/>}/>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
