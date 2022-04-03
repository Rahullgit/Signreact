
import './App.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Register (){

  
  const navigator = useNavigate();
  function handleClick () {
    navigator("/Sign")
  }


  const [full, setFull] = useState('');
  const [fullError, setFullError] = useState('');
  
  const [email, setEmail] = useState('');
  const [emailError, setemailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError]=useState('');

  const [successMsg, setSuccessMsg] = useState('');

  const handleFullChange = (e) => {
    setSuccessMsg('');
    setFullError('');
    setFull(e.target.value);
  }

  const handleEmailChange = (e) => {
    setSuccessMsg('');
    setemailError('');
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setSuccessMsg('');
    setPasswordError('');
    setPassword(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(full!==''){

    }
    else{
      setFullError('Name is Required')
    }

    if(email!==''){
       const emailRegex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
    }
    else{
      setemailError('Email Required')
    }

    if(password!==''){

    }
    else {
      setPasswordError('Password is Required')
    }
  }

  return(

    
      <div className='wrapper'>

        <h3>Register From</h3><br></br>
        

        <form className='tittle' autoComplete='off' onSubmit={handleFormSubmit} > 
        {successMsg&&<div className='wala'>{successMsg}</div>} 
        
      
        <div class="input-box">
                    <span class="details">Full Name</span>
                    <input type="text" placeholder='Enter your name' onChange={handleFullChange} value={full} />
                </div>
                {fullError&&<div className='error'>{fullError}</div>}

           
                <div class="input-box">
                    <span class="details">Email</span>
                    <input type="email"  placeholder='enter your email' onChange={handleEmailChange} value={email} />
                </div>
                {emailError&&<div className='error'>{emailError}</div>}


                <div class="input-box">
                    <span class="details">password</span>
                    <input type="password" placeholder='enter your password' onChange={handlePasswordChange} value={password} />
                </div>
                {passwordError&&<div className='error'>{passwordError}</div>}
                <br></br>
          
          <button type='submit' onClick={handleClick}>Register</button><br></br>
          <br></br>
          
         
          

        </form>
      </div>
    
  );
};
export default Register;