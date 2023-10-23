import ChevronDown from "../Utilities/ChevronDown";

const SelectOptions = () => {
  return (
    <div className=" capitalize w-[20rem] " >
        <button className="mb-[4px] dark:bg-[#2B3844] bg-white text-black dark:text-white py-[1.8rem] pl-[2.4rem] pr-[1.8rem] rounded-[5px] w-full flex flex-row items-center justify-between">
        <span>Filter by Region</span>
        <span>
          {<ChevronDown/>}
        </span>
        </button>
        <ul className="absolute rounded-[5px] w-[20rem] px-[1.8rem] py-[1.6rem] capitalize font-normal text-[1.4rem] dark:bg-[#2B3844] bg-white text-black dark:text-white">
          <li>africa</li>
          <li>americas</li>
          <li>asia</li>
          <li>europe</li>
          <li>oceania</li>
        </ul>
    </div>
  );
};

export default SelectOptions;
