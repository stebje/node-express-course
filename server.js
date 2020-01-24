// Add node package express
const express = require('express');
const app = express();

const mockUserData = [
    {name: 'Steffen'},
    {name: 'Maxime'}
]

app.get('/users', function (req, res){
    res.json({
        success:true,
        message:'Got the users!',
        users:mockUserData
    })
})

app.listen(8000, function() {
    console.log("The app is running!")
});