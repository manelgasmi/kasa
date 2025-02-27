
import Banner from '../../components/banner/Banner'
import bgImage from '../../assets/bg2.png';
import Collapse from '../../components/collapse/Collapse';
import aboutUsData from '../../../data/about.json'
import "./AboutUS.scss"

const AboutUS = () => {
  return (
    <main className="container">
      <Banner title= "" bgImage={bgImage}/>
      <section className='collapseContainer'>
      {aboutUsData.map((element) => (
        <Collapse key={element.title} item={element}/>
      ))}
      </section>
    </main>
  
  )
}

export default AboutUS