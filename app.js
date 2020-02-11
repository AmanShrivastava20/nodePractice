const fs= require('fs')
const notes = require('./notes.js')
//fs.writeFileSync('notes.txt', 'hello ....')
//fs.appendFileSync('notes.txt' , 'my name is rony')

/////////////////////////////////////////  Chalk module /////////////////////////////////////
const chalk = require('chalk')
//  const grn =chalk.green.inverse.bold('sucess')
// const grn =chalk.red.inverse.bold('error!')
// console.log(grn)

/////////////////////////////////////////  Validator module /////////////////////////////////////
// const validator = require('validator')
// console.log(validator.isEmail('abc@gmail.com'))
// console.log(validator.isURL('http://abc.com'))

// const add = require('./util')
// const sum = add(2,4)
// console.log(sum)

//const name = 'aman'


// console.log(process.argv[2])
// const command = process.argv[2]
// console.log(process.argv)
// if (command === 'add'){
//     console.log('adding notes!!')
// } else if(command === 'remove'){
//     console.log('Removing notes!!')
// }
// console.log(process.argv)

/////////////////////////////////////////  Yargs module /////////////////////////////////////
const yargs = require('yargs')
yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler:function(argv){
        // console.log('adding a new note!' , argv)
        notes.addNote(argv.title , argv.body)
    }
})

yargs.command({
    command:'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('removing a note!')
    }
})

// description : We are excessing the property "argv" on yargs and yargs knows actually to do its things and parse those arguments  
// console.log(yargs.argv) <---------
// or
// yargs.parse() <---------

yargs.command({
    command:'removed',
    description:'remove item',
    builder:{
        title: {
            description: 'i have removed the item',
            demandOption: 'true',
            type: 'string'
        },
        body: {
            description: 'this is body object',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('title:' + argv.title)
        console.log('body:' + argv.body)
    }
})

yargs.parse();




