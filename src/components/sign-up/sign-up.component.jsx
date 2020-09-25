import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";

class SignIn extends React.Component {
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
  componentDidMount() {
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    if (this.state.password !== this.state.confirmpassword) {
      this.setState({ loading: false });
      alert("passwords mismatch");
      return;
    }
    console.log(this.state);
    axios
      .post("https://express-sql-app.herokuapp.com/user/register", {
        email: this.state.email,
        password: this.state.password,
        role: "user",
      })
      .then((response) => {
        console.log(response);
        if (response) {
          this.setState({ loading: false });
          alert(response.data.message);
        } 
      })
      .catch((err) => {
        this.setState({ loading: false });
        alert("An error occured,please try again");
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password, loading, confirmpassword } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <div className="sign-in">
          <h4>Register as User</h4>

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
            <FormInput
              name="confirmpassword"
              type="password"
              value={confirmpassword}
              onChange={handleChange}
              label="confirm password"
              required
            />
            <div className="buttonandloader">
              <CustomButton type="submit"> Sign Up  </CustomButton>
              {loading ? (
                <div class="container">
                  <div class="loader"></div>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
