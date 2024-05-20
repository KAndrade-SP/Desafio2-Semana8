import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img01 from '../assets/images/img_01.png';
import img02 from '../assets/images/img_02.png';
import img03 from '../assets/images/img_03.png';
import img04 from '../assets/images/img_04.png';

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
};

const ProductList = () => {

    const [plants, setPlants] = useState<PlantType[]>([]);
    /*const [loading, setLoading] = useState(true);*/
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        /*setProducts(plants);*/
        axios.get('http://localhost:3000/plants').then(response => {
            setPlants(response.data);
            //setLoading(false);
        }).catch(err => {
            setError('Erro ao carregar produtos');
            //setLoading(false);
        });
    }, []);

    if (error) {
        navigate('*');
        return null;
    }

    const images = [img01, img02, img03, img04];
    
    return (
        <div className=' bg-lightgray'>
            <h1 className='text-lunargreen font-ebgaramond-bold text-3xl md:pb-3 md:text-4xl lg:text-5xl text-center my-20 '>Our Plants for Your 
                <span className=' text-avacado'> Green</span> Side
            </h1>

            <div className=' lg:grid md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-16 px-12  mb-32'>
                {plants.map((plant, index) => {
                    const image = images[index % images.length];
                    return (
                    <div key={plant.id} className=' flex flex-col md:items-center  mb-20'>
                        <div className='flex flex-col justify-start md:w-80 lg:w-80 shadow-xl h-'>
                            <Link to={`/product/${plant.id}`}>                   
                                <img src={image} alt={plant.plantName} className='md:max-h-72 w-full'/>
                                <div className='px-4'>
                                    <h3 className=' text-lunargreen font-ebgaramond-bold text-2xl mt-4 mb-1' >{plant.plantName}</h3>
                                    <span className='font-lato-bold text-darkgray' >{plant.plantSubtitle}</span>
                                    <p className='font-lato-bold text-xl my-2'>${plant.price}</p>
                                    <div>
                                        <button className=' mr-4 bg-whitegreen border-lightgreen border-2 rounded-3xl w-20 h-10 px-2 text-flaggreen font-raleway-regular pointer-events-none'>{plant.plantLabel}</button>
                                        <button className=' mr-4 bg-whitegreen border-lightgreen border-2 rounded-3xl w-auto h-10 px-2 text-flaggreen font-raleway-regular pointer-events-none'>{plant.plantType}</button>
                                    </div>
                                    {/*<p className='font-raleway-regular'>{plant.description}</p>*/}
                                    <button className='h-14 w-40  my-4 font-raleway-regular bg-lunargreen flex-row overflow-hidden text-almwhite text-base hover:bg-avacado  hover:font-raleway-bold transition-all'>See more</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ProductList