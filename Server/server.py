import socket
"""Web Server: 
Need Something to send back to client (object)
How to send that thing back to the client (Transit).
Errors
"""
""" 

    socket()
    .bind()
    .listen()
    .accept() 
    .connect()
    .connect_ex()
    .send()
    .recv()
    .close()

"""


# There is a socket that is utilised on each end - client and server
# Socket runs through the port of the connection
# All comms go through this



#  class socket.socket(family=AF_INET, type=SOCK_STREAM, proto=0, fileno=None)
# AF_INET can be AF_INET (the default), AF_INET6, AF_UNIX, AF_CAN, AF_PACKET, or AF_RDS
# socket type should be SOCK_STREAM (the default), 
# UDP - User Datagram Protocol - VIDEO 
# TCP - Transmission Control Protocol - WEBSITES
# SOCK_DGRAM = UDP type connection, SOCK_RAW = TCP type connection
sock = socket.socket() 


# Function that runs concurrently with the program until a connection is found
sock.listen()

# (conn, address)
connection, address = sock.accept()    

print(f"Connection Recieved: {connection} and the address is {address}")

    
    

    
        