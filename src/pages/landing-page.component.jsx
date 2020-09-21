import React, { useContext } from 'react';
import { useLocation } from "react-router-dom";
import "./landing-page.styles.css";

const LandingPage = (user)=>{
    

 const location = useLocation();
    return (
        <div className='content'>
            <h1> Welcome Back</h1>
            <span className="span">{location.state.user.email}</span>

        </div>
    )
}

export default LandingPage;
