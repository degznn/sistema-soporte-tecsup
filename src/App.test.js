import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
  window.confirm = jest.fn(() => true);
});

function abrirFormulario() {
  fireEvent.click(screen.getByRole('button', { name: /nueva solicitud/i }));
}

function registrar(titulo = 'No puedo acceder al correo') {
  abrirFormulario();
  fireEvent.change(screen.getByPlaceholderText('Ej. No puedo acceder al correo'), { target: { value: titulo } });
  fireEvent.change(screen.getByPlaceholderText('Describe brevemente el problema'), { target: { value: 'El sistema muestra un error al iniciar sesión.' } });
  fireEvent.change(screen.getByPlaceholderText('Ej. Diego Condori'), { target: { value: 'Diego Condori' } });
  fireEvent.click(screen.getByRole('button', { name: /registrar solicitud/i }));
}

test('muestra el dashboard y abre el formulario', () => {
  render(<App />);
  expect(screen.getByText('Panel de solicitudes')).toBeInTheDocument();
  abrirFormulario();
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});

test('valida campos obligatorios y registra una solicitud', () => {
  render(<App />);
  abrirFormulario();
  fireEvent.click(screen.getByRole('button', { name: /registrar solicitud/i }));
  expect(screen.getByText('Ingresa un título.')).toBeInTheDocument();
  expect(screen.getByText('Ingresa una descripción.')).toBeInTheDocument();
  registrar();
  expect(screen.getByText('No puedo acceder al correo')).toBeInTheDocument();
  expect(screen.getAllByText('1').length).toBeGreaterThan(0);
});

test('actualiza estado, filtra y elimina una solicitud', () => {
  render(<App />);
  registrar('Equipo no enciende');
  fireEvent.change(screen.getByLabelText('Actualizar estado'), { target: { value: 'resuelta' } });
  expect(screen.getAllByText('Resuelta').length).toBeGreaterThan(0);
  fireEvent.click(screen.getByRole('button', { name: 'Resueltas' }));
  expect(screen.getByText('Equipo no enciende')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /eliminar/i }));
  expect(window.confirm).toHaveBeenCalled();
  expect(screen.getByText('No hay solicitudes en esta vista')).toBeInTheDocument();
});
