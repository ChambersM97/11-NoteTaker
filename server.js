//Allows us to be able to use express.js
var express = require("express");

const path = require('path');
//This creates an express server
var app = express();

//establishes a port wth a port number that we will use for our server
var PORT = process.env.PORT || 5000;

//id's for notes
var uuid = require('uuid')

//place we store our note data
var noteArray = require('./db/db.json')

//allows express to parse JSON data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join('./public')));


app.get('/notes', (req, res) => { 
    res.sendFile(path.join(__dirname + '/public/notes.html'))
});

// GETS Notes from db.JSON
app.get('/api/notes', (req, res) => {
    res.json(noteArray);
});
// first read the db.json file 
app.post('/api/notes', function (req, res) {
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    };
    noteArray.push(newNote);
    res.json(noteArray);

});

// deleting a note
app.delete("/api/notes/:id", function(req, res){
    let id = req.params.id;
    for (let i = 0; i < noteArray.length; i++){
        if (id === noteArray[i].id){
            noteArray.splice(i, 1);
            res.json(noteArray);
        };
    };
});
//Listens for the PORT we created on line 8 and runs the asynchronous function
app.listen(PORT, function() {
    
    //console.log(noteContents, 'in Save Note function');
    console.log("App listening on PORT: " + PORT);
})