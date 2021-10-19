import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Register = () => {
    const { CreateEmailPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        CreateEmailPassword(email, password)
            .then((result) => {
                history.push(redirect_url);

            })


    }

    return (
        <div>
            <div>
                <h2 className="mt-5">Register: Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <br />
                    <input class="form-control w-50 mx-auto" onBlur={handleEmail} type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <label for="exampleFormControlInput1" class="form-label ">Password</label>
                    <br />
                    <input class="form-control w-50 mx-auto" onBlur={handlePassword} type="password" name="" id="" placeholder="Your Password" />
                    <br />

                    <input type="submit" className="btn btn-primary mt-3" value="Sign Up" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>

            </div>
        </div>
    );
};

export default Register;