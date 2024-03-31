import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <form action="">
    <h1>Sign up</h1>
    <input type="text" placeholder='username' />
    <input type="email" placeholder='email' />
    <input type="password" placeholder='password'/>
    <input type="password" placeholder='confirm password'/>

    <button>Sign up</button>
    <p>Already have an account <Link to='/Login' className='Link-element-log'>Log in</Link></p>
  </form>
  )
}

export default Signup