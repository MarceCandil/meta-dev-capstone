import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../Button/Button';
import Card from '../Card/Card';

import { SPECIALS } from 'helpers/statics';
import './Specials.css';



function Specials() {
  const navigate = useNavigate()

  return (
    <section className='specials__wrapper wrapper'>
      <div className='specials__header'>
        <h2>Specials</h2>
        <MyButton onClick={() => navigate("menu")} name='Online Menu' variant='default'/>
      </div>
      <div className='cards__container'>
        <div className='cards__list'>
          {SPECIALS.map((special) => <Card key={special.title} img={special.img} title={special.title} price={special.price} description={special.description}/>)}
        </div>
      </div>
    </section>
  );
}

export default Specials;