import TitleBorder from "@/components/ui/RankingsOverview";
import AnimeCard from "../components/cards/AnimeCard";
import MangaCard from "../components/cards/MangaCard";
import MiniSlideshowCard from "../components/cards/MiniSlideshowCard";
import SlideshowCard from "../components/cards/SlideshowCard";
import { SparklesCore } from "@/components/effects/sparkles";
import { TypewriterEffectSmooth } from "@/components/effects/typewritter-effect";

const Homepage = () => {
  const selectedGenre = ["Action", "Adventure", "Slice of Life"];
  const words = [
    {
      text: "Explore",
    },
    {
      text: "a",
    },
    {
      text: "curated",
    },
    {
      text: "collection",
    },
    {
      text: "of",
    },
    {
      text: "anime",
    },
    {
      text: "on",
    },
    {
      text: "KawaiiVerse",
      className:
        "bg-gradient-to-t from-[#FD1C68] from-25% to-[#FDAE8F] to-70% bg-clip-text text-transparent",
    },
  ];

  return (
    <>
      <div className="px-4">
        {/* Home Container */}
        <div
          id="homepage"
          className="flex flex-col justify-center items-center w-full h-fit mt-20"
        >
          <div className=" h-[100vh] relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 h-[40vh]">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>

            <div className="flex flex-col gap-16 z-25">
              <div className="flex flex-col justify-center items-center">
                <p className="text-[40px] font-extrabold tracking-[2px]">
                  Welcome to
                  <span className="bg-gradient-to-t from-[#FD1C68] from-25% to-[#FDAE8F] to-70% bg-clip-text text-transparent ml-3">
                    KawaiiVerse
                  </span>
                </p>

                <div className="flex items-center justify-center">
                  <TypewriterEffectSmooth words={words} />
                </div>
              </div>

              <div className="flex flex-row justify-center items-center gap-7 w-full h-[450px] overflow-hidden">
                <MiniSlideshowCard />
                <MiniSlideshowCard />
                <SlideshowCard />
                <MiniSlideshowCard />
                <MiniSlideshowCard />
              </div>
            </div>
          </div>
        </div>

        {/* Explore Container*/}
        <div
          id="explore"
          className="flex flex-col w-full bg-[#09090B] overflow-hidden mt-40 gap-24"
        >
          {/* Most Popular Anime */}
          <div className="flex flex-col w-full h-full overflow-hidden">
            <TitleBorder Subtitle="Most" Title="Popular" />

            <div className="flex flex-row items-center w-full gap-4 mt-16 overflow-auto no-scrollbar">
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

          {/* Top Airing Anime */}
          <div className="flex flex-col w-full h-full overflow-hidden">
            <TitleBorder Subtitle="Top" Title="Airing" />

            <div className="flex flex-row items-center w-full gap-4 mt-16 overflow-auto no-scrollbar">
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

          {/* Trending Anime */}
          <div className="flex flex-col">
            <TitleBorder Subtitle="Now" Title="Trending" />

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
            <TitleBorder Subtitle="Latest" Title="Manga" />

            <div className="flex flex-row items-center gap-4 mt-16 overflow-hidden">
              <MangaCard
                mangaCover={"/images/anime-cover.jpg"}
                selectedGenre={selectedGenre}
                englishTitle={"Kimetsu no Yaiba"}
                shortDescription={
                  "Lorem ipsum dolor sit, amet consectetur adi elit. Quam suscipit ullam aliquam incidunt error vitae odit illum necessitatibus qui ex. Quae iure eligendi voluptatum harum sit architecto tenetur pariatur vero?"
                }
                durationTime="1 month ago"
              />
              <MangaCard
                mangaCover={"/images/anime-cover.jpg"}
                selectedGenre={selectedGenre}
                englishTitle={"Kimetsu no Yaiba"}
                shortDescription={
                  "Lorem ipsum dolor sit, amet consectetur adi elit. Quam suscipit ullam aliquam incidunt error vitae odit illum necessitatibus qui ex. Quae iure eligendi voluptatum harum sit architecto tenetur pariatur vero?"
                }
                durationTime="1 month ago"
              />
              <MangaCard
                mangaCover={"/images/anime-cover.jpg"}
                selectedGenre={selectedGenre}
                englishTitle={"Kimetsu no Yaiba"}
                shortDescription={
                  "Lorem ipsum dolor sit, amet consectetur adi elit. Quam suscipit ullam aliquam incidunt error vitae odit illum necessitatibus qui ex. Quae iure eligendi voluptatum harum sit architecto tenetur pariatur vero?"
                }
                durationTime="1 month ago"
              />
              <MangaCard
                mangaCover={"/images/anime-cover.jpg"}
                selectedGenre={selectedGenre}
                englishTitle={"Kimetsu no Yaiba"}
                shortDescription={
                  "Lorem ipsum dolor sit, amet consectetur adi elit. Quam suscipit ullam aliquam incidunt error vitae odit illum necessitatibus qui ex. Quae iure eligendi voluptatum harum sit architecto tenetur pariatur vero?"
                }
                durationTime="1 month ago"
              />
              <MangaCard
                mangaCover={"/images/anime-cover.jpg"}
                selectedGenre={selectedGenre}
                englishTitle={"Kimetsu no Yaiba"}
                shortDescription={
                  "Lorem ipsum dolor sit, amet consectetur adi elit. Quam suscipit ullam aliquam incidunt error vitae odit illum necessitatibus qui ex. Quae iure eligendi voluptatum harum sit architecto tenetur pariatur vero?"
                }
                durationTime="1 month ago"
              />
              <MangaCard
                mangaCover={"/images/anime-cover.jpg"}
                selectedGenre={selectedGenre}
                englishTitle={"Kimetsu no Yaiba"}
                shortDescription={
                  "Lorem ipsum dolor sit, amet consectetur adi elit. Quam suscipit ullam aliquam incidunt error vitae odit illum necessitatibus qui ex. Quae iure eligendi voluptatum harum sit architecto tenetur pariatur vero?"
                }
                durationTime="1 month ago"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
