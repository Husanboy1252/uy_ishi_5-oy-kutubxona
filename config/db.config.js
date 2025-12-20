const mongoose = require("mongoose")

async function connectDB(){
    try{
await mongoose.connect(process.env.MONGO_URI)
.then(() =>console.log("Conneected to DB"))
.catch((error) =>console.log(error))
    }catch{
        console.log(error.message);       
    }
}

module.exports = connectDB