// Add node package express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

const mockUserData = [
    {name: 'Steffen'},
    {name: 'Maxime'}
];

app.get('/users', function (req, res){
    res.json({
        success:true,
        message:'Got the users!',
        users:mockUserData
    })
});

app.get('/users/:id', function (req, res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'Retrieved one user',
        user: req.params.id
    })
});

app.post('/login', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = 'steffenba';
    const mockPassword = '1234';

    if(username==mockUsername && password==mockPassword){
        res.json({
            success: true,
            message: 'Login successful!',
            token: 'this is where the token goes'
        })
    }
    else {
        res.json({
            success: false,
            message: 'Incorrect credentials!'
        })
    }
});

app.listen(8000, function() {
    console.log("The app is running!")
});