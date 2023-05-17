import React from 'react';
import './TestimonialBox.css';

type TestimonialBoxProps = {
  img: string;
  name: string;
  review: string;
}

function TestimonialBox({ img, name, review }: TestimonialBoxProps) {
  return (
      <section className='testimonial-box'>
        <span className='testimonial-box-title'>Rating</span>
        <div className='testimonial-box-person'>
          <img src={img} alt={name} height={46} width={46} />
          <span>{name}</span>
        </div>
        <span className='testimonial-box-review'>{review}</span>
      </section>
  );
}

export default TestimonialBox;