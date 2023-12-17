// Create web server
var express = require('express');
var router = express.Router();

// Create HTTP server
var http = require('http');
var server = http.createServer(router);

// Create socket server
var socketIo = require('socket.io');
var io = socketIo(server);

// Create a new comment
var comments = [];
var users = [];

// Listen for new connections from clients (socket)
io.on('connection', function(socket) {
	console.log('New client connected!', socket.id);
	
	// Emit all comments to the new client
	socket.emit('allComments', comments);
	
	// Listen for new comments from the client
	socket.on('newComment', function(data) {
		// Add the new comment to the collection
		comments.push(data);
		
		// Emit the updated comments to all clients
		io.emit('allComments', comments);
	});
	
	// Listen for new users from the client
	socket.on('newUser', function(data) {
		// Add the new user to the collection
		users.push(data);
		
		// Emit the updated users to all clients
		io.emit('allUsers', users);
	});
	
	// Listen for disconnects from clients (socket)
	socket.on('disconnect', function() {
		console.log('Client disconnected!', socket.id);
		
		// Find the user that disconnected
		var user = users.find(function(user) {
			return user.id === socket.id;
		});
		
		// If we found a user
		if (user) {
			// Remove the user from the collection
			users.splice(users.indexOf(user), 1);
			
			// Emit the updated users to all clients
			io.emit('allUsers', users);
		}
	});
});

// Listen for HTTP connections
server.listen(process.env.PORT || 3000, process.env.IP || "