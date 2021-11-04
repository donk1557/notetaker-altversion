const express = require('express');
const router = require('express').Router();

const path = require('path');
const port = process.env.PORT || 4000;
const app = express();
// const api = require('./public/js/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);




router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
  
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  
  module.exports = router;