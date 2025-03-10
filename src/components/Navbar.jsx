import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-gradient-to-r from-blue-700 to-indigo-800 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold flex items-center group"
        >
          <div className="w-12 h-12 mr-3 flex items-center justify-center group-hover:scale-105 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-full h-full"
            >
              {/* Outer polyhedron */}
              <path
                fill={scrolled ? "#3B82F6" : "#FFFFFF"}
                d="M12 2L3 7v10l9 5 9-5V7l-9-5zm7 13.8l-7 3.9-7-3.9V8.2l7-3.9 7 3.9v7.6z"
              />
              {/* Inner polyhedron */}
              <path
                fill={scrolled ? "#60A5FA" : "#FFFFFF"}
                fillOpacity={scrolled ? "1" : "0.8"}
                d="M12 6l-5 2.8v5.6l5 2.8 5-2.8V8.8L12 6zm3 7.4l-3 1.7-3-1.7v-3.4l3-1.7 3 1.7v3.4z"
              />
              {/* Connecting lines */}
              <path
                stroke={scrolled ? "#3B82F6" : "#FFFFFF"}
                strokeWidth="0.5"
                d="M12 2v4M3 7l9-1M21 7l-9-1M12 22v-4M3 17l9 1M21 17l-9 1"
                strokeOpacity="0.6"
              />
            </svg>
          </div>
          <span className={scrolled ? "text-blue-700" : "text-white"}>
            PolyhedronNet
          </span>
        </Link>
        <div className="space-x-1 md:space-x-8 flex items-center">
          <Link
            to="/datasets"
            className={`px-3 py-2 rounded-lg transition-colors hover:bg-opacity-80 ${
              scrolled
                ? "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                : "text-white hover:bg-white hover:bg-opacity-20"
            }`}
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
              Datasets
            </div>
          </Link>
          <Link
            to="/visualization"
            className={`px-3 py-2 rounded-lg transition-colors hover:bg-opacity-80 ${
              scrolled
                ? "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                : "text-white hover:bg-white hover:bg-opacity-20"
            }`}
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                />
              </svg>
              3D Models
            </div>
          </Link>
          <Link
            to="/download"
            className={`px-3 py-2 rounded-lg transition-colors hover:bg-opacity-80 ${
              scrolled
                ? "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                : "text-white hover:bg-white hover:bg-opacity-20"
            }`}
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Code & Resources
            </div>
          </Link>
          <a
            href="https://github.com/dyu62/3D_polyhedron"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full 
              transition-all hover:scale-110 ${
                scrolled
                  ? "bg-gray-100 text-blue-700 hover:bg-gray-200"
                  : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
