import React from 'react'
import { useLocation } from 'react-router-dom';
import Carousel from '../../components/carousel/Carousel';

const Logement = () => {
  const location = useLocation();
  const { item } = location.state;
  return (
    <main className='container'>
      <Carousel logement={item} />
      <h1>{item.title}</h1>
    </main>
  )
}

export default Logement