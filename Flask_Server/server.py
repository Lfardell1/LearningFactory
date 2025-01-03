from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit, join_room, leave_room

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

users = {}

@app.route('/')
def index():
    return render_template('chat.html')

@socketio.on('message')
def handleMessage(data):
    username = users.get(data['sid'], 'Anonymous')
    msg = {'text': data['msg'], 'username': username, 'timestamp': data['timestamp']}
    send(msg, broadcast=True)

@socketio.on('join')
def handleJoin(data):
    users[data['username']] = data['username']
    join_room(data['room'])
    emit('user_joined', {'username': data['username'], 'timestamp': data['timestamp']}, room=data['room'])

@socketio.on('leave')
def handleLeave(data):
    username = users.pop(data['sid'], 'Anonymous')
    leave_room(data['room'])
    emit('user_left', {'username': username, 'timestamp': data['timestamp']}, room=data['room'])

if __name__ == '__main__':
    socketio.run(app, debug=True)