import React from 'react';
import CactusImg from "../../assets/images/img_01.png";


const ProductsPage = () => {
  return (
    <div className=' px-20  py-28 container bg-lightgray'>
        <div className='grid grid-cols-2 gap-20 justify-between justify-items-center container py-24'>
          <div className=' pt-8'>
            <img src={CactusImg} alt="Foto de um Cactus pequeno plantado em uma xicara de xá"/>
          </div>
          <div className=' flex flex-col justify-start  max-w-2xl'>
            <h3 className=" text-lunargreen font-ebgaramond-bold text-6.5xl">Echinocereus Cactus</h3>
            <span className="  leading-none font-lato-bold text-2xl  text-darkgray" >A Majestic Addition to Your Plant Collection</span>
            <div>
              <button className=' mr-4 my-6 bg bg-whitegreen border-lightgreen border-2 rounded-3xl w-20 h-10 text-flaggreen font-raleway-regular'>indoor</button>
              <button className=' my-6 bg bg-whitegreen border-lightgreen border-2 rounded-3xl w-20 h-10 text-flaggreen font-raleway-regular'>cactus</button>          
            </div>
            <span className='font-lato-bold text-2xl'>$139.99</span>
            <a href="">
              <button className='h-16 w-48 bg-lunargreen  text-almwhite font-raleway-regular my-6'>Check out</button>
            </a>
            <h3 className='font-lato-bold text-2xl mb-4'>Features</h3>
            <ul className=' list-disc font-raleway-regular pl-4'>
              <li>Species: Echinocereus spp.</li>
              <li>Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height.</li>
              <li>Blooming Season: Typically spring or summer, with flowers lasting several days to weeks.</li>
              <li>Pot Size: Available in various pot sizes to suit your preference and needs.</li>
            </ul>
            <h3 className='mt-6 mb-4 font-lato-bold text-2xl'>Description</h3>
            <p className=' font-raleway-regular' >Ladyfinger cactus (*Echinocereus pentalophus*) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.</p>
          </div>
        </div>
    </div>
  )
}

export default ProductsPage