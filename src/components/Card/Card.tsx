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
      <section className='card-container'>
      <img
        loading="lazy"
        width='264'
        height="185"
        src={img}
        alt="logo"
      />
      <div className='card-content'>
        <div className='card-header'>
          <span className='card-title'>{title}</span>
          <span className='card-price'>{`$ ${price}`}</span>
        </div>
        <span className='card-description'>{description}</span>
        <div className='card-footer'>
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