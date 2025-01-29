import React from 'react';
import './Card.scss';
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate(`/logement/${item.id}`, { state: { item } }); 
    };
    return (
        <div onClick={handleClick} className="card" style={{ 
            backgroundImage: `url(${item.cover})`
          }}>
            
            <h2>{item.title}</h2>
        </div>
    );
};

export default Card;
