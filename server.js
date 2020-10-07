//Allows us to be able to use express.js
var express = require("express")

//This creates an express server
var app = express();

//establishes a port wth a port number that we will use for our server
var PORT = process.env.PORT || 5000;

//allows express to parse JSON data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Routes for server to connect to 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listens for the PORT we created on line 8 and runs the asynchronous function
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})