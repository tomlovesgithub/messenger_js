window.onload = function () {
  const MessageHistory = require('../src/messageHistory.js')
  const Message = require('../src/Message')

  const messageHistory = new MessageHistory()

  const msgList = document.getElementById('msg_list')
  const title = document.getElementById('title')
  var submit
  submit = document.getElementById('submit')
  submit.addEventListener('click', addToMessageHistory)

  function addToMessageHistory () {
    title.classList.add('playing')

    var input = document.getElementById('Input').value

    messageHistory.addToHistory(new Message(input, new Date()))
    var listItem
    var listDate
    var listText
    // creates some empty HTML objects
    listItem = document.createElement('p')
    listDate = document.createElement('text')
    listText = document.createElement('text')
    // takes text from array element properties and adds it to html objects
    listText.innerText = messageHistory.history[0].text
    listDate.innerText = messageHistory.history[0].date.toLocaleDateString() + '\n' + messageHistory.history[0].date.toLocaleTimeString()
    // adds each object to the page
    listItem.prepend(listText)
    listItem.prepend(document.createElement('br'))
    listItem.prepend(listDate)
    msgList.prepend(listItem)
    //  clears the textbox
    document.getElementById('Input').value = ''
    title.addEventListener('transitionend', removeTransition)
  }

  function removeTransition (e) {
    if (e.propertyName !== 'transform') {
      return
    }
    e.target.classList.remove('playing')
  }
}
