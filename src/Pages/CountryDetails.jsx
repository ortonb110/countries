import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../Contexts/AppContext";
const CountryDetails = () => {
  const { singleCountry, isLoading } = useAppContext();
  // const {flags, capital, name, nativeName, borders, population, subregion, region, } = singleCountry
  // const {svg} = flags
  console.log(singleCountry);
  if (isLoading) {
    return (
      <div className="m-auto h-[calc(100vh-82px)]  bg-[#FAFAFA] dark:bg-darkMode dark:text-darkMode  text-lightMode overflow-auto pt-[4.8rem] px-[8.0rem]">
        hello
      </div>
    );
  }

  return (
    <section className="m-auto h-[calc(100vh-82px)]  bg-[#FAFAFA] dark:bg-darkMode dark:text-darkMode  text-lightMode overflow-auto pt-[4.8rem] px-[8.0rem]">
      <NavLink to={"/"}>
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-[10px] text-[1.6rem] capitalize pr-[3.9rem] pl-[3.2rem] py-[1rem] dark:bg-[#2B3844] rounded-[5px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <span>back</span>
        </motion.button>
      </NavLink>
      <div className="">
        <img src='' alt=''></img>
        <div></div>
      </div>
    </section>
  );
};

export default CountryDetails;
