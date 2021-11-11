const router = require('express').Router();
const path = require('path');
const Fxn = require('./public/assets/js/dbFxns.js')
// const uuid = require('uuid');
const db = require('./db/db.json');



router.get('/notes', (req,res) => {
  Fxn.getNotes().then((recordedNotes) => {
    console.log(recordedNotes);
    return res.json(recordedNotes);
  })
  
});

router.post('/notes', (req, res) => {
   Fxn.postNote(req.body).then((recordedNotes) => {
    console.log(recordedNotes);
    return res.json(recordedNotes);
  })
});

module.exports = router;