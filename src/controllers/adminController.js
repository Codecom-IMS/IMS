const AdminServices = require("../app/services/adminServices");
const {API_STATUS_CODES,RESPONSE_MESSAGES} = require("../constants/constants")

class AdminControllers{
    static getStudent = async (req, res) => {
        const students = await AdminServices.getStudents(req);
        res.json({
            status: API_STATUS_CODES.SUCCESS,
            message: "Operation Successfull",
            body: students
        })
    }
    
    static addStudent = async (req, res) => {
        const status = await AdminServices.addStudentData(req);
        if (status) {
            res.status(API_STATUS_CODES.SUCCESS).send({ status: 'Student Successfully' });
        } else {
            res.status(API_STATUS_CODES.INTERNAL_SERVER_ERROR).send({ status: RESPONSE_MESSAGES.ERROR_MESSAGE});
        }
    }
    static updateStudent = async (req, res) => {
        const status = await AdminServices.updateStudentData(req);
        if (status) {
            res.status(API_STATUS_CODES.SUCCESS).send({ status: 'Student updated' });
        }
        else {
            res.status(API_STATUS_CODES.INTERNAL_SERVER_ERROR).send({ status: RESPONSE_MESSAGES.ERROR_MESSAGE });
        }
    }
    static updateFeeStatus = async () => {
        await AdminServices.updateStudentsFeeStatus();
    }
    
    static deleteStudent = async (req, res) => {
        const status = await AdminServices.deleteStudentData(req);
        if (status) {
            res.status(API_STATUS_CODES.SUCCESS).send({ status: 'Student deleted' });
        } else {
            res.status(API_STATUS_CODES.INTERNAL_SERVER_ERROR).send({ status: RESPONSE_MESSAGES.ERROR_MESSAGE });
        }
    
    }
    
    static getTeacher = async (req, res) => {
        const teachers = await AdminServices.getTeachers(req);
        res.json({
            status: API_STATUS_CODES.SUCCESS,
            message: "Operation Successfull",
            body: teachers
        });
    }
    static addTeacher = async (req, res) => {
        const status = await AdminServices.addTeacherData(req);
        if (status) {
            res.status(API_STATUS_CODES.SUCCESS).send({ status: 'Teacher Added Successfully' });
        } else {
            res.status(API_STATUS_CODES.INTERNAL_SERVER_ERROR).send({ status: RESPONSE_MESSAGES.ERROR_MESSAGE });
        }
    }
    static updateTeacher = async (req, res) => {
        const status = await AdminServices.updateTeacherData(req);
        if (status) {
            res.status(API_STATUS_CODES.SUCCESS).send({ status: 'Teacher updated Successfully' });
        } else {
            res.status(API_STATUS_CODES.INTERNAL_SERVER_ERROR).send({ status: RESPONSE_MESSAGES.ERROR_MESSAGE });
        }
    }
    static deleteTeacher = async (req, res) => {
        const status = await AdminServices.deleteTeacherData(req);
        if (status) {
            res.status(API_STATUS_CODES.SUCCESS).send({ status: 'Teacher deleted successfully' });
        } else {
            res.status(API_STATUS_CODES.INTERNAL_SERVER_ERROR).send({ status: RESPONSE_MESSAGES.ERROR_MESSAGE });
        }
    }
}

module.exports = AdminControllers 