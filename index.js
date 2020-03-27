const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./app/logger/logger.js')
// create express app
const app = express();




// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/mongo_db_con.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//Connecting to the database
 mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {  
    logger.info("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. ', err);
    logger.error('Could not connect to the database',err)
    process.exit();
}); 

 // define a simple route
app.get('/', (req, res) => {
    res.json({"message": "hello world"});
    logger.info('welcome to the GNCC-APP')
});

require('./app/routes/user_registration.routes.js')(app);

// listen for requests
var server = app.listen(4000, () => {
    var host = server.address().address
    // console.log(typeof host);
    var port = server.address().port 
    logger.info('server is running on 4000 port')
    
}); 
module.exports=app;
