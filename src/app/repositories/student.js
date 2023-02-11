const Student = require("../../models/MongoModel/student");

class StudentRepository{
    static getStudentsFromDB = async (rollNumber)=>{
        const students = (rollNumber)?await Student.findOne({roll_number:rollNumber}):await Student.find({}); 
        return students;
    }
    
    static addStudentToDB = async (studentData)=>{
    
        try{
            const creatStudent = Student(studentData);
            await creatStudent.save();
            return true;
        } catch(e){
            console.log(e);
            return false;
        }
    }
    static updateStudentDataInDB = async (newData,roll_number)=>{
        try{
            await Student.updateOne({roll_number:roll_number},newData)
            return true;
        } catch(e){
            console.log(e);
            return false;
        }
        
    }
    static updateStudentsFeeStatusInDB = async ()=>{
        try{
            const feeStatus = {fee_status:'upaid'};
            await Student.updateMany({},feeStatus);
            return true;
        } catch(e){
            console.log(e);
            return false;
        }
    }
    static deleteStudentFromDB = async (roll_number)=>{
        try{
            const updatedStatus = {status:"inactive"}
            await Student.updateOne({roll_number:roll_number},updatedStatus);
            return true;
        } catch(e){
            console.log(e);
            return false;
        }
    }
}

module.exports = {StudentRepository};