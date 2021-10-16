import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, cost, id, img, } = props.service;
    return (
        <div className="service-container ">
            <div className=" ">
                <img className="" src={img} alt="" />
                <h1 >{name}</h1>
                <h5>Price: {cost}</h5>
            </div>

        </div>
    );
};

export default Service;