import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Course from '../Course/Course';

const Home = () => {
    const [services] = useServices()
    const servicesNew = services.slice(0, 6)
    
    return (
        <div className="container">
            <div className="my-5">
                <Carousel variant="dark">
                    <Carousel.Item interval={3500}>
                        <div className="d-flex align-items-center">
                            <img
                                className="d-block w-50"
                                src="https://www.simplilearn.com/ice9/webinar_thum_image/Digital_Marketing_Tutorial.jpg"
                                alt="First slide"
                            />
                            <div className=" text-center p-5">
                                <h3>Develop a skill and Go Ahead</h3>
                                <p>"A skill may be called an art when it represents a body of knowledge or branch of learning."</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3500}>
                        <div className="d-flex align-items-center">
                            <img
                                className="d-block w-50"
                                src="https://searchengineland.com/figz/wp-content/seloads/2018/04/responsive-design-ss-1.jpg"
                                alt="Second slide"
                            />
                            <div className=" text-center p-5">
                                <h3>Geather Your Knowledge</h3>
                                <p>"Knowledge is a familiarity, awareness, or understanding of someone or something, such as facts, skills, or objects."</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3500}>
                        <div className="d-flex align-items-center">
                            <img
                                className="d-block w-50"
                                src="https://marketinginsidergroup.com/wp-content/uploads/2014/03/content-marketing-5509584_1280.png"
                                alt="Third slide"
                            />
                            <div className=" text-center p-5">
                                <h3>Our Trainer</h3>
                                <p>"Our dedicated team of trainers help you further develop the skills and competencies you need to keep making a difference for your organisation. If you are interested in learning more about becoming a trainer"</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="mt-5">
                <h1 className="text-primary">Learn And Develop Your Skills</h1>
                <p className="text-secondary">A skill set is a combination of abilities, <br /> qualities and experiences you can apply to perform tasks well.</p>
            </div>
            <Row xs={1} md={3} className="g-5 mb-5 p-4">
                {
                    servicesNew.map(service => <Course key={service.id} service={service}></Course>)
                }
            </Row>
        </div>
    );
};


export default Home;