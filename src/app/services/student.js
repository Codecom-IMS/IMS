const {StudentRepository} = require("../repositories/student")


class StudentServices{
    static getStudents = async (apiRequest)=>{
        const rollNumber = apiRequest.query.roll_number;
        return await StudentRepository.getStudentsFromDB(rollNumber);
    }
    
    static addStudentData = async (apiRequest)=>{
        const studentData = apiRequest.body;
        return await StudentRepository.addStudentToDB(studentData);
    }
    
    static updateStudentData = async (apiRequest)=>{
        const newData = apiRequest.body;
        const rollNumber = apiRequest.params.rollNumber;
        return await StudentRepository.updateStudentDataInDB(newData,rollNumber);
    }
    static updateStudentsFeeStatus = async ()=>{
        return await StudentRepository.updateStudentsFeeStatusInDB();
    }
    static deleteStudentData = async (apiRequest)=>{
        const rollNumber = apiRequest.query.roll_number;
        return await StudentRepository.deleteStudentFromDB(rollNumber);
    }
}

module.exports = {StudentServices}