const {StudentServices} = require("../app/services/student");
const { TeacherServices} = require("../app/services/teacher");


class AdminControllers{
    static getStudent = async (req, res) => {
        const students = await StudentServices.getStudents(req);
        res.json({
            status: "200",
            message: "Operation Successfull",
            body: students
        })
    }
    
    static addStudent = async (req, res) => {
        const status = await StudentServices.addStudentData(req);
        if (status) {
            res.status(200).send({ status: 'Student Successfully' });
        } else {
            res.status(500).send({ status: 'Something Went Wrong' });
        }
    }
    static updateStudent = async (req, res) => {
        const status = await StudentServices.updateStudentData(req);
        if (status) {
            res.status(200).send({ status: 'done' });
        }
        else {
            res.status(500).send({ status: 'done' });
        }
    }
    static updateFeeStatus = async () => {
        const status = await StudentServices.updateStudentsFeeStatus();
        if (status) {
            console.log("fee status Updated");
        } else {
            console.log("An error occured while updating fee status")
        }
    }
    
    static deleteStudent = async (req, res) => {
        const status = await StudentServices.deleteStudentData(req);
        if (status) {
            res.status(200).send({ status: 'Student deleted' });
        } else {
            res.status(500).send({ status: 'something went wrong' });
        }
    
    }
    
    static getTeacher = async (req, res) => {
        const teachers = await TeacherServices.getTeachers(req);
        res.json({
            status: "200",
            message: "Operation Successfull",
            body: teachers
        });
    }
    static addTeacher = async (req, res) => {
        const status = await TeacherServices.addTeacherData(req);
        if (status) {
            res.status(200).send({ status: 'Teacher Added Successfully' });
        } else {
            res.status(500).send({ status: 'Something went wrong' });
        }
    }
    static updateTeacher = async (req, res) => {
        const status = await TeacherServices.updateTeacherData(req);
        if (status) {
            res.status(200).send({ status: 'Teacher updated Successfully' });
        } else {
            res.status(500).send({ status: 'something went wrong' });
        }
    }
    static deleteTeacher = async (req, res) => {
        const status = await TeacherServices.deleteTeacherData(req);
        if (status) {
            res.status(200).send({ status: 'Teacher deleted successfully' });
        } else {
            res.status(500).send({ status: 'Something went wrong' });
        }
    }
}

module.exports = { AdminControllers }