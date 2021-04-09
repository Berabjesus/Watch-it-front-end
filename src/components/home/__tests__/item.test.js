import { render, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store';
import Item from '../item';

describe('Rendering component', () => {
  it('creates an Item component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Item id={1} num={1} title="test title" date="test date" />
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
          <Item id={1} num={1} title="test title" date="test date" />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
