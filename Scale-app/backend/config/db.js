// package which is used to connect backend node js with monog db
const mongoose = require('mongoose');

// remove some unrestricted warning from console when connected with mongo DB using mongoose
mongoose.set("strictQuery", false);

// DB connection function
const dbconnect = async ()=>{
    try{
        let conn = await mongoose.connect(process.env.MONGO_URI, {     // process.env.MONGO_URI is .env file in which we store all secret keys. Like data base url, username and password for security purpose
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("db connected: " + conn.connection.host)
    }
    catch(err){
        console.log("some error occured " + err.message)
    }
}

module.exports = dbconnect;