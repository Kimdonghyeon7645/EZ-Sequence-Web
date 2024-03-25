import "./App.css";
import HomePage from "./pages/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
