const { updateFeeStatus } = require("../controllers/adminController");

const updateAllStudentsFeeStatus = async () => {
  await updateFeeStatus();
};

module.exports = { updateAllStudentsFeeStatus };
