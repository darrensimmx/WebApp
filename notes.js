const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)
  debugger
  
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
  
    saveNotes(notes)
    console.log(chalk.green.inverse('Notes added!'))
  } else{
    console.log(chalk.red.inverse('Note title taken!'))
  }

}

const removeNote = (title) => {
  const notes = loadNotes()
  const noDuplicates = notes.filter((note) => note.title !== title)

  if (noDuplicates.length !== notes.length) {
    const msg = chalk.green.inverse('Note removed!')
    console.log(msg)
  } else {
    const msg = chalk.red.inverse('No note found!')
    console.log(msg)
  }

  saveNotes(noDuplicates)
}

const listNotes = () => {
  console.log(chalk.bold('Your notes'))

  const notes = loadNotes()
  notes.forEach((note) => {
    console.log(chalk.blue(note.title))
  })
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) =>note.title === title)
  if (!note) {
    console.log(chalk.red('Error: No such note'))
  } else {
    console.log(chalk.bold.yellow(note.title))
    console.log(note.body)
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch(e) {
    return [] // adds to the empty array which can then be added to a new file
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
