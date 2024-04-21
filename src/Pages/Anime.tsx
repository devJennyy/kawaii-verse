import AnimeCard from "../components/AnimeCard";
import { useState } from "react";
import MiniHeader from "../components/MiniHeader";
import Filters from "../components/Filters";
import AnimeListView from "@/components/AnimeListView";

const Anime = () => {
  const [view, setView] = useState("grid");

  return (
    // Main Container
    <div className="w-full h-[190vh] bg-[#09090B] pt-40 px-20 pb-40">
      {/* Mini Header */}
      <MiniHeader title="Anime" view={view} setView={setView} />

      {/* Content */}
      <div className="w-full pt-10">
        {view == "grid" ? (
          <div>
            <Filters />

            {/* Anime Grid View */}
            <div className="flex flex-col gap-12 mt-16">
              <div className="flex flex-col gap-10">
                <p className="flex justify-start border-b border-[#151518] w-full pb-4 text-[20px] font-semibold">
                  Most Popular Anime
                </p>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-row items-center gap-5 overflow-hidden">
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                  </div>

                  <div className="flex flex-row items-center gap-5 overflow-hidden">
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
          </div>
        ) : (
          <div>
            <Filters />

            {/* Anime List View */}
            <div className="flex flex-col mt-16">
              <div className="flex flex-row justify-between gap-16">
                <div className="flex flex-col gap-10 w-1/2">
                  <p className="flex justify-start border-b border-[#151518] pb-4 text-[20px] font-semibold w-full">
                    Last 24 Hours
                  </p>

                  <div className="flex flex-col gap-6">
                    <AnimeListView />
                    <AnimeListView />
                    <AnimeListView />
                    <AnimeListView />
                    <AnimeListView />
                  </div>
                </div>

                <div className="flex flex-col gap-10 w-1/2">
                  <p className="flex justify-start border-b border-[#151518] pb-4 text-[20px] font-semibold w-full">
                    This Past Week
                  </p>

                  <div className="flex flex-col gap-6">
                    <AnimeListView />
                    <AnimeListView />
                    <AnimeListView />
                    <AnimeListView />
                    <AnimeListView />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Anime;
