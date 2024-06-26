const mongoose = require('mongoose');

const messageShema = mongoose.Schema({
nom : {type:String, required:true},
email:{type:String, required:true},
telephone:{type:String, required:true},
message:{type:String, required:true},
date : {type:Date, default:Date.now}
})
module.exports = mongoose.model('Message',messageShema);