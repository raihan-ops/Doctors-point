import React from 'react';
import img from '../../photos/banner3.jpg'

const About = () => {
    return (
        <div>
             <h2 className="mt-5">About Us</h2>
            <div className="d-lg-flex border border-2 justify-content-center">
                <div>
                    <img src={img} alt="" height="200px" width="200px"/>
                </div>
                <div className="mt-auto mb-auto">
                    
                    <p>A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health. A doctor is tasked with interacting with patients, diagnosing medical problems and successfully treating illness or injury.</p>
                </div>

            </div>
        </div>
    );
};

export default About;