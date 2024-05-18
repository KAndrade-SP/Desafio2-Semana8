import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
/*import plants from '../data';*/
import Error404 from '../pages/Error404/Error404';
import axios from 'axios';
import Cactus from '../assets/images/img_01.png';

/*type Product = {
    id: number;
    name: string;
    subtitle: string;
    label: string[];
    price: string;
    isInSale: boolean;
    discountPercentage: number;
    features: string;
    description: string;
    imgUrl: string;
}*/

type PlantType = {
    id: number,
    plantName: string,
    plantSubtitle: string,
    plantType: string,
    price: number,
    isInSale: boolean,
    discountPercentage: number,
    plantLabel: string,
    features: string,
    description: string,
  }

const ProductDetail = () => {
    const {id} = useParams<{ id: string }>();
    const [plant, setPlant ] = useState<PlantType | null>(null);
   /*const [loading, setLoading] = useState(true);*/
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (id && !isNaN(parseInt(id, 10))) {
            const productId = parseInt(id, 10);

            axios.get(`http://localhost:3000/plants/${productId}`).then(response => {
                setPlant(response.data);
               // setLoading(false);
            }).catch(err => {
                setError("Produto não encontrado.");
              //  setLoading(false);
            });
        } else {
            setError("Parâmetro `id` inválido");
            //setLoading(false);
        }
    }, [id]);

    if (error) {
        navigate('/error404');
        return null;
    }

    if (!plant) {
        return null;
    }

    
    /*const product = plants.find((product) => product.id === productId);

    if (!product) {
        <Error404/>
    }*/

    // Dividir as frases das features pelo ponto
    const feature = plant.features.split('.').map(feature => feature.trim()).filter(feature => feature.length > 0);
 
    return (

    <div className='px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-16 bg-lightgray'>
        <div className='md:mx-auto lg:grid lg:grid-cols-2 lg:gap-16 md:py-10'>
          <div className='lg:w-full lg:pt-8 lg:flex lg:items-center lg:justify-center mb-8 md:mx-auto'>
            <img src={Cactus} alt={plant.plantName} />
          </div>
          <div className='md:mx-auto flex flex-col justify-start  2xl:max-w-2xl '>
            <h3 className=" text-lunargreen font-ebgaramond-bold text-3xl md:pb-3 md:text-4xl lg:text-5xl lg:pb-2 2xl:text-6.5xl">{plant.plantName}</h3>
            <span className=" my-2 text-lg md:py-3 lg:pt-0 lg:pb-2 font-lato-bold 2xl:text-2xl  text-darkgray" >{plant.plantSubtitle} </span>
            <div>
                <button className=' mr-4 lg:my-2 bg bg-whitegreen border-lightgreen border-2 rounded-3xl  w-20 h-10 text-flaggreen font-raleway-regular pointer-events-none'>{plant.plantLabel}</button>
                <button className=' mr-4 lg:my-2 bg bg-whitegreen border-lightgreen border-2 rounded-3xl  w-auto h-10 px-2 text-flaggreen font-raleway-regular pointer-events-none'>{plant.plantType}</button>
            </div>
            <span className=' pt-3 lg:pt-2 font-lato-bold text-xl'>${plant.price}</span>
            <button className='flex-row overflow-hidden h-14 w-40 bg-lunargreen  text-almwhite font-raleway-regular my-6 lg:my-5 hover:bg-avacado  hover:font-raleway-bold transition-all'><a href="">Check out</a></button>            
            <h3 className='font-lato-bold text-xl mb-3'>Features</h3>
            <ul className='list-disc font-raleway-regular pl-4'>
                {feature.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <h3 className='mt-6 mb-3 font-lato-bold text-xl'>Description</h3>
            <p className='font-raleway-regular' >{plant.description} </p>
          </div>
        </div>
    </div>
    )
}

export default ProductDetail