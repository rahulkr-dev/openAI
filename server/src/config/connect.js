const mongoose = require('mongoose')
require('dotenv').config()

export async function connect(){
    try{
        mongoose.connect(process.env.DB_URL);
        console.log(`DB connect sucessfully`)
    }catch(err){
        console.log('DB not connected',err)
    }
}