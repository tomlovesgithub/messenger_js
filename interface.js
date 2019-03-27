window.onload = function() {
  const MessageHistory = require('./MessageHistory');
  const Message = require('./Message');

  const messageHistory = new MessageHistory

  var msg_list = document.getElementById('msg_list')
  submit = document.getElementById('submit')
  submit.addEventListener("click", addToMessageHistory);

  function addToMessageHistory() {

    var input = document.getElementById('Input').value;

    messageHistory.addToHistory(new Message(input, new Date))

    // creates some empty HTML objects
    list_item = document.createElement('p')
    list_date = document.createElement('text')
    list_text = document.createElement('text')
    // takes text from array element properties and adds it to html objects
    list_text.innerText = messageHistory.history[0].text
    list_date.innerText = messageHistory.history[0].date.toLocaleDateString() + "/" + messageHistory.history[0].date.toLocaleTimeString()
    // adds each object to the page
    list_item.prepend(list_text)
    list_item.prepend(document.createElement('br'))
    list_item.prepend(list_date)
    msg_list.prepend(list_item)
    //  clears the textbox
    document.getElementById('Input').value = ""
  }

}
