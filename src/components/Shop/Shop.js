import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Spinner from '../Spinner/Spinner';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://pure-castle-93567.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            {
                (products.length > 0) ?
                    <div className="row d-flex justify-content-center">
                        {
                            products.map(product => <Product product={product}></Product>)
                        }

                    </div> :
                    <Spinner></Spinner>
            }

        </>
    );
};

export default Shop;