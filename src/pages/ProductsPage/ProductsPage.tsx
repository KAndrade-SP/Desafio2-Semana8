import CactusImg from "../../assets/images/img_01.png";


const ProductsPage = () => {
  return (
    <div className='px-8 py-14 md:px-12 md:py-16 lg:px-20 lg:py-28 bg-lightgray'>
        <div className='md:grid md:grid-cols-2 md:gap-10 lg:gap-14 lg:justify-between lg:justify-items-center md:py-24'>
          <div className='lg:w-full  lg:pt-8 mb-8 '>
            <img src={CactusImg} alt="Foto de um Cactus pequeno plantado em uma xicara de xá"/>
          </div>
          <div className=' flex flex-col justify-start  2xl:max-w-2xl '>
            <h3 className=" text-lunargreen font-ebgaramond-bold text-4xl md:pb-3 md:text-4.5xl 2xl:text-6.5xl">Echinocereus Cactus</h3>
            <span className=" text-lg md:py-3 font-lato-bold 2xl:text-2xl  text-darkgray" >A Majestic Addition to Your Plant Collection</span>
            <div>
              <button className=' mr-4 lg:my-3 bg bg-whitegreen border-lightgreen border-2 rounded-3xl w-20 h-10 text-flaggreen font-raleway-regular'>indoor</button>
              <button className=' my-3 bg bg-whitegreen border-lightgreen border-2 rounded-3xl w-20 h-10 text-flaggreen font-raleway-regular'>cactus</button>          
            </div>
            <span className=' pt-3 font-lato-bold text-xl'>$139.99</span>
            <button className='h-14  w-44 bg-lunargreen  text-almwhite font-raleway-regular my-6'><a href="">Check out</a></button>            
            <h3 className='font-lato-bold text-2xl mb-3'>Features</h3>
            <ul className='list-disc font-raleway-regular pl-4'>
              <li>Species: Echinocereus spp.</li>
              <li>Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height.</li>
              <li>Blooming Season: Typically spring or summer, with flowers lasting several days to weeks.</li>
              <li>Pot Size: Available in various pot sizes to suit your preference and needs.</li>
            </ul>
            <h3 className='mt-6 mb-3 font-lato-bold text-2xl'>Description</h3>
            <p className='font-raleway-regular' >Ladyfinger cactus (*Echinocereus pentalophus*) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.</p>
          </div>
        </div>
    </div>
  )
}

export default ProductsPage