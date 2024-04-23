interface Props {
  characterCover: string;
  characterName: string;
  animeTitle: string;
  likesCount: string;
}

const CharactersCard = ({characterCover, characterName, animeTitle, likesCount} : Props) => {
  return (
    <div className="w-fit">
      <div className="w-[230px] h-[320px] bg-[#373737]/30 rounded-md p-4">
        <img
          src={characterCover}
          className="w-full h-[239px] object-cover rounded-md"
        />

        <div className="flex flex-row justify-between mt-3">
          <div className="flex flex-col text-left">
            <p className="text-[16px] font-medium">{characterName}</p>
            <p className="text-[10px] font-extralight tracking-[1px]">
              {animeTitle}
            </p>
          </div>

          <div className="flex flex-col justify-end items-center gap-1 ">
            <img src="/icons/heart.svg"/>
            <p className="text-[10px] font-normal">{likesCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharactersCard;
