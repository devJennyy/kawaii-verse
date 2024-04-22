import TitleBorder from "@/components/TitleBorder";
import AnimeCard from "../components/AnimeCard";
import MangaCard from "../components/MangaCard";
import MiniSlideshowCard from "../components/MiniSlideshowCard";
import SlideshowCard from "../components/SlideshowCard";

const Homepage = () => {
  return (
    <>
      <div className="px-4">
        {/* Home Container */}
        <div
          id="homepage"
          className="flex flex-col justify-center items-center w-full h-fit gap-24 pt-56"
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-[40px] font-extrabold tracking-[2px]">
              Welcome to
              <span className="bg-gradient-to-t from-[#FD1C68] from-25% to-[#FDAE8F] to-70% bg-clip-text text-transparent ml-3">
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
          className="flex flex-col w-full bg-[#09090B] overflow-hidden mt-40 gap-24"
        >
          {/* Most Popular Anime */}
          <div className="flex flex-col w-full h-full overflow-hidden">
            <TitleBorder criteriaSubtitle="Most" criteriaTitle="Popular" />

            <div className="flex flex-row items-center w-full gap-4 mt-16 overflow-auto no-scrollbar">
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
            </div>
          </div>

          {/* Top Airing Anime */}
          <div className="flex flex-col w-full h-full overflow-hidden">
            <TitleBorder criteriaSubtitle="Top" criteriaTitle="Airing" />

            <div className="flex flex-row items-center w-full gap-4 mt-16 overflow-auto no-scrollbar">
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
            </div>
          </div>

          {/* Trending Anime */}
          <div className="flex flex-col">
            <TitleBorder criteriaSubtitle="Now" criteriaTitle="Trending" />

            <button className="flex flex-row justify-between items-center mt-16 overflow-hidden rounded-sm">
              <div className="w-1/2">
                <img
                  src="/images/anime-trend-cover.jpg"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="w-1/2 relative">
                <div className="flex justify-center items-center bg-black opacity-25 w-full h-96 bg-[url('/images/anime-trend-cover.jpg')] bg-cover bg-center"></div>
                <div className="flex flex-col justify-center items-center w-full absolute top-0 left-0 h-full">
                  <div className="h-fit w-[750px]"></div>
                </div>
              </div>
            </button>
          </div>

          {/* Latest Manga */}
          <div className="flex flex-col">
            <TitleBorder criteriaSubtitle="Latest" criteriaTitle="Manga"/>

            <div className="flex flex-row items-center gap-4 mt-16 overflow-hidden">
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
    </>
  );
};

export default Homepage;
