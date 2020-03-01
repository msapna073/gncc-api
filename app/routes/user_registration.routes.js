module.exports = (app) => {
    const user_form = require('../controllers/user_registration.controller.js');
    const ride_form = require('../controllers/ride_registration.controller.js');
    const rank_form = require('../controllers/rank_calc.controller.js');
    const edit_form=   require('../controllers/edit_profile_controller.js');
    // Create a user registration
    app.post('/user/registration', user_form.create);

    app.post('/user/login', user_form.login);
    app.post('/user/facebook/login',user_form.facebook_login);
    app.post('/user/ride/registration',ride_form.ride_registration)
    //app.post('/user/rank',function(req,res){rank_form.resources})
    app.post('/user/rank', rank_form.resources)
    app.post('/user/editprofile',edit_form.create)
}



