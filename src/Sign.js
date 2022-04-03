import React from 'react'
import  './Sign.css'

function Sign() {
  return (
    <div className="center">
    <h1>Sign In</h1>
     
         <div className="textfild">
             <input type='text' placeholder='enter Username'></input>
             <span></span>
             <label >Username</label>
         </div>
         <div className="textfild">
            <input type="password"  placeholder='Enter password'></input>
            <span></span>
            <label >Password</label>
        </div>
        
        <button type="submit" className='signwala' >Sign</button>
        
        
        
        </div>
    
       
     
  
  );
};

export default Sign;