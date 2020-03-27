const mongoose = require('mongoose');
const UserEventRegistration = mongoose.Schema({
    userid:String,
    eventid:String,
    category:String,
    route:String,
    dob:String,
    leader:String,
    leader_two:String
    });
module.exports=mongoose.model('event_details',UserEventRegistration)