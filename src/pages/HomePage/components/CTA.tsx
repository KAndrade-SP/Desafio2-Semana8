export function Cta(){
    return(
        <div className="flex relative flex-row items-center justify-between gap-28 z-10">
            <div className="flex flex-col justify-center items-start gap-6">
              <div className="flex flex-row justify-center items-center gap-1">
                <div className="w-8 h-1 bg-almblack "></div>
                <p className="font-pacifico text-almblack">Love for Nature</p>
              </div>
              <h1 className="text-6xl font-ebgaramond-bold text-lunargreen">
                Discover Your <span className="text-avacado">Green</span> <br />
                Side
              </h1>
              <p className="text-base font-raleway-regular">
                We are your one-stop destination for all things green and
                growing. Our website <br />
                offers a wide array of stunning plants, ranging from vibrant
                flowers to lush indoor <br />
                foliage, allowing you to create your very own green oasis.
              </p>
              <button className="h-14 w-40 font-raleway-regular bg-lunargreen flex-row overflow-hidden text-almwhite text-base hover:bg-avacado  hover:font-raleway-bold transition-all">
                Shop Now
              </button>
            </div>
          </div>
    )
}