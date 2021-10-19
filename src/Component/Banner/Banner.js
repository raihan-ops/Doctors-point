import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../photos/banner1.jpg';
import banner2 from '../../photos/banner2.jpg';
import banner3 from '../../photos/banner3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
             <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block cm-img"
                        src={banner3}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-black">
                        <h3>First Piority </h3>
                        <p>Professionalism</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block cm-img"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3>Second Piority</h3>
                        <p>Responsibility</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block cm-img"
                        src={banner1}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3>Third Piority</h3>
                        <p>Kindness</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;