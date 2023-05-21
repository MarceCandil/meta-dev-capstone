import React from "react";
import GreekSaladaImg from 'assets/greek-salad.jpg';
import BruchettaImg from 'assets/bruchetta.jpg';
import LemonDessertImg from 'assets/lemon-dessert.jpg'

import TestimonialBox from 'components/TestimonialBox/TestimonialBox';
import './Testimonials.css'

const TESTIMONIALS = [
  {
    img: GreekSaladaImg,
    name: 'Juan',
    review: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    img: BruchettaImg,
    name: 'Pepe',
    review: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    img: LemonDessertImg,
    name: 'Clara',
    review: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
  {
    img: LemonDessertImg,
    name: 'Louis',
    review: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  }
]

type TestimonialProps = {
  isVisible: boolean;
}

function Testimonials({ isVisible }: TestimonialProps) {
  if(!isVisible) return <></>;

  return (
      <section className='testimonials__wrapper'>
        <section className='wrapper'>
          <h1>Testimonials</h1>
          <div className='testimonials-box-container'>
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialBox
                key={testimonial.name}
                img={testimonial.img}
                name={testimonial.name}
                review={testimonial.review}
              />
            ))}
          </div>
        </section>
      </section>
  )
}

export default Testimonials;
