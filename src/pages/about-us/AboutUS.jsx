import React from 'react'
import Banner from '../../components/banner/Banner'
import bgImage from '../../assets/bg2.png';
import Collapse from '../../components/collapse/Collapse';
import aboutUsData from '../../../data/about.json'

const AboutUS = () => {
  return (
    <main className="container">
      <Banner title= "" bgImage={bgImage}/>
      {aboutUsData.map((element) => (
        <Collapse key={element.title} item={element}/>
      ))}
    </main>
  
  )
}

export default AboutUS