const Student = require("../../models/MongoModel/students");
const Teacher = require("../../models/MongoModel/teachers");
const logger = require("../../utils/logger");

class AdminRepository{
    static getStudentsFromDB = async (rollNumber)=>{
        let students
        try{
            students = (rollNumber)?await Student.findOne({roll_number:rollNumber}):await Student.find({}); 
            logger.info("Student Get Successful");
        return students;
        }catch(error){
            logger.error(`Error Occured at Get Students ${error}`);
            return students
        }
    }
    
    static addStudentToDB = async (studentData)=>{
    
        try{
            const creatStudent = Student(studentData);
            await creatStudent.save();
            logger.info("Student Added Successfully");
            return true;
        } catch(error){
            logger.error(`Error Occured at Add Student ${error}`);
            return false;
        }
    }
    static updateStudentDataInDB = async (newData,roll_number)=>{
        try{
            await Student.updateOne({roll_number:roll_number},newData);
            logger.info("Student Updated Successfully");
            return true;
        } catch(error){
            logger.error(`Error Occured at Update Student ${error}`);
            return false;
        }
        
    }
    static updateStudentsFeeStatusInDB = async ()=>{
        try{
            const feeStatus = {fee_status:'upaid'};
            await Student.updateMany({},feeStatus);
            logger.info("Student fee_status updated Successfully");
        } catch(error){
            logger.error(`Error Occured at update student fee status ${error}`);
        }
    }
    static deleteStudentFromDB = async (roll_number)=>{
        try{
            const updatedStatus = {status:"inactive"}
            await Student.updateOne({roll_number:roll_number},updatedStatus);
            logger.info("Student Deleted Successfully");
            return true;
        } catch(error){
            logger.error(`Error Occured at Delete Student ${error}`);
            return false;
        }
    }
    static getTeachersFromDB = async (teacherId) => {
        let teachers;
        try {
          teachers = teacherId
            ? await Teacher.findOne({ id: teacherId })
            : await Teacher.find({});
          logger.info("Teacher Get Successful");
          return teachers;
        } catch (error) {
          logger.error(`Error Occured at Get Teachers ${error}`);
          return teachers;
        }
      }
    
      static addTeacherToDB = async (teacherData) => {
        try {
          const createTeacher = Teacher(teacherData);
          await createTeacher.save();
          logger.info("Teacher Added Successful");
          return true;
        } catch (error) {
            logger.error(`Error Occured at Add Teacher ${error}`);
          return false;
        }
      }
      static updateTeacherDataInDB = async (newData, id) => {
        try {
          await Teacher.updateOne({ id: id }, newData);
          logger.info("Teacher Updated Successfully");
          return true;
        } catch (error) {
            logger.error(`Error Occured at Update Teacher ${error}`);
          return false;
        }
      }
    
      static deleteTeacherFromDB = async (id) => {
        try {
          const updatedStatus = { status: "not serving" };
          await Teacher.updateOne({ id: id }, updatedStatus);
          logger.info("Teacher Deleted SuccessfullY");
          return true;
        } catch (error) {
            logger.error(`Error Occured at Delete Teacher ${error}`);
          return false;
        }
      }
}
module.exports = AdminRepository;