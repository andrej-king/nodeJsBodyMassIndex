const express       = require("express");
const bodyParser    = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response) {
    response.sendFile(__dirname + "\\index.html");
})

app.post("/", function(request, response){
    let weight = Number(request.body.weight);
    let growth = Number(request.body.growth);
    growth = growth / 100;

    let bmi = weight / (growth * growth);

    // Get body mass index
    console.log(bmi);    
    switch(true) {
        case bmi < 19:
            response.send('Underweight');
            break;
        case bmi > 19 && bmi <= 24.9:
            response.send('Normal weight');
            break;
        case bmi > 24.9 && bmi <= 29.9:
            response.send('Overweight');
            break;
        case bmi > 29.9:
            response.send('Obesity');
            break;
        default:
            response.send('Something went wrong');
            break;
    }
});

app.listen(3000, function(){
    console.log('Server started on Port 3000');
});