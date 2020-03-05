const user_rank_form= require('../models/rank_calc.model.js');
const user_details= require('../models/user_registration.model.js')
exports.resources = async(req,res)=>{
//   const user_rank = new user_rank_form({
//    userid:req.body.userid,
//    timetaken:req.body.timetaken,
//   distance:req.body.distance,
//  date:req.body.date,
//   activityname:req.body.activityname 

//  })  
let user_id = await user_rank_form.findOne({ userid: req.body.userid });
if(!user_id) {
    res.status(404).json({  
        status: 404,
        message: 'userid is not registered for showing rank of you...'
    })
} else{
    let time_taken = await user_rank_form.find();
    //console.log('hi: '+time_taken)
    var users = time_taken.sort((a,b)=>{return parseFloat(a.timetaken) - parseFloat(b.timetaken)});
    console.log("hr: "+users);
     let newusers=[];
     let newusers_2=[];
    for (let i = 0; i < users.length; i++) {
        newusers.push({
            userid:users[i].userid,
            timetaken:users[i].timetaken,
            rank:i+1
        })
        
      }      
      console.log(newusers);
      for(let i=0;i<newusers.length;i++){
         let name = await user_details.find({$or:[{userid:newusers[i].userid},{email:newusers[i].userid}]});
         //console.log(name);
         for(let j=0;j<name.length;j++){
            newusers_2.push({
                userid:newusers[i].userid,
                name:name[j].first_name+' '+name[j].last_name,
                rank:newusers[i].rank,
                timetaken:newusers[i].timetaken
            })
        } 
      }
       console.log(newusers_2);
       let count=1;
      let newusers_3=[];
       for(let i=0;i<newusers_2.length;i++){
          if(req.body.userid==newusers_2[i].userid){
              console.log(count);
              if(count<=10){
                  let ten_members=newusers_2.slice(0,10);
                  console.log('yes: '+ten_members.length);   
                  res.status(200).json({
                    status: 200,  
                    data:ten_members,
                    message: 'ten members',
                    rank:newusers[i].rank
                    
                })
              }else{
                 
                for(let j=0;j<10;j++){
                    newusers_3.push({
                        userid:newusers_2[j].userid,
                        name:newusers_2[j].name,
                        rank:newusers_2[j].rank,
                        timetaken:newusers_2[j].timetaken
                    })
                }
                newusers_3.push({
                    userid:newusers_2[count-1].userid,
                    name:newusers_2[count-1].name,
                    rank:newusers_2[count-1].rank,
                    timetaken:newusers_2[count-1].timetaken
                })
                res.status(200).json({
                    status: 200,
                    data:newusers_3,
                    message: 'eleven members',
                    rank:"eleventh"
                }) 
                  console.log('no'+count);
              }
          }
          count++;
      } 
  /*    res.status(200).json({
        status: 200,
        userid: req.body.userid, 
        // name: result_name,
        // rank: result_rank,
        // time_taken:result_timetaken, 
        message: 'your rank  already registered...' 
    }) */
    
    
}
}