//grabs the path npm packages that gets the file path for the html
var path = require("path");


//sends a response to express from the backend, and sending 
//the parsed data to the front end 
module.exports = function(app) {

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    })

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}