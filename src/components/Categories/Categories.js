import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useCategories from '../../hooks/useCategories';
import './Categories.css'

const Categories = () => {
    const [categories] = useCategories();
    
    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary">Our Categories</h1>
            <Row xs={1} md={3} className="g-5 mb-5 p-4">
                {
                    categories.map(category =>
                        <div key={category.id}>
                            <Col className="shadow-lg">
                                <Card className="hover-card">
                                    <Card.Img variant="top" src={category.img} />
                                    <Card.Body>
                                        <Card.Title className="text-primary">{category.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                    )
                }
            </Row>
        </div>
    );
};

export default Categories;