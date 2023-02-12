const Student = require("../../models/MongoModel/students");
const Teacher = require("../../models/MongoModel/teachers");
const logger = require("../../utils/logger");
const ifArrearsExists = require("../../utils/if_arrears_exists");
const fee_details = require("../../models/MongoModel/fee_details");
const Admin = require("../../models/mongoModel/admins");

class AdminRepository {
  static getStudentsFromDB = async (rollNumber) => {
    let students;
    try {
      students = rollNumber
        ? await Student.findOne({ roll_number: rollNumber })
        : await Student.find({});
      logger.info("Student Get Successful");
      return students;
    } catch (error) {
      logger.error(`Error Occured at Get Students ${error}`);
      return students;
    }
  };

  static addStudentToDB = async (studentData) => {
    try {
      const creatStudent = Student(studentData);
      await creatStudent.save();
      logger.info("Student Added Successfully");
      return true;
    } catch (error) {
      logger.error(`Error Occured at Add Student ${error}`);
      return false;
    }
  };
  static updateStudentDataInDB = async (newData, roll_number) => {
    try {
      await Student.updateOne({ roll_number: roll_number }, newData);
      logger.info("Student Updated Successfully");
      return true;
    } catch (error) {
      logger.error(`Error Occured at Update Student ${error}`);
      return false;
    }
  };
  static updateStudentsFeeStatusInDB = async () => {
    try {
      const feeStatus = { fee_status: "upaid" };
      await Student.updateMany({}, feeStatus);
      logger.info("Student fee_status updated Successfully");
    } catch (error) {
      logger.error(`Error Occured at update student fee status ${error}`);
    }
  };
  static deleteStudentFromDB = async (roll_number) => {
    try {
      const updatedStatus = { status: "inactive" };
      await Student.updateOne({ roll_number: roll_number }, updatedStatus);
      logger.info("Student Deleted Successfully");
      return true;
    } catch (error) {
      logger.error(`Error Occured at Delete Student ${error}`);
      return false;
    }
  };
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
  };

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
  };
  static updateTeacherDataInDB = async (newData, id) => {
    try {
      await Teacher.updateOne({ id: id }, newData);
      logger.info("Teacher Updated Successfully");
      return true;
    } catch (error) {
      logger.error(`Error Occured at Update Teacher ${error}`);
      return false;
    }
  };

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
  };

  static async getSudentFeeDetails(roll_number) {
    try {
      const details = await Student.find(
        { roll_number: roll_number },
        {
          student_name: 1,
          roll_number: 1,
          basic_fee: 1,
          others: 1,
          class: 1,
        }
      );
      return details;
    } catch (error) {
      throw error;
    }
  }
  static async getPrevArrears(roll_number) {
    try {
      const details = await fee_details.find(
        { student_id: roll_number },
        { arrears: 1, _id: 0 }
      );
      return details[details.length - 1];
    } catch (error) {
      throw error;
    }
  }

  static async pushFeeDetails(details) {
    try {
      await fee_details.insertMany(details);
    } catch (error) {
      throw error;
    }
  }
  static async updateStudentStatus(rollNumberToFind) {
    try {
      await Student.updateOne(
        { roll_number: rollNumberToFind },
        { $set: { fee_status: "paid" } }
      );
    } catch (error) {
      throw error;
    }
  }

  static async totalLength() {
    try {
      const details = await fee_details.find();
      return details.length + 1;
    } catch (error) {
      throw error;
    }
  }
  static async updateStudentsFeeInDB() {
    try {
      const unpaidStudents = await Student.find(
        { fee_status: "upaid" },
        {
          roll_number: 1,
          student_name: 1,
          roll_number: 1,
          basic_fee: 1,
          others: 1,
        }
      );
      for (let i = 0; i < unpaidStudents.length; i++) {
        let rollNumberToFind = unpaidStudents[i].roll_number;
        const PrevArrears = await getPrevArrears(rollNumberToFind);
        const studentDetails = await getSudentFeeDetails(rollNumberToFind);
        const totalLength = await totalLength();
        const details = {
          id: totalLength,
          student_id: studentDetails[0].roll_number,
          student_name: studentDetails[0].student_name,
          student_id: studentDetails[0].roll_number,
          basic_fee: studentDetails[0].basic_fee,
          current_paid_fee: 0,
          others: studentDetails[0].others,
          class: studentDetails[0].class,
          date: req.body.date,
        };
        const newDetails = ifArrearsExists(PrevArrears, details);
        await updateStudentStatus(rollNumberToFind);
        await pushFeeDetails(newDetails);
      }
    } catch (error) {
      return false;
    }
  }
   static async adminLogin(email, password) {
    try {
      const result = await Admin.find({ email, password });
      logger.info(`Retrieved admin details with email ${email}`);
      return result[0];
    } catch (error) {
      logger.error(
        `Error retrieving admin details with email ${email} - ${error}`
      );
      throw error;
    }
  }
}
module.exports = AdminRepository;
