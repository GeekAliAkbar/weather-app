const chalk = require('chalk');
const fs = require('fs');

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    debugger;
    if (note) {
        console.log(chalk.green.inverse('Note Found!!'));
        console.log(chalk.italic(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('No note found!!'));
    }
    saveNotes(notes);
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        });
        console.log(chalk.green.inverse('New Note Added!!'));
    } else {
        console.log(chalk.red.inverse('Note Title taken!!'));
    }
    saveNotes(notes);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title.toLowerCase() !== title.toLowerCase());
    if (notes.length > filteredNotes.length) {
        console.log(chalk.green('Note Removed!'));
        saveNotes(filteredNotes);
    } else {
        console.log(chalk.red('No note found!'));
    }
}

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync('notes.json');
        const notesBufferString = notesBuffer.toString();
        return JSON.parse(notesBufferString);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notesArray) => {
    try {
        const notesArrayString = JSON.stringify(notesArray);
        fs.writeFileSync('notes.json', notesArrayString);
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    loadNotes: loadNotes,
    readNote: readNote,
};