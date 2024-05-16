import FooterTexture from '../assets/images/plants-svg.svg'
import FooterLogo from '../assets/images/navbar-logo.svg'

const Footer = () => {
  return (
    <footer className="relative bottom-0 bg-lunargreen pt-0 md:pt-20 h-[500px] flex flex-col gap-10 md:gap-20 justify-center">

      <img src={FooterTexture} className='absolute top-0 w-[100%] h-[100%] opacity-25'></img>

      <div className="flex flex-row flex-wrap md:flex-nowrap gap-10 md:gap-0 justify-around md:mb-10">

        <div className="flex flex-col gap-4">
          <h2 className="text text-white text-5xl font-ebgaramond-bold mb-4 tracking-wide">Stay fresh</h2>
          <p className="text-sm text-white font-raleway-regular">compassinhos@gmail.com</p>
          <p className="text-sm text-white font-raleway-regular">+55 41 99999-9999</p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row gap-10">

            <div className="flex flex-col gap-4">
              <h3 className="text-white text-lg font-raleway-bold">Links</h3>
              <ul className="text-white text-sm leading-9">
                <li className="font-raleway-regular">About us</li>
                <li className="font-raleway-regular">Products</li>
                <li className="font-raleway-regular">Blogs</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white text-lg font-raleway-bold">Community</h3>
              <ul className="text-white text-sm leading-9">
                <li className="font-raleway-regular">About us</li>
                <li className="font-raleway-regular">Products</li>
                <li className="font-raleway-regular">Blogs</li>
              </ul>
            </div>

          </div> 
        </div>

      </div>

      <div className="flex flex-row pt-5 items-center justify-around border-t-2 border-avacado">
        <img src={FooterLogo} alt="PlantPeaceLogo"/>
          <div className="flex flex-col text-center">
          <p className='md:text-sm text-xs text-white font-raleway-regular'>Compassinhos ®. All rights <br/>reserved.</p>
        </div>  
      </div>

    </footer>
  )
}

export default Footer