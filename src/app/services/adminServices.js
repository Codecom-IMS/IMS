const AdminRepository = require("../repositories/adminRepository")

class AdminServices {
    static getStudents = async (apiRequest)=>{
        const rollNumber = apiRequest.query.roll_number;
        return await AdminRepository.getStudentsFromDB(rollNumber);
    }
    
    static addStudentData = async (apiRequest)=>{
        const studentData = apiRequest.body;
        return await AdminRepository.addStudentToDB(studentData);
    }
    
    static updateStudentData = async (apiRequest)=>{
        const newData = apiRequest.body;
        const rollNumber = apiRequest.params.rollNumber;
        return await AdminRepository.updateStudentDataInDB(newData,rollNumber);
    }
    static updateStudentsFeeStatus = async ()=>{
        await AdminRepository.updateStudentsFeeStatusInDB();
    }
    static deleteStudentData = async (apiRequest)=>{
        const rollNumber = apiRequest.query.roll_number;
        return await AdminRepository.deleteStudentFromDB(rollNumber);
    }
    static getTeachers = async(apiRequest)=>{
        const teacherId = apiRequest.query.id;
        return await AdminRepository.getTeachersFromDB(teacherId);
    }
    
    static addTeacherData = async (apiRequest)=>{
        const teacherData = apiRequest.body;
        return await AdminRepository.addTeacherToDB(teacherData);
    }
    
    static updateTeacherData = async (apiRequest)=>{
        const newData = apiRequest.body;
        const teacherId = apiRequest.params.id;
        return await AdminRepository.updateTeacherDataInDB(newData,teacherId);
    }
    
    static deleteTeacherData = async (apiRequest)=>{
        const teacherId = apiRequest.query.id;
        return await AdminRepository.deleteTeacherFromDB(teacherId);
    }

}

module.exports = AdminServices