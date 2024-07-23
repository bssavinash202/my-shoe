import React, { useState } from 'react';
import '../App.css';
const LoginIn = () => {

  const [action, setAction]=useState('Login');
  return (
    <div className='container'>
      <div className='header'>
        <div className ='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='ipts'>
        {action==='Login'?<div></div>:<div className='ipt'>
           <input type='text' placeholder='Name'></input>
        </div>}
        
        <div className='ipt'>
           <input type='email' placeholder='Email'></input>
        </div>
        <div className='ipt'>
           <input type='password'placeholder='Password'></input>
        </div>
      </div>
      {action==='Sign Up'?<div></div>:<div className='forgot-password'> <span>Forgot password?</span><br/></div>}
      
    <div className='submit-container'>
      <div className={action==='Login'?'submit gr':'submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
      <div className={action==='Sign Up'?'submit gr':'submit'} onClick={()=>{setAction('Login')}}>Login</div>

    </div>
    </div>
  )
}

export default LoginIn;