import React from 'react';
import { Switch, Route } from 'react-router-dom';



import './App.css';
import SignInPage from './pages/sign-in-page.component';

import ModSignInPage from './components/sign-in/sign-in-mod.component';
import AdminSignInPage from './components/sign-in/sign-in-superadmin.component';
import SignUpPage from './pages/sign-up-page.component';
import Header from './components/header/header.component'
import LandingPage from './pages/landing-page.component';
import AddProductPage from './components/add-product/add-product.component';
import EditProductPage from './components/edit-product/edit-product.component';
import CreateModerator from "./components/create-moderator/create-mod.component";


function App() {
  return (
    
    <div className="app">
      <Header/>
      <Switch>
        <Route  path='/signup' component={SignUpPage}/>
        <Route exact path='/' component={SignInPage} />
        <Route exact path='/moderatorlogin' component={ModSignInPage} />
        <Route exact path='/adminlogin' component={AdminSignInPage} />
        <Route path="/create/moderator" component={CreateModerator} />
        <Route path='/user' component={LandingPage} />
        <Route path='/addproduct' component={AddProductPage} />
        <Route path='/editproduct' component={EditProductPage} />
      </Switch>
      
    </div>
    
  );
}

export default App;
