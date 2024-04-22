import CharactersCard from "@/components/CharactersCard";
import { Vortex } from "@/components/ui/vortex";

const Characters = () => {
  return (
    // Main Container
    <div className="w-full h-fit bg-[#09090B] pt-40 px-4">
      
      <div className="w-full mx-auto rounded-md overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Top Characters
          </h2>
        </Vortex>
      </div>

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
