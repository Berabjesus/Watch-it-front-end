import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoadingIcon from '../loadingIcon';
import store from '../../../store';

describe('LoadingIcon common component - ', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <LoadingIcon />
        </Provider>
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
  it('Renders the LoadingIcon correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <LoadingIcon />
        </Provider>
      </BrowserRouter>,
    );

    expect(
      screen.getByText((content, element) => (
        element.tagName.toLowerCase() === 'p'
          && content.includes('Loading')
      )),
    );
  });
});