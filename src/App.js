import React,{useContext}from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {UserContext} from './userContext';


import './App.css';
import SignInPage from './pages/sign-in-page.component';
import SignUpPage from './pages/sign-up-page.component';
import Header from './components/header/header.component'
import LandingPage from './pages/landing-page.component';


function App() {
  const { userstate } = useContext(UserContext);
  const [user, setUser] = userstate;
  if (user.loggedIn){
    return (
      <Redirect to="/user"/>
    )
  }
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
