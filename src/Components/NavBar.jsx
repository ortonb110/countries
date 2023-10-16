import { NavLink } from "react-router-dom";
import { useAppContext } from "../Contexts/AppContext";
import Sun from "./Sun";
import Moon from "./Moon";

const NavBar = () => {
  const { toggleColorScheme } = useAppContext();

  return (
    <nav className="dark:bg-darkElement dark:text-darkMode text-lightMode bg-white w-full flex justify-between py-[3rem] px-[1.6rem] md:py-[2.3rem] md:px-[8.1rem] font-[800] text-[1.4rem] md:text-[2.4rem]">
      <NavLink to={"/"}>Where in the world?</NavLink>
      <button
        onClick={toggleColorScheme}
        className=" capitalize flex gap-[8px] items-center font-[600]"
      >
        <span>{localStorage.theme === "dark" ? <Sun /> : <Moon />}</span>
        <span className="text-[1.2rem] md:text-[1.6rem]">
          {localStorage.theme === "dark" ? "light mode" : "dark mode"} 
        </span>
      </button>
    </nav>
  );
};

export default NavBar;
