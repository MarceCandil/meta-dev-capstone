import React from 'react';
import './BookingPage.css';
import Wrapper from '../Wrapper/Wrapper';
import BookingForm from '../BookingForm/BookingForm';

function BookingPage() {

  return (
    <Wrapper height={500}>
      <BookingForm />
    </Wrapper>
  );
}

export default BookingPage;
