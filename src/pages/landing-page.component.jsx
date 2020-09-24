import React from "react";
import "./landing-page.styles.css";
import { connect } from "react-redux";
const LandingPage = ({ currentUser }) => {
  return (
    <div className="content">
      <h1> Welcome Back</h1>
      <span className="span">{currentUser}</span>
    </div>
  ) 
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(LandingPage);
