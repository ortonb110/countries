const Card = (items) => {
  console.log(items);

  return (
    <div className=" w-[26.4rem] h-[33.6rem] dark:bg-darkElement bg-[#FFFF] rounded-[5px] shadow-md shadow-gray-300 dark:shadow-none cursor-pointer overflow-hidden ">
      <div className="h-[16rem]">
        <img src={items.items.flags.svg} alt={items.items.nativeName} className="h-full w-full  object-cover"/>
      </div>
      <div className="p-[2.4rem]">
        <h2 className="font-[800] text-[1.8rem] mb-[1.6rem]">
          {items.items.name}
        </h2>
        <div className="mb-[4.6rem] text-[1.4rem] capitalize space-y-[4px]">
          <p>
            <span className="font-[700] mr-[3px]">population:</span>
            <span>
              {new Intl.NumberFormat().format(items.items.population)}
            </span>
          </p>
          <p>
            <span className="font-[700] mr-[3px]">region:</span>
            <span>{items.items.region}</span>
          </p>
          <p>
            <span className="font-[700] mr-[3px]">capital:</span>
            <span>{items.items.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
