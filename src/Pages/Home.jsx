import Loader from "../Components/Loader";
import { useAppContext } from "../Contexts/AppContext";
import { useEffect } from "react";
import Card from "../Components/Card";
import CardSkeleton from "../Components/CardSkeleton";
const Home = () => {
  const { isLoading, getCountriesData, countries } = useAppContext();

  //console.log(countries[0].name);
  useEffect(() => {
    getCountriesData();
  }, []);

  if (isLoading) {
    return (
      <div className="m-auto h-[calc(100vh-82px)] bg-[#FAFAFA] dark:bg-darkMode dark:text-darkMode  text-lightMode overflow-auto py-[4.8rem] px-[8.0rem] grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[7.5rem] gap-y-[7.5rem]">
        {/* <Loader /> */}
        {/* <CardSkeleton/> */}

        {[0,1,2,3,4,5,6,7,8,9,10].map((item, index) => {
            return <CardSkeleton key={index}/>
        })}
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
