import React from "react"
import Logo from "./../../assets/logo.svg"
import Pattern from "./../../assets/bg-pattern-1.svg"
function NavBar () {
  return (
    <div className="flex justify-between items-center h-28 relative">
        <img className="ml-40 h-8" src={Logo}/> 
        <img className="absolute top-0 right-0 -z-10"  src={Pattern}/>
    </div>
  )
};

export default NavBar
