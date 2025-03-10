import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Dataset from "./pages/Dataset.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  console.log("App component is rendering");
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/datasets" element={<Dataset />} />
            <Route path="/visualization" element={<Dataset />} />
            <Route path="/download" element={<Dataset />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
