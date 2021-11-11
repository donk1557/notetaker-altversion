const util = require('util');
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

function getNotes() {
return readFileAsync('db/db.json', 'utf8').then((notes) => {
    let recordedNotes = [];
    recordedNotes.concat(JSON.parse(notes));
    return recordedNotes;
})};

function postNote(note) {
    const { title, text } = note;

    if (title && text) {
        const newNote = { 
            title, 
            text, 
            // id: uuidv1() 
        };
    
        return this.getNotes()
          .then((notes) => [...notes, newNote])
          .then((updatedNotes) => writeFileAsync('db/db.json', JSON.stringify(updatedNotes))
          .then(() => newNote));
      
    }else { throw new Error("Note 'title' and 'text' cannot be blank");}
    
    
  }

module.exports = {
    getNotes,
    postNote
}
    