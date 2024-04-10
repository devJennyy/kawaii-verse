import AnimeCard from "../components/AnimeCard";
import MangaCard from "../components/MangaCard";
import MiniSlideshowCard from "../components/MiniSlideshowCard";
import SlideshowCard from "../components/SlideshowCard";

const Homepage = () => {
  return (
    <>
      {/* Home Container */}
      <div
        id="homepage"
        className="flex flex-col justify-center items-center w-full h-full gap-24 pt-56 px-20"
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
      <div id="explore" className="flex flex-col w-full h-[295vh] bg-[#09090B]">
        {/* Most Popular Anime */}
        <div className="flex flex-col px-20">
          <div className="flex flex-col justify-start items-start pt-40">
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
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
          </div>
        </div>

        {/* Top Airing Anime*/}
        <div className="flex flex-col px-20">
          <div className="flex flex-col justify-start items-start pt-32">
            <div className="flex flex-row justify-center items-center text-[30px] font-semibold gap-6">
              <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#FD1C68] from-35% to-[#FDAE8F] to-80%"></div>
              <p>
                Top
                <span className="ml-3 bg-gradient-to-t from-[#FD1C68] from-25% to-[#FDAE8F] to-70% bg-clip-text text-transparent">
                  Airing
                </span>
              </p>
            </div>
            <div className="border-b border-[#151518] w-full pt-2">
              <div className="gradient-border-b"></div>
            </div>
          </div>

          <div className="flex flex-row items-center gap-6 mt-16 overflow-hidden">
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
          </div>
        </div>

        {/* Trending Anime */}
        <div className="flex flex-col px-20">
          <div className="flex flex-col justify-start items-start pt-32">
            <div className="flex flex-row justify-center items-center text-[30px] font-semibold gap-6">
              <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#FD1C68] from-35% to-[#FDAE8F] to-80%"></div>
              <p>
                Now
                <span className="ml-3 bg-gradient-to-t from-[#FD1C68] from-25% to-[#FDAE8F] to-70% bg-clip-text text-transparent">
                  Trending
                </span>
              </p>
            </div>
            <div className="border-b border-[#151518] w-full pt-2">
              <div className="gradient-border-b"></div>
            </div>
          </div>

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
                <div className="h-fit w-[750px]">
                  <div className="flex flex-col justify-start items-start gap-2">
                    <p className="text-[32px] font-bold">SPY X FAMILY</p>

                    <div className="flex flex-row justify-center items-center gap-2">
                      <div className="flex justify-center items-center w-[120px] h-6 bg-[#E9E9E9]/10 rounded-md">
                        <p className="text-[12px] font-light">Action</p>
                      </div>
                      <div className="flex justify-center items-center w-[120px] h-6 bg-[#E9E9E9]/10 rounded-md">
                        <p className="text-[12px] font-light">Adventure</p>
                      </div>
                      <div className="flex justify-center items-center w-[120px] h-6 bg-[#E9E9E9]/10 rounded-md">
                        <p className="text-[12px] font-light">Fantasy</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-start items-start uppercase tracking-[1px] mt-12">
                    <div className="flex flex-row justify-between items-center text-[16px] font-normal">
                      <div>
                        <p>Released</p>
                      </div>
                      <div className="w-[8px] h-[8px] bg-[#343333] rounded-full ml-5 mr-5 "></div>
                      <div>
                        <p>1 Month Ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex text-left text-[14px] font-extralight mt-2 italic">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum, voluptate soluta et ex aspernatur explicabo in
                      iste, a, eveniet quaerat unde facere. Laudantium
                      distinctio pariatur animi rerum maximew. Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Earum, voluptate
                      soluta et ex aspernatur explicabo in iste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Latest Manga */}
        <div className="flex flex-col px-20">
          <div className="flex flex-col justify-start items-start pt-32">
            <div className="flex flex-row justify-center items-center text-[30px] font-semibold gap-6">
              <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#FD1C68] from-35% to-[#FDAE8F] to-80%"></div>
              <p>
                Latest
                <span className="ml-3 bg-gradient-to-t from-[#FD1C68] from-25% to-[#FDAE8F] to-70% bg-clip-text text-transparent">
                  Manga
                </span>
              </p>
            </div>
            <div className="border-b border-[#151518] w-full pt-2">
              <div className="gradient-border-b"></div>
            </div>
          </div>

          <div className="flex flex-row items-center gap-6 mt-16 overflow-hidden">
            <MangaCard />
            <MangaCard />
            <MangaCard />
            <MangaCard />
            <MangaCard />
            <MangaCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
