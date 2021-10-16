import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../images/404.png'
const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" style={{ ' height': '550px' }} src={NotFoundImg} alt="" />
            <br />
            <Link to="/"><button className="btn btn-primary">Go back</button></Link>
        </div>
    );
};

export default NotFound;