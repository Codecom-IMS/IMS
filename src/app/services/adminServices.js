const AdminRepository = require("../repositories/adminRepository");
const AdminFactory = require("../factories/adminFactory");
const dateCheck = require("../../utils/dateCheck");

class AdminServices {
  static getStudents = async (apiRequest) => {
    const rollNumber = apiRequest.query.roll_number;
    return await AdminRepository.getStudentsFromDB(rollNumber);
  };

  static addStudentData = async (apiRequest) => {
    const studentData = apiRequest.body;
    return await AdminRepository.addStudentToDB(studentData);
  };

  static updateStudentData = async (apiRequest) => {
    const newData = apiRequest.body;
    const rollNumber = apiRequest.params.rollNumber;
    return await AdminRepository.updateStudentDataInDB(newData, rollNumber);
  };
  static updateStudentsFeeStatus = async () => {
    await AdminRepository.updateStudentsFeeStatusInDB();
  };
  static deleteStudentData = async (apiRequest) => {
    const rollNumber = apiRequest.query.roll_number;
    return await AdminRepository.deleteStudentFromDB(rollNumber);
  };
  static getTeachers = async (apiRequest) => {
    const teacherId = apiRequest.query.id;
    return await AdminRepository.getTeachersFromDB(teacherId);
  };

  static addTeacherData = async (apiRequest) => {
    const teacherData = apiRequest.body;
    return await AdminRepository.addTeacherToDB(teacherData);
  };

  static updateTeacherData = async (apiRequest) => {
    const newData = apiRequest.body;
    const teacherId = apiRequest.params.id;
    return await AdminRepository.updateTeacherDataInDB(newData, teacherId);
  };

  static deleteTeacherData = async (apiRequest) => {
    const teacherId = apiRequest.query.id;
    return await AdminRepository.deleteTeacherFromDB(teacherId);
  };
  static async getSudentFeeDetails(roll_number) {
    try {
      const result = await AdminRepository.getSudentFeeDetails(roll_number);

      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getPrevArrears(roll_number) {
    try {
      const result = await AdminRepository.getPrevArrears(roll_number);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getStudentDetails(roll_number, object) {
    try {
      const result = await AdminRepository.getStudentDetails(roll_number);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async pushFeeDetails(details) {
    try {
      await AdminRepository.pushFeeDetails(details);
    } catch (error) {
      throw error;
    }
  }
  static async updateStudentStatus(rollNumberToFind) {
    try {
      await AdminRepository.updateStudentStatus(rollNumberToFind);
    } catch (error) {
      throw error;
    }
  }
  static async totalLength() {
    try {
      const result = await AdminRepository.totalLength();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateStudentsFee() {
    try {
      return await AdminRepository.updateStudentsFeeInDB();
    } catch (error) {
      throw error;
    }
  }
  static async adminLogin(email, password) {
    try {
      const result = await AdminRepository.adminLogin(email, password);
      const data = await AdminFactory.adminLogin(result);
      return data;}
      catch(error)
      {
      throw error;
      }
}
static async getOneStudentsAttendance(roll_num, start_date, end_date) {
    try {
      const student = await AdminRepository.getStudentByRollnum(roll_num);
      const std_grade = await AdminFactory.getStudentGrade(student);
      const studentFromAttendance = await AdminRepository.getStudentAttByClass(
        std_grade,
        start_date,
        end_date
      );
      const attDetails = AdminFactory.getAttDetails(
        studentFromAttendance,
        student,
        roll_num
      );
      return attDetails;
    } catch (err) {
      throw err;
    }
  }
  static async getStudentAttByClass(std_grade, start_date, end_date) {
    try {
      const student = await AdminRepository.getStudentByClass(std_grade);
      const wholeClassStudentsAttendance =
        await AdminRepository.getStudentAttByClass(
          std_grade,
          start_date,
          end_date
        );
      const WholeClassAttDetails = AdminFactory.getWholeClassAttDetails(
        wholeClassStudentsAttendance,
        student
      );
      return WholeClassAttDetails;
    } catch (err) {
      throw err;
    }
  }
  static async getOneStudentFeeReport(roll_num, start_date, end_date) {
    try {
      const new_start_date = await dateCheck(start_date, end_date);
      const student = await AdminRepository.getStudentFeeByRollnum(roll_num);
      const feeDetailByDate = await AdminFactory.getFeeDetailByDate(
        student,
        new_start_date,
        end_date
      );
      return feeDetailByDate;
    } catch (err) {
      throw err;
    }
  }
  static async getWholeClassFeeReport(std_grade, start_date, end_date) {
    try {
      const new_start_date = await dateCheck(start_date, end_date);
      const student = await AdminRepository.getStudentFeeByClass(std_grade);
      const feeDetailByDate = await AdminFactory.getFeeDetailByDate(
        student,
        new_start_date,
        end_date
      );
      return feeDetailByDate;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = AdminServices;
