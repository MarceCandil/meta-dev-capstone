import React from 'react';
import Wrapper from '../../Wrapper/Wrapper';
import MyButton from '../../Button/Button';
import Card from '../../Card/Card';

import LemonDessertImg from '../../../assets/lemon-dessert.jpg'
import GreekSaladaImg from '../../../assets/greek-salad.jpg';
import BruchettaImg from '../../../assets/bruchetta.jpg';
import './Specials.css';

const SPECIALS = [
  {
    img: GreekSaladaImg,
    title: 'Greek salad',
    price: 12.99,
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    img: BruchettaImg,
    title: 'Bruchetta',
    price: 5.99,
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    img: LemonDessertImg,
    title: 'Lemon Dessert',
    price: 5,
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  }
]

function Specials() {

  return (
    <Wrapper height={650}>
      <div className='specials-header'>
        <h2>Specials</h2>
        <MyButton name='Online Menu' variant='default'/>
      </div>
      <div className='cards-container'>
        <div className='list-cards'>
          {SPECIALS.map((special) => <Card img={special.img} title={special.title} price={special.price} description={special.description}/>)}
        </div>
      </div>
    </Wrapper>
  );
}

export default Specials;