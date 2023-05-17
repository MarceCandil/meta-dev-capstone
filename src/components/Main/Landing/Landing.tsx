import React from 'react';
import Wrapper from '../../Wrapper/Wrapper';
import MyButton from '../../Button/Button';
import RestaurantFoodImage from '../../../assets/restauranfood.jpg';
import './Landing.css';

const DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

type LandingProps = {
  isVisible: boolean;
};

function Landing({ isVisible }: LandingProps) {
  return (
    <Wrapper bgColor='#495E57' height={406} mb={isVisible ? 80 : 10}>
        <div className='landing-content'>
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>{DESCRIPTION}</p>
            <MyButton name='Reserve a Table' variant='default'/>
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
      </div>
    </Wrapper>
  );
}

export default Landing;