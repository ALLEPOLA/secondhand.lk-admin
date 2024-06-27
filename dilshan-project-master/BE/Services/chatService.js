class ChatService {
    constructor() {
      this.io = null;
    }
  
    initialize(io) {
      this.io = io;
      io.on('connection', (socket) => {
        console.log('New client connected');
  
        socket.on('sendMessage', (message) => {
          this.io.emit('receiveMessage', message);
        });
  
        socket.on('disconnect', () => {
          console.log('Client disconnected');
        });
      });
    }
  }
  
  module.exports = new ChatService();
