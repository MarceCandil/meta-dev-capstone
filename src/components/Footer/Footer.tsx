import React from 'react';
import { NavigationLinks } from '../Nav/Nav';
import FooterLogo from '../../assets/footerLogo.png'
import Wrapper from '../Wrapper/Wrapper';
import './Footer.css';

function Footer() {
  return (
    <Wrapper bgColor='#d9d9d9' height={417}>
      <footer>
        <img width={162} height={279} src={FooterLogo} alt='Footer Company Logo' />
        <div className='footer-links-container'>
          <section>
            <p>Doormat Navigation</p>
            <ul>
              {NavigationLinks.map(nav => <li key={nav.name}><a href={nav.path}>{nav.name}</a></li>)}
            </ul>
          </section>
          <section>
            <p>Contact</p>
            <ul>
              <li><a href="/#">Address</a></li>
              <li><a href="/#">Phone Number</a></li>
              <li><a href="/#">Email</a></li>
            </ul>
          </section>
          <section>
            <p>Social Media Links</p>
            <ul>
              <li><a href="/#">Twitter</a></li>
              <li><a href="/#">Instagram</a></li>
              <li><a href="/#">Facebook</a></li>
            </ul>
          </section>
        </div>
      </footer>
    </Wrapper>

  );
}

export default Footer;