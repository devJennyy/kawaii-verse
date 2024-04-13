import { FiSearch } from "react-icons/fi";
import "./App.css";
import { Route, Routes, BrowserRouter as Router, Navigate, Link} from "react-router-dom";
import Anime from "./Pages/Anime";
import Homepage from "./Pages/Homepage";
import Manga from "./Pages/Manga";
import Characters from "./Pages/Characters";

function App() {
  return (
    <Router>
      {/* Main Container */}
      <div className="w-full h-full flex flex-col bg-[#09090B] text-white">
        {/* Navbar */}
        <div className="flex flex-row justify-between items-center w-screen border-b border-[#151518] fixed top-0 backdrop-blur-md bg-[#09090B] z-50">
          <div className="flex flex-row justify-start items-center w-full h-28 gap-20 px-20">
            <a href="#homepage" className="flex gap-4">
              <img
                src="/logo.svg"
                className="flex flex-1 max-w-[34px] h-full object-cover"
              />
              <p className="bg-gradient-to-t from-[#FD1C68] from-30% to-[#FDAE8F] to-70% bg-clip-text text-transparent text-[24px] font-bold">
                KawaiiVerse
              </p>
            </a>

            <div className="flex text-[16px] font-normal gap-6 menu-items">
              <Link to={"/homepage"}>Explore</Link>
              <Link to={"/anime"}>Anime</Link>
              <Link to={"/manga"}>Manga</Link>
              <Link to={"/characters"}>Top Characters</Link>
            </div>

            <div className="flex flex-row justify-end items-center flex-1 mr-2">
              <div className="flex flex-row justify-end items-center flex-1 max-w-[465px] relative">
                <input
                  placeholder="Search anime..."
                  className="w-full h-12 bg-[#09090B] border border-[#27272A] rounded-md pl-5 pr-12 text-[15px] outline-none focus:border-white"
                />
                <button className="absolute mr-5 cursor-pointer flex flex-1 max-w-5">
                  <FiSearch className="w-full h-5" />
                </button>
              </div>
              <button className="ml-6">
                <img src="/icons/moon-stars.svg" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-fit">
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" replace />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/manga" element={<Manga/>} />
            <Route path="/characters" element={<Characters/>} />
          </Routes>
        </div>

        {/* Footer*/}
        <div className="w-full h-36 px-20 bg-[#09090B]">
          <div className="border-b border-[#151518]"></div>
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
