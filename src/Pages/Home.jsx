import Loader from "../Components/Loader";
import { useAppContext } from "../Contexts/AppContext";
import { useEffect } from "react";
const Home = () => {

    const {isLoading, getCountriesData} = useAppContext();

    useEffect(()=> {
        getCountriesData()
    }, [])

   if(isLoading) {
    return(
        <div className="h-[calc(100vh-82px)] grid place-content-center bg-[#FAFAFA] dark:bg-darkMode">
            <Loader/>
        </div>
    )
   }

  return (
    <section className="h-[calc(100vh-82px)] bg-[#FAFAFA] dark:bg-darkMode dark:text-darkMode  text-lightMode ">
      
    </section>
  );
};

export default Home;
