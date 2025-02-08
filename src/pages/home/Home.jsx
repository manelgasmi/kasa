
import logements from '../../../data/data.json'
import './Home.scss';
import Card from '../../components/card/Card';
import Banner from '../../components/banner/Banner';
import bgImage from '../../assets/bg1.png';
const Home = () => {

  return (
    <main className="container">
      <Banner title = "Chez vous, partout et ailleurs" bgImage={bgImage}/>
      
      <section className='logements'>
            {logements.map((logement) => (
                <Card key={logement.id} logement={logement} /> // Rendering Card for each logement
            ))}
      </section>
    </main>
  )
}

export default Home