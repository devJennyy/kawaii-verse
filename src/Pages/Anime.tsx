import { FiGrid } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { LuList, LuSettings2 } from "react-icons/lu";
import AnimeCard from "../components/AnimeCard";

const Anime = () => {

  return (
    // Main Container
    <div className="w-full h-[110vh] bg-[#09090B] pt-40 px-20 pb-40">
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
              <button className="flex justify-center items-center rounded-sm w-11 h-8 bg-[#1A1A1A]">
                <FiGrid size={19} />
              </button>

              <button className="flex justify-center items-center rounded-sm w-11 h-8">
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
        <div className="flex flex-row justify-start items-center gap-6">
          <p>Filters:</p>
          <div className="flex flex-row justify-center items-center gap-2">
            <p className="flex justify-center items-center text-[12px] bg-[#1A1A1A] rounded-md w-24 h-6 cursor-pointer">Subtitled</p>
            <p className="flex justify-center items-center text-[12px] bg-[#1A1A1A] rounded-md w-24 h-6 cursor-pointer">Series</p>
          </div>
        </div>

        <div className="flex justify-start border-b border-[#151518] w-full mt-14 pb-3">
          <p className="text-[18px] font-semibold">Popular</p>
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
  );
};

export default Anime;
