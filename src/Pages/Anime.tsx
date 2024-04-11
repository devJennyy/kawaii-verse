import { FiGrid } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { LuList, LuSettings2 } from "react-icons/lu";
import AnimeCard from "../components/AnimeCard";
import { useState } from "react";

const Anime = () => {
  const [view, setView] = useState("grid");

  return (
    // Main Container
    <div className="w-full h-[170vh] bg-[#09090B] pt-40 px-20 pb-40">
      {/* Mini Header */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center gap-6">
            <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#FD1C68] from-35% to-[#FDAE8F] to-80%"></div>
            <p className="text-[30px] font-semibold bg-gradient-to-t from-[#FD1C68] from-25% to-[#FDAE8F] to-70% bg-clip-text text-transparent">
              Anime
            </p>
          </div>

          <div className="flex flex-row gap-2">
            <button className="flex flex-row justify-between items-center w-44 h-12 border border-[#27272A] rounded-md px-4 active:border-white hover:border-white/50 transition-all">
              <p className="font-light text-[14px]">Sort by</p>
              <IoIosArrowDown />
            </button>

            <button className="flex flex-row justify-between items-center w-44 h-12 border border-[#27272A] rounded-md px-4 active:border-white hover:border-white/50 transition-all">
              <p className="font-light text-[14px]">Filter by</p>
              <LuSettings2 />
            </button>

            <div className="flex flex-row justify-row items-center w-30 h-12 border border-[#27272A] rounded-md px-2">
              <button
                className={`${
                  view == "grid" ? `bg-[#1A1A1A]` : `bg-transparent`
                } flex justify-center items-center rounded-sm w-11 h-8`}
                onClick={() => setView("grid")}
              >
                <FiGrid size={19} />
              </button>

              <button
                className={`${
                  view == `list` ? `bg-[#1A1A1A]` : `bg-transparent`
                } flex justify-center items-center rounded-sm w-11 h-8`}
                onClick={() => setView("list")}
              >
                <LuList size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-b border-[#151518] w-full pt-2">
          <div className="gradient-border-b"></div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full pt-10">
        {view == "grid" ? (
          <div>
            <div className="flex flex-row justify-start items-center gap-6">
              <p>Filters:</p>
              <div className="flex flex-row justify-center items-center gap-2">
                <p className="flex justify-center items-center text-[12px] bg-[#1A1A1A] rounded-md w-24 h-6 cursor-pointer">
                  All
                </p>
                <p className="flex justify-center items-center text-[12px] bg-[#1A1A1A] rounded-md w-24 h-6 cursor-pointer">
                  Series
                </p>
              </div>
            </div>

            {/* Anime List */}
            <div className="flex flex-col gap-12 mt-16">
              <div className="flex flex-col gap-10">
                <p className="flex justify-start border-b border-[#151518] w-full pb-4 text-[20px] font-semibold">
                  Last 24 Hours
                </p>

                <div className="flex flex-row items-center gap-6 overflow-hidden">
                  <AnimeCard />
                  <AnimeCard />
                  <AnimeCard />
                  <AnimeCard />
                  <AnimeCard />
                  <AnimeCard />
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <p className="flex justify-start border-b border-[#151518] w-full mt-14 pb-4 text-[20px] font-semibold">
                  This Past Week
                </p>

                <div className="flex flex-row items-center gap-6 overflow-hidden">
                  <AnimeCard />
                  <AnimeCard />
                  <AnimeCard />
                  <AnimeCard />
                  <AnimeCard />
                  <AnimeCard />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-[50px]"> WORK IN PROGRESS! </div>
        )}
      </div>
    </div>
  );
};

export default Anime;
