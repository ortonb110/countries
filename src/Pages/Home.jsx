import { useAppContext } from "../Contexts/AppContext";
import Card from "../Components/Card";
import CardSkeleton from "../Components/CardSkeleton";
import SelectOptions from "../Components/SelectOptions";
const Home = () => {
  const {
    searchText,
    handleChangeInput,
    countries,
    isLoading,
    searchCountry
  } = useAppContext();

  const handleInput = (e) => {
    handleChangeInput({ searchInput: e.target.value });
  };

  //console.log(countries[0].name);
  

  if (isLoading) {
    return (
      <div className="m-auto h-[calc(100vh-82px)] bg-[#FAFAFA] dark:bg-darkMode dark:text-darkMode  text-lightMode overflow-auto py-[4.8rem] px-[8.0rem] grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[7.5rem] gap-y-[7.5rem]">
        {/* <Loader /> */}
        {/* <CardSkeleton/> */}

        {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
          return <CardSkeleton key={index} />;
        })}
      </div>
    );
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    searchCountry(searchText)
  }

  return (
    <section className=" m-auto h-[calc(100vh-82px)]  bg-[#FAFAFA] dark:bg-darkMode dark:text-darkMode  text-lightMode overflow-auto pt-[4.8rem] px-[8.0rem] ">
      <div className="flex justify-between mb-[2rem]">
        <form className="relative w-[48rem]" onSubmit={onSubmitHandler}>
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
            className="outline-none bg-white text-gray-500 dark:text-gray-400 w-[48rem] h-full rounded-[5px] px-[7.4rem]  py-[1.8rem] font-normal text-[1.4rem] placeholder:text-[#848484] dark:placeholder:text-white dark:bg-[#2B3844]"
            type="text"
            value={searchText}
            onChange={handleInput}
            placeholder="Search for a country"
          />
        </form>
        {/* <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div> */}
        <SelectOptions />
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[7.5rem] gap-y-[7.5rem] m-auto">
        {countries.map((country, index) => {
          return <Card key={index} {...country} />;
        })}
      </div>
    </section>
  );
};

export default Home;
