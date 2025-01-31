import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    return (
        <Link to={`/logement/${item.id}`}>
            <div className="card" style={{ 
                backgroundImage: `url(${item.cover})`
            }}>
                <h2>{item.title}</h2>
            </div>
        </Link>
    );
};

export default Card;
