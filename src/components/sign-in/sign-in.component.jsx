import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.action";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      password: "",
      loading: false,
    };
  }
  componentDidMount() {
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    axios
      .post("https://express-sql-app.herokuapp.com/login", {
        email: this.state.email,
        password: this.state.password,
        role: "student",
      })
      .then((response) => {
        if (response.data.Token) {
          this.props.setCurrentUser(this.state.email);
          this.setState({ loading: false });
          this.props.history.push({
            pathname: "/user",
          });
        }
        else{
          this.setState({ loading: false });
          alert('Invalid Login Credentials')
        }
      }).catch((err)=>{
        console.log(err)
        this.setState({ loading: false });
        alert('Invalid Login Credentials')

      })
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
          <h4>LOGIN</h4>

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
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(withRouter(SignIn));
