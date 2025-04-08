const mongoose = require ('mongoose');  
const mongo_url = process.env.MONGO_CNN;
mongoose.connect(mongo_url)
    .then(()=>{
        console.log("MongoDB Connected...");
    }).catch((err)=>{
        console.log("mongodb connection erro:",err);
    });