const servicelayer= require("../ServiceLayer/QRBussinessLogic.js");
const request = require('request');
const path= require("path");
const fs= require("fs");
async function getQR(req, res){

    let message= req.query.message;
    

    const url= await servicelayer(message);

    console.log(typeof url);
    //  res.send(url.then((data)=> data.json()).then((data)=>{
    //       console.log(data);
    //       return data;
    //  }));
      return res.send(url);



}


module.exports= getQR;
