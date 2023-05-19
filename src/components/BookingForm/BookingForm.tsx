import React from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import './BookingForm.css';
import FormError from '../FormError/FormError';

function BookingForm() {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 0,
      occasion: 'none',
      comments: ''
    },
    onSubmit: (values) => {
      console.log('🚀 ~ file: BookingForm.tsx:33 ~ BookingForm ~ values:', values)
      // submit('', values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address'),
      phone: Yup.number().required('Required'),
      date: Yup.string().required('Required'),
      time: Yup.string().required('Required'),
      guests: Yup.number().required('Required'),
      occasion: Yup.string(),
      comment: Yup.string()
    }),
  });

  return (
    <form className='booking-form' onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Name</label>
      <input id="firstName" {...formik.getFieldProps('firstName')} />
      <FormError formik={formik} id='firstName'/>

      <label htmlFor="email">Email</label>
      <input id="email" {...formik.getFieldProps('email')} />
      <FormError formik={formik} id='email'/>

      <label htmlFor="phone">Phone Number</label>
      <input id="phone" {...formik.getFieldProps('phone')} />
      <FormError formik={formik} id='phone'/>

      <label htmlFor="date">Choose date</label>
      <input id="date" type="date" {...formik.getFieldProps('date')} />
      <FormError formik={formik} id='date'/>

      <label htmlFor="time">Choose time</label>
      <select id="time" {...formik.getFieldProps('time')}>
          <option value='17:00'>17:00</option>
          <option value='18:00'>18:00</option>
          <option value='19:00'>19:00</option>
          <option value='20:00'>20:00</option>
          <option value='21:00'>21:00</option>
          <option value='22:00'>22:00</option>
      </select>
      <FormError formik={formik} id='time'/>

      <label htmlFor="guests">Number of guests</label>
      <input id="guests" type="number" placeholder="1" min="1" max="10" {...formik.getFieldProps('guests')}/>
      <FormError formik={formik} id='guests'/>

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" {...formik.getFieldProps('occasion')}>
          <option value='none'>None</option>
          <option value='birthday'>Birthday</option>
          <option value='anniversary'>Anniversary</option>
          <option value='other'>Other</option>
      </select>
      <FormError formik={formik} id='occasion'/>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
