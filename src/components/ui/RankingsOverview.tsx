interface Props {
  Subtitle: string;
  Title: string;
}

const TitleBorder = ({Subtitle, Title} : Props) => {
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="flex flex-row justify-center items-center text-[30px] font-semibold gap-6">
        <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#FD1C68] from-35% to-[#FDAE8F] to-80%"></div>
        <p>
          {Subtitle}
          <span className="ml-3 bg-gradient-to-t from-[#FD1C68] from-25% to-[#FDAE8F] to-70% bg-clip-text text-transparent">
            {Title}
          </span>
        </p>
      </div>
      <div className="xl:border-b xl:border-[#151518]/30 sm:border-b-2 sm:border-[#151518] w-full pt-2">
        <div className="gradient-border-b"></div>
      </div>
    </div>
  );
};

export default TitleBorder;
