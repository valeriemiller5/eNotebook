const db = require('../db/db.json');
const fs = require('fs');

module.exports = function (app) {

    app.get('/api/notes', function (req, res) {
        res.json(db);
    });

    app.post('/api/notes', function (req, res) {
        console.log(req.body);
        //Take the user input from the front end, sent to the back end via AJAX "POST" request
        //Then, push to the array that already exists in db.json
        db.push(req.body);
        //use built in Node file system module to write updated information to db.json
        //fs.writeFile must have a callback function, even if all that function does is show errors or console.log a message
        fs.writeFile('./db/db.json', JSON.stringify(db), 'utf8', function (err) {
            if (err) throw err;
        });
    });

    app.delete('/api/notes/:id', function (req, res) {
        // console.log("line 23 of apiroutes.js " + req.params.id);
        const filteredDb = db.filter((note) => { return note.id !== req.params.id });
        // console.log(filteredDb);
        fs.writeFile('./db/db.json', JSON.stringify(filteredDb), function(err) {
            if (err) throw err;
        });
    });
};