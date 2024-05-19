import { useState, useRef } from "react"
import { Link, useLocation } from "react-router-dom"

import { PiList, PiX, PiHouse, PiNewspaper, PiInfo, PiShoppingCartSimple } from "react-icons/pi"

import Logo from '../assets/images/navbar-logo.svg'
import { UserButton, useUser } from "@clerk/clerk-react"

const Navbar = () => {

  const ref = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const [toggle, setToggle] = useState(false)

  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    return null
  }

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
    <header ref={ref} className="h-[80px] font-medium font-raleway-regular bg-lightgray">
      <div className="max-w-[1280px] mx-auto px-5 h-full flex justify-between items-center">
        
        <Link to={'/'}>
          <img src={Logo} className="cursor-pointer hover:opacity-75" alt="" />
        </Link>

        <div className="hidden md:flex items-center">
          <ul className="flex gap-7">
            <Link to={'/'}>
              <li className={`text-md cursor-pointer ${location.pathname === '/' ? 'text-avacado hover:text-lunargreen' : 'text-lunargreen hover:text-avacado'}`}>Home</li>
            </Link>

            <Link to={'/register'}>
              <li className={`text-md cursor-pointer ${location.pathname === '/register' ? 'text-avacado hover:text-lunargreen' : 'text-lunargreen hover:text-avacado'}`}>Register</li>
            </Link>

            <Link to={'/products'}>
              <li className={`text-md cursor-pointer ${location.pathname === '/products' ? 'text-avacado hover:text-lunargreen' : 'text-lunargreen hover:text-avacado'}`}>Products</li>
            </Link>

            <Link to={'/about-us'}>
              <li className={`text-md cursor-pointer ${location.pathname === '/about-us' ? 'text-avacado hover:text-lunargreen' : 'text-lunargreen hover:text-avacado'}`}>About us</li>
            </Link>
          </ul>
        </div>

        <div className="hidden md:flex">
          <div>
            <a
              onClick={handleClick}
              className="flex justify-end gap-4 items-center cursor-pointer hover:opacity-75"
            >
              <UserButton />
            </a>
          </div>
        </div>

        <div className='md:hidden' onClick={handleClick}>
          {toggle?<PiX size={24}/>:<PiList size={24}/>}
        </div>

        {/* DROPDOWN MENU */}
        <div onClick={handleClick} className={toggle?'absolute z-20 mt-2 top-14 right-5 rounded-2xl bg-almwhite text-lunargreen hover:text-avacado px-4 py-1 md:hidden':'hidden'}>
          <ul>
            {isSignedIn 
            ? <div className="flex pl-4 pt-0.5 items-center">
                <UserButton />
                <p className="px-3 py-4">{user.firstName}</p>
              </div> 
            : <></>}

            <Link to={'/'} className='flex pl-4 pt-0.5 items-center'>
              <PiHouse size={24}/>
              <li className={`text-md p-4 cursor-pointer ${location.pathname === '/' ? 'text-avacado hover:text-lunargreen' : 'text-lunargreen hover:text-avacado'}`}>Home</li>
            </Link>
                    
            <Link to={'/register'} className='flex pl-4 pt-0.5 items-center'>
              <PiNewspaper size={24}/>
              <li className={`text-md p-4 cursor-pointer ${location.pathname === '/register' ? 'text-avacado hover:text-lunargreen' : 'text-lunargreen hover:text-avacado'}`}>Register</li>
            </Link>
                    
            <Link to={'/products'} className='flex pl-4 pt-0.5 items-center'>
              <PiShoppingCartSimple size={24}/>
              <li className={`text-md p-4 cursor-pointer ${location.pathname === '/products' ? 'text-avacado hover:text-lunargreen' : 'text-lunargreen hover:text-avacado'}`}>Products</li>
            </Link>
                    
            <Link to={'/about-us'} className='flex pl-4 pt-0.5 items-center'>
              <PiInfo size={24}/>
              <li className={`text-md p-4 cursor-pointer ${location.pathname === '/about-us' ? 'text-avacado hover:text-lunargreen' : 'text-lunargreen hover:text-avacado'}`}>About Us</li>
            </Link>  
                  
          </ul>
        </div>

      </div>
    </header>
  )
}

export default Navbar
