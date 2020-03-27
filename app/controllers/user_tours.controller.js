const user_tour_information= require('../models/user_tours.model.js');
const tour_details= require('../models/tour_registration.model.js');
const logger = require('../logger/logger.js')
exports.tours = async(req,res)=>{
    try{
let usertourinformation = await user_tour_information.find();
let usertourdeatails = await tour_details.find({userid:req.body.userid});
if(usertourinformation || usertourdeatails){
    let present=[];
    let notpresent=[];
    for(let i=0;i<usertourinformation.length;i++){
        let check=0;
        for(let j=0;j<usertourdeatails.length;j++){
           if(usertourinformation[i].tourid==usertourdeatails[j].tourid){
               present.push({
                   tourid:usertourinformation[i].tourid,
                   datetime:usertourinformation[i].datetime,
                   title:usertourinformation[i].title,
                   details:usertourinformation[i].details
               });
               check=1;
           }
        }
        if(check==0){
            notpresent.push({
                tourid:usertourinformation[i].tourid,
                datetime:usertourinformation[i].datetime,
                title:usertourinformation[i].title,
                details:usertourinformation[i].details
            })
        }
    }
    console.log(notpresent);
    logger.info(`notpresnt: ${JSON.stringify(notpresent)}`)
    console.log(present)
    logger.info(`present: ${JSON.stringify(present)}`)
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
        console.log("error from user tour information"+e);
        logger.error(`error from user tour information: ${JSON.stringify(e)}`)
    }
}