const user_registration_form = require('../models/user_registration.model.js');
const bcrypt = require('bcrypt');

exports.create = async(req, res) => {

   /*  const user  = new user_registration_form({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        password:req.body.password,
        email: req.body.email,
        emailid:req.body.emailid,
        userid:req.body.userid,
        phone_number: req.body.phone_number,
        date_of_birth: req.body.date_of_birth,
        society_name:req.body.society_name,
        address: req.body.address,
        address_line:req.body.address_line,
        city: req.body.city,
        state:req.body.state,
        zip_code:req.body.zip_code,
        country:req.body.country,
        your_ride:req.body.your_ride,
        blood_group:req.body.blood_group ,
        willing_to_donate_blood_to_save_life:req.body.blood_donation,
        what_type_of_cycle_you_presently_own:req.body.type_of_cycle,
        objective_with_cycling: req.body.cycling_objective,
        ride_planner: req.body.ride_planner,
        latitude:req.body.latitude,
        longitude:req.body.longitude
            
        });        */ 
        console.log('email'+req.body.email);
        console.log('userid'+typeof(req.body.userid));
        console.log('emailid'+req.body.emailid);
   if(req.body.email!='') {   
    let email_id = await user_registration_form.findOne({ email: req.body.email });
    if (email_id) {
        res.status(403).json({
            status: 403,
            message: 'email already exisits!'
        })
       } else {
        const salt = await bcrypt.genSalt(10);
        //user.password = await bcrypt.hash(user.password, salt);
       password = await bcrypt.hash(req.body.password, salt);
       const user  = new user_registration_form({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        password:password,
        email: req.body.email,
        emailid:req.body.emailid,
        userid:req.body.userid,
        phone_number: req.body.phone_number,
        date_of_birth: req.body.date_of_birth,
        society_name:req.body.society_name,
        address: req.body.address,
        address_line:req.body.address_line,
        city: req.body.city,
        state:req.body.state,
        zip_code:req.body.zip_code,
        country:req.body.country,
        your_ride:req.body.your_ride,
        blood_group:req.body.blood_group ,
        willing_to_donate_blood_to_save_life:req.body.blood_donation,
        what_type_of_cycle_you_presently_own:req.body.type_of_cycle,
        objective_with_cycling: req.body.cycling_objective,
        ride_planner: req.body.ride_planner,
        latitude:req.body.latitude,
        longitude:req.body.longitude
            
        }); 
        user.save();
        res.status(200).json({
            status: 200,
            message: 'you have successfully registered...',
        })
    
       }
       
   }
   if(req.body.userid!='') {
    let user_id = await user_registration_form.findOne({ userid: req.body.userid });
    if (user_id) {
         res.status(403).json({
            status: 403,
            message: 'userid already exisits!'
        })
       } else {
        const user  = new user_registration_form({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            password:req.body.password,
            email: req.body.email,
            emailid:req.body.emailid,
            userid:req.body.userid,
            phone_number: req.body.phone_number,
            date_of_birth: req.body.date_of_birth,
            society_name:req.body.society_name,
            address: req.body.address,
            address_line:req.body.address_line,
            city: req.body.city,
            state:req.body.state,
            zip_code:req.body.zip_code,
            country:req.body.country,
            your_ride:req.body.your_ride,
            blood_group:req.body.blood_group ,
            willing_to_donate_blood_to_save_life:req.body.blood_donation,
            what_type_of_cycle_you_presently_own:req.body.type_of_cycle,
            objective_with_cycling: req.body.cycling_objective,
            ride_planner: req.body.ride_planner,
            latitude:req.body.latitude,
            longitude:req.body.longitude
                
            }); 
        user.save();
        res.status(200).json({
            status: 200,
            message: 'you have successfully registered...'
        })
    
       }
       
   }   


    
};


exports.login = async (req, res) => {
    console.log(req.body.username)
    let user = await user_registration_form.findOne({ email: req.body.username }); 
    console.log(user)
    if (user) {
        
        bcrypt.compare(req.body.password, user.password, function(err, match) {
            if(match) {
             // Passwords match
             console.log("match")
             res.status(200).json({
                 status: 200,
                 message: 'you have successfully logged in....',
                 userid: req.body.username,
                 name: user.first_name+" "+user.last_name,
                 email:user.email,
                 login_type:"normal"
             })
             //return res.status(200).send('user and password match sucessfully');
            } else {
             console.log("not match")
             res.status(403).json({
                status: 403,
                message: 'invalid password'
            })
             //return res.status(403).send('invalid password');


            } 
            

            
          });

    }
    else{

        res.status(404).json({
            status: 404,
            message: 'login failed....'
        })
        //return res.status(404).send('user not found..');

    }
    
};
exports.facebook_login = async (req, res) => {
    let fb_user = await user_registration_form.findOne({ userid: req.body.userid });
    console.log(fb_user)
    if (fb_user) {
        res.status(200).json({
            status: 200,
            message: 'Logged in with Facbook....',
            userid: req.body.userid,
            name:fb_user.first_name+" "+fb_user.last_name,
            login_type:"fb"
        })
        
        
    }
    else{

        res.status(404).json({
            status: 404,
            message: 'Userid not exist'
        })
        

    }


};
