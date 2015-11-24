var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var app = express();

mongoose.connect('mongodb://localhost/test');

var Car = mongoose.model('Car', {
	make: String,
	model: String,
	year: Number

}); //is a like a Class of cat. this is 
//kinda of like our table. But the concept of schema doesnt exist in mongo. at this point we have only defined a 
//class of objects. within the database theres no real distinction bew




var silvia = new Car({
	make: 'BMW',
	model: 'e360',
	year: 2015

});

// var frank = new Car({

// })


// silvia.save(function (err) {
// 	if (err)
// 		console.log('room')
// }) //everytime you run the server you would be saving the objects to the server 


// Car.find({}, function(err, results){
// 	console.log('All THE RECORDS:' + results);
// })
// Car.findOne({'make': 'BMW'}, function(err, results) {
// 	console.log('One of the records', + results); 
// })
// kittyToo.save(function(err){
// 	if (err)
// 		console.log('ruff');
// })

//routes
app.get('/', function(req, res) {

	res.send('hello world');

});

app.post('/post', function(req, res){
	var carData = req.body;
	var tempCar = new Car ({
		"make": carData.make,
		"model": carData.model,
		"year": carData.year
	})

})

app.listen(8000);