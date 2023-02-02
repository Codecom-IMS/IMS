const Student = require("../../models/MongoModel/student");

const getStudentsFromDB = async (rollNumber)=>{
    const students = (rollNumber)?await Student.findOne({roll_number:rollNumber}):await Student.find({}); 
    return students;
}

const addStudentToDB = async (studentData)=>{

    try{
        const creatStudent = Student(studentData);
        const temp = await creatStudent.save();
        return true;
    } catch(e){
        console.log(e);
        return false;
    }
}
const updateStudentDataInDB = async (newData,roll_number)=>{
    try{
        await Student.updateOne({roll_number:roll_number},newData)
        return true;
    } catch(e){
        console.log(e);
        return false;
    }
    
}
const deleteStudentFromDB = async (roll_number)=>{
    try{
        const updatedStatus = {status:"inactive"}
        await Student.updateOne({roll_number:roll_number},updatedStatus);
        return true;
    } catch(e){
        console.log(e);
        return false;
    }
}

module.exports = {getStudentsFromDB, addStudentToDB,updateStudentDataInDB,deleteStudentFromDB};