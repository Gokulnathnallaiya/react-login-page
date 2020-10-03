import React from 'react';
import './App.css';
//router
import { Switch, Route,Redirect } from 'react-router-dom';

//redux
import { connect } from "react-redux";

//pages
import SignInPage from './pages/signin-signup/sign-in-page.component';
import SignUpPage from './pages/signin-signup/sign-up-page.component';
import LandingPage from './pages/landing-page/landing-page.component';
import AddProductPage from './components/add-product/add-product.component';
import EditProductPage from './components/edit-product/edit-product.component';
import Header from "./components/header/header.component";


class App extends  React.Component {

  constructor(){
    super();
    this.state={}
  }

  render(){
    const {currentUser}=this.props;
  return (
    
    <div className="app">
      <Header/>
      <Switch>
        <Route  path='/signup' component={SignUpPage}/>
        <Route exact path='/' render={()=>currentUser?(<Redirect to="/user"/>):(<SignInPage/>)} />
        <Route path='/user' render={()=>!currentUser?(<Redirect to="/"/>):(<LandingPage/>)} />
        <Route path='/addproduct' render={()=>!currentUser?(<Redirect to="/"/>):(<AddProductPage/>)} />
        <Route path='/editproduct' render={()=>!currentUser?(<Redirect to="/"/>):(<EditProductPage/>)} />
      </Switch>
      
    </div>
    
  );
}}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  role: state.user.role,
});


export default connect(mapStateToProps)(App);
