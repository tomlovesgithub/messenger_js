'use strict';
const Message = require('./message.js');

describe("Message", () => {

  var message;

  beforeEach( () => {
    message = new Message("test text", '01-01-2019');
  });

  it("should be able to hold text", () => {
    expect(message.text).toEqual("test text")
  });

  it("should have the date", () => {
    expect(message.date).toEqual('01-01-2019')
  });
});
