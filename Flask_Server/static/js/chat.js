document.addEventListener('DOMContentLoaded', function() {
    var socket = io.connect('http://' + document.domain + ':' + location.port);
    var form = document.getElementById('form');
    var input = document.getElementById('input');
    var username = prompt("Enter your username:");

    // Emit join event
    socket.emit('join', {'username': username, 'sid': socket.id, 'room': 'chatroom', 'timestamp': new Date().toLocaleTimeString()});

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (input.value.trim()) {
            socket.emit('message', {'msg': input.value, 'sid': socket.id, 'timestamp': new Date().toLocaleTimeString()});
            input.value = '';
        }
    });

    socket.on('message', function(data) {
        var li = document.createElement('li');
        li.classList.add('message', 'other');
        li.innerHTML = `<strong>${data.username}</strong> [${data.timestamp}]: ${data.text}`;
        document.getElementById('messages').appendChild(li);
        document.querySelector('.messages').scrollTop = document.querySelector('.messages').scrollHeight;
    });

    socket.on('user_joined', function(data) {
        var li = document.createElement('li');
        li.classList.add('notification');
        li.innerHTML = `<em>${data.username} joined the chat [${data.timestamp}]</em>`;
        document.getElementById('messages').appendChild(li);
    });

    socket.on('user_left', function(data) {
        var li = document.createElement('li');
        li.classList.add('notification');
        li.innerHTML = `<em>${data.username} left the chat [${data.timestamp}]</em>`;
        document.getElementById('messages').appendChild(li);
    });

    window.addEventListener('beforeunload', function() {
        socket.emit('leave', {'sid': socket.id, 'room': 'chatroom', 'timestamp': new Date().toLocaleTimeString()});
    });
});