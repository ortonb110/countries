import Loader from "../Components/Loader";
import { useAppContext } from "../Contexts/AppContext";
import { useEffect } from "react";
import Card from "../Components/Card";

const Home = () => {
  const { isLoading, getCountriesData, countries } = useAppContext();

  //console.log(countries[0].name);
  useEffect(() => {
    getCountriesData();
  }, []);

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-82px)] grid place-content-center bg-[#FAFAFA] dark:bg-darkMode">
        <Loader />
      </div>
    );
  }

  return (
    <section className=" m-auto h-[calc(100vh-82px)] bg-[#FAFAFA] dark:bg-darkMode dark:text-darkMode  text-lightMode overflow-auto py-[4.8rem] px-[8.0rem] grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[7.5rem] gap-y-[7.5rem]">
      {countries.map((country, index) => {
        return <Card key={index} {...country} />;
      })}
    </section>
  );
};

export default Home;
