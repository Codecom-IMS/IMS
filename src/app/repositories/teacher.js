const Teacher = require("../../models/MongoModel/teacher");

const getTeachersFromDB = async (teacherId) => {
    const teachers = (teacherId)?await Teacher.findOne({id:teacherId}):await Teacher.find({});
    return teachers;
}

const addTeacherToDB = async (teacherData) => {

    try {
        const createTeacher = Teacher(teacherData);
        await createTeacher.save();
        return true;

    } catch (e) {
        console.log(e);
        return false;
    }
}
const updateTeacherDataInDB = async(newData,id)=>{
    try{
        await Teacher.updateOne({id:id},newData);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}

const deleteTeacherFromDB = async (id)=>{
    try{
        const updatedStatus = {status:"not serving"}
        await Teacher.updateOne({id:id},updatedStatus);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}
module.exports = { getTeachersFromDB, addTeacherToDB, updateTeacherDataInDB, deleteTeacherFromDB };