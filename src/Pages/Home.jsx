import { useAppContext } from "../Contexts/AppContext";
import Card from "../Components/Card";
import CardSkeleton from "../Components/CardSkeleton";
import SelectOptions from "../Components/SelectOptions";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  const {
    handleChangeInput,
    countries,
    isLoading,
    searchCountry,
    getSingleCountry,

    loadFailed,
  } = useAppContext();

  const handleInput = (e) => {
    handleChangeInput(e.target.value);
  };

  const getSinglePageName = (name) => {
    localStorage.setItem("pageName", name);
    
  };

  if (isLoading) {
    return (
      <div className="m-auto h-[calc(100vh-82px)] bg-[#FAFAFA] dark:bg-darkMode dark:text-darkMode  text-lightMode overflow-auto py-[4.8rem] px-[8.0rem] grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[7.5rem] gap-y-[7.5rem]">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
          return <CardSkeleton key={index} />;
        })}
      </div>
    );
  }

  if (loadFailed) {
    return (
      <div className="h-[calc(100vh-82px)] bg-[#FAFAFA] dark:bg-darkMode dark:text-darkMode  text-lightMode  py-[4.8rem] px-[8.0rem] flex items-center justify-center flex-col">
        <p className="uppercase font-bold text-[3rem] tracking-[0.5rem]">
          Check internet connection
        </p>
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-[10px] text-[1.6rem] capitalize pr-[3.9rem] pl-[3.2rem] py-[1rem] dark:bg-[#2B3844] rounded-[5px]"
          onClick={() => window.location.reload()}
        >
          <span>reload</span>
        </motion.button>
      </div>
    );
  }

  return (
    <section className=" m-auto h-[calc(100vh-82px)]  bg-[#FAFAFA] dark:bg-darkMode dark:text-darkMode  text-lightMode overflow-auto pt-[4.8rem] px-[8.0rem] ">
      <div className="flex flex-col gap-[4rem] md:gap-0 md:flex-row justify-between mb-[2rem]">
        <div className="relative w-[34.3rem] lg:w-[48rem]">
          <div className="absolute left-0 inset-y-0 flex items-center pl-[3.2rem] pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[1.8rem] h-[1.8rem] text-gray-500 dark:text-gray-400 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            className="outline-none bg-white text-gray-500 dark:text-gray-400 w-[34.3rem] lg:w-[48rem] h-full rounded-[5px] px-[7.4rem]  py-[1.8rem] font-normal text-[1.4rem] placeholder:text-[#848484] dark:placeholder:text-white dark:bg-[#2B3844]"
            type="text"
            onChange={handleInput}
            placeholder="Search for a country"
          />
        </div>

        <SelectOptions />
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[7.5rem] gap-y-[7.5rem] m-auto">
        {searchCountry.length > 0
          ? searchCountry.map((country, index) => {
              return (
                <NavLink
                  to={"/country"}
                  key={index}
                  onClick={() => getSinglePageName(country.name)}
                >
                  {" "}
                  <Card {...country} />
                </NavLink>
              );
            })
          : countries.map((country, index) => {
              return (
                <NavLink
                  to={"/country"}
                  key={index}
                  onClick={() => getSinglePageName(country.name)}
                >
                  {" "}
                  <Card {...country} />
                </NavLink>
              );
            })}
      </div>
    </section>
  );
};

export default Home;
