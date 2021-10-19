import React from 'react';
import { Container, Nav, Navbar ,Button} from 'react-bootstrap';
import { Link ,useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';
import { HashLink } from 'react-router-hash-link';



const Header = () => {
    const { user, logout } = useAuth();
    const history= useHistory();
    const handleProfile=()=>{
        history.push('/profile')
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Doctors Point</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-white" as={HashLink} to="/home#banner">Home</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink} to="/home#ambulance">Ambulance</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link className="text-white me-3" as={HashLink} to="/userprofile">User Profile</Nav.Link>
                        <div onClick={handleProfile}>
                        {
                            user?.displayName?
                            <Navbar.Text className="d-lg-flex align-items-center"  >
                            <i class="fas fa-user-circle fa-2x "></i><span className="ms-1">{user.displayName}</span> 
                           
                        </Navbar.Text>
                            :
                            <Navbar.Text className="d-lg-flex align-items-center">
                           <i class="fas fa-user-circle fa-2x"></i> <span className="ms-1">{user.email}</span>
                        </Navbar.Text>
                           
                        }
                        </div>
                        


                        {user?.email ?
                            <Button className="ms-5" onClick={logout} variant="light">Logout</Button> :
                            <Nav.Link className="ms-5 text-white" as={Link} to="/login">Login</Nav.Link>
                            }
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>


    );
};

export default Header;