const ride_registration_form = require('../models/ride_registrtation.model.js');
exports.ride_registration = async(req, res) =>  {


    const user_ride  = new ride_registration_form({
        userid:req.body.userid,
        rideid:req.body.rideid,
        category:req.body.category,
        route:req.body.route,
        dob:req.body.dob,
        leader:req.body.leader,
        leader_two:req.body.leader_two
     })
     console.log("hello welcome to the ride")
     let user_id = await ride_registration_form.findOne({ userid: req.body.userid });
    if(!user_id) {
        var result = user_ride.save();
        res.status(200).json({
            status: 200,
            message: 'you have successfully registered...'
        })

    }
    if(user_id){
        var arr_ride = []
        let ride_id = await ride_registration_form.find({"userid": req.body.userid},{rideid:1, _id: 0});
       // console.log(ride_id)
        // var ride_id;
         for (let i = 0; i < ride_id.length; i++) {
            const ride_value = ride_id[i].rideid;
            arr_ride.push(ride_value);
            
        }
        console.log(arr_ride)
    
        if (arr_ride.includes(req.body.rideid) === true) {    
            res.status(403).json({
                status: 403,
                message: 'rideid already exists with the  userid'
            })
        } else{
            var result = user_ride.save();
            res.status(200).json({
            status: 200,
            message: 'ride id registered with userid...'
        })
        }
    }
        
}   
        
           
        
        
    


        