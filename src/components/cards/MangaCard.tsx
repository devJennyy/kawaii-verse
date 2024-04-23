import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface Props {
  mangaCover: string;
  selectedGenre?: string[];
  englishTitle: string;
  shortDescription: string;
  durationTime: string;
}

const MangaCard = ({
  mangaCover,
  selectedGenre,
  englishTitle,
  shortDescription,
  durationTime,
}: Props) => {
  return (
    <button className="flex flex-col justify-center items-start min-w-[280px] h-fit bg-[#373737]/10 rounded-lg">
      <div className="p-4">
        <div className="flex w-full">
          <img
            src={mangaCover}
            className="w-[249px] h-[242px] object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col w-full mt-4">
          <div className="flex flex-row justify-center items-center gap-[6px] overflow-hidden max-w-[246px]">
            {selectedGenre?.map((genre) => {
              return (
                <p className="flex justify-center items-center min-w-[78px] h-5 bg-[#E9E9E9]/30 rounded-md text-[11px] font-light truncate pl-2 pr-2">
                  {genre}
                </p>
              );
            })}
            {/* <div className="flex justify-center items-center min-w-[78px] h-5 bg-[#E9E9E9]/10 rounded-md">
              <p className="text-[11px] font-light truncate pl-2 pr-2">
                Action
              </p>
            </div>
            <div className="flex justify-center items-center min-w-[78px] h-5 bg-[#E9E9E9]/10 rounded-md">
              <p className="text-[11px] font-light truncate pl-2 pr-2">
                Adventure
              </p>
            </div>
            <div className="flex justify-center items-center min-w-[78px] h-5 bg-[#E9E9E9]/10 rounded-md">
              <p className="text-[11px] font-light w-[78px] truncate pl-2 pr-2">
                Fantasy
              </p>
            </div> */}
          </div>

          <div className="flex flex-col text-left max-w-full mt-4 gap-1">
            <p className="font-semibold h-5 line-clamp-1">{englishTitle}</p>
            <p className="text-[11px] font-light max-full text-[#D0D0D0] line-clamp-2 h-9">
              {shortDescription}
            </p>
          </div>

          <div className="flex flex-row justify-between text-[11px] font-normal mt-4">
            <p>{durationTime}</p>
            <div className="flex flex-row justify-center items-center gap-1">
              <p>More details</p>
              <MdOutlineKeyboardArrowRight size={13} />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default MangaCard;
