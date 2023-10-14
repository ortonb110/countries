const Card = ({ data }) => {
  return (
    <div className=" w-[26.4rem] dark:bg-darkElement bg-[#FFFF] rounded-[5px] shadow-sm shadow-gray-300 dark:shadow-none">
      <div>
        <img src="https://flagcdn.com/sv.svg" alt="country flag" />
      </div>
      <div className="p-[2.4rem]">
        <h2 className="font-[800] text-[1.8rem] mb-[1.6rem]">Germany</h2>
        <div className="">
          <p>
            <span>population:</span>
            <span>8800</span>
          </p>
          <p>
            <span>region:</span>
            <span>8800</span>
          </p>
          <p>
            <span>capital:</span>
            <span>8800</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
