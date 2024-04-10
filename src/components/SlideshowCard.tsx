const SlideshowCard = () => {
  return (
    <button className="flex min-w-[451px] active:scale-95 transition-all">
      <div className="flex flex-1 justify-center items-start min-w-[451px] h-[422px] bg-[#373737]/30 rounded-lg outline outline-[1px] outline-white">
        <div className="flex flex-col mt-5 ">
          <div className="flex flex-1 justify-center items-center max-w-[413px]">
            <img
              src="/images/anime-slides-cover.jpg"
              className="w-full h-[272px] object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col items-start mt-4 mb-5">
            <p className="text-[28px] font-bold">Spy X Family</p>  
          </div>

          <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <div className="flex justify-center items-center bg-gradient-to-t from-[#FD1C68] from-45% to-[#FDAE8F] w-14 h-7 rounded-md">
                  <p className="h-5 text-[14px] font-semibold">4K</p>
                </div>

                <div className="flex justify-center items-center border border-white w-14 h-7 rounded-md">
                  <p className="h-5 text-[14px] font-medium">SUB</p>
                </div>

                <div className="flex justify-center items-center border border-white w-14 h-7 rounded-md">
                  <p className="h-5 text-[14px] font-medium">DUB</p>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center text-[16px] font-medium gap-3">
                <p>24 Episodes</p>
                <div className="w-2 h-2 bg-[#343333] rounded-full"></div>
                <p>24 Min</p>
              </div>
            </div>
        </div>
      </div>
    </button>
  );
};

export default SlideshowCard;
