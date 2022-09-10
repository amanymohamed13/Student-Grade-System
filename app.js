const yargs = require('yargs')
const students = require('./functions')

yargs.command({
    command: 'add',
    desribe: 'Add a Student',
    builder: {
        ID: {
            desribe: 'ID',
            type: 'Number',
            demandOption: true
        },
        Name: {
            desribe: 'Name',
            type: 'string',
            demandOption: true
        },
        Degrees: {
            desribe: 'Degrees',
            type: 'array',
            demandOption: true
        },
        Statuse: {
            desribe: 'Student Grade',
            type: 'string',
        }
    },
    handler: () => students.addStudent(yargs.argv.ID
        , yargs.argv.Name,
         yargs.argv.Degrees, 
         yargs.argv.Statuse)
})

yargs.command({
    command: 'read',
    desribe: 'Search  by ID',
    builder: {
        ID: {
            desribe: 'Student ID',
            type: 'number',
            demandOption: true
        }
    },
    handler: () => students.readA_Student(yargs.argv.ID)
})

yargs.command({
    command: 'delete',
    desribe: ' Student ID',
    builder: {
        ID: {
            desribe: ' ID',
            type: 'number',
            demandOption: true
        }
    },
    handler: () => students.deleteStudent(yargs.argv.ID)
})



yargs.command({
    command: 'list',
    desribe: 'Students List',
    handler: () => students.listAllStudents()
})

yargs.command({
    command: 'update',
    desribe: 'Update a Student by ID',
    builder: {
        ID: {
            desribe: 'Student ID',
            type: 'number',
            demandOption: true
        },
        Name: {
            desribe: 'Student name',
            type: 'string',
            demandOption: true
        }
    },
    handler: () => students.updateStudent(yargs.argv.ID, yargs.argv.Name)
})

yargs.parse()