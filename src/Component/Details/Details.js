import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';


const Details = () => {
    const { uID } = useParams();
    const itemIdInt = parseInt(uID);

    const [value, setValue] = useState([]);
    const [found, setFound] = useState([]);
    useEffect(() => {
        fetch('/Doctors.json')
            .then(res => res.json())
            .then(data => setValue(data));
    }, []);


    useEffect(() => {

        let data = value.find(element => element.id === itemIdInt);
        setFound(data);
    }, [value, itemIdInt]);






    return (
<div className="container mb-5 mt-5">
            <Card className="mx-auto mb-5 p-2" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={found?.image} />
                <Card.Body className="mb-5">
                    <Card.Title>{found?.name}</Card.Title>
                    <Card.Text className="text-secondary">
                        {found?.category}
                    </Card.Text>
                    <Card.Text>
                    {found?.hosptal}
                    </Card.Text>
                    <Card.Text >
                    {found?.fee}$
                    </Card.Text>
                    <Card.Text >
                        <Button variant="primary">Get Appointment</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Details;