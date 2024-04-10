const AnimeCard = () => {
  return (
    <div className="flex flex-col justify-center items-start min-w-[278px] h-[405px] bg-[#373737]/10 rounded-lg active:scale-95 transition-all">
      <div className="flex justify-center items-center w-full mb-3">
        <img
          src="/images/anime-list-cover.png"
          className="w-[249px] h-[242px] object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-start items-start max-w-[262px] px-4 truncate pb-5">
        <div className="flex flex-1 flex-col justify-start items-start text-left text-semibold max-w-[262px] gap-[1px]">
          <p className="w-full truncate">Demon Slayer</p>
          <p className="w-full truncate">Kimetsu no Yaiba</p>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start max-w-[278px] px-4 truncate gap-3">
        <div className="flex flex-row justify-between items-center text-[12px] font-normal w-full">
          <div>
            <p>Season 1</p>
          </div>
          <div className="w-[5px] h-[5px] bg-[#343333] rounded-full"></div>
          <div>
            <p>24 Episodes</p>
          </div>
          <div className="w-[5px] h-[5px] bg-[#343333] rounded-full"></div>
          <div>
            <p className="">24 Minutes</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-[6px]">
          <div className="flex justify-center items-center w-[78px] h-5 bg-[#E9E9E9]/10 rounded-md">
            <p className="text-[11px] font-light">Action</p>
          </div>
          <div className="flex justify-center items-center w-[78px] h-5 bg-[#E9E9E9]/10 rounded-md">
            <p className="text-[11px] font-light">Adventure</p>
          </div>
          <div className="flex justify-center items-center w-[78px] h-5 bg-[#E9E9E9]/10 rounded-md">
            <p className="text-[11px] font-light">Fantasy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
