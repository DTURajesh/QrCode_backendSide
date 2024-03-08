const express= require("express");
const router= require("./Router/Qrrouter.js");
const Student_router= require("./Router/Signup_route.js");
const bodyParser= require("body-parser");
const app= express();

const port =process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());


app.use("/api", router);
app.use("/signup", Student_router);

app.listen(port, function(err){
    if(err){
        console.log("err in server Starting");
    }else{
        console.log("server is Start" , port);
    }

})
