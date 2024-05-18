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
        <div>
            <h1>Lista de Plantas</h1>
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