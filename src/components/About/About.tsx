import React from "react";
import RestaurantA from 'assets/restaurant.jpg';
import RestaurantB from 'assets/restaurantB.jpg';
import './About.css'

const DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

type AboutProps = {
 isVisible: boolean;
}

function About({ isVisible }: AboutProps) {
  return (
      <section className='about-content wrapper' id='about'>
          <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>{DESCRIPTION}</p>
          </article>
          {isVisible && (
            <section className="images-container">
              <img height={338} width={276} src={RestaurantA} alt="Little Lemon restaurant cuisine 1" />
              <img height={338} width={276} className="img_2" src={RestaurantB} alt="Little Lemon restaurant cuisine 2" />
            </section>
            )}
        </section>
  )
}

export default About;
