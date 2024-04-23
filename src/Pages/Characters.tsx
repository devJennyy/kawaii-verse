import CharactersCard from "@/components/cards/CharactersCard";
import { SparklesCore } from "@/components/effects/sparkles";

const Characters = () => {
  return (
    // Main Container
    <div className="max-w-[1500px] mx-auto h-fit bg-[#09090B] pt-32 px-4">
      <div className="relative w-full h-32 flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.2}
            maxSize={2}
            particleDensity={150}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <p className="text-[40px] font-semibold z-50">
            Top <span className="bg-gradient-to-t from-[#FD1C68] from-25% to-[#FDAE8F] to-70% bg-clip-text text-transparent">Characters</span>
          </p>
      </div>
      {/* Content */}
      <div className="flex flex-col gap-4 pt-20">
        <div className="flex flex-row justify-between w-full overflow-hidden gap-4">
          <CharactersCard characterCover="/images/top-characters.jpeg" characterName="Power" animeTitle="The Chainsaw Man" likesCount="10, 672"/>
          <CharactersCard characterCover="/images/top-characters.jpeg" characterName="Power" animeTitle="The Chainsaw Man" likesCount="10, 672"/>
          <CharactersCard characterCover="/images/top-characters.jpeg" characterName="Power" animeTitle="The Chainsaw Man" likesCount="10, 672"/>
          <CharactersCard characterCover="/images/top-characters.jpeg" characterName="Power" animeTitle="The Chainsaw Man" likesCount="10, 672"/>
          <CharactersCard characterCover="/images/top-characters.jpeg" characterName="Power" animeTitle="The Chainsaw Man" likesCount="10, 672"/>
          <CharactersCard characterCover="/images/top-characters.jpeg" characterName="Power" animeTitle="The Chainsaw Man" likesCount="10, 672"/>
        </div>

        <div className="flex flex-row justify-between w-full overflow-hidden gap-4">
          <CharactersCard characterCover="/images/top-characters.jpeg" characterName="Power" animeTitle="The Chainsaw Man" likesCount="10, 672"/>
          <CharactersCard characterCover="/images/top-characters.jpeg" characterName="Power" animeTitle="The Chainsaw Man" likesCount="10, 672"/>
          <CharactersCard characterCover="/images/top-characters.jpeg" characterName="Power" animeTitle="The Chainsaw Man" likesCount="10, 672"/>
          <CharactersCard characterCover="/images/top-characters.jpeg" characterName="Power" animeTitle="The Chainsaw Man" likesCount="10, 672"/>
          <CharactersCard characterCover="/images/top-characters.jpeg" characterName="Power" animeTitle="The Chainsaw Man" likesCount="10, 672"/>
          <CharactersCard characterCover="/images/top-characters.jpeg" characterName="Power" animeTitle="The Chainsaw Man" likesCount="10, 672"/>
        </div>
      </div>
    </div>
  );
};

export default Characters;
