const express = require('express');
const routes = require('./routes');
const apiRoute = require("./api.js");
const db = require('./db/db.json');

const path = require('path');
const port = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", routes);
app.use('/api', apiRoute);


 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

   
// module.exports = router;