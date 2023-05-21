import React from 'react';
import { useNavigate } from 'react-router-dom';

import MyButton from 'components/Button/Button';
import RestaurantFoodImage from 'assets/restauranfood.jpg';
import './Landing.css';

const DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

type LandingProps = {
  isVisible: boolean;
};

function Landing({ isVisible }: LandingProps) {
  const navigate = useNavigate()

  return (
      <section className='landing-content'>
        <section className='wrapper'>
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>{DESCRIPTION}</p>
            <MyButton name='Reserve a Table' variant='default' onClick={() => navigate("booking")}/>
          </div>
          {
            isVisible && (
              <img
                loading="lazy"
                width="375px"
                height="435px"
                src={RestaurantFoodImage}
                alt="logo"
              />
            )
          }
        </section>
      </section>
  );
}

export default Landing;