const mongoose = require('mongoose');
const UpcomingRideSchema = mongoose.Schema({
    upcomingrideid:String,
    datetime:String,
    title:String,
    details:String
    });
module.exports=mongoose.model('upcoming_rides',UpcomingRideSchema)