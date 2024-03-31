import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <form action="">
      <h1>Login</h1>
      <input type="email" placeholder='email' />
      <input type="password" placeholder='password'/>
      <button>Login</button>
      <p>Don't have an account <Link to='/Signup' className='Link-element-log'>Sign up</Link></p>
    </form>
    
    </>
  )
}

export default Login