const mongoose = require('mongoose')


module.exports = function connectDB(){
    //connecting to mongoDB
    mongoose.connect(process.env.POKEMON_URI);
    const db = mongoose.connection
    db.on('error',(e)=>{console.log(e)})
    db.on('open',(e)=>{console.log('Connected to MongoDB')})
    db.on('close',(e)=>{console.log("MongoDB disconnected!!!!")})
}