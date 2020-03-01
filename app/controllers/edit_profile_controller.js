var editprofile_form= require('../models/user_registration.model');
var bcrypt=require('bcrypt');
exports.create=async(req,res)=>{
 /*    const user = new editprofile_form({
        email:req.body.email,
        password:req.body.password,
        address:req.body.address
    }) */
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    console.log(password);
    console.log(req.body.email);
    let email_id = await editprofile_form.findOne({$or:[{email:req.body.userid},{userid:req.body.userid}]})
   console.log(email_id);
   if(email_id){
     if(email_id.userid==''){
        let email_id=await  editprofile_form.updateOne({"email":req.body.userid},{$set:{"email":req.body.email,"password":password,"address":req.body.address}});
        res.status(200).json({
            status: 200,
            message: 'you have successfully updated your field..',
            data:email_id
        })
    }else if(email_id.email==''){
        
        let email_id=await  editprofile_form.updateOne({"userid":req.body.userid},{$set:{"emailid":req.body.email,"password":password,"address":req.body.address}});
        res.status(200).json({
            status: 200,
            message: 'you have successfully registered...',
            data:email_id
        })
    }else{
        res.status(403).json({
            status: 403,
            message: 'you have successfully registered...',
        })
    }
}else{
    res.status(404).json({
        status: 404,
        message: 'userid exist...',
    })
}
}

