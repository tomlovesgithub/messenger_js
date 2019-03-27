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
