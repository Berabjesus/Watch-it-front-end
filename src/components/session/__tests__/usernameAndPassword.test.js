import { render, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store';
import UsernameAndPassword from '../usernameAndPassword';

describe('Rendering component', () => {
  it('creates an UsernameAndPassword component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UsernameAndPassword setUsername={() => {}} setPassword={() => {}} />
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
          <UsernameAndPassword setUsername={() => {}} setPassword={() => {}} />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
