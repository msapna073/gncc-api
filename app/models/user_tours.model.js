const mongoose = require('mongoose');
const UserTourSchema = mongoose.Schema({
    tourid:String,
    datetime:String,
    title:String,
    details:String
    });
module.exports=mongoose.model('tour_information',UserTourSchema)