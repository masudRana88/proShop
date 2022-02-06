import React from 'react';
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTopProduct } from '../../redux/action/productRequest/productRequest';

const CarouselContainer = () => {
  const topProduct = useSelector(state => state.topProduct)
  const { products } = topProduct
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopProduct())
  },[])
    return (
        <Carousel pause="hover" nextLabel prevLabel  fade	
 className='alert-secondary my-courser' >
          {products.map(item=><Carousel.Item key={item._id}>
            <div className='p-4 d-flex justify-content-center'>
              {item.image.startsWith("/images") ?
              <img className='rounded-circle' src={item.image} alt={item.name} fluid></img> :
              <img  src={`data:image/png;base64,${item.image}`} alt={item.name}></img>}
            </div>
            <Carousel.Caption>
              <h3>{ item.name}</h3>
              {/* <p>{ item.description}</p> */}
            </Carousel.Caption>
          </Carousel.Item>)}
          
      </Carousel>
    );
};

export default CarouselContainer;