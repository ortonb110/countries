import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../Contexts/AppContext";
import { useEffect } from "react";
import Loader from "../Components/Loader";
const CountryDetails = () => {
  const { singleCountry, isLoading, getSingleCountry } = useAppContext();
  const navigate = useNavigate();
  const page = localStorage.getItem("pageName");
  useEffect(() => {
    getSingleCountry();
  }, []);

  if (!page) {
    return navigate("/");
  }

  const data = singleCountry[0];
  if (data) {
    var {
      flags: { svg },
      capital,
      name,
      nativeName,
      borders,
      population,
      subregion,
      region,
      currencies,
      languages,
      topLevelDomain,
    } = data;
    var currency = currencies[0];
  }

  if (isLoading) {
    return (
      <div className="m-auto h-[calc(100vh-82px)]  bg-[#FAFAFA] dark:bg-darkMode dark:text-darkMode  text-lightMode overflow-auto pt-[4.8rem] px-[8.0rem] flex items-center justify-center">
        <Loader />
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
      <div className=" mt-[8rem] flex flex-col lg:flex-row ">
        <img
          src={svg}
          alt={name}
          className="w-[56rem] h-[40.1rem] rounded-[5px] object-cover mr-[12rem]"
        />
        <div className="py-[3.9rem] relative w-full">
          <h1 className="font-extrabold text-[3.2rem] mb-[2.3rem]">{name}</h1>
          <div className="text-[1.6rem] capitalize flex gap-[8rem]">
            <section className="leading-[3.2rem]">
              <p className="flex gap-2">
                <span className="font-semibold">native name:</span>
                <span>{nativeName}</span>
              </p>
              <p className="flex gap-2">
                <span className="font-semibold">population:</span>
                <span>{new Intl.NumberFormat().format(population)}</span>
              </p>
              <p className="flex gap-2">
                <span className="font-semibold">region:</span>
                <span>{region}</span>
              </p>
              <p className="flex gap-2">
                <span className="font-semibold">sub region:</span>
                <span>{subregion}</span>
              </p>
              <p className="flex gap-2">
                <span className="font-semibold">capital:</span>
                <span>{capital}</span>
              </p>
            </section>
            <section className="leading-[3.2rem]">
              <p className="flex  gap-2">
                <span className="font-semibold">top level domain:</span>
                <span className="lowercase">{topLevelDomain}</span>
              </p>
              <p className="flex gap-2">
                <span className="font-semibold">currencies:</span>
                <span>{currency && currency.name}</span>
              </p>
              {/* <p><span>languages</span><span>{
                  languages && languages.map((lan, index)=> {
                    return <span key={index}>{lan}</span>
                  })
                }</span></p> */}

              <p className="flex gap-2">
                <span>Languages:</span>
                {languages &&
                  languages.map((language, index) => {
                    return (
                      <span key={index}>
                        {language.name}
                        {index === languages.length - 1 ? "" : ","}
                      </span>
                    );
                  })}
              </p>
            </section>
          </div>
          <div className="absolute bottom-12 text-[1.6rem]">
            <div className="flex items-center ">
              <p className="capitalize font-semibold mr-[1.6rem]">
                border countries:
              </p>
              <p className="flex gap-2 ">
                {borders &&
                  borders.map((border, index) => {
                    return (
                      <span
                        key={index}
                        className="px-[2.7rem] py-[5px] rounded-[5px] border-[1px] dark:border-0 dark:bg-[#2B3844] bg-white"
                      >
                        {border}
                      </span>
                    );
                  })}
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default CountryDetails;
