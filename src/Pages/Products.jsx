
import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';

import { EventsCard } from '../components/Events'


const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
    
    <EventsCard onAddToCart={addToCart}></EventsCard>
    
    </>
  )
}

export default Products