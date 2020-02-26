const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first_name:String,
    last_name:String,
    password:String,
    email: String,
    userid:String,
    phone_number: Number,
    date_of_birth: String,
    society_name:String ,
    address: String,
    address_line:String,
    city: String,
    state:String,
    zip_code:String,
    country:String,
    your_ride:String,
    blood_group:String ,
    willing_to_donate_blood_to_save_life:String,
    what_type_of_cycle_you_presently_own:String,
    objective_with_cycling: Array,
    ride_planner: String ,
    latitude:String,
    longitude:String
  
    });
module.exports = mongoose.model('user_details', UserSchema);
