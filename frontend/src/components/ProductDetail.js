import React, { useEffect, useState } from 'react';
import { catalogService } from '../services/catalogService';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        catalogService.getProductById(id).then(response => {
            setProduct(response.data);
        });
    }, [id]);

    return (
        <div>
            {product ? (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDetail;
