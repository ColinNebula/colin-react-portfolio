// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '../components/Navigation';

afterEach(cleanup);

describe('Navigation component', () => {
  it('renders', () => {
    render(<Navigation />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Navigation />);
    
    expect(asFragment()).toMatchSnapshot();
  });
})

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
  const { getByLabelText } = render(<Navigation />);

  expect( getByLabelText('camera')).toHaveTextContent('📸');
  });
})   

describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Navigation />);

    expect(getByTestId('link')).toHaveTextContent('Colin Nebula!');
    expect(getByTestId('about')).toHaveTextContent('About');
  });

})