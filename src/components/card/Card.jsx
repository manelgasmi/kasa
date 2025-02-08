import "./Card.scss";
import { Link } from "react-router-dom";


const Card = ({ logement }) => {
  return (
    <Link className = "logement-card-container" to={`/logement/${logement.id}`}>
      <div
        className="card"
        style={{
          backgroundImage: `url(${logement.cover})`,
        }}
      >
        <h2>{logement.title}</h2>
      </div>
    </Link>
  );
};


export default Card;
