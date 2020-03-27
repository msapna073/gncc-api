const user_event_information= require('../models/event_registration.model');
const user_tour_information= require('../models/tour_registration.model');
const user_event= require('../models/user_events.model');
const user_tour= require('../models/user_tours.model');
const logger = require('../logger/logger.js')
exports.ridescalender = async(req,res)=>{
    try{
console.log(req.body.userid)
let userevents = await user_event_information.find({userid:req.body.userid});
let userevent = await user_event.find();
let usertours = await user_tour_information.find({userid:req.body.userid});
let usertour = await user_tour.find();
if((userevents.length>0 || usertours.length>0)){
    let data=[];
     if(userevents.length>0){
        for(let i=0;i<userevents.length;i++){
            for(let j=0;j<userevent.length;j++){
                if(userevents[i].eventid==userevent[j].eventid){
                    data.push({
                        eventid:userevent[j].eventid,
                        datetime:userevent[j].datetime,
                        title:userevent[j].title,
                        details:userevent[j].details
                })
                }
            }
          
     }
    }
    if(usertours.length>0){
        for(let i=0;i<usertours.length;i++){
            for(let j=0;j<usertour.length;j++){
                if(usertours[i].tourid==usertour[j].tourid)
                data.push({
                    tourid:usertour[j].tourid,
                    datetime:usertour[j].datetime,
                    title:usertour[j].title,
                    details:usertour[j].details
            })
            }
     }
    } 
        console.log(data)
        logger.info(`ride calender data: ${JSON.stringify(data)}`)
        res.status(200).json({
            status: 200,
            data:data
        })
    }else{
        res.status(403).json({
            status: 403,
            message:"no record found"
        }) 
    }
}catch(e){
    res.status(404).json({
        status: 404,
        message: e
    })
        console.log("error from ride calender"+e);
        logger.error(`error from ride calender: ${JSON.stringify(e)}`)
    }
}