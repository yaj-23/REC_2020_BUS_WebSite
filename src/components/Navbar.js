import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes, FaBus} from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu =()=> setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton();
    }, []);


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
                    {click ? <FaTimes/> : <FaBars/>}  {/* line just states that if its cliccked and true, show  x else sghow bars*/}
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
