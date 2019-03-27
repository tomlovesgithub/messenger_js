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
