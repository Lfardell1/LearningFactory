// This implementation is with a frameowork built on top of NODE js - Express 
// Express provides an easy framework for delivering web pages
// First we install the package - `npm install express`


// Import  
const express = require('express');
const ejs = require('ejs');


// Set our server to a variable so we can use it 
const app = express() // express() is a constructor for the server - essentially creates it and puts it into that variable 

// now we define our endpoints
// endpoints are essentially locations on a server
// E.g. example.com/about  where about is the endpoint 
// E.g. example.com/[endpoint]

// HTTP METHODS - GET, POST, PUT, DELETE

// google.com/
app.get("/" , (req,res) => {

    res.send("Hello, World!") // This is the response we send to the client


})

// The above code is a basic endpoint that returns nothing


// Endpoint that returns the request object
// example.com/test
app.get("/test" , (req,res) => {
  
    // The request object lets us work with the clients connection and any data they might send through 
    let request = {
        headers: req.headers, // Headers are the metadata of the request 
        method: req.method, // Method is the type of request - GET, POST, PUT, DELETE etc
        url: req.url, // URL is the location of the request 
        body: req.body, // Body is the data sent with the request 
        query: req.query // Query is the data sent in the URL
    }

       // This endpoint is the / -> the homepage
       // lets put break lines in the response to make it easier to read
        res.send(`<h1>Welcome to the homepage!</h1> <h3>Request Details</h3>
            <pre>${JSON.stringify({
                method: req.method,
                url: req.url,
                headers: req.headers,
                query: req.query,
                body: req.body,
            }, null, 4)}</pre>`)

})

// Sometimes we can allow users to put anything in the URL and use it 
// E.g. example.com/greeting/{name}
// user inputs name and we return "Hello, {name}"


app.get("/greeting/:name" , (req,res) => {

    // We now have access to whatever the user put in place of name 
    let name = req.params.name // req.params -- This means the request (client connection) parameters
    res.send("Hey, " + name);
})


// Finally we need to tell express to start listening for connections 
let port = 4000
app.listen(port, () => {
    console.log("Running Server!")
})