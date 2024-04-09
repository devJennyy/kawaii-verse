const MiniSlideshowCard = () => {
  return (
    <button className="flex min-w-[351px] active:scale-95 transition-all">
      <div className="flex flex-1 justify-center items-start min-w-[351px] h-[353px] bg-[#373737]/30 rounded-lg">
        <div className="flex flex-col mt-5 ">
          <div className="flex flex-1 justify-center items-center max-w-[315px]">
            <img
              src="/images/anime-cover-photo.jpg"
              className="w-full h-[282px] object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col items-start mt-3 mb-5">
            <p className="text-[18px] font-semibold">Spy X Family</p>  
          </div>
        </div>
      </div>
    </button>
  )
}

export default MiniSlideshowCard