import React from 'react';
import "./card.styles.css";
import { connect } from "react-redux";
import { setCurrentUser,setRole } from "../../redux/user/user.action";
import { withRouter } from "react-router-dom";

const Card = ({price,stock,name,handlechange,role})=>(
    <div className="card-container">
        
        <h3 className="productname">{name}</h3>
        <h3>Price: {price}</h3>
        <h3>Available:{stock}</h3>
        {role==="moderator"|| role==="superadmin"?
        <button onClick={handlechange}className="custom-button">Edit</button>:null}

    </div>
)
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    role:state.user.role,
  });
  const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    setRole: (role) => dispatch(setRole(role)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Card));