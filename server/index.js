const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/user', (req, res) => {
    const user = {
        name: 'John',
        email: 'john@butly-ai.com',
        avatar: 'https://api.dicebear.com/8.x/notionists/svg?seed=John'
    };

    res.json(user);
})

io.on('connection', (socket) => {
    console.log('[Connected]\t: ' + socket.id);

    socket.on('message', (message) => {
        const time = new Date().toLocaleTimeString();
        io.emit('message', { sender: 'server', message: message.message, time  })
    })

    socket.on('disconnect', () => {
        console.log('[Disconnected]\t');
    });
});




const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});