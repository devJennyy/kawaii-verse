import { FiSearch } from "react-icons/fi";
import "./App.css";
import SlideshowCard from "./components/SlideshowCard";
import MiniSlideshowCard from "./components/MiniSlideshowCard";
import AnimeCard from "./components/AnimeCard";

function App() {
  return (
    <>
      {/* Main Container */}
      <div className="w-full h-full bg-[#09090B] text-white">
        {/* Navbar */}
        <div className="flex flex-row justify-between items-center w-full border-b border-[#151518] fixed top-0 backdrop-blur-md bg-[#09090B] z-50">
          <div className="flex flex-row justify-start items-center w-full h-28 gap-20 px-20">
            <a href="homepage" className="flex gap-4">
              <img
                src="/logo.svg"
                className="flex flex-1 max-w-[34px] h-full object-cover"
              />
              <p className="bg-gradient-to-t from-[#FD1C68] from-30% to-[#FDAE8F] to-70% bg-clip-text text-transparent text-[24px] font-bold">
                KawaiiVerse
              </p>
            </a>

            <div className="flex text-[16px] font-normal gap-6 menu-items">
              <a href="#explore">Explore</a>
              <a href="#anime">Anime</a>
              <a href="#manga">Manga</a>
              <a href="#browse">Browse</a>
              <a href="#toplists">Top Lists</a>
            </div>

            <div className="flex flex-row justify-end items-center flex-1">
              <div className="flex flex-row justify-end items-center flex-1 max-w-[450px] relative">
                <input
                  placeholder="Search anime..."
                  className="w-full h-12 bg-[#09090B] border border-[#27272A] rounded-md pl-5 pr-12"
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

        {/* Home Container */}
        <div
          id="homepage"
          className="flex flex-col justify-center items-center w-full h-full gap-24 pt-36 px-20"
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-[40px] font-extrabold tracking-[2px]">
              Welcome to{" "}
              <span className="bg-gradient-to-t from-[#FD1C68] from-25% to-[#FDAE8F] to-70% bg-clip-text text-transparent">
                KawaiiVerse
              </span>
            </p>
            <p className="text-[18px] font-light pt-1">
              Explore a curated collection of anime on KawaiiVerse.
            </p>
          </div>

          <div className="flex flex-row justify-center items-center gap-7 w-full h-[450px] overflow-hidden">
            <MiniSlideshowCard />
            <MiniSlideshowCard />
            <SlideshowCard />
            <MiniSlideshowCard />
            <MiniSlideshowCard />
          </div>
        </div>

        {/* Explore Container*/}
        <div
          id="explore"
          className="flex flex-col w-full h-[100vh] bg-[#09090B]"
        >
          {/* Most Popular Anime */}
          <div className="flex flex-col gap-7 px-20">
            <div className="flex flex-col justify-start items-start pt-52">
              <div className="flex flex-row justify-center items-center text-[30px] font-semibold gap-6">
                <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#FD1C68] from-35% to-[#FDAE8F] to-80%"></div>
                <p>
                  Most
                  <span className="ml-3 bg-gradient-to-t from-[#FD1C68] from-25% to-[#FDAE8F] to-70% bg-clip-text text-transparent">
                    Popular
                  </span>
                </p>
              </div>
              <div className="border-b border-[#151518] w-full pt-2">
                <div className="gradient-border-b"></div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-6 mt-16 overflow-hidden">
              <AnimeCard/>
              <AnimeCard/>
              <AnimeCard/>
              <AnimeCard/>
              <AnimeCard/>
              <AnimeCard/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
