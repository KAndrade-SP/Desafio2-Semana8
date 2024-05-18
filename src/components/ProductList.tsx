import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import plants from '../data';

interface Product {
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
}

const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(plants);
    }, []);

    return (
        <div className=' bg-lightgray'>
            <h1 className='text-lunargreen font-ebgaramond-bold text-3xl md:pb-3 md:text-4xl lg:text-5xl text-center my-20 '>Our Plants for Your 
                <span className=' text-avacado'> Green</span> Side
            </h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id} >
                        <Link to={`/product/${product.id}`} >{product.name}</Link>  
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList