import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CountryDetails from "./Pages/CountryDetails";


function App() {
 
  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/country" element={<CountryDetails/>}/>
        </Routes>
      </Router>
  )
}

export default App
