import { useAppContext } from "./Contexts/AppContext"

function App() {
 const {toggleColorScheme} = useAppContext();
  return (
    <div className="dark:bg-black dark:text-white bg-white text-black">
      <h1 className="text-black">Hello world!</h1>
       <button onClick={toggleColorScheme}>Dark</button>
    </div>
  )
}

export default App
