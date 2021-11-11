import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from '..';
// Component being testedafterEach(cleanup);

describe('Resume component', () => {
    it('renders', () => {
      render(<Resume />);
    });
    
    it('matches snapshot DOM node structure', () => {
      const { asFragment } = render(<Resume />);
      
      expect(asFragment()).toMatchSnapshot();
    });
  })