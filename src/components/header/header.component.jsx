import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser, setRole } from "../../redux/user/user.action";
import { withRouter } from "react-router-dom";

import "./header.styles.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      password: "",
      confirmpassword: "",
      loading: false,
    };
  }

  render() {
    const currentUser = this.props;

    if (!currentUser) {
      return <div>login</div>;
    }

    return this.props.role ? (
      this.props.role === "moderator" ? (
        <div className="header">
          <div className="options">
            <Link className="option" to="/user">
              Home
            </Link>
            <Link className="option" to="/addproduct">
              Add new Product
            </Link>
            <Link
              onClick={() => {
                this.props.setCurrentUser(null);
                this.props.setRole(null);
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
      ) : this.props.role === "superadmin" ? (
        <div className="header">
          <div className="options">
            <Link className="option" to="/user">
              Home
            </Link>
            <Link className="option" to="/addproduct">
              Add new Product
            </Link>
            <Link className="option" to="/create/moderator">
              New Moderator
            </Link>
            <Link
              onClick={() => {
                this.props.setCurrentUser(null);
                this.props.setRole(null);
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
      ) : this.props.role === "user" ? (
        <div className="header">
          <div className="options">
            <Link className="option" to="/user">
              Home
            </Link>
            <Link
              onClick={() => {
                this.props.setCurrentUser(null);
                this.props.setRole(null);
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
      ) : null
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
  role: state.user.role,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setRole: (role) => dispatch(setRole(role)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
