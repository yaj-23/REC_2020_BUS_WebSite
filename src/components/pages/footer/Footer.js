import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';

import {
  FaBus
} from 'react-icons/fa';

function Footer() {
  return (
    
    <div className='footer-container'>
    
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 className="team">Our Team</h2>
            <a href='https://www.linkedin.com/in/yajurva-trivedi/'>Yajurva Trivedi</a>
            <a href='https://www.linkedin.com/in/kevin-dang-0406199a/'>Kevin Dang</a>
            <a  href='https://www.linkedin.com/in/ryan-pacheco/'>Ryan Pacheco</a>
            <a href='https://www.linkedin.com/in/wayne-sie/'>Wayne Sie</a>

          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
          </div>
        </div>
      </div>
      {
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <FaBus className="navbar-icon"/>
              TTC Bus Design
            </Link>
          </div>
          
        </div>
            </section> }
    </div>
  );
}

export default Footer;