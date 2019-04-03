'use strict';
const MessageHistory = require('./MessageHistory.js');

describe("Message", () => {

  var messageHistory;
  let message;

  beforeAll( () => {
    message = {text:"test text", date:"01-01-2019"};
    messageHistory = new MessageHistory();
  });

  it("addToHistory increases history", () => {
    messageHistory.addToHistory(message)
    expect(messageHistory.history.length).toBe(1)
  });

});
