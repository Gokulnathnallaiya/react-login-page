import React,{useContext}from 'react';
import { Switch, Route } from 'react-router-dom';
import {UserContext} from './userContext';


import './App.css';
import SignInPage from './pages/sign-in-page.component';
import SignUpPage from './pages/sign-up-page.component';
import Header from './components/header/header.component'

function App() {
  const value = useContext(UserContext);
  console.log(value)
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/signup' component={SignUpPage}/>
        <Route path='/' component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
