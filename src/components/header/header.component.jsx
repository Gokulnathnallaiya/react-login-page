import React from 'react';
import { Link } from 'react-router-dom';



import './header.styles.scss';

const Header = () => (
  <div className='header'>
    
    <div className='options'>
      <Link className='option' to='/'>
        Login
      </Link>
      <Link className='option' to='/signup'>
        Register
      </Link>   
    </div>
  </div>
);

export default Header;
