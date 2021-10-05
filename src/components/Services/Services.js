import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Course from '../Course/Course';

const Services = () => {
    const [services] = useServices()
    
    return (
        <div className="container">
            <div className="mt-5 text-center">
                <h1 className="text-primary">Our Services</h1>
            </div>
            <Row xs={1} md={3} className="g-5 p-4">
                {
                    services.map(service => <Course key={service.id} service={service}></Course>)
                }
            </Row>
        </div>
    );
};

export default Services;