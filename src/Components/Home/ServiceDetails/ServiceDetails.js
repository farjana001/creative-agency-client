import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({ services }) => {
    const { title, icon, details } = services;

    return (
        <Link to="/login" className="col-md-4 nav-link">
            <div className="service-card text-center my-5 p-5">
                <img className="img-fluid w-25" src={icon} alt="" />
                <h5 style={{ fontWeight: '700' }} className="header-text mt-3 mb-2">{title}</h5>
                <p className="text-p px-3">{details}</p>
            </div>
        </Link>
    );
};

export default ServiceDetails;