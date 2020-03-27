const user_event_information= require('../models/user_events.model.js');
const event_details= require('../models/event_registration.model.js');
exports.events = async(req,res)=>{
    try{
let usereventinformation = await user_event_information.find();
let usereventdeatails = await event_details.find({userid:req.body.userid});
if(usereventinformation || usereventdeatails){
   // console.log(usereventinformation.length);
    //console.log(usereventinformation[0].eventid);
    //console.log(usereventdeatails.length);
    let present=[];
    let notpresent=[];
    for(let i=0;i<usereventinformation.length;i++){
        let check=0;
        for(let j=0;j<usereventdeatails.length;j++){
           if(usereventinformation[i].eventid==usereventdeatails[j].eventid){
               present.push({
                   eventid:usereventinformation[i].eventid,
                   datetime:usereventinformation[i].datetime,
                   title:usereventinformation[i].title,
                   details:usereventinformation[i].details
               });
               check=1;
           }
        }
        if(check==0){
            notpresent.push({
                eventid:usereventinformation[i].eventid,
                datetime:usereventinformation[i].datetime,
                title:usereventinformation[i].title,
                details:usereventinformation[i].details
            })
        }
    }
    console.log(notpresent);
    console.log(present)
    res.status(200).json({
        status: 200,
        present: present,
        notpresent:notpresent
    })
}
}catch(e){
    res.status(404).json({
        status: 404,
        message: e
    })
        console.log("error from user events information"+e);
    }
}