const Teachers = require("../models/mongoModel/teachers");
class TeacherController {
  static teacherLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const teacher = await Teachers.findOne({ email });
      if (!teacher) {
        return res.status(400).json({
          error: "Teacher with this email does not exist",
        });
      }
      if (teacher.password !== password) {
        return res.status(400).json({
          error: "Incorrect password",
        });
      }
      res.json({
        message: "Teacher logged in successfully",
        teacher,
      });
    } catch (err) {
      return res.status(500).json({
        error: "Something went wrong while logging in",
      });
    }
  };

  static async getTeacherById(req, res) {
    try {
      const { id } = req.params.id;
      console.log("hello id ", id);
      const teacher = await Teachers.find(id);
      if (!teacher) {
        return res.status(404).send({ error: "Teacher not found" });
      }
      res.send(teacher );
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ error: "An error occurred while retrieving the Teacher" });
    }
  }

  static async getAllTeachers(req, res) {
    try {
      const teacherData = await Teachers.find({});
      if (!teacherData) {
        return res.status(404).json({ message: "Teacher data not found" });
      }
      console.log("all Teachers");
      return res
        .status(200)
        .json({ message: "Teacher data found", Admin: teacherData });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  }

  static async addnewTeachers(req, res) {
    try {
      const newTeacher = new Teachers(req.body);
      const teacher = await newTeacher.save();
      console.log("success :", teacher);
      res.json({
        message: "Teacher added successfully",
        teacher,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        error: "Failed to add new teacher",
      });
    }
  }

  static async editTeacher(req, res) {
    try {
      const teacher = await Teachers.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true, runValidators: true }
      );
      if (!teacher)
        return res.status(404).json({ message: "Teacher not found" });
      res
        .status(200)
        .json({ message: "Teacher updated successfully", teacher });
    } catch (err) {
      res.status(400).json({ error: "Failed to update teacher" });
    }
  }

  static async deleteTeacher(req, res) {
    try {
      const { id } = req.params;
      const teacher = await Teachers.findByIdAndDelete(id);
      if (!teacher) {
        res.status(404).send({ message: "Teacher not found" });
        return;
      }
      res.send({ message: "Teacher deleted", teacher });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error deleting Teacher" });
    }
  }
}

module.exports = TeacherController;
