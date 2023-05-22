import React from 'react';
import dayjs from 'dayjs';
import { useFormik } from "formik";
import * as Yup from 'yup';
import FormError from '../FormError/FormError';
import { BookingData } from './BookingForm.types';
import './BookingForm.css';
import MyButton from 'components/Button/Button';

type BookingFormProps = {
  availableTimes: string[];
  updateTimes: (selectedDate: string) => void;
  submitForm: (formData: BookingData) => void;
}

function BookingForm({ availableTimes, updateTimes, submitForm }: BookingFormProps) {
  const minDate = dayjs().add(0, 'day').format('YYYY-MM-DD');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      phone: 0,
      date: '',
      time: '',
      guests: 0,
      occasion: 'none',
    },
    onSubmit: (values, { resetForm }) => {
      submitForm(values)
      resetForm()
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').notRequired(),
      phone: Yup.number().required('Required'),
      date: Yup.date().min(minDate, 'Min date cannot be a date earlier than the current one.').required('Required'),
      time: Yup.string().required('Required'),
      guests: Yup.number().min(1).max(10).required('Required'),
      occasion: Yup.string<'none' | 'birthday' | 'anniversary' | 'other'>(),
      comment: Yup.string()
    }),
  });

  return (
    <form className='booking__form' onSubmit={formik.handleSubmit} data-testid='booking-form'>
      <label htmlFor="firstName">Name <span style={{color: 'red'}}>*</span></label>
      <input data-testid="firstName" id="firstName" {...formik.getFieldProps('firstName')} />
      <FormError formik={formik} id='firstName'/>

      <label htmlFor="email">Email</label>
      <input data-testid="email" id="email" {...formik.getFieldProps('email')} />
      <FormError formik={formik} id='email'/>

      <label htmlFor="phone">Phone Number <span style={{color: 'red'}}>*</span></label>
      <input data-testid="phone" id="phone" type='number' {...formik.getFieldProps('phone')} />
      <FormError formik={formik} id='phone'/>

      <label htmlFor="date">Choose date <span style={{color: 'red'}}>*</span></label>
      <input
        id="date"
        type="date"
        data-testid="date"
        {...formik.getFieldProps('date')}
        onBlur={(e) => {
          formik.getFieldProps('date').onBlur(e);
          updateTimes(e.target.value)
        }}
      />
      <FormError formik={formik} id='date'/>

      <label htmlFor="time">Choose time <span style={{color: 'red'}}>*</span></label>
      <select data-testid="time" id="time" {...formik.getFieldProps('time')}>
        <option value="" disabled hidden>Choose time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <FormError formik={formik} id='time'/>

      <label htmlFor="guests">Number of guests <span style={{color: 'red'}}>*</span></label>
      <input  data-testid="guests" id="guests" type="number" placeholder="1" min="1" max="10" {...formik.getFieldProps('guests')}/>
      <FormError formik={formik} id='guests'/>

      <label htmlFor="occasion">Occasion</label>
      <select data-testid="occasion" id="occasion" {...formik.getFieldProps('occasion')}>
          <option value="" disabled hidden>Choose occasion</option>
          <option value='none'>None</option>
          <option value='birthday'>Birthday</option>
          <option value='anniversary'>Anniversary</option>
          <option value='other'>Other</option>
      </select>
      <FormError formik={formik} id='occasion'/>

      <MyButton dataTestid='submit-btn' mt={15} width={320} onClick={() => formik.handleSubmit} name='Make Your reservation' variant={formik.dirty && formik.isValid ? 'default' : 'disabled'}/>
    </form>
  );
}

export default BookingForm;
