import React from 'react';
import './header.css';
import StudnetImg from '../../images/Studnet logo.jpeg';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header> 
      <img src={StudnetImg} alt="" />
        <nav>
            <ul className='nav__list'>
                <li>
                  <Link to='/' className='Link-element'>Home</Link>
                </li>
                <li>
                <Link to='#about' className='Link-element'>About us</Link>
                </li>
                <li>
                <Link to='/' className='Link-element'>Contacts</Link>
                </li>
                <div className='buttons'>

                <Link to='/Signup' className='btn-link'>
                <button className='btn'>Sign up</button>
                </Link>

                <Link to='/Login' className='btn-link'>
                <button className='btn'>Log in</button>
                </Link>
                
                <Link to='https://discord.com/' target='blank' className='btn-link'>
                <button className='btn'>Join us</button>
                </Link>
                
                </div>
            </ul>
        </nav>
    </header>
  )
}

export default Header