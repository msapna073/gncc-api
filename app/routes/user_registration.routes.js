module.exports = (app) => {
    const user_form = require('../controllers/user_registration.controller.js');

    // Create a user registration
    app.post('/user/registration', user_form.create);

    app.post('/user/login', user_form.login);
    app.post('/user/facebook/login',user_form.facebook_login);
}



