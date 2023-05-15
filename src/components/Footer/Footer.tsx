import React from 'react';
import { NavigationLinks } from '../Nav/Nav';

function Footer() {
  return (
      <footer>
        <img src="" alt="" />
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
      </footer>
  );
}

export default Footer;