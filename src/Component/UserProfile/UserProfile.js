import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import pimg from '../../photos/profile.jpg';

const UserProfile = () => {
    const { running } = useAuth();
    const history= useHistory();
    const updateprofile=()=>{
        history.push('/profile')
    }
    return (
        <div className="container mt-5">
            <Card className="mx-auto mb-5 p-2" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={running.photoURL?running.photoURL:pimg} />
                <Card.Body className="mb-5">
                    <Card.Title>{running.displayName}</Card.Title>
                    <Card.Text className="text-secondary">
                        {running.email}
                    </Card.Text>
                    <Card.Text>
                        {running.phoneNumber}
                    </Card.Text>
                    <Card.Text>
                    <Button onClick={updateprofile} variant="primary">Update Profile</Button>
                    </Card.Text>
                    
                </Card.Body>
            </Card>


        </div>
    );
};

export default UserProfile;