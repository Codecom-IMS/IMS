

const getTeacher = (req,res)=>{
    console.log('runnig')
    res.status(200).send({status:'Get Teacher'});
}
const addTeacher = (req,res)=>{
    res.status(200).send({status:'Add Teacher'});
}
const updateTeacher = (req,res)=>{
    res.status(200).send({status:'Update Teacher'});
}
const deleteTeacher = (req,res)=>{
    res.status(200).send({status:'Delete Teacher'});
}

module.exports = {getTeacher,addTeacher,updateTeacher,deleteTeacher}