import React, { useContext } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { UserContext } from "../../userContext";

import axios from "axios";
const SignUp = (props) => {
  const { userstate } = useContext(UserContext);
  const [user, setUser] = userstate;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://express-sql-app.herokuapp.com/register", {
        email: user.email,
        password: user.password,
        role: "student",
      })
      .then(function (response) {
        if (response.data.success === 1){
          alert("Registerd successfully, Please Login")

        }
        else{
          alert("Some error occured")
        }
       
      })
      .catch(function (error) {

        alert("Some error occured")
        
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
        <CustomButton type="submit"> Sign Up </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
