const mongoose = require('mongoose');
const Publicationshema = mongoose.Schema({
    titre : {type:String, required:true},
    description : {type:String, required:true},
    image : {type:String, required:true},
    date : {type:Date, default:Date.now}
})
module.exports = mongoose.model('publication',  Publicationshema);