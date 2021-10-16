import React from 'react';
import { Carousel } from 'react-bootstrap';
import banerImage1 from '../../src/images/banner/banner1.jpg';
import banerImage2 from '../../src/images/banner/banner2.jpg';
import banerImage3 from '../../src/images/banner/banner3.jpg';

const Slider = () => {
    return (
        < >
            <Carousel id="home">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banerImage1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banerImage2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banerImage3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Slider;