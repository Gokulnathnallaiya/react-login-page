import React, { useContext } from 'react';
import { useLocation } from "react-router-dom";

const LandingPage = (user)=>{
    

 const location = useLocation();
    return (
        <div>
            {location.state.user.email}

        </div>
    )
}

export default LandingPage;
