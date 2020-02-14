import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Cards from './Cards';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Renders Nav Header', () => {
  const { getByText } = render (<App />)
  getByText(/Women's World Cup/i);
});

test('concise test - renders animal form header', () => {
  const { getByText } = render (<Cards />)
  getByText(/people/i);
});