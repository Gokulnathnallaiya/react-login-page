import React, { useContext } from 'react';
import { useLocation } from "react-router-dom";
import "./landing-page.styles.css";

const LandingPage = ()=>{
    


 
 const user = JSON.parse(localStorage.getItem('userdetail'));
 console.log(localStorage)
    return (
        <div className='content'>
            <h1> Welcome Back</h1>
            <span className="span">{user.email}</span>

        </div>
    )
}

export default LandingPage;
