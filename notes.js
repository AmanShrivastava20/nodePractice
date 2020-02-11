// console.log("util.js")

// const add = function (a,b){
//     return a + b
// }
// const name = 'aman'

const getNotes = function (){
    return 'Your notes....'
}

const addNote = function(title , body){
 const notes = loadNotes()
 console.log(notes)
}

const loadNotes = function(){
    try{
      const dataBuffer =  fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes : getNotes,
    addNote : addNote
}