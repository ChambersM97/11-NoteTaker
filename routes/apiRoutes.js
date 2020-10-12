//connects data to array we are going to store it in
var noteContents = require("../db/noteData");

const fs = require ("fs");

//Creates the route to send our get and post and delete requests
module.exports = function(app) {

    //Display all notes
    app.get("/api/notes", function(req, res) {
        res.json(noteContents)
        console.log(noteContents)
    });

    //Post a note
    app.post("/api/notes", function(req,res) {

        //makes a newNote to push based on the request information from the user
        let newNote = req.body
        console.log(notes, 'in Save Note function');
        let lastID = noteContents[noteContents.length - 1]["id"];
        let newId = lastId + 1;
        newNote["id"] = newId;

        console.log(req.body)
        noteContents.push(req.body); 


        //writes the new note to the specified route
        writeFileAsync("./db/noteContents.json", JSON.stringify(noteContents)).then(function() {
            console.log("noteContents.json has been updated!");
        });

    })
}




//part of delete request
// for (let i = 0; i < noteContents.length; i++)