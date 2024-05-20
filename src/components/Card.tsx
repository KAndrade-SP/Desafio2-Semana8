import Img1 from "../pages/HomePage/assets/img1.jpg";
import type { Plant } from "../types/Plant";
import { Link } from "react-router-dom";


type PropType = {
  plant?: Plant;
};

export function Card(props: PropType) {
  const { plant } = props;

  if (!plant) return <></>;

  const promoPrice = (plant.price*(1 - plant.discountPercentage/100)).toFixed(2);

  return (
    <Link
      to={`/product/${plant.id}`}
      className="min-w-0 shrink-0 grow-0 basis-full lg:basis-1/2 2xl:basis-1/3 3xl:basis-1/4"
    >
      <div className="bg-almwhite text-lunargreen font-raleway-regular flex flex-col items-start justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all w-80 md:w-[388px]">
        <div className="size-80 md:size-[388px]">
          <img className="w-full h-full object-cover" src={Img1} alt="" />
        </div>
        <div className="flex flex-col items-start gap-3 p-8 pt-4">
          <span className="font-lato-bold text-2xl">{plant.plantName}</span>
          <div>
            {plant.isInSale ? (
              <p className="my-2">
                
                <span className="font-lato-regular text-xl text-lunargreen">
                  ${promoPrice}
                </span>{" "}
                <span className="ml-6 font-lato-regular text-xl text-almgray line-through">
                  ${plant.price}
                </span>
              </p>
            ) : (
              <p className="font-lato-regular text-xl my-2 text-lunargreen">
                ${plant.price}
              </p>
            )}
          </div>
          <div className="flex flex-row items-center justify-start gap-3">
            <div className="bg-grayishgreen border-2 border-avacado text-avacado px-3 py-1 rounded-3xl">
              <span>{plant.plantLabel}</span>
            </div>
            <div className="bg-grayishgreen border-2 border-avacado text-avacado px-3 py-1 rounded-3xl">
              <span>{plant.plantType}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
