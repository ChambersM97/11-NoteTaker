//connects data to array we are going to store it in
var noteContents = require("../db/noteData");

//Creates the route to send our get and post and delete requests
module.exports = function(app) {

    //Display all notes
    app.get("/api/notes", function(req, res) {
        res.json(noteContents)
    })

    //Post a note
    app.post("/api/notes", function(req,res) {

        //makes a newNote to push based on the request information from the user
        let newNote = req.body


        noteContents.push(req.body); 
    })
}




//part of delete request
// for (let i = 0; i < noteContents.length; i++)