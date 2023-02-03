import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'


const Navbar = () => {
  return (
    <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
            <div className="n-name">Milazim</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                    <li>Home</li>    
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                    <li>Services</li>  
                    </Link>
                    <Link spy={true} to='Experience' smooth={true} >
                     <li>Experience</li>   
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li>Portfolio</li>   
                    </Link>
                    
                </ul>
            </div>
            <button className="button n-button">
            <Link spy={true} to='Portfolio' smooth={true}>
                Contact 
                </Link>
            </button>
        </div>

    
    </div>
  )
}

export default Navbar