import React from 'react';

import SignIn from '../components/sign-in/sign-in.component';
import './sign-in-page.styles.scss';

import {UserProvider} from '../userContext'
const SignInPage = () => (
  <UserProvider>
  <div className='sign-in-and-sign-up'>
    <SignIn />
  </div>
  </UserProvider>
);

export default SignInPage;
