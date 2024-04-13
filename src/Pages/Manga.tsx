import { useState } from "react";
import MiniHeader from "../components/MiniHeader";
import MangaCard from "../components/MangaCard";
import Filters from "../components/Filters";
import AnimeListView from "@/components/AnimeListView";


const Manga = () => {
  const [view, setView] = useState("grid");
  return (
    // Main Container
    <div className="w-full h-[170vh] bg-[#09090B] pt-40 px-20 pb-40">
      {/* Mini Header */}
      <MiniHeader title="Manga" view={view} setView={setView}/>

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
                  <MangaCard />
                  <MangaCard />
                  <MangaCard />
                  <MangaCard />
                  <MangaCard />
                  <MangaCard />
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <p className="flex justify-start border-b border-[#151518] w-full mt-14 pb-4 text-[20px] font-semibold">
                  This Past Week
                </p>

                <div className="flex flex-row items-center gap-6 overflow-hidden">
                  <MangaCard />
                  <MangaCard />
                  <MangaCard />
                  <MangaCard />
                  <MangaCard />
                  <MangaCard />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Filters />
            
            {/* Anime List */}
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
  )
}

export default Manga