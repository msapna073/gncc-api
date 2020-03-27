const event_registration_form = require('../models/event_registration.model');
const logger = require('../logger/logger.js')

exports.event_registration = async(req, res) =>  {


    const user_ride  = new event_registration_form({
        userid:req.body.userid,
        eventid:req.body.eventid,
        category:req.body.category,
        route:req.body.route,
        dob:req.body.dob,
        leader:req.body.leader,
        leader_two:req.body.leader_two
     })
     console.log("hello welcome to the event")
     let user_id = await event_registration_form.findOne({ userid: req.body.userid });
    if(!user_id) {
        var result = user_ride.save();
        logger.info(`you have successfully registered...: ${JSON.stringify(req.body)}`)
        res.status(200).json({
            status: 200,
            message: 'you have successfully registered...'
        })

    }
    if(user_id){
        var arr_event = []
        let event_id = await event_registration_form.find({"userid": req.body.userid});
        //console.log(event_id)
        // var ride_id;
         for (let i = 0; i < event_id.length; i++) {
             const event_value = event_id[i].eventid;
             arr_event.push(event_value);
            
            
        }
        
    console.log(arr_event);
        if (arr_event.includes(req.body.eventid) === true) {  
            logger.error(`eventid already exists with the  userid: ${JSON.stringify(req.body.eventid)}`)
            res.status(403).json({
                status: 403,
                message: 'eventid already exists with the  userid'
            })
        } else{
            var result = user_ride.save();
            logger.info(`event id registered with userid...: ${JSON.stringify(req.body.eventid)}`)
            res.status(200).json({
            status: 200,
            message: 'event id registered with userid...'
        })
        }
    }
        
}   
        
           
        
        
    


        