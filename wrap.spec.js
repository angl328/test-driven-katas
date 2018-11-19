const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns original string if the number of characters of the string is less than or equal to the maximum length', () => {
      expect(wrap("I like to code", 14)).to.equal("I like to code");    
  });

  it('Returns a new line when the length of characters of the string is greater than the max length - no chopping situation', () => {
      expect(wrap("I like to code for fun", 14)).to.equal("I like to code\n for fun");
  });

  it('Returns a new line when the length of character of string is greater than the max length: if the character at the max length is within a word, avoid chopping', () => {
      expect(wrap("I like to code for fun", 12)).to.equal("I like to \ncode for fun");
  });

  it('Returns multiple lines and not chop up words', () => {
      expect(wrap("I like to code for fun. This is why we are in Grace Hopper.", 13)).to.equal("I like to \n code for fun.\nThis is why \nwe are in \nGrace Hopper.");
  })
});