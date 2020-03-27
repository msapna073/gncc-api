const mongoose = require('mongoose');
const RankSchema = mongoose.Schema({
    userid:String,
    timetaken:Number,
    distance:Number,
    date:String,
    activityname:String
    });
    module.exports=mongoose.model('rank_details',RankSchema)