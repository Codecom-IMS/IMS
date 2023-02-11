const Teacher = require("../../models/MongoModel/teacher");

class TeacherRepository{
    getTeachersFromDB = async (teacherId) => {
        const teachers = (teacherId)?await Teacher.findOne({id:teacherId}):await Teacher.find({});
        return teachers;
    }
    
    addTeacherToDB = async (teacherData) => {
    
        try {
            const createTeacher = Teacher(teacherData);
            await createTeacher.save();
            return true;
    
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    updateTeacherDataInDB = async(newData,id)=>{
        try{
            await Teacher.updateOne({id:id},newData);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    }
    
    deleteTeacherFromDB = async (id)=>{
        try{
            const updatedStatus = {status:"not serving"}
            await Teacher.updateOne({id:id},updatedStatus);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    }

}


module.exports = { TeacherRepository };