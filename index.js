var express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

var server = express();
server.use(cors)

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}));

server.post('/', function(req, res) {
//    const {firstName, middleName, lastName, suffix, address, zipcode, birthday, currentEmploymentStatus, income, email, pw, phone, agree} = req.body
    // mailer.messages().send(req.body, function(error, body){
    //     console.log(config.MAILGUN_API_KEY)
    //     console.log(config.URL)
    //     console.log(body)
    // });
    console.log('test sent')    
    .then((mes) => {
        console.log(mes)
        res.json({ message: 'Thanks for your message. Our service team has been notified and will get back to you shortly.' })
    }).catch(err => {
        console.log(err)
        res.json(err);
    })
});

server.listen(6060)