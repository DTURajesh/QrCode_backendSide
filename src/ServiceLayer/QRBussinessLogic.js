var express= require("express");
var QRCode = require('qrcode');

async function generateQr(message){
    let url_image;
    // QRCode.toString(message, function (err, url) {
    //   console.log(url)
    //   url_image=url;
    // })
   // const generateQR = async text => {
      try {
        return  await QRCode.toDataURL(message);
        
      } catch (err) {
        console.error(err)
      }
    //}
    
    //  return url_image;
}

module.exports= generateQr;

