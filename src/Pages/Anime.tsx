import AnimeCard from "../components/cards/AnimeCard";
import { useState } from "react";
import MiniHeader from "../components/ui/Categorization";
import Filters from "../components/ui/Filters";
import AnimeListView from "@/components/cards/ListCard";

const Anime = () => {
  const [view, setView] = useState("grid");
  const selectedFilters = ["Newest", "Adventure", "Subtitle"];
  const selectedGenre = ["Action", "Adventure", "Slice of Life"];

  return (
    // Main Container
    <div className="max-w-[1500px] mx-auto h-fit bg-[#09090B] pt-40 px-4">
      {/* Mini Header */}
      <MiniHeader title="Anime" view={view} setView={setView} hasMedia={true} />

      {/* Content */}
      <div className="w-full pt-10">
        {view == "grid" ? (
          <div>
            <Filters selectedFilters={selectedFilters} />

            {/* Anime Grid View */}
            <div className="flex flex-col gap-12 mt-20">
              <div className="flex flex-col gap-10">
                <p className="flex justify-start text-[20px] font-semibold xl:border-b xl:border-[#151518]/10 sm:border-b-2 sm:border-[#151518] pb-4">
                  Most Popular Anime
                </p>

                <div className="flex flex-col w-full gap-4">
                  <div className="flex flex-row justify-between items-center gap-4 overflow-auto no-scrollbar">
                    <AnimeCard
                      animeCover="/images/anime-cover.jpg"
                      englishTitle="Demon Slayer"
                      japaneseTitle="Kimetsu No Yaiba"
                      currentSeason="Season 1"
                      episodeCount="24 Episodes"
                      durationTime="24 Mins"
                      selectedGenre={selectedGenre}
                    />
                    <AnimeCard
                      animeCover="/images/anime-cover.jpg"
                      englishTitle="Demon Slayer"
                      japaneseTitle="Kimetsu No Yaiba"
                      currentSeason="Season 1"
                      episodeCount="24 Episodes"
                      durationTime="24 Mins"
                      selectedGenre={selectedGenre}
                    />
                    <AnimeCard
                      animeCover="/images/anime-cover.jpg"
                      englishTitle="Demon Slayer"
                      japaneseTitle="Kimetsu No Yaiba"
                      currentSeason="Season 1"
                      episodeCount="24 Episodes"
                      durationTime="24 Mins"
                      selectedGenre={selectedGenre}
                    />
                    <AnimeCard
                      animeCover="/images/anime-cover.jpg"
                      englishTitle="Demon Slayer"
                      japaneseTitle="Kimetsu No Yaiba"
                      currentSeason="Season 1"
                      episodeCount="24 Episodes"
                      durationTime="24 Mins"
                      selectedGenre={selectedGenre}
                    />
                    <AnimeCard
                      animeCover="/images/anime-cover.jpg"
                      englishTitle="Demon Slayer"
                      japaneseTitle="Kimetsu No Yaiba"
                      currentSeason="Season 1"
                      episodeCount="24 Episodes"
                      durationTime="24 Mins"
                      selectedGenre={selectedGenre}
                    />
                  </div>

                  <div className="flex flex-row justify-between items-center w-full gap-4 overflow-auto no-scrollbar">
                    <AnimeCard
                      animeCover="/images/anime-cover.jpg"
                      englishTitle="Demon Slayer"
                      japaneseTitle="Kimetsu No Yaiba"
                      currentSeason="Season 1"
                      episodeCount="24 Episodes"
                      durationTime="24 Mins"
                      selectedGenre={selectedGenre}
                    />
                    <AnimeCard
                      animeCover="/images/anime-cover.jpg"
                      englishTitle="Demon Slayer"
                      japaneseTitle="Kimetsu No Yaiba"
                      currentSeason="Season 1"
                      episodeCount="24 Episodes"
                      durationTime="24 Mins"
                      selectedGenre={selectedGenre}
                    />
                    <AnimeCard
                      animeCover="/images/anime-cover.jpg"
                      englishTitle="Demon Slayer"
                      japaneseTitle="Kimetsu No Yaiba"
                      currentSeason="Season 1"
                      episodeCount="24 Episodes"
                      durationTime="24 Mins"
                      selectedGenre={selectedGenre}
                    />
                    <AnimeCard
                      animeCover="/images/anime-cover.jpg"
                      englishTitle="Demon Slayer"
                      japaneseTitle="Kimetsu No Yaiba"
                      currentSeason="Season 1"
                      episodeCount="24 Episodes"
                      durationTime="24 Mins"
                      selectedGenre={selectedGenre}
                    />
                    <AnimeCard
                      animeCover="/images/anime-cover.jpg"
                      englishTitle="Demon Slayer"
                      japaneseTitle="Kimetsu No Yaiba"
                      currentSeason="Season 1"
                      episodeCount="24 Episodes"
                      durationTime="24 Mins"
                      selectedGenre={selectedGenre}
                    />
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
