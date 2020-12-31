import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes, FaBus} from 'react-icons/fa';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu =()=> setClick(false);
    
  


    return (
        <>
        <IconContext.Provider value={{color: 'fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo"  onClick={closeMobileMenu}>
                        <FaBus className="navbar-icon"/>
                        SMART BUS REDESIGN
                    </Link>


                    <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}  
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Our Plan
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Initial Design
                            </Link>
                        </li>



                    </ul>

                </div>
            </div> 
            </IconContext.Provider>  
        </>
    )
}

export default Navbar
