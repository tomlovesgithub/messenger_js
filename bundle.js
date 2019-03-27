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

  const msg_list = document.getElementById('msg_list')
  const title = document.getElementById('title')
  submit = document.getElementById('submit')
  submit.addEventListener("click", addToMessageHistory);

  function addToMessageHistory() {

    title.classList.add('playing')

    var input = document.getElementById('Input').value;

    messageHistory.addToHistory(new Message(input, new Date))

    // creates some empty HTML objects
    list_item = document.createElement('p')
    list_date = document.createElement('text')
    list_text = document.createElement('text')
    // takes text from array element properties and adds it to html objects
    list_text.innerText = messageHistory.history[0].text
    list_date.innerText = messageHistory.history[0].date.toLocaleDateString() + "\n" + messageHistory.history[0].date.toLocaleTimeString()
    // adds each object to the page
    list_item.prepend(list_text)
    list_item.prepend(document.createElement('br'))
    list_item.prepend(list_date)
    msg_list.prepend(list_item)
    //  clears the textbox
    document.getElementById('Input').value = ""
    title.addEventListener('transitionend', removeTransition)
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') {
      return
    }
    e.target.classList.remove('playing')
  }

}

},{"./Message":1,"./MessageHistory":2}]},{},[3]);
