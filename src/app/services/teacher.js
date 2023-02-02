const { getTeachersFromDB, addTeacherToDB, updateTeacherDataInDB, deleteTeacherFromDB } = require("../repositories/teacher");


const getTeachers = async (apiRequest)=>{
    const teacherId = apiRequest.query.id;
    return await getTeachersFromDB(teacherId);
}

const addTeacherData = async (apiRequest)=>{
    const teacherData = apiRequest.query;
    return await addTeacherToDB(teacherData);
}

const updateTeacherData = async (apiRequest)=>{
    const newData = apiRequest.query;
    const teacherId = apiRequest.params.id;
    return await updateTeacherDataInDB(newData,teacherId);
}

const deleteTeacherData = async (apiRequest)=>{
    const teacherId = apiRequest.query.id;
    return await deleteTeacherFromDB(teacherId);
}

module.exports = {getTeachers,addTeacherData,updateTeacherData,deleteTeacherData};