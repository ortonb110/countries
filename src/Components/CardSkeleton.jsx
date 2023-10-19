const CardSkeleton = () => {
  return (
    <div className="w-[26.4rem] h-[33.6rem] dark:bg-darkElement bg-[#FFFF] rounded-[5px] shadow-md shadow-gray-300 dark:shadow-none overflow-hidden">
      <div className="h-[16rem] bg-gray-300 dark:bg-[#4d6275] animate-pulse"></div>
      <div className="p-[2.4rem]">
        <h2 className="font-[800] text-[1.8rem] mb-[1.6rem]"></h2>
        <div className="mb-[4.6rem] text-[1.4rem] capitalize space-y-[4px]">
          <p className="w-[14rem] h-[2rem] mb-[1rem] bg-gray-300 dark:bg-[#4d6275] animate-pulse"></p>
          <p className="w-[14rem] h-[1.5rem] bg-gray-300 dark:bg-[#4d6275] animate-pulse"></p>
          <p className="w-[14rem] h-[1.5rem] bg-gray-300 dark:bg-[#4d6275] animate-pulse"></p>
          <p className="w-[14rem] h-[1.5rem] bg-gray-300 dark:bg-[#4d6275] animate-pulse"></p>
          
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
