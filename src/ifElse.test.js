'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it(`should call 'condition' callback`, () => {
    const condition = jest.fn(() => true);
    const first = () => {};
    const second = () => {};

    ifElse(condition, first, second);
    expect(condition).toHaveBeenCalled();
  });

  it(`should call 'first' callback if 'condition' === true`, () => {
    const condition = () => true;
    const first = jest.fn();
    const second = () => {};

    ifElse(condition, first, second);
    expect(first).toHaveBeenCalled();
  });

  it(`should call 'second' callback if 'condition' === false`, () => {
    const condition = () => false;
    const first = () => {};
    const second = jest.fn();

    ifElse(condition, first, second);
    expect(second).toHaveBeenCalled();
  });

  // write tests here
});
