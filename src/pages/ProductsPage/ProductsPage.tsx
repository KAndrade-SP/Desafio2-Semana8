import React from 'react';
import CactusImg from "../../assets/images/img_01.png";


const ProductsPage = () => {
  return (
    <div >
        <div className='grid grid-cols-2 gap-20 justify-between justify-items-center pt-24 pb-24'>
          <div>
            <img src={CactusImg} alt="Foto de um Cactus pequeno plantado em uma xicara de xá" />
          </div>
          <div className=' flex flex-col justify-start content-between '>
            <h2 className=" text-lunargreen font-ebgaramond-bold text-6.5xl ">Echinocereus Cactus</h2>
            <span className="text-gray-500 font-bold" >A Majestic Addition to Your Plant Collection</span>
            <button className='  text-flaggreen'>indoor</button>
            <button>cactus</button>
            <span>$139.99</span>
            <a href="">
              <button>Check out</button>
            </a>
            <h3>Features</h3>
            <ul>
              <li>Species: Echinocereus spp.</li>
              <li>Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height.</li>
              <li>Blooming Season: Typically spring or summer, with flowers lasting several days to weeks.</li>
              <li>Pot Size: Available in various pot sizes to suit your preference and needs.</li>
            </ul>
            <h3>Description</h3>
            <p>Ladyfinger cactus (*Echinocereus pentalophus*) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.</p>
          </div>
        </div>
    </div>
  )
}

export default ProductsPage