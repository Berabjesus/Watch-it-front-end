import { render, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import Buttons from '../buttons';

describe('Rendering component', () => {
  it('creates an Buttons component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Buttons label1="test title" label2="test date" handleClick={() => {}} />
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
          <Buttons label1="test title" label2="test date" handleClick={() => {}} />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
