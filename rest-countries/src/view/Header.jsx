import { useState } from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const Header = () => {

  const [ darkMode, setDarkMode ] = useState()

  return (
    <header>
        <h1>Where in the world?</h1>
        <button>
          {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
          <span>Dark Mode</span>
        </button>
    </header>
  )
}

export default Header