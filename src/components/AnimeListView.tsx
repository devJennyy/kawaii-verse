const AnimeListView = () => {
  return (
    <div className="flex flex-row p-4 gap-7 h-[225px] bg-[#373737]/30 rounded-md w-full">
      <img
        src="/images/anime-cover.jpg"
        className="min-w-[300px]  rounded-md object-cover object-top"
      />

      <div className="flex flex-col">
        <p className="text-[22px] font-medium">
          Demon Slayer: Kimetsu No Yaiba
        </p>

        <div className="flex flex-row justify-start items-center gap-2 overflow-hidden mt-2">
          <div className="flex justify-center items-center min-w-24 h-[22px] bg-[#E9E9E9]/10 rounded-md">
            <p className="text-[11px] font-normal truncate pl-2 pr-2">Action</p>
          </div>
          <div className="flex justify-center items-center min-w-24 h-[22px] bg-[#E9E9E9]/10 rounded-sm">
            <p className="text-[11px] font-medium truncate pl-2 pr-2">Action</p>
          </div>
          <div className="flex justify-center items-center min-w-24 h-[22px] bg-[#E9E9E9]/10 rounded-sm">
            <p className="text-[11px] font-medium truncate pl-2 pr-2">Action</p>
          </div>
        </div>

        <div className="flex flex-row justify-start items-center text-[14px] font-normal max-w-full gap-4 mt-10">
          <p>Season 1</p>
          <div className="min-w-[7px] h-[7px] bg-[#343333] rounded-full"></div>
          <p>24 Episodes</p>
          <div className="min-w-[7px] h-[7px] bg-[#343333] rounded-full"></div>
          <p>24 Minutes</p>
        </div>

        <p className="text-[12px] font-extralight mt-2 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          provident iusto pariatur neque, ea animi quasi veniam unde officia
          minus, id quidem! Aspernatur quibusdam, minus omnis praesentium
          deleniti asperiores eum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti provident iusto pariatur neque, ea animi
          quasi veniam unde officia minus.
        </p>
      </div>
    </div>
  );
};

export default AnimeListView;
