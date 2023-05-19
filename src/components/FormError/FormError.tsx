import React from 'react';
import { FormikValues } from "formik";
import './FormError.css';

type FormErrorProps = {
  formik: FormikValues;
  id: string;
}

function FormError({ formik, id }: FormErrorProps) {
  return (
    <span className='form-error'>{formik.touched[id] && formik.errors[id]}</span>
  )
}

export default FormError;
