import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CrimeForm from './CrimeForm';

test('envía los datos del formulario correctamente', () => {
  render(<CrimeForm />);
  fireEvent.change(screen.getByLabelText(/Fecha/i), { target: { value: '2022-05-20' } });
  fireEvent.change(screen.getByLabelText(/Tipo de Crimen/i), { target: { value: 'robo' } });
  fireEvent.change(screen.getByLabelText(/Descripción/i), { target: { value: 'Descripción del crimen' } });
  fireEvent.click(screen.getByText(/Enviar/i));
  
});
