import React from 'react';
import './header.css';
import StudnetImg from '../../images/Studnet logo.jpeg';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='h-24 bg-white w-[1300px] m-4 p-0 left-[130px] fixed z-50 rounded-full '> 
      <img src={StudnetImg} alt=""  className='imgheader' />
        <nav >
            <ul className='nav__list'>
                <li>
                  <Link to='/' className='Link-element'>Home</Link>
                </li>
                <li>
                <a href="#vision" className='Link-element'>About us</a>
                </li>
                <li>
                <a href="#courses" className='Link-element'>Contacts</a>
                </li>
                <div className='buttons'>

                <Link to='/Signup'>
                <button className='btn'>Sign up</button>
                </Link>

                <Link to='/Login'>
                <button className='btn '>Log in</button>
                </Link>
                
                <Link to='https://discord.com/' target='blank'>
                <button className='btn'>Join us</button>
                </Link>
                
                </div>
            </ul>
        </nav>
    </header>
  )
}

export default Header