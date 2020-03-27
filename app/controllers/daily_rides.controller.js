const daily_rides= require('../models/daily_rides.model.js');
exports.dailyrides = async(req,res)=>{
    try{
let dailyinformation = await daily_rides.find();
console.log(dailyinformation);
if(dailyinformation){
    let data=[];
    for(let i=0;i<dailyinformation.length;i++){
               data.push({
                   dailyid:dailyinformation[i].dailyid,
                   datetime:dailyinformation[i].datetime,
                   title:dailyinformation[i].title,
                   details:dailyinformation[i].details
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
        console.log("error from daily rides information"+e);
    }
}