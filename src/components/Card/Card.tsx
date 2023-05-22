import React from 'react';
import DeliveryIcon from '../../assets/deliveryIcon.png'
import './Card.css';

type CardProps = {
  img: string;
  title: string;
  price: number;
  description: string;
}

function Card({ img, title, price, description }: CardProps) {
  return (
      <section className='card__container'>
      <img
        loading="lazy"
        width='264'
        height="185"
        src={img}
        alt="logo"
      />
      <div className='card__content'>
        <div className='card__header'>
          <span className='card__title'>{title}</span>
          <span className='card__price'>{`$ ${price}`}</span>
        </div>
        <span className='card__description'>{description}</span>
        <div className='card__footer'>
          <span>Order a Delivery</span>
          <img
            loading="lazy"
            width='17'
            height="11"
            src={DeliveryIcon}
            alt="deliveryIcon"
          />
        </div>
      </div>
      </section>
  );
}

export default Card;