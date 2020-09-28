import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import axios from "axios";
import { withRouter,Link} from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser,setRole } from "../../redux/user/user.action";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      password: "",
      loading: false,
      role:"user",
    };
  }
  
  componentDidMount() {
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    axios
      .post("https://express-sql-app.herokuapp.com/user/login", {
        email: this.state.email,
        password: this.state.password,
        role: this.state.role,
      })
      .then((response) => {
        if (response.data.success ===1 ) {

          this.props.setCurrentUser(this.state.email);
          this.props.setRole(this.state.role);
          this.setState({ loading: false });
          this.props.history.push({
            pathname: "/user",
          });
        } else {
          this.setState({ loading: false });
          alert("Invalid Login Credentials");
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
        alert("Please try again, error occured");
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password, loading } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <div className="sign-in">
          <h4>Login as User</h4>

          <form onSubmit={handleSubmit}>
            <FormInput
              name="email"
              type="email"
              onChange={handleChange}
              value={email}
              label="email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              label="password"
              required
            />
            <div className="buttonandloader">
              <CustomButton type="submit"> Sign in </CustomButton>
              {loading ? (
                <div className="container">
                  <div className="loader"></div>
                </div>
              ) : null}
            </div>
          </form>
          
        </div>
        {/* <div className="belowlinks">
        <Link className="option" to="/moderatorlogin">
            Moderator Login
          </Link>
          <Link className="option" to="/adminlogin">
           Admin Login
          </Link>
        </div> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setRole: (role)=> dispatch(setRole(role))
});

export default connect(null, mapDispatchToProps)(withRouter(SignIn));
