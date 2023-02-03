const Admins = require("../models/mongoModel/admin");
class AdminController {
  static adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await Admins.findOne({ email });
      if (!admin) {
        return res.status(400).json({
          error: "Admin with this email does not exist",
        });
      }
      if (admin.password !== password) {
        return res.status(400).json({
          error: "Incorrect password",
        });
      }
      res.json({
        message: "Admin logged in successfully",
        admin,
      });
    } catch (err) {
      return res.status(500).json({
        error: "Something went wrong while logging in",
      });
    }
  };



  static async getAdminById(req, res) {
    try {
      const { id } = req.body;
      if (!id) {
        try {
          const adminData = await Admins.find({});
          if (!adminData) {
            return res.status(404).json({ message: "admin data not found" });
          }
          return res
            .status(200)
            .json({ message: "admin data found", Admin: adminData });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: "Server error" });
        }
      } else {
        const admin = await Admins.find({ id: id });
        if (!admin) {
          return res.status(404).send({ error: "Admin not found" });
        }
        res.send({ admin });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ error: "An error occurred while retrieving the admin" });
    }
  }

  static async getAllAdmins(req, res) {
    console.log("all admins");
    try {
      const adminData = await Admins.find({});
      if (!adminData) {
        return res.status(404).json({ message: "admin data not found" });
      }
      return res
        .status(200)
        .json({ message: "admin data found", Admin: adminData });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  }

  static async addnewAdmins(req, res) {
    try {
      const newAdmin = new Admins(req.body);
      const adminData = await newAdmin.save();
      return res
        .status(201)
        .json({ message: "Admin added successfully", Admin: adminData });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  }

  static async editAdmins(req, res) {
    try {
      // {
      //   _id: req.params.id;

      // }
      // const {} = request.body;
      const updatedAdmin = await Admins.findByIdAndUpdate(
        {_id:req.params.id},
        { $set: req.body },
        { new: true, runValidators: true }
      );
      if (!updatedAdmin) {
        return res.status(404).json({ message: "Admin not found" });
      }
      return res
        .status(200)
        .json({ message: "Admin updated successfully", updatedAdmin });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  }

  static async deleteAdmin(req, res) {
    try {
      const { id } = req.params;
      const admin = await Admins.findByIdAndDelete(id);
      if (!admin) {
        res.status(404).send({ message: "Admin not found" });
        return;
      }
      res.send({ message: "Admin deleted", admin });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error deleting admin" });
    }
  }
}

module.exports = AdminController;
