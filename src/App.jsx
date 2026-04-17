import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Learn from "./pages/learn";
import Cards from "./pages/cards";
import Audio from "./pages/audio";
import Supporters from "./pages/supporters";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/supporters" element={<Supporters />} />
      </Routes>

    </>

  );
}

export default App;