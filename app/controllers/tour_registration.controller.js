const tour_registration_form = require('../models/tour_registration.model');
exports.tour_registration = async(req, res) =>  {


    const user_ride  = new tour_registration_form({
        userid:req.body.userid,
        tourid:req.body.tourid,
        category:req.body.category,
        route:req.body.route,
        dob:req.body.dob,
        leader:req.body.leader,
        leader_two:req.body.leader_two
     })
     console.log("hello welcome to the tour")
     let user_id = await tour_registration_form.findOne({ userid: req.body.userid });
    if(!user_id) {
        var result = user_ride.save();
        res.status(200).json({
            status: 200,
            message: 'you have successfully registered...'
        })

    }
    if(user_id){
        var arr_tour = []
        let tour_id = await tour_registration_form.find({"userid": req.body.userid});
         for (let i = 0; i < tour_id.length; i++) {
             const tour_value = tour_id[i].tourid;
             arr_tour.push(tour_value);
            
            
        }
        
    console.log(arr_tour);
        if (arr_tour.includes(req.body.tourid) === true) {    
            res.status(403).json({
                status: 403,
                message: 'tourid already exists with the  userid'
            })
        } else{
            var result = user_ride.save();
            res.status(200).json({
            status: 200,
            message: 'tour id registered with userid...'
        })
        }
    }
        
}   
        
           
        
        
    


        