const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const ACCESS_TOKEN_SECRET = config.secret;

class AdminFactory {
  static async adminLogin(response) {
    try {
      if (response) {
        console.log(response);
        const token = jwt.sign(response.email, ACCESS_TOKEN_SECRET);
        return {
          status: 200,
          token,
          id: response.id,
          admin_name: response.admin_name,
          adminId: response.id,
          email: response.email,
        };
      } else {
        const respose = { status: 404, message: "Invalid Email or Password" };
        return respose;
      }
    } catch (error) {
      throw error;
    }
  }
  static getStudentGrade(student) {
    const std_grade = student.class;
    return std_grade;
  }
  static getAttDetails(studentFromAttendance, student, roll_num) {
    const searchedStudent = [];
    studentFromAttendance.forEach((obj) => {
      const newObj = obj.att;
      for (let i = 0; i < newObj.length; i++) {
        if (newObj[i][0] == roll_num) {
          const stdObj = {
            date: obj.date,
            student_name: student.student_name,
            father_name: student.father_name,
            class: student.class,
            attendance: newObj[i][1],
          };
          searchedStudent.push(stdObj);
        }
      }
    });
    return searchedStudent;
  }
  static getWholeClassAttDetails(wholeClassStudentsAttendance, student) {
    const searchedStudent = [];
    wholeClassStudentsAttendance.forEach((obj) => {
      let count = 0;
      for (let i = 0; i < obj.att.length; i++) {
        for (let j = 0; j < student.length; j++) {
          if (obj.att[i][0] === student[j].roll_number) {
            count += 1;
            let newObj = {
              id: count,
              date: obj.date,
              student_name: student[j].student_name,
              father_name: student[j].father_name,
              class: obj.class,
              attendance: obj.att[i][1],
            };
            searchedStudent.push(newObj);
          }
        }
      }
    });
    return searchedStudent;
  }
  static getFeeDetailByDate(student, start_date, end_date) {
    const searchedStudent = [];
    student.forEach((obj) => {
      if (
        start_date.split("-")[1] <= obj.date.split("-")[1] &&
        obj.date.split("-")[1] <= end_date.split("-")[1]
      ) {
        searchedStudent.push(obj);
      }
    });
    return searchedStudent;
  }
}

module.exports = AdminFactory;
