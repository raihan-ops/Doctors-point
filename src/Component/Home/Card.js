import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
    const { id,category, name, image } = props.doc;
    return (
        <div className="col">
            <div className="card h-100">
                <img className="card-img-top my-img" src={image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{category}</p>
                    <div>
                        <Link to={`/details/${id}`}>

                            <button className="btn btn-primary">More Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;