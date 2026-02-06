const { describe, it } = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply } = require('../src/utils');

describe('utils', () => {
  it('should add two numbers', () => {
    assert.strictEqual(add(2, 3), 5);
  });

  it('should subtract two numbers', () => {
    assert.strictEqual(subtract(5, 3), 2);
  });

  it('should multiply two numbers', () => {
    assert.strictEqual(multiply(4, 3), 12);
  });
});
