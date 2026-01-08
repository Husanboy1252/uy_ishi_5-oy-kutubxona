const { model } = require("mongoose")
const nodemailer = require("nodemailre")
const CustomErrorHandler = require("./custom-error-handler")

module.exports= async function(code,email) {
    try{
   const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user:"mayq0175@gmail.com",
        pass: process.env.APP_KEY
    }
   })

   await transporter.sendMail({
    from:"mayq0175@gmail.com",
    to:email,
    subject:"labrery verification",
    text:"Quyidagi tasdiqlash qo'dini kiriting",
    html: `<b>${code}</b>`
   })
    }catch(error){
        throw CustomErrorHandler.BadRequest(error.message)
    }
}