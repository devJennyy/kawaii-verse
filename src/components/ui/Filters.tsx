interface Props {
  selectedFilters?: string[];
}

const Filters = ({ selectedFilters }: Props) => {
  return (
    <div className="flex flex-row justify-start items-center gap-6">
      <p className="font-semibold tracking-[1px]">Filters:</p>
      <div className="flex flex-row justify-center items-center gap-2">
        {selectedFilters?.map((filters) => {
          return (
            <p className="flex justify-center items-center text-[12px] bg-[#1A1A1A] rounded-md w-24 h-6 cursor-pointer">
              {filters}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
