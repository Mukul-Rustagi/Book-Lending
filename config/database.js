const mongoose=require("mongoose");
require("dotenv").config();

const dbConnect=()=>{
    const dbURI=process.env.MONGO_URI;
    mongoose.connect(dbURI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    .then(()=>{
        console.log("connection successful");
    })
    .catch(()=>{
        console.log("recieved Error");
        console.error(err);l
        process.exit(1);
    });
}

module.exports=dbConnect;