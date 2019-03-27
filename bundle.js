(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = (
  class Message {
    constructor(text,date) {
      this.text = text,
      this.date = date
    }
  }
)

},{}],2:[function(require,module,exports){
module.exports = (
  class MessageHistory {
    constructor() {
      this.history = []
    }

    addToHistory(message){
      this.history.unshift(message)
    }
  }
)

},{}],3:[function(require,module,exports){
window.onload = function() {
  const MessageHistory = require('./MessageHistory');
  const Message = require('./Message');

  const messageHistory = new MessageHistory

  var msg_list = document.getElementById('msg_list')
  submit = document.getElementById('submit')
  submit.addEventListener("click", addToMessageHistory);

  function addToMessageHistory() {
    input = document.getElementById('Input').value;
    messageHistory.addToHistory(new Message(input, new Date))
    list_item = document.createElement('p')
    list_date = document.createElement('text')
    list_text = document.createElement('text')
    list_text.innerText = messageHistory.history[0].text
    list_item.appendChild(list_text)
    list_item.appendChild(document.createElement('br'))
    list_date.innerText = (messageHistory.history[0].date.toLocaleDateString() + "/" + messageHistory.history[0].date.toLocaleTimeString())
    list_item.appendChild(list_date)
    msg_list.appendChild(list_item)
    document.getElementById('Input').value = ""
  }


}

},{"./Message":1,"./MessageHistory":2}]},{},[3]);
