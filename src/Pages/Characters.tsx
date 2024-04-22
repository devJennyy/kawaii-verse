import CharactersCard from "@/components/CharactersCard";

const Characters = () => {
  return (
    // Main Container
    <div className="w-full h-fit bg-[#09090B] pt-40 px-4">
      <p className="text-[40px] font-semibold bg-gradient-to-t from-[#FD1C68] from-25% to-[#FDAE8F] to-70% bg-clip-text text-transparent">
        Top Characters
      </p>

      {/* Content */}
      <div className="flex flex-col gap-5 pt-20">
        <div className="flex flex-row justify-between w-full">
          <CharactersCard />
          <CharactersCard />
          <CharactersCard />
          <CharactersCard />
          <CharactersCard />
          <CharactersCard />
        </div>

        <div className="flex flex-row justify-between w-full">
          <CharactersCard />
          <CharactersCard />
          <CharactersCard />
          <CharactersCard />
          <CharactersCard />
          <CharactersCard />
        </div>
      </div>
    </div>
  );
};

export default Characters;
