import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import {  useLocation, useHistory } from 'react-router-dom';

const MyProfile = () => {
    const { running,updateProfile } = useAuth();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    console.log(running);

    
    const history = useHistory();
    
   

    
    const handleName = e => {
        setName(e.target.value);
        
    }
    const handlePhone = e => {
        setPhone(e.target.value);
        
    }

    const handleUpdateName = (e) => {
        e.preventDefault();
        
        updateProfile(running, {
            phoneNumber:phone,
            displayName:name        
          }).then(() => {
            // Profile updated!
            // ...
            history.push('/userprofile');
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }


    return (
        <div>
            <h2 className="mt-5">Update Your profile</h2>
           
            <form onSubmit={handleUpdateName} className="mt-5 ">
                <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                <br />
                <input onBlur={handleName} class="form-control w-50 mx-auto" type="text" name="" id="" placeholder="Your Name" required/>
                <br />
                <label for="exampleFormControlInput1" class="form-label">Your Phone Number</label>
                <br />
                <input onBlur={handlePhone} class="form-control w-50 mx-auto" type="text" name="" id="" placeholder="Phone number" required />
                <br />
               

                <input className="btn btn-primary " type="submit" value="Update" />
            </form>
        </div>
    );
};

export default MyProfile;