import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, price, description, img, } = props.service;
    return (
        <div className="service-container ">
            <div className=" ">
                <img className="" src={img} alt="" />
                <h2 >{name}</h2>
                <h5>Price: {price}</h5>
                <p>{description}</p>
                <Link to={`/booking/${id}`}><button className="btn btn-warning">Book {name.toLowerCase()}</button></Link>
            </div>

        </div>
    );
};

export default Service;