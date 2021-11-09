const router = require('express').Router();
const path = require('path');
// const uuid = require('uuid');
const data = require('./db/db.json');

router.get('/notes', (req,res) => {
   
  return readFileAsync(data, 'utf8'); 
});

router.post('/notes', (req, res) => {

    const { title, text } = req.body;

    if (title && text) {
        // Variable for the object we will save
        const newNote = {
          title,
          text,
        //   review_id: uuid(),
        };
    
       data.push(newNote);
    } else {throw new Error("Note 'title' and 'text' cannot be blank");}
});

module.exports = router;