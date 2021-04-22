import {
  setCredentials, getToken, getUsername,
} from '../tokenHandler';

const testKey = 'test with jest';
const username = 'username';
describe('Token handler', () => {
  it('should set a key that has value a value with watchItToken and watchItUsername', () => {
    setCredentials(username, testKey);
    expect((Object.keys(localStorage)).filter((key) => key.includes('watchItToken')).length > 0).toBeTruthy();
    expect((Object.keys(localStorage)).filter((key) => key.includes('watchItUsername')).length > 0).toBeTruthy();
  });
});

describe('Token handler', () => {
  setCredentials(username, testKey);
  it('should filter and get the test value ', () => {
    expect(getToken()).toEqual('test with jest');
  });

  it('should filter and get the test value ', () => {
    expect(getUsername()).toEqual('username');
  });
});
