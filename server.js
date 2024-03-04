const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_database')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


// Define a schema and model for MongoDB
const DataSchema = new mongoose.Schema({
  message: String
});

const Data = mongoose.model('Data', DataSchema);

// Serve static files from the public directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Socket.IO logic
io.on('connection', (socket) => {
    console.log('A user connected');
  
    // Send existing data to the client upon connection
    Data.find({}).then((data) => {
      socket.emit('initialData', data);
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  
    // Listen for new data from the client
    socket.on('newData', (message) => {
      // Save data to MongoDB
      const newData = new Data({ message });
      newData.save().then(() => {
        console.log('Data saved:', message);
        // Emit the new data to all clients
        io.emit('newData', message);
      }).catch((error) => {
        console.error('Error saving data:', error);
      });
    });
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
  

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
