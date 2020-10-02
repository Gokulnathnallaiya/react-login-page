import React from 'react';
import "./card.styles.css";

//router
import { withRouter } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { setCurrentUser,setRole } from "../../redux/user/user.action";


const Card = ({price,stock,name,handlechange,role})=>(
    <div className="card-container">
        
        <h3 className="productname">{name}</h3>
        <h3>Price: {price}</h3>
        <h3>Available:{stock}</h3>
        <button onClick={handlechange}className="custom-button">Edit</button>

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