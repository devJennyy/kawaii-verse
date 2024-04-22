interface Props {
  sortBy: string;
  filterGenre: string;
  filterMedia: string;
}

const Filters = ({sortBy, filterGenre, filterMedia} : Props) => {
  return (
    <div className="flex flex-row justify-start items-center gap-6">
      <p className="font-semibold tracking-[1px]">Filters:</p>
      <div className="flex flex-row justify-center items-center gap-2">
        <p className="flex justify-center items-center text-[12px] bg-[#1A1A1A] rounded-md w-24 h-6 cursor-pointer">
          {sortBy}
        </p>
        <p className="flex justify-center items-center text-[12px] bg-[#1A1A1A] rounded-md w-24 h-6 cursor-pointer">
          {filterGenre}
        </p>
        <p className="flex justify-center items-center text-[12px] bg-[#1A1A1A] rounded-md w-24 h-6 cursor-pointer">
          {filterMedia}
        </p>
      </div>
    </div>
  );
};

export default Filters;
