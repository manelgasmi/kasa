import React from 'react'
import './Banner.scss';

const Banner = ({title, bgImage}) => {
  return (
    <section className='hero bg-hero-1' style={{backgroundImage: `url(${bgImage})`}}>
        <div className={`banner-hover ${title ? "banner-hover-home" : "banner-hover-about"}`}>
    <h1 className='title'>{title}</h1>
    </div>
  </section>
  )
}

export default Banner