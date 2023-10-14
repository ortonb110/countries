import { NavLink } from "react-router-dom"
import { useAppContext } from "../Contexts/AppContext"
const NavBar = () => {
    const {toggleColorScheme} = useAppContext();
  return (
    <nav>
        <NavLink to={'/'}>Where in the world?</NavLink>
        <button onClick={toggleColorScheme}>Dark mode</button>
    </nav>
  )
}

export default NavBar