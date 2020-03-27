module.exports = (app) => {
    const user_form = require('../controllers/user_registration.controller.js');
    const ride_form = require('../controllers/ride_registration.controller.js');
    const event_form = require('../controllers/event_registration.controller.js');
    const tour_form = require('../controllers/tour_registration.controller.js');
    const rank_form = require('../controllers/rank_calc.controller.js');
    const edit_form = require('../controllers/edit_profile_controller.js');
    const user_events = require('../controllers/user_events.controller.js');
    const user_tours = require('../controllers/user_tours.controller.js');
    const daily_rides = require('../controllers/daily_rides.controller.js');
    const upcoming_rides = require('../controllers/upcoming_rides.controller.js');
    const ride_calender = require('../controllers/ride_calender.controller.js');
    // Create a user registration
    app.post('/user/registration', user_form.create);

    app.post('/user/login', user_form.login);
    app.post('/user/facebook/login',user_form.facebook_login);
    app.post('/user/ride/registration',ride_form.ride_registration)
    app.post('/user/event/registration',event_form.event_registration)
    app.post('/user/tour/registration',tour_form.tour_registration)
    //app.post('/user/rank',function(req,res){rank_form.resources})
    app.post('/user/rank', rank_form.resources)
    app.post('/user/editprofile',edit_form.create)
    app.post('/user/events',user_events.events)
    app.post('/user/tours',user_tours.tours)
    app.post('/user/ridecalender',ride_calender.ridescalender)
    app.get('/user/dailyrides',daily_rides.dailyrides)
    app.get('/user/upcomingrides',upcoming_rides.upcomingrides)
}
