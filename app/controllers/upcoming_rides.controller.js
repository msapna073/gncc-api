const upcoming_rides= require('../models/upcoming_rides.model.js');
const logger = require('../logger/logger.js')
exports.upcomingrides = async(req,res)=>{
    try{
let upcomingridesinfo = await upcoming_rides.find();
console.log(upcomingridesinfo);
if(upcomingridesinfo){
    let data=[];
    for(let i=0;i<upcomingridesinfo.length;i++){
               data.push({
                   upcomingrideid:upcomingridesinfo[i].upcomingrideid,
                   datetime:upcomingridesinfo[i].datetime,
                   title:upcomingridesinfo[i].title,
                   details:upcomingridesinfo[i].details
           })
        }
        console.log(data)
        res.status(200).json({
            status: 200,
            data:data
        })
    }
}catch(e){
    res.status(404).json({
        status: 404,
        message: e
    })
        console.log("error from upcoming rides information"+e);
        logger.error(`error from upcoming rides information : ${JSON.stringify(e)}`)
    }
}