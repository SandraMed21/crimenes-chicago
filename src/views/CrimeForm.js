import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CrimeForm = () => {
  const initialValues = { date: '', type: '', description: '' };

  const validationSchema = Yup.object({
    date: Yup.string().required('Fecha es requerida'),
    type: Yup.string().required('Tipo de crimen es requerido'),
    description: Yup.string().required('Descripción es requerida'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    fetch('http://localhost:3001/crimes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        resetForm();
      })
      .catch(error => console.error('Error:', error))
      .finally(() => setSubmitting(false));
  };
  

  return (
    <div>
      <h1>Formulario de Crimen</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="date">Fecha</label>
              <Field type="date" name="date" />
              <ErrorMessage name="date" component="div" />
            </div>
            <div>
              <label htmlFor="type">Tipo de Crimen</label>
              <Field as="select" name="type">
                <option value="">Seleccione un tipo</option>
                <option value="robo">Robo</option>
                <option value="asalto">Asalto</option>
                <option value="vandalismo">Vandalismo</option>
              </Field>
              <ErrorMessage name="type" component="div" />
            </div>
            <div>
              <label htmlFor="description">Descripción</label>
              <Field as="textarea" name="description" />
              <ErrorMessage name="description" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CrimeForm;
