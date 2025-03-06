import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/navbar";
import HomePage from "./Components/HomePage";
import "./index.css";
import FooterPage from "./Components/footer";
import AppleStore from "./Components/store";
import ChatBot from "./Pages/ChatBot";

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

function MainApp() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ChatBot />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="store" element={<AppleStore />} />
      </Routes>
      {location.pathname !== "/" && <FooterPage />}
    </div>
  );
}

export default App;
