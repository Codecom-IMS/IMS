class UserFactory {
  static async getRollAndName(object) {
    const result = object.map((document) => [
      document.roll_number,
      document.student_name,
    ]);
    return result;
  }
  static async generateAttendance(object, attendance) {
    const result = object.map((value) => value.roll_number);
    result.forEach((id, index) => {
      result[index] = [id, attendance[index]];
    });
    return result;
  }
  static async getAttendance(object) {
    const attendance = object[0].att;
    const result = attendance.map((document) => document[1]);
    return result;
  }
  static async getAttendanceDetails(students, response) {
    for (let i = 0; i < students.length; i++) {
      students[i].push(response[i]);
    }
    return students;
  }
}
module.exports = UserFactory;
