import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Product = ({product}) => {
    return (
        <Card className="my-3 p-3 rounded ">
            <Link to={`product/${product._id}`}>
                {product.image.startsWith("/images")?<Card.Img src={product.image}></Card.Img>: <Card.Img src={`data:image/png;base64,${product.image}`}></Card.Img>}
            </Link>
            <Card.Body>
            <Link to={`product/${product._id}`}>
                <Card.Title as="div">
                        <strong>{ product.name}</strong>
                </Card.Title>   
            </Link>
            <Card.Text as="div">
                <div className="my-3">
                        <Rating valu={product.rating} text={`${product.numReviews} reviews`}/>
                </div>
            </Card.Text>
            <Card.Text as="h3">
                $ {product.price}
            </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;