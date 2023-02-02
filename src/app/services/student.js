const { getStudentsFromDB, addStudentToDB, updateStudentDataInDB, deleteStudentFromDB } = require("../repositories/student")


const getStudents = async (apiRequest)=>{
    const rollNumber = apiRequest.query.roll_number;
    return await getStudentsFromDB(rollNumber);
}

const addStudentData = async (apiRequest)=>{
    const studentData = apiRequest.query;
    return await addStudentToDB(studentData);
}

const updateStudentData = async (apiRequest)=>{
    const newData = apiRequest.query;
    const rollNumber = apiRequest.params.rollNumber;
    return await updateStudentDataInDB(newData,rollNumber);
}

const deleteStudentData = async (apiRequest)=>{
    const rollNumber = apiRequest.query.roll_number;
    return await deleteStudentFromDB(rollNumber);
}

module.exports = {getStudents,addStudentData,updateStudentData,deleteStudentData}