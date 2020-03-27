const mongoose = require('mongoose');
const UserTourRegistration = mongoose.Schema({
    userid:String,
    tourid:String,
    category:String,
    route:String,
    dob:String,
    leader:String,
    leader_two:String
    });
module.exports=mongoose.model('tour_details',UserTourRegistration)