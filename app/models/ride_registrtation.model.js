const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userid:String,
    rideid:String,
    category:String,
    route:String,
    dob:String,
    leader:String,
    leader_two:String
  
    });
module.exports = mongoose.model('ride_details', UserSchema);
