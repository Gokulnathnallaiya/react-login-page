import React,{useContext} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';
import {UserContext} from '../../userContext'

const SignIn = ()=>{
  const {userstate}= useContext(UserContext);
  const [user,setUser] = userstate
  const handleSubmit = event => {
    console.log(user)
  };

  const handleChange = event => {
    const {name , value} = event.target   
    setUser(prevState => ({
        ...prevState,
        [name] : value
    }))
    console.log(user)
}



    
  



  return (
          <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={user.email || ""}
            label='email'
            required
            
          />
          <FormInput
            name='password'
            type='password'
            value={user.password || ""}
            handleChange={handleChange}
            label='password'
            required
          />
          <CustomButton type='submit'> Sign in </CustomButton>
        </form>
      </div>
    
    
  )


}


export default SignIn;
