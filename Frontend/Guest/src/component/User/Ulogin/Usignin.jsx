import React from 'react'
import './Usign.css'
import { Link } from 'react-router-dom'

const Usignin = () => {
  return (
<> 

  <div id='login' className="user-signin-form">
    <h2>Sign In</h2>
    <form>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />
      <input type="submit" value="Login" />
    </form>
      <p className="para-1"><a href='#'>Forgot password</a></p>

    <div >
      <p className="para-2">Don't have an account? <Link to='/signup' className="navbar-link">Signup</Link></p>
    </div>
  </div>

</>

  )
}

export default Usignin
