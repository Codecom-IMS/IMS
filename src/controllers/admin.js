const { addStudentData, updateStudentData, deleteStudentData, getStudents, updateStudentsFeeStatus } = require("../app/services/student");
const { getTeachers, addTeacherData, updateTeacherData, deleteTeacherData } = require("../app/services/teacher");


const getStudent = async (req, res) => {
    const students = await getStudents(req);
    res.status(200).send(students);
}

const addStudent = async (req, res) => {
    const status = await addStudentData(req);
    if (status) {
        res.status(200).send({ status: 'Student Successfully' });
    } else {
        res.status(500).send({ status: 'Something Went Wrong' });
    }
}
const updateStudent = async (req, res) => {
    const status = await updateStudentData(req);
    if (status) { 
        res.status(200).send({ status: 'done' }); 
    }
    else {
        res.status(500).send({ status: 'done' });
    }
}
const updateFeeStatus = async ()=>{
    const status = await updateStudentsFeeStatus();
    if(status){
        console.log("fee status Updated");
    }else{
        console.log("An error occured while updating fee status")
    }
}

const deleteStudent = async (req, res) => {
    const status = await deleteStudentData(req);
    if(status){
        res.status(200).send({ status: 'Student deleted' });
    }else{
        res.status(500).send({ status: 'something went wrong' });
    }
    
}

const getTeacher = async (req,res)=>{
    const teachers = await getTeachers(req); 
    res.status(200).send(teachers);
}
const addTeacher = async (req,res)=>{
    const status = await addTeacherData(req);
    if(status){
        res.status(200).send({status:'Teacher Added Successfully'});
    }else{
        res.status(500).send({status:'Something went wrong'});
    }
}
const updateTeacher = async (req,res)=>{
    const status = await updateTeacherData(req);
    if(status){
        res.status(200).send({status:'Teacher updated Successfully'});
    }else{
        res.status(500).send({status:'something went wrong'});
    }
}
const deleteTeacher = async (req,res)=>{
    const status = await deleteTeacherData(req);
    if(status){
        res.status(200).send({status:'Teacher deleted successfully'});
    }else{
        res.status(500).send({status:'Something went wrong'});
    }
}

module.exports = { getStudent, addStudent, updateStudent,updateFeeStatus, deleteStudent,getTeacher,addTeacher,updateTeacher,deleteTeacher }