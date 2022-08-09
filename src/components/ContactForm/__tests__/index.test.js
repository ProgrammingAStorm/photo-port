import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup);

describe('ContactForm is rendering', () => {
    it('renders', () => {
        render(<ContactForm />);
    });

    it('renders', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    });
});