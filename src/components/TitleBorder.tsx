interface Props {
  criteriaSubtitle: string;
  criteriaTitle: string;
}

const TitleBorder = ({criteriaSubtitle, criteriaTitle} : Props) => {
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="flex flex-row justify-center items-center text-[30px] font-semibold gap-6">
        <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#FD1C68] from-35% to-[#FDAE8F] to-80%"></div>
        <p>
          {criteriaSubtitle}
          <span className="ml-3 bg-gradient-to-t from-[#FD1C68] from-25% to-[#FDAE8F] to-70% bg-clip-text text-transparent">
            {criteriaTitle}
          </span>
        </p>
      </div>
      <div className="border-b border-[#151518]/20 w-full pt-2">
        <div className="gradient-border-b"></div>
      </div>
    </div>
  );
};

export default TitleBorder;
