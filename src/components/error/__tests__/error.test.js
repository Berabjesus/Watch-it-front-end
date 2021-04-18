import { render, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import Error from '../error';

describe('Rendering component', () => {
  it('creates an error component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Error history={{ goBack: () => 'test function' }} />
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
          <Error history={{ goBack: () => 'test function' }} />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
