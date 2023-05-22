import React from 'react';
import FooterLogo from 'assets/footerLogo.png'
import { NAVIGATION_LINKS } from 'helpers/statics';
import './Footer.css';

function Footer() {
  return (
      <footer data-testid="footer">
        <section className='footer__wrapper wrapper'>
          <img width={162} height={279} src={FooterLogo} alt='Footer Company Logo' />
          <div className='footer-links-container'>
            <section>
              <p>Doormat Navigation</p>
              <ul>
                {NAVIGATION_LINKS.map(nav => <li key={nav.name}><a href={nav.path}>{nav.name}</a></li>)}
              </ul>
            </section>
            <section>
              <p>Contact</p>
              <ul>
                <li><span>EverGreen 123</span></li>
                <li><span>+123 123444</span></li>
                <li><span>info@littleLemon.com</span></li>
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
        </section>
      </footer>
  );
}

export default Footer;