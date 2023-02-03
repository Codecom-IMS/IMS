const { updateFeeStatus } = require("../controllers/admin")

const updateAllStudentsFeeStatus = async ()=>{
    await updateFeeStatus();
}

module.exports = {updateAllStudentsFeeStatus}