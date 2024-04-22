import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
  Link,
} from "react-router-dom";
import Anime from "./Pages/Anime";
import Homepage from "./Pages/Homepage";
import Manga from "./Pages/Manga";
import Characters from "./Pages/Characters";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <div className="w-full border-b border-[#151518]/30 fixed top-0 backdrop-blur-md bg-[#09090B] z-50">
        <div className="flex flex-1 flex-row justify-between max-w-[1536px] mx-auto px-4">
          <div className="flex flex-row items-center w-full h-16 gap-20">
            <a href="#homepage" className="flex gap-2">
              <img
                src="/logo.svg"
                className="flex flex-1 max-w-[25px] h-full object-cover"
              />
              <p className="bg-gradient-to-t from-[#FD1C68] from-30% to-[#FDAE8F] to-70% bg-clip-text text-transparent text-[18px] font-bold">
                KawaiiVerse
              </p>
            </a>

            <div className="flex text-[14px] gap-6 menu-items">
              <Link
                to={"/homepage"}
                className="text-[#878788] font-medium hover:text-[#E6E6E6] focus:text-[#E6E6E6]"
              >
                Explore
              </Link>
              <Link
                to={"/anime"}
                className="text-[#878788] font-medium hover:text-[#E6E6E6] focus:text-[#E6E6E6]"
              >
                Anime
              </Link>
              <Link
                to={"/manga"}
                className="text-[#878788] font-medium hover:text-[#E6E6E6] focus:text-[#E6E6E6]"
              >
                Manga
              </Link>
              <Link
                to={"/characters"}
                className="text-[#878788] font-medium hover:text-[#E6E6E6] focus:text-[#E6E6E6]"
              >
                Top Characters
              </Link>
            </div>
          </div>

          <div className="flex flex-row justify-end items-center w-full">
            <button className="flex justify-center items-center hover:bg-[#27272A]/40 w-10 h-10 rounded-md">
              <FaGithub size={18} />
            </button>
            <button className="flex justify-center items-center hover:bg-[#27272A]/40 w-10 h-10 rounded-md">
              <img src="/icons/moon-stars.svg" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1536px] mx-auto h-fit flex flex-col bg-[#09090B] text-white">
        <div className="w-full h-fit">
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" replace />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/manga" element={<Manga />} />
            <Route path="/characters" element={<Characters />} />
          </Routes>
        </div>

        {/* Footer*/}
        <div className="w-full h-80 px-4 pt-44">
          <div className="border-b border-[#151518]/30"></div>
          <div className="flex flex-col justify-center items-center text-[12px] text-[#CCD6F6] font-light w-full pt-12">
            <p>Designed & Built by Jenny Pieloor</p>
            <p>Powered by Jikan API 2024</p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
