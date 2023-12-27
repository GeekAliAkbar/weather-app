

const yargs = require('yargs');
const fs = require('fs');
const notesUtil = require('./notesUtil.js');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notesUtil.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notesUtil.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'Display all the notes',
    handler() {
        console.log('Displaying all notes');
        console.log(notesUtil.loadNotes());
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a single note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notesUtil.readNote(argv.title);
    }
});

yargs.parse();