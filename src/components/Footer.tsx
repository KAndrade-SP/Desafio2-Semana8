import { Link } from "react-router-dom"

import FooterTexture from '../assets/images/plants-svg.svg'
import FooterLogo from '../assets/images/navbar-logo.svg'

const Footer = () => {
  return (
    <footer className="relative bottom-0 bg-lunargreen pt-0 md:pt-20 h-[500px] flex flex-col gap-10 md:gap-20 justify-center">

      <div className='absolute inset-0 w-full h-full'>
        <img src={FooterTexture} className='w-full h-full object-cover opacity-25'></img>
      </div>

      <div className="relative z-10 flex flex-row flex-wrap md:flex-nowrap gap-10 md:gap-0 justify-around md:mb-2">

        <div className="flex flex-col gap-4">
          <h2 className="text text-white text-5xl font-ebgaramond-bold mb-4 tracking-wide">Stay fresh</h2>
          <p className="text-sm text-white font-raleway-regular">compassinhos@gmail.com</p>
          <p className="text-sm text-white font-raleway-regular">+55 41 99999-9999</p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row gap-14">

            <div className="flex flex-col gap-4">
              <h3 className="text-white cursor-pointer hover:text-avacado text-lg font-raleway-bold">Links</h3>
              <ul className="text-white text-sm leading-9">
                <Link to={'/about-us'}>
                  <li className="font-raleway-regular cursor-pointer hover:text-avacado">About us</li>
                </Link>
                <Link to={'/error404'}>
                  <li className="font-raleway-regular cursor-pointer hover:text-avacado">Products</li>
                </Link>
                <Link to={'/error404'}>
                  <li className="font-raleway-regular cursor-pointer hover:text-avacado">Blogs</li>
                </Link>   
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white cursor-pointer hover:text-avacado text-lg font-raleway-bold">Community</h3>
              <ul className="text-white text-sm leading-9">
                <Link to={'/about-us'}>
                  <li className="font-raleway-regular cursor-pointer hover:text-avacado">About us</li>
                </Link>
                <Link to={'/error404'}>
                  <li className="font-raleway-regular cursor-pointer hover:text-avacado">Products</li>
                </Link>
                <Link to={'/error404'}>
                  <li className="font-raleway-regular cursor-pointer hover:text-avacado">Blogs</li>
                </Link> 
              </ul>
            </div>

          </div> 
        </div>

      </div>

      <div className="relative z-10 flex flex-row pt-5 items-center justify-between w-[80%] md:w-[75%] lg:w-[68%] xl:w-[62%] mx-auto px-2 border-t-2 border-avacado">
        <img src={FooterLogo} className='cursor-pointer hover:opacity-75' alt="PlantPeaceLogo"/>
          <div className="flex flex-col md:text-sm text-xs text-center">
          <p className='text-white font-raleway-regular'>Compassinhos ®. All rights <br/>reserved.</p>
        </div>  
      </div>

    </footer>
  )
}

export default Footer