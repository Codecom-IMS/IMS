const { TeacherRepository } = require("../repositories/teacher");


class TeacherServices{
    static getTeachers = async(apiRequest)=>{
        const teacherId = apiRequest.query.id;
        return await TeacherRepository.getTeachersFromDB(teacherId);
    }
    
    static addTeacherData = async (apiRequest)=>{
        const teacherData = apiRequest.body;
        return await TeacherRepository.addTeacherToDB(teacherData);
    }
    
    static updateTeacherData = async (apiRequest)=>{
        const newData = apiRequest.body;
        const teacherId = apiRequest.params.id;
        return await TeacherRepository.updateTeacherDataInDB(newData,teacherId);
    }
    
    static deleteTeacherData = async (apiRequest)=>{
        const teacherId = apiRequest.query.id;
        return await TeacherRepository.deleteTeacherFromDB(teacherId);
    }
}

module.exports = {TeacherServices};