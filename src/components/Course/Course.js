import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    // Destructuring using
    const {img, name, description, price} = props.service;
    
    return (
        <div>
             <Col className="shadow-lg">
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-primary">{description}</Card.Title>
                        <div>
                            <p>{name}</p>
                            <h4>${price}</h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;