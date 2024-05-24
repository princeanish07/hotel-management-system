import React from 'react'
import './Usign.css'
import { Link } from 'react-router-dom'

const Usignin = () => {
  return (
    <div id='login' className="user-signin-form">
        <h2>Sign In</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <input type="button" value="Login" />
          <a href='#'>Forgot password</a>
          
          
        </form>
        <div className="user-signup">
            <p>Don't have an account? <a ><Link to='/signup' className="navbar-link">Signup</Link></a></p>
        
            
        </div>
      </div>
  )
}

export default Usignin