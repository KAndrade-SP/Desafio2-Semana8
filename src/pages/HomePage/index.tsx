import ArrowIcon from "./icons/ArrowIcon";
import WaterdropIcon from "./icons/WaterdropIcon";
import SunIcon from "./icons/SunIcon";
import BoxIcon from "./icons/BoxIcon";
import Img1 from "./assets/img1.jpg";
import Img2 from "./assets/img2.jpg";
import Img3 from "./assets/img3.jpg";
import Plant1 from "./assets/plant1.jpg";
import Plant2 from "./assets/plant2.png";
import Carousel1 from "./components/Carousel1";
import Carousel2 from "./components/Carousel2";
import { EmblaOptionsType } from "embla-carousel";
import { Cta } from "./components/CTA";
import { Link } from "react-router-dom";

const OPTIONS: EmblaOptionsType = { loop: false };


export function HomePage() {
  return (
    <div>
      <main className="w-full min-h-svh text-medgray">
        <section className="md:px-28 px-8 py-9 flex relative min-h-svh bg-graybackground">
          <Cta />
          <img
            className="hidden xl:flex absolute right-0 bottom-0"
            src={Plant1}
            alt="Plants on a table"
          />
          <img
            className="hidden md:flex absolute left-0 bottom-0 translate-y-[38%]"
            src={Plant2}
            alt="Plant leaves"
          />

          <div className="flex flex-row items-center justify-start absolute bottom-0 left-0 w-full md:px-28 px-8 pb-8">
            <a
              className="flex flex-row items-center justify-center gap-2"
              href=""
            >
              <span className="font-raleway-regular">Learn Gardening</span>
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="md:p-28 p-8 gap-20 bg-almwhite">
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
            <div className="flex flex-col md:flex-row items-center justify-center lg:gap-28 gap-8 font-raleway-regular pb-20 text-center">
              <div className="flex flex-col gap-6 items-center justify-center hover:scale-110 hover:transition-all">
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
              <div className="flex flex-col gap-6 items-center justify-center hover:scale-110 hover:transition-all">
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
              <div className="flex flex-col gap-6 items-center justify-center hover:scale-110 hover:transition-all">
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
              <div className="hidden 2xl:flex w-full">
                <img
                  className="hover:shadow-lg dark:hover:shadow-black/30 transition-all delay:50 hover:scale-105"
                  src={Img1}
                  alt="Plants in a room with a person portrait on the wall"
                />
              </div>
              <div className="hidden 2xl:flex w-full">
                <img
                  className="hover:shadow-lg dark:hover:shadow-black/30 transition-all delay:50 hover:scale-105"
                  src={Img2}
                  alt="Plants in a garden"
                />
              </div>
              <div className="flex flex-col w-full gap-8 items-start justify-center content-start font-raleway-regular">
                <img
                  className="w-full hover:shadow-lg dark:hover:shadow-black/30 transition-all delay:50 hover:scale-105"
                  src={Img3}
                  alt="Bonsai image"
                />
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
                <Link to={"/error404"}>
                  <button className="h-14 w-48 font-raleway-regular bg-lunargreen flex-row overflow-hidden text-almwhite text-base hover:bg-avacado  hover:font-raleway-bold transition-all hover:scale-105">
                    See more photos
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-24 py-12 bg-grayishgreen w-full ">
          <div className="gap-28 w-full flex flex-col justify-center items-center">
            <h2 className="text-6xl font-ebgaramond-bold text-lunargreen p-8">
              This Weeks Most Popular{" "}
              <span className="text-avacado">And Best Selling</span>
            </h2>

            <div className="w-full">
              <Carousel1 options={OPTIONS} />
            </div>
          </div>
          <div className="gap-28 w-full flex flex-col justify-center items-center">
            <h2 className="text-6xl font-ebgaramond-bold text-avacado p-8">
              Plants In <span className="text-lunargreen">Sale</span>
            </h2>

            <div className="w-full">
              <Carousel2 options={OPTIONS} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
