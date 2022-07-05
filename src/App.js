import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route to='/' element={<HomePage/>}>Home</Route>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
