import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Card } from "../../../components/Card";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel1: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="m-auto w-full ">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex -ml-4 w-full pl-8 md:pl-28">
          {slides.map((index) => (
              <Card key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel1;
