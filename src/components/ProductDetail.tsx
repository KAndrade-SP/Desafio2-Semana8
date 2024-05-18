import { useParams } from 'react-router-dom';
import plants from '../data';
import Error404 from '../pages/Error404/Error404';

/*interface Product {
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

const ProductDetail = () => {
    const {id} = useParams();

    if (!id || isNaN(parseInt(id, 10))) {
        <Error404/>; 
    }

    const productId = parseInt(id, 10);
    const product = plants.find((product) => product.id === productId);

    if (!product) {
        <Error404/>
    }

    // Dividir as frases das features pelo ponto
    const feature = product?.features.split('.').map(feature => feature.trim()).filter(feature => feature.length > 0);
 
    return (

        <div className='px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-16 bg-lightgray'>
        <div className='md:mx-auto lg:grid lg:grid-cols-2 lg:gap-16 md:py-10'>
          <div className='lg:w-full lg:pt-8 lg:flex lg:items-center lg:justify-center mb-8 md:mx-auto'>
            <img src={product?.imgUrl} alt={product?.description} />
          </div>
          <div className='md:mx-auto flex flex-col justify-start  2xl:max-w-2xl '>
            <h3 className=" text-lunargreen font-ebgaramond-bold text-3xl md:pb-3 md:text-4xl lg:pb-2 2xl:text-6.5xl">{product?.name}</h3>
            <span className=" text-lg md:py-3 lg:pt-0 lg:pb-2 font-lato-bold 2xl:text-2xl  text-darkgray" >{product?.subtitle} </span>
            <div>
                {product?.label.map((label, index) => (
                    <button key={index} className=' mr-4 lg:my-2 bg bg-whitegreen border-lightgreen border-2 rounded-3xl  w-20 h-10 text-flaggreen font-raleway-regular pointer-events-none'>{label}</button>
                ))}
            </div>
            <span className=' pt-3 lg:pt-2 font-lato-bold text-xl'>{product?.price}</span>
            <button className='h-14 w-44 bg-lunargreen  text-almwhite font-raleway-regular my-6 lg:my-5'><a href="">Check out</a></button>            
            <h3 className='font-lato-bold text-xl mb-3'>Features</h3>
            <ul className='list-disc font-raleway-regular pl-4'>
                {feature?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <h3 className='mt-6 mb-3 font-lato-bold text-xl'>Description</h3>
            <p className='font-raleway-regular' >{product?.description} </p>
          </div>
        </div>
    </div>
    )
}

export default ProductDetail