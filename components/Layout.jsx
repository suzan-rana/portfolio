import React from 'react'
import Navbar from "./Navbar"
import { useState } from 'react'

const Layout = ({ children, darkMode, setDarkMode }) => {

  return (
    <div >
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        { children }
    </div>
  )
}
// hello world 
export default Layout;