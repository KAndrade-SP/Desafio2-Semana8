import ArrowIcon from "./icons/ArrowIcon";
import WaterdropIcon from "./icons/WaterdropIcon";
import SunIcon from "./icons/SunIcon";
import BoxIcon from "./icons/BoxIcon";
import Img1 from "./assets/img1.jpg";
import Img2 from "./assets/img2.jpg";
import Img3 from "./assets/img3.jpg";
import Plant1 from "./assets/plant1.jpg";
import Plant2 from "./assets/plant2.png";

export function HomePage() {
  return (
    <div>
      <main className="w-full min-h-svh text-medgray">
        <section className="px-28 py-9 bg-grayishgreen">
          <div className="flex flex-row items-center justify-between gap-28">
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
              <button className="py-4 px-10 font-raleway-regular bg-lunargreen flex-row text-almwhite text-base">
                Shop Now
              </button>
            </div>

            <img className="" src={Plant1} alt="" />
          </div>

          <img className="absolute left-0 -bottom-[345px]" src={Plant2} alt="" />

          <div className="flex flex-row items-center justify-start">
            <a
              className="flex flex-row items-center justify-center gap-2"
              href=""
            >
              <span className="font-raleway-regular">Learn Gardening</span>
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="p-28 gap-20 bg-almwhite">
          <div className="flex flex-col items-center justify-center gap-20">
            <div className="flex flex-col gap-4 items-center text-center">
              <h1 className="text-6xl font-ebgaramond-bold text-lunargreen">
                Steps To Take Care Of Your{" "}
                <span className="text-avacado">Plants</span>
              </h1>
              <p className="text-base font-raleway-regular">
                By following these three steps - proper watering, appropriate
                sunlight, and providing essential nutrients - you'll be well on
                your way to <br />
                maintaining healthy and thriving plants.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-28 font-raleway-regular pb-20">
              <div className="flex flex-col gap-6 items-center justify-center">
                <WaterdropIcon />
                <h1 className="font-lato-bold text-2xl text-almblack">
                  Watering
                </h1>
                <p>
                  water your plants when the top inch of soil feels dry to{" "}
                  <br />
                  the touch. Avoid overwatering, as it can lead to root <br />
                  dehydration.
                </p>
              </div>
              <div className="flex flex-col gap-6 items-center justify-center">
                <SunIcon />
                <h1 className="font-lato-bold text-2xl text-almblack">
                  Sunlight
                </h1>
                <p>
                  Most plants need adequate sunlight to thrive. Place your{" "}
                  <br />
                  plants in areas that receive the appropriate amount of <br />
                  light for their specific needs
                </p>
              </div>
              <div className="flex flex-col gap-6 items-center justify-center">
                <BoxIcon />
                <h1 className="font-lato-bold text-2xl text-almblack">
                  Nutrients and Fertilizing
                </h1>
                <p>
                  Choose a suitable fertilizer based on the specific needs{" "}
                  <br />
                  of your plants, whether it's a balanced or specialized <br />
                  formula.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-28">
              <div className="w-full">
                <img src={Img1} alt="" />
              </div>
              <div className="w-full">
                <img src={Img2} alt="" />
              </div>
              <div className="flex flex-col w-full gap-8 items-start justify-center content-start font-raleway-regular">
                <img className="w-full" src={Img3} alt="" />
                <p>
                  Our website offers a wide array of stunning plants, ranging
                  from vibrant flowers to lush indoor foliage, allowing you to
                  create your very own green oasis. In addition to our extensive
                  plant selection, we also provide gardening kits and
                  fertilizers to equip you with everything you need to nurture
                  your plants and achieve gardening success. But we don't stop
                  there! We believe that knowledge is the key to a thriving
                  garden, so we offer a wealth of information and resources on
                  gardening techniques, plant care tips, and landscaping ideas.
                  Whether you're a seasoned gardener or just starting your green
                  journey, our goal is to inspire and support you every step of
                  the way. Get ready to explore our virtual garden and discover
                  the joys of gardening with us!
                </p>
                <button className="py-4 px-10 font-raleway bg-lunargreen flex-row text-almwhite text-base">
                  See more photos
                </button>
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}
