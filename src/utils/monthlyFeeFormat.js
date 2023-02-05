const { updateFee } = require("../controllers/UserController")

const updateAllStudentsFee = async ()=>{
    await updateFee();
}

module.exports = {updateAllStudentsFee}