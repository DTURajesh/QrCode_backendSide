const StudentRepo = require("../RepositoryLayer/Student.js");
const  {student, studentService}= require("../ServiceLayer/StudentService.js");

const Student_service= new studentService();

async function addStudent(req, res){
   
    //console.log("hello for add Studnet");
     const name= req.body.user_name;
     const  rollno= req.body.user_password;
     const s1=  await new student(name, rollno);
    // console.log(s1);
     await Student_service.addStudent(s1);

     res.send("Student is Added");
     
}


module.exports= addStudent;