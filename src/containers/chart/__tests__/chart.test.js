import { render, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import Chart from '../chart';

describe('Rendering component', () => {
  it('creates a chart component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Chart />
          </Provider>
        </BrowserRouter>,
      );
    });
  });
});

describe('Display', () => {
  it('matches the snapshot', () => {
    const comp = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Chart />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
