import { getData } from './api/someService';
jest.mock('./api/someService');

describe('mock testking', () => {
  test('first try', () => {
    expect(getData).toBeCalledTimes(0);

    expect(getData()).toEqual('mocked data');
    expect(getData).toBeCalledTimes(1);
  });

  test('second try', () => {
    expect(getData).toBeCalledTimes(0);

    expect(getData()).toEqual('mocked data');
    expect(getData).toBeCalledTimes(1);
  });
});
