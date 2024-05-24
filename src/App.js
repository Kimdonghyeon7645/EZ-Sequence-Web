import "./App.css";
import HomePage from "./pages/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import InfoPage from "./pages/InfoPage";
import QrPage from "./pages/qrPage";
import CheckPage from "./pages/CheckPage";
import WattiPage from "./pages/WattiPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/qr" element={<QrPage />} />
        <Route path="/check" element={<CheckPage />} />
        <Route path="/watti" element={<WattiPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
