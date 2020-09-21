import React from 'react';
import { Switch, Route } from 'react-router-dom';


import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      
      <Switch>
        
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
