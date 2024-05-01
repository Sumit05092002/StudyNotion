//instatiating the mongoose library
const mongoose=require('mongoose');

//importing dotenv library to use the configuration of the environment file
require('dotenv').config();

//creating a function to establish the connection with database
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("connected to Database successfully"))
    .catch((error)=>{
        console.log(error);
        process.exit(1);
    })
}

//exporting the dbConnect function inorder to use it in indexjs file
module.exports=dbConnect;