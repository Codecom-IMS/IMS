const userRepository = require("../repositories/userRepository");
const userFactory = require("../factories/userFactory");
const dateCheck = require("../../utils/dateCheck")
class userService {
    static async getOneStudentsAttendance(roll_num,start_date,end_date){
        try{
            const student = await userRepository.getStudentByRollnum(roll_num);
            const std_grade = await userFactory.getStudentGrade(student);
            const studentFromAttendance = await userRepository.getStudentAttByClass(std_grade,start_date,end_date);
            const attDetails = userFactory.getAttDetails(studentFromAttendance,student,roll_num);
            return attDetails;
        }
        catch(err){
            throw err;
        }
    }
    static async getStudentAttByClass(std_grade,start_date,end_date){
        try {
            const student = await userRepository.getStudentByClass(std_grade);
            const wholeClassStudentsAttendance = await userRepository.getStudentAttByClass(std_grade,start_date,end_date);
            const WholeClassAttDetails = userFactory.getWholeClassAttDetails(wholeClassStudentsAttendance);
            return WholeClassAttDetails;
        } catch (err) {
            throw err;
        }
    }
    static async getOneStudentFeeReport(roll_num, start_date, end_date){
        try {
            const new_start_date = await dateCheck(start_date, end_date);
            const student = await userRepository.getStudentFeeByRollnum(roll_num);
            const feeDetailByDate = await userFactory.getFeeDetailByDate(student,new_start_date,end_date);
            return feeDetailByDate;
        } catch (err) {
            throw err;
        }
    }
    static async getWholeClassFeeReport(std_grade, start_date, end_date){
        try {
            const new_start_date = await dateCheck(start_date, end_date);
            const student = await userRepository.getStudentFeeByClass(std_grade);
            const feeDetailByDate = await userFactory.getFeeDetailByDate(student,new_start_date,end_date);
            return feeDetailByDate;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = userService;