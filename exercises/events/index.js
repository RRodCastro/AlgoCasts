// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  
  constructor() {
    this.eventNames = {}
  }
  // Register an event handler
  on(eventName, callback) {
    const event = this.eventNames[eventName]
    if (!event){
      this.eventNames[eventName] = [ callback ]
    } else {
      this.eventNames[eventName].push(callback)
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if ( this.eventNames[eventName] ){
      this.eventNames[eventName].forEach((event) => event());
    }
    
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if ( this.eventNames[eventName] ){
      this.eventNames[eventName] = []
    }
    
  }
}

module.exports = Events;
