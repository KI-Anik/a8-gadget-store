import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const {id, product_title, product_image, price } = card

    return (
        <div className="card bg-base-100  shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_title}</h2>
                <p>{price}</p>
                <div className="card-actions">
                    <Link to={`/details/${id}`}>
                    <button  className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;