
import AnimeCard from "../components/AnimeCard";
import { useState } from "react";
import MiniHeader from "../components/MiniHeader";
import Filters from "../components/Filters";

const Anime = () => {
  const [view, setView] = useState("grid");

  return (
    // Main Container
    <div className="w-full h-[170vh] bg-[#09090B] pt-40 px-20 pb-40">
      {/* Mini Header */}
      <MiniHeader/>

      {/* Content */}
      <div className="w-full pt-10">
        {view == "grid" ? (
          <div>
            <Filters/>

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
