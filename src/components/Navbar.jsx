import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          PartNet
        </Link>
        <div className="space-x-4">
          <Link to="/dataset" className="hover:text-gray-300">
            Dataset
          </Link>
          <Link to="/visualization" className="hover:text-gray-300">
            Visualization
          </Link>
          <Link to="/download" className="hover:text-gray-300">
            Download
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
