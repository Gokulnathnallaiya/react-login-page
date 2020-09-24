import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.action";
import { withRouter } from "react-router-dom";

import "./header.styles.scss";

class Header extends React.Component {
  render() {
    return this.props.currentUser ? (
      <div className="header">
        <div className="options">
        <Link className="option" to="/addproduct">
            Add Product
          </Link>
          <Link
            onClick={() => {
              this.props.setCurrentUser(null);
              this.props.history.push({
                pathname: "/",
              });
            }}
            className="option"
            to="/"
          >
            Signout
          </Link>
        </div>
      </div>
    ) : (
      <div className="header">
        <div className="options">
          <Link className="option" to="/">
            Login
          </Link>
          <Link className="option" to="/signup">
            Register
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
