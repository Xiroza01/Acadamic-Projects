import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import HomePage from "./Components/HomePage";
import "./index.css";
import FooterPage from "./Components/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <FooterPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
