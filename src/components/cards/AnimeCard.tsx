interface Props {
  animeCover: string;
  englishTitle: string;
  japaneseTitle: string;
  currentSeason: string;
  episodeCount: string;
  durationTime: string;
  selectedGenre?: string[];
}

const AnimeCard = ({
  animeCover,
  englishTitle,
  japaneseTitle,
  currentSeason,
  episodeCount,
  durationTime,
  selectedGenre,
}: Props) => {
  return (
    <div className="flex flex-col justify-between items-start min-w-[280px] h-fit bg-[#373737]/10 rounded-lg p-4 overflow-hidden">
      <div className="flex justify-center items-center w-full mb-3">
        <img
          src={animeCover}
          className="w-full h-[250px] object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-start items-start max-w-[262px] truncate pb-4">
        <div className="flex flex-1 flex-col justify-start items-start text-left text-semibold max-w-[262px]">
          <p className="w-full truncate">{englishTitle}</p>
          <p className="w-full truncate">{japaneseTitle}</p>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start w-full truncate gap-4">
        <div className="flex flex-row justify-between items-center text-[12px] font-normal w-full gap-4">
          <p>{currentSeason}</p>
          <div className="min-w-[6px] h-[6px] rounded-full bg-[#343333]"></div>
          <p>{episodeCount}</p>
          <div className="min-w-[6px] h-[6px] rounded-full bg-[#343333]"></div>
          <p className="truncate">{durationTime}</p>
        </div>

        <div className="flex flex-row justify-between items-center w-full gap-2 text-[11px]">
          {selectedGenre?.map((genre) => {
            return (
              <p className="flex justify-center items-center w-full h-5 xl:bg-[#E9E9E9]/30 sm:bg-[#E9E9E9]/10 rounded-md font-light truncate pl-2 pr-2">
                {genre}
              </p>
            );
          })}
          {/* <div className="flex justify-center items-center w-full h-5 bg-[#E9E9E9]/30 rounded-md">
            <p className="font-light truncate pl-2 pr-2"></p>
          </div>
          <div className="flex justify-center items-center min-w-[78px] h-5 bg-[#E9E9E9]/30 rounded-md">
            <p className="font-light truncate pl-2 pr-2">
              Adventure
            </p>
          </div>
          <div className="flex justify-center items-center w-full h-5 bg-[#E9E9E9]/30 rounded-md">
            <p className="font-light truncate pl-2 pr-2">Fantasy</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
