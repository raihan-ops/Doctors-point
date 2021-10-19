import React from 'react';
import bus from '../../photos/ambulance.jpg';

const Ambulance = () => {
    return (
        <div>
            <h2 className="mt-5">Ambulance Sevices</h2>
            <div className="d-lg-flex border border-2 justify-content-center">
                <div>
                    <img src={bus} alt="" />
                </div>
                <div className="mt-3">
                    <h5 className="fw-bold">Phone No :</h5>
                    <p>0170000000</p>
                    <p>0190000000</p>
                </div>

            </div>
        </div>

    );
};

export default Ambulance;