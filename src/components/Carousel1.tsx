import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Card } from "./Card";
import type { Plant } from "../types/Plant";

async function getPlants() {
  const response = await fetch("http://localhost:3000/plants");
  const data = (await response.json()) as unknown;
  return data as Plant[];
}

type PropType = {
  options?: EmblaOptionsType;
};

const Carousel1: React.FC<PropType> = (props) => {
  const { options } = props;
  const [plants, setPlants] = React.useState<Plant[]>([]);
  const [emblaRef] = useEmblaCarousel(options);

  React.useEffect(() => {
    getPlants().then((plants) => setPlants(plants));
  }, []);

  return (
    <section className="m-auto w-full ">
      <div className="overflow-x-hidden w-full" ref={emblaRef}>
        <div className="flex -ml-4 w-full py-20 pl-8 md:pl-28">
          {
            plants.map(plant => {
              const id = `plant-card-${plant.id}`;
              return(<Card key={id} plant={plant}/>)
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Carousel1;
