class Userfactory {
  static async getRollAndName(object) {
    const result = object.map((document) => [
      document.roll_number,
      document.student_name,
    ]);
    return result;
  }
  static async generateAttendance(object) {
    const result = object.map((value) => value.roll_number);
    const attendances = ["P", "A"];
    result.forEach((id, index) => {
      result[index] = [
        id,
        attendances[Math.floor(Math.random() * 2)],
      ];
    });
    return result;
  }
}
module.exports = Userfactory;
