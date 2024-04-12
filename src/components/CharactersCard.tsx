const CharactersCard = () => {
  return (
    <div className="w-full">
      <div className="w-[265px] h-[320px] bg-[#373737]/30 rounded-md p-4">
        <img
          src="/images/top-characters.jpeg"
          className="w-[232px] h-[239px] object-cover rounded-md"
        />

        <div className="flex flex-row justify-between mt-2">
          <div className="flex flex-col text-left">
            <p className="text-[18px] font-medium">Power</p>
            <p className="text-[11px] font-extralight tracking-[1px]">
              The Chainsaw Man
            </p>
          </div>

          <div className="flex flex-col justify-end items-center gap-1 ">
            <img src="/icons/heart.svg" />
            <p className="text-[11px] font-normal">100, 675</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharactersCard;
