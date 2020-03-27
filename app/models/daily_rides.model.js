const mongoose = require('mongoose');
const DailyRideSchema = mongoose.Schema({
    dailyid:String,
    datetime:String,
    title:String,
    details:String
    });
module.exports=mongoose.model('daily_rides',DailyRideSchema)