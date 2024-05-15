import { useState, useRef } from "react"
import { PiSignOut, PiList, PiX, PiHouse, PiNewspaper, PiInfo, PiShoppingCartSimple } from "react-icons/pi"

import Logo from '../assets/images/navbar-logo.svg'

const Navbar = () => {

  const ref = useRef<HTMLDivElement>(null)
  const [toggle, setToggle] = useState(false)

  const outsideClick = (e: MouseEvent) => {

    const element = ref.current

    if (toggle && element && !element.contains(e.target as Node)) {
      setToggle(!toggle)
    }
  }

  const handleClick = () => {
    setToggle(!toggle)
  }

  document.addEventListener("mousedown", outsideClick)

  return (
    <header ref={ref} className=" h-[80px] font-medium font-raleway-regular bg-lightgray">
      <div className="max-w-[1280px] mx-auto px-5 h-full flex justify-between items-center">
        
        <img src={Logo} className="cursor-pointer hover:opacity-75" alt="" />

        <div className="hidden md:flex items-center">
          <ul className="flex gap-7">
            <li className="text-sm text-avacado hover:text-lunargreen cursor-pointer">Home</li>
            <li className="text-sm text-lunargreen hover:text-avacado cursor-pointer">Register</li>
            <li className="text-sm text-lunargreen hover:text-avacado cursor-pointer">Products</li>
            <li className="text-sm text-lunargreen hover:text-avacado cursor-pointer">About us</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <div>
            <a
              onClick={handleClick}
              className="flex justify-end gap-4 items-center cursor-pointer hover:opacity-75"
            >
              <p className="lg:m-auto md:text-sm">UserIcon</p>
            </a>
          </div>
        </div>

        <div className='md:hidden' onClick={handleClick}>
          {toggle?<PiX size={24}/>:<PiList size={24}/>}
        </div>

        {/* DROPDOWN MENU */}
        <div onClick={handleClick} className={toggle?'absolute mt-5 top-20 right-5 rounded-2xl bg-lightgray text-lunargreen hover:text-avacado z-10 px-4 py-4 md:hidden':'hidden'}>
          <ul>
            <div className='flex pl-4 pt-2 items-center'>
              <PiHouse size={24}/>
              <li className='p-4'>Home</li>
            </div>
                    
            <div className='flex pl-4 pt-2 items-center'>
              <PiNewspaper size={24}/>
              <li className='p-4'>Register</li>
            </div>
                    
            <div className='flex pl-4 pt-2 items-center'>
              <PiShoppingCartSimple size={24}/>
              <li className='p-4'>Products</li>
            </div>
                    
            <div className='flex pl-4 pt-2 items-center'>
              <PiInfo size={24}/>
              <li className='p-4'>About Us</li>
            </div>
                    
            <div className='flex pl-4 pt-2 items-center'>
              <PiSignOut size={24}/>
              <li className='p-4'>Log out</li>
            </div>        
          </ul>
        </div>

      </div>
    </header>
  )
}

export default Navbar
