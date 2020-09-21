import React from 'react';

import SignUp from '../components/sign-up/sign-up.component';
import './sign-in-page.styles.scss';

import {UserProvider} from '../userContext'
const SignUpPage = () => (
  <UserProvider>
  <div className='sign-in-and-sign-up'>
    <SignUp />
  </div>
  </UserProvider>
);

export default SignUpPage;
