import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



const Login = () => {
    const { signInUsingGoogle, loginEmailPassword, isLoading, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log(location.state?.from);
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

        loginEmailPassword(email, password)
            .then((result) => {
                history.push(redirect_url);
                console.log(result.user);
            })
            .finally(() => setIsLoading(false));


    }
    const handlegoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div>
            <h2 className="mt-5">Login</h2>
            <form onSubmit={handleSubmit} className="mt-5 ">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <br />
                <input class="form-control w-50 mx-auto" onBlur={handleEmail} type="email" name="" id="" placeholder="Your Email" />
                <br />
                <label for="exampleFormControlInput1" class="form-label ">Password</label>
                <br />
                <input class="form-control w-50 mx-auto" onBlur={handlePassword} type="password" name="" id="" placeholder="Your Password" />
                <br />
                <input className="btn btn-primary " type="submit" value="Sign In" />
            </form>
            <p>new to Doctors Point? <Link to="/register">Create Account</Link></p>
            <br />
            <div>-------or----------</div>
            <button onClick={handlegoogleSignIn} className="btn btn-warning">google signIn</button>
        </div>
    );
};

export default Login;