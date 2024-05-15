import ArrowIcon from "./icons/ArrowIcon";
import WaterdropIcon from "./icons/WaterdropIcon";
import SunIcon from "./icons/SunIcon";
import BoxIcon from "./icons/BoxIcon";
import Img1 from "./assets/img1.jpg"
import Img2 from "./assets/img2.jpg"
import Img3 from "./assets/img3.jpg"


export function HomePage() {
  return (
    <div>
      <main className="w-full min-h-svh">
        <section>
          <div className="flex flex-col justify-center items-start gap-2 bg-red-400">
            <div className="flex flex-row justify-center items-center gap-1">
              <div className="w-8 h-1 bg-black "></div>
              <p className="font-pacifico">Love for Nature</p>
            </div>
            <h1 className="text-6xl font-ebgaramond text-emerald-950">
              Discover Your <span className="text-green-400">Green</span> <br />
              Side
            </h1>
            <p className="text-base font-raleway">
              We are your one-stop destination for all things green and growing.
              Our website <br />
              offers a wide array of stunning plants, ranging from vibrant
              flowers to lush indoor <br />
              foliage, allowing you to create your very own green oasis.
            </p>
            <button className="py-4 px-10 font-raleway bg-emerald-950 flex-row text-white text-base">
              Shop Now
            </button>
          </div>

          <div className="flex flex-row items-center justify-start">
            <a
              className="flex flex-row items-center justify-center gap-2"
              href=""
            >
              <span className="font-raleway">Learn Gardening</span>
              <ArrowIcon />
            </a>
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center justify-center gap-20">
            <div className="flex flex-col gap-4 items-center text-center">
              <h1 className="text-6xl font-ebgaramond text-emerald-950">
                Steps To Take Care Of Your <span>Plants</span>
              </h1>
              <p className="text-base font-raleway">
                By following these three steps - proper watering, appropriate
                sunlight, and providing essential nutrients - you'll be well on
                your way to <br />
                maintaining healthy and thriving plants.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-20 font-raleway">
              <div className="flex flex-col gap-6 items-center justify-center">
                <WaterdropIcon />
                <h1 className="font-lato text-2xl">Watering</h1>
                <p>
                  water your plants when the top inch of soil feels dry to <br />the
                  touch. Avoid overwatering, as it can lead to root <br />dehydration.
                </p>
              </div>
              <div className="flex flex-col gap-6 items-center justify-center">
                <SunIcon />
                <h1 className="font-lato text-2xl">Sunlight</h1>
                <p>
                  Most plants need adequate sunlight to thrive. Place your <br />
                  plants in areas that receive the appropriate amount of <br />light
                  for their specific needs
                </p>
              </div>
              <div className="flex flex-col gap-6 items-center justify-center">
                <BoxIcon />
                <h1 className="font-lato text-2xl">Nutrients and Fertilizing</h1>
                <p>
                  Choose a suitable fertilizer based on the specific needs <br />of
                  your plants, whether it's a balanced or specialized <br />formula.
                </p>
              </div>
            </div>
          </div>

          <img src={Img1} alt="" />
        </section>
        <section></section>
      </main>
    </div>
  );
}
