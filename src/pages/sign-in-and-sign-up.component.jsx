import React from 'react';

import SignIn from '../components/sign-in/sign-in.component';
import './sign-in-and-sign-up.styles.scss';

import {UserProvider} from '../userContext'
const SignInAndSignUpPage = () => (
  <UserProvider>
  <div className='sign-in-and-sign-up'>
    <SignIn />
  </div>
  </UserProvider>
);

export default SignInAndSignUpPage;
