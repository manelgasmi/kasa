import React from 'react'
import { useLocation } from 'react-router-dom';
import "./Logement.scss";
import Carousel from '../../components/carousel/Carousel';
import Collapse from "../../components/collapse/Collapse";
import Rating from "../../components/rating/Rating";

const Logement = () => {
  const location = useLocation();
  const { item } = location.state;
  return (
    <main className='container'>
      <Carousel logement={item} />
      <div className="logementInfoContainer">
        <div>
          <h1 className="logementTitle">{item.title}</h1>
          <p className="logementLocation">{item.location}</p>
          <div className="tagsContainer">
            {item.tags.map((tag) => (
              <div key={tag} className="tag">{tag}</div>
            ))}
          </div>
        </div>
        <div>
          <div className="logementHostContainer">
            <div className="logementHostName">
              <div>{item.host.name.split(" ")[0]}</div>
              <div>{item.host.name.split(" ")[1]}</div>
            </div>
            <img className="logementHostPicture" src={item.host.picture} />
          </div>
          <div className="ratingContainer">
            <Rating rating={item.rating} />
          </div>
        </div>
      </div>
      <div className="logementCollapseContainer">
        <div className="logementCollapse">
          <Collapse
            item={{ title: "Description", content: item.description }}
          />
        </div>
        <div className="logementCollapse">
          <Collapse
            item={{ title: "Équipements", content: item.equipments }}
          />
        </div>
      </div>

    </main>
  )
}

export default Logement