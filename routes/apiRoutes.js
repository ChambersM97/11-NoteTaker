//connects data to array we are going to store it in
var noteContents = require("../db/noteData");

const fs = require ("fs");

//Creates the route to send our get and post and delete requests
module.exports = function(app) {


    //Display all notes
    app.get("/api/notes", function(req, res) {
        // console.log(noteContents)
        res.json(noteContents)
        console.log(noteContents)
    });

    //Post a note
    app.post("/api/notes", function(req,res) {

        //makes a newNote to push based on the request information from the user
        console.log(req.body)
        noteContents.push(req.body); 
        res.json('saved!')

        //writes the new note to the specified route
        // writeFileAsync("./db/noteContents.json", JSON.stringify(noteContents)).then(function() {
        //     console.log("noteContents.json has been updated!");
        });

    }

    app.delete("/api/notes:index", function(req,res) {
            var idNumber = parseInt(req.params.index);
            //will replace the selected object with an empty array
            var deleteArray = [];
        for (i = 0; i < noteContents.length; i++) {
            if (i !== idNumber) {
                deleteArray.push(noteContents[i]);
            }
        }
        noteContents = deleteArray;
        res.json("note deleted.")
    })



//part of delete request
// for (let i = 0; i < noteContents.length; i++)