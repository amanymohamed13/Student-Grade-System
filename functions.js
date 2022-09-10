const fs = require('fs')

const loadAllStudents = () => 
{
    try {
        const students = fs.readFileSync('Student_Data.json').toString()
        // to transform json to array of objects
        const object_Student = JSON.parse(students)
        return object_Student
    } 
//-----------------------------will be applayed  at first time------------------------------------------------//
    catch (error) {
        return  console.log([])
    }
}


//------------------------------to reWrite data in file------------------------------------------------------//
const saveStudentsData = (students) => {

    const student_Json = JSON.stringify(students)
    fs.writeFileSync('Student_Data.json', student_Json)
}
//------------------------------Add New Students ---------------------------------------------------------//
const addStudent = (ID, Name, Degrees, Statuse) =>
 {
//-------------------------------load Data from File----------------------------------------------------//
    const students = loadAllStudents()
//-------------------------------compare ID------------------------------------------------------------//
    const saveData = students.filter(studen=> studen.ID === ID)
    if (saveData.length==0)
     {
    let TotalGrades = 0
    for(i in Degrees ){TotalGrades += Degrees[i]}
    students.push({
    ID,Name,Degrees,Statuse,total: TotalGrades })
    saveStudentsData(students)
    return  console.log('Student Data Saved')
     } 
    console.log('Student Already Exist')
    
}

//--------------------------Read and Show data----------------------------------------------------------//
const readA_Student = (ID) => {
    const students = loadAllStudents()
    const Students = students.filter(studen => studen.ID === ID)
  if(!Students.length==0)
     return console.log(Students) 
    console.log("Student Not Found")
}


//-----------------------Delete by id using filter----------------------------------------------------//
const deleteStudent = (ID) => {
    const students = loadAllStudents()
    const SavedData = students.find(studen => studen.ID === ID)
    if (SavedData) {
        const newStudents = students.filter(studen =>studen.ID !== ID)
        saveStudentsData(newStudents)
       return console.log("Deleted Sucssefully ")
    } 
        console.log("ID Not Found")
    
}
//------------------------List All Students -------------------------------------------------------//
const listAllStudents = () => {
    const students = loadAllStudents()
    if (students.length) {
        for(elemnt in students)
        { console.log(students[elemnt])}
    } else {
        console.log('No Items to show')
    }
}
//--------------------Uodate Student Name--------------------------------------------------------//
/*
first step search in data using Id 
second if  id founded
 -- then have access to name and give it the new value
 thired push data 
 last step write it in file

*/

const updateStudent = (ID, Name) => {
    const students = loadAllStudents()
    const savedStudents = students.find(studen => studen.ID === ID)
    if (savedStudents ) {
        savedStudents .Name = Name
        const newName = students.filter(studen => studen.ID !==ID )
       newName.push(savedStudents)
        saveStudentsData(newName)
        console.log(' updated Sucssefully', savedStudents)
    } else {
        console.log("ID Not Matches")
    }
}

module.exports = {
    addStudent, deleteStudent,  readA_Student,listAllStudents,updateStudent
}