import Img1 from "../pages/HomePage/assets/img1.jpg"

export function Card() {
  return (
    <div className="min-w-0 shrink-0 grow-0 basis-full lg:basis-1/2 2xl:basis-1/3 3xl:basis-1/4">
      <div className="bg-almwhite text-lunargreen font-raleway-regular flex flex-col items-start justify-center shadow-xl w-80 md:w-96">
        <div className="size-80 md:size-[388px]">
          <img
            className="w-full h-full object-cover"
            src={Img1}
            alt=""
          />
        </div>
        <div className="flex flex-col items-start gap-3 p-8 pt-4">
          <span className="font-lato-bold text-2xl">Echinocereus Cactus</span>
          <span>$15.00</span>
          <div className="flex flex-row items-center justify-start gap-3">
            <div className="bg-grayishgreen border-2 border-avacado text-avacado px-3 py-1 rounded-3xl">
              <span>Label</span>
            </div>
            <div className="bg-grayishgreen border-2 border-avacado text-avacado px-3 py-1 rounded-3xl">
              <span>Type</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
