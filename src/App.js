import React from 'react';
import { Switch, Route } from 'react-router-dom';



import './App.css';
import SignInPage from './pages/sign-in-page.component';
import SignUpPage from './pages/sign-up-page.component';
import Header from './components/header/header.component'
import LandingPage from './pages/landing-page.component';


function App() {
  return (
    
    <div>
      <Header/>
      <Switch>
        <Route  path='/signup' component={SignUpPage}/>
        <Route exact path='/' component={SignInPage} />
        <Route path='/user' component={LandingPage} />
      </Switch>
      
    </div>
    
  );
}

export default App;
