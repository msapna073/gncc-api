const mongoose = require('mongoose');
const UserEventSchema = mongoose.Schema({
    eventid:String,
    datetime:String,
    title:String,
    details:String
    });
module.exports=mongoose.model('event_information',UserEventSchema)