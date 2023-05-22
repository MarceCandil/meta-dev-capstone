/* eslint-disable testing-library/no-wait-for-side-effects */
import React from 'react';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const setup = () => render(
    <BrowserRouter>
      <BookingForm availableTimes={availableTimes} updateTimes={jest.fn()} submitForm={jest.fn()} />
    </BrowserRouter>
  );

  it('should render Booking Form', () => {
    setup()
    expect(screen.getByTestId('booking-form')).toBeInTheDocument();
  });

  it('should submit reservation', async() => {
    const updateTimes = jest.fn();
    const formData = jest.fn();

    render(
      <BrowserRouter>
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={formData} />
      </BrowserRouter>
    )
    const submitButton = screen.getByTestId("submit-btn") as HTMLButtonElement;

    expect(submitButton).toBeDisabled();

    const nameInput = screen.getByTestId("firstName") as HTMLInputElement;
    await waitFor(() => {
      fireEvent.change(nameInput, { target: { value: "Pepe San" } });
      expect(nameInput.value).toBe('Pepe San')
    });

    const emailInput = screen.getByTestId("email") as HTMLInputElement;
    await waitFor(() => {
      fireEvent.change(emailInput, { target: { value: "pepe@gmail.com" } });
      expect(emailInput.value).toBe('pepe@gmail.com')
    });


    const phoneInput = screen.getByTestId("phone") as HTMLInputElement;
    await waitFor(() => {
       fireEvent.change(phoneInput, { target: { value: 123123 } });
       expect(phoneInput.value).toBe('123123')
    });


    const dateInput = screen.getByTestId("date") as HTMLInputElement;
    await waitFor(() => {
      fireEvent.change(dateInput, { target: { value: "2023-05-31" } });
      expect(dateInput.value).toBe('2023-05-31')
    });


    const timeSelect = screen.getByTestId("time") as HTMLInputElement;
    await waitFor(() => {
      fireEvent.change(timeSelect, { target: { value: "18:00" } });
      expect(timeSelect.value).toBe('18:00')
    });


    const guestsSelect = screen.getByTestId("guests") as HTMLInputElement;
    await waitFor(() => {
      fireEvent.change(guestsSelect, { target: { value: 1 } });
      expect(guestsSelect.value).toBe('1')
    });


    const occasionSelect = screen.getByTestId("occasion") as HTMLInputElement;
    await waitFor(() => {
      fireEvent.change(occasionSelect, { target: { value: "anniversary" } });
      expect(occasionSelect.value).toBe('anniversary')
    });

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
      fireEvent.click(submitButton);
    });

    await waitFor(() =>
      expect(formData).toHaveBeenCalledWith({
        date: "2023-05-31",
        email: "pepe@gmail.com",
        firstName: "Pepe San",
        guests: 1,
        occasion: "anniversary",
        phone: 123123,
        time: "18:00",
      }),
    )
  });
});
