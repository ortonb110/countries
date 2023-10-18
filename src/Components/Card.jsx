/* eslint-disable react/prop-types */



const Card = ({name, population, flags, region, capital}) => {
  const {svg} = flags

  return (
    <div className="transition ease-in-out duration-150 hover:scale-110 mx-auto w-[26.4rem] h-[33.6rem] dark:bg-darkElement bg-[#FFFF] rounded-[5px] shadow-md shadow-gray-300 dark:shadow-none cursor-pointer overflow-hidden ">
      <div className="h-[16rem]">
        <img src={svg} alt={name} className="h-full w-full  object-cover"/>
      </div>
      <div className="p-[2.4rem]">
        <h2 className="font-[800] text-[1.8rem] mb-[1.6rem]">
          {name}
        </h2>
        <div className="mb-[4.6rem] text-[1.4rem] capitalize space-y-[4px]">
          <p>
            <span className="font-[700] mr-[3px]">population:</span>
            <span>
              {new Intl.NumberFormat().format(population)}
            </span>
          </p>
          <p>
            <span className="font-[700] mr-[3px]">region:</span>
            <span>{region}</span>
          </p>
          <p>
            <span className="font-[700] mr-[3px]">capital:</span>
            <span>{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
