import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import Collapse from "../../components/collapse/Collapse";
import Rating from "../../components/rating/Rating";
import logements from "../../../data/data.json";
import "./Logement.scss";

const Logement = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();
  useEffect(() => {
    const activeLogement = logements.find((logement) => logement.id === id);
    if (activeLogement) {
      setItem(activeLogement);
      setLoading(false);
    } else {
      navigate("/error-404");
    }
  }, [id, navigate, logements]);
  
  return loading ? (
    <div>Loading...</div>
  ) : (
    <main className="container">
      <Carousel logement={item} />
      <div className="logementInfoContainer">
        <div>
          <h1 className="logementTitle">{item.title}</h1>
          <p className="logementLocation">{item.location}</p>
          <div className="tagsContainer">
            {item.tags.map((tag) => (
              <div key={tag} className="tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="ratingHostcontainer">
          <div className="logement_Host--Container">
            <div className="logement_Host--Name">
              <div>{item.host.name.split(" ")[0]}</div>
              <div>{item.host.name.split(" ")[1]}</div>
            </div>
            <img className="logement_Host--Picture" src={item.host.picture} />
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
          <Collapse item={{ title: "Équipements", content: item.equipments }} />
        </div>
      </div>
    </main>
  );
};

export default Logement;
