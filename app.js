const notes = require('./notes.js')
const yargs = require('yargs')

// Customise yargs version
yargs.version('1.1.0')

// Create add command
//{} rep options object
yargs.command({
    command: 'add', 
    describe: 'Add a new note',
    builder: { //add objects within add command
      title: {
        describe: 'Note Title',
        demandOption: true, //sets default to error if title is not provided
        type: 'string' // sets the type to be string regardless of input && makes sure input is of type
      },

      body: {
        describe: "Note Body",
        demandOption: true,
        type: 'string'
      }
    },
    handler(argv) {
      notes.addNote(argv.title, argv.body)
    }

})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
    },
    handler(argv) {
      notes.removeNote(argv.title)
    }
})
//add, remove, read, list

// Create a read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

// Create a list command
yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler() {
    notes.listNotes()
  }
})


yargs.parse() //same as console.log(yargs.argv)



