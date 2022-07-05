import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
