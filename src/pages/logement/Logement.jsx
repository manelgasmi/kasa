import React from 'react'
import { useLocation } from 'react-router-dom';

const Logement = () => {
  const location = useLocation();
  const { item } = location.state;
  return (
    <main className='container'>
      <h1>{item.title}</h1>
    </main>
  )
}

export default Logement