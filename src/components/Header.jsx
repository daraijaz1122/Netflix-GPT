import React from 'react'
import {CONSTANTS} from "../utils/Constants"
const Header = () => {
  return (
    <div className='z-10 absolute px8 p-2 bg-gradient-to-b from-black'>
        <img  className="w-44" src={CONSTANTS.LOGO} alt='logo'/>
    </div>
  )
}

export default Header