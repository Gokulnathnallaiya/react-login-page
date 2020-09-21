import React,{useContext} from 'react';

import './form-input.styles.scss';
import {UserContext} from '../../userContext'

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const {userstate}= useContext(UserContext);
  const [user,setUser] = userstate

  return (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          user.email? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>)
};

export default FormInput;
