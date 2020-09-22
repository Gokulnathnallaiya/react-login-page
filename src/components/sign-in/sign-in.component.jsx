import React, { useContext } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import { UserContext } from "../../userContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
const SignIn = (props) => {
  const { userstate } = useContext(UserContext);
  const [user, setUser] = userstate;
  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://express-sql-app.herokuapp.com/login", {
        email: user.email,
        password: user.password,
        role: "student",
      })
      .then(function (response) {
        if (response.data.Token){
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("userdetail", JSON.stringify(user));
          user.loggedIn = true;
          history.push({ pathname: "/user", state: { user: user } });
          

        }
        else{
          alert("Invalid Login Credentials")
        }
       
      })
      .catch(function (error) {

        alert("Invalid Login Credentials")
        
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="sign-in">
      <h4>LOGIN</h4>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={user.email || ""}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={user.password || ""}
          handleChange={handleChange}
          label="password"
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
