const { updateFee } = require("../controllers/AdminController");

const updateAllStudentsFee = async () => {
  await updateFee();
};

module.exports = { updateAllStudentsFee };
