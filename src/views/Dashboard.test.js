import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from './Dashboard';

test('muestra los datos correctamente en el dashboard', async () => {
  render(<Dashboard />);
  await waitFor(() => expect(screen.getByText('Dashboard de Crímenes en Chicago')).toBeInTheDocument());
});
