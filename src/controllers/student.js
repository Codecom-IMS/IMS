

const getStudent = (req,res)=>{
    res.status(200).send({status:'Get Student'});
}

const addStudent = (req,res)=>{
    res.status(200).send({status:'Add Student'});
}

const updateStudent = (req,res)=>{
    res.status(200).send({status:'Update Student'});
}

const deleteStudent = (req, res)=>{
    res.status(200).send({status:'Delete Student'});
}

module.exports = {getStudent,addStudent,updateStudent,deleteStudent}