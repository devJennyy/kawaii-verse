const Filters = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-6">
      <p>Filters:</p>
      <div className="flex flex-row justify-center items-center gap-2">
        <p className="flex justify-center items-center text-[12px] bg-[#1A1A1A] rounded-md w-24 h-6 cursor-pointer">
          Newest
        </p>
        <p className="flex justify-center items-center text-[12px] bg-[#1A1A1A] rounded-md w-24 h-6 cursor-pointer">
          Fantasy
        </p>
        <p className="flex justify-center items-center text-[12px] bg-[#1A1A1A] rounded-md w-24 h-6 cursor-pointer">
          Series
        </p>
      </div>
    </div>
  );
};

export default Filters;
