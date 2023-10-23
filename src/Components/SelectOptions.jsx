import ChevronDown from "../Utilities/ChevronDown";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../Contexts/AppContext";
const SelectOptions = () => {
  const {handleFilter} = useAppContext()

  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen((current) => !current);
  };

  const getValue = (e) => {
    setIsOpen((current) => !current)
    handleFilter(e.target.innerText);
    
  };

  return (
    <div className=" capitalize w-[20rem] ">
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={onClickHandler}
        className=" dark:bg-[#2B3844] bg-white text-black dark:text-white py-[1.8rem] pl-[2.4rem] pr-[1.8rem] rounded-[5px] w-full flex flex-row items-center justify-between"
      >
        <span>Filter by Region</span>
        <span>{<ChevronDown deg={isOpen ? 180 : 0} />}</span>
      </motion.button>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 5 }}
          exit={{ opacity: 0, y: 0 }}
          className="absolute rounded-[5px] w-[20rem] px-[1.8rem] py-[1.6rem] capitalize font-normal text-[1.4rem] dark:bg-[#2B3844] bg-white text-black dark:text-white space-y-[8px]"
        >
          <li className="cursor-pointer" onClick={getValue}>
            all
          </li>
          <li className="cursor-pointer" onClick={getValue}>
            africa
          </li>
          <li className="cursor-pointer" onClick={getValue}>
            americas
          </li>
          <li className="cursor-pointer" onClick={getValue}>
            asia
          </li>
          <li className="cursor-pointer" onClick={getValue}>
            europe
          </li>
          <li className="cursor-pointer" onClick={getValue}>
            oceania
          </li>
        </motion.ul>
      )}
    </div>
  );
};

export default SelectOptions;
