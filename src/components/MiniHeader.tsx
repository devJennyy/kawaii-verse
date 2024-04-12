import { useState } from "react";
import { FiGrid } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { LuList, LuSettings2 } from "react-icons/lu";

const MiniHeader = () => {
  const [view, setView] = useState("grid");
  
  return (
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
  );
};

export default MiniHeader;
