import React from 'react'
import Navbar from "./Navbar"


const Layout = ({ children, darkMode, setDarkMode }) => {

  return (
    <div >
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        { children }
    </div>
  )
}

export default Layout;