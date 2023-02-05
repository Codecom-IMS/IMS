class userFactory{
    static getStudentGrade(student){
        const std_grade = student.class;
        return std_grade;
    }
    static getAttDetails(studentFromAttendance,student,roll_num){
        const searchedStudent = []
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
    static getWholeClassAttDetails(wholeClassStudentsAttendance){
        const searchedStudent = []
        wholeClassStudentsAttendance.forEach((obj) => {
            const newObj = {
              date: obj.date,
              class: obj.class,
              att: [],
            };
            for (let i = 0; i < obj.att.length; i++) {
              newObj.att.push(obj.att[i]);
            }
            searchedStudent.push(newObj);
          });
        return searchedStudent;
    }
    static getFeeDetailByDate(student,start_date,end_date){
        const searchedStudent = []
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
module.exports = userFactory;