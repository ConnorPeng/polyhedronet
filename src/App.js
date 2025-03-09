import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dataset from "./pages/Dataset";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dataset" element={<Dataset />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
