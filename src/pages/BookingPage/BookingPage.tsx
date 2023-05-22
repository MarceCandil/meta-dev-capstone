import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import bookingReducer from 'reducer/BookingReducer';
import { BookingData } from 'components/BookingForm/BookingForm.types';
import { fetchAPI, submitAPI } from 'helpers/bookingApis';
import BookingForm from 'components/BookingForm/BookingForm';
import './BookingPage.css';

function BookingPage() {
  const navigate = useNavigate();

  const initializeTimes = () => {
    const currentDate = new Date();
    return fetchAPI(currentDate);
  };

  const [availableTimes, dispatch] = useReducer(
    bookingReducer,
    initializeTimes()
  );

  const updateTimes = (date: string) => {
    dispatch({ type: "update-times", payload: date });
  };

  const submitForm = (formData: BookingData) => {
    const result = submitAPI(formData);
    if (result) {
      let existingBookings = JSON.parse(
        localStorage.getItem("booking-data")!
      );
      if (existingBookings) {
        existingBookings.unshift(formData);
        localStorage.setItem(
          "booking-data",
          JSON.stringify(existingBookings)
        );
      } else {
        localStorage.setItem(
          "booking-data",
          JSON.stringify([formData])
        );
      }
      navigate("/confirmation");
    }
  };

  return (
    <section className='booking__container wrapper'>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
