// require express
var express = require('express');
var path    = require('path');

//create our route object
var router = express.Router();

//export our router
module.exports = router;

//route for home page
router.get('/', function(req, res) {
	res.render('pages/home');
});

//route for about page
router.get('/about', function(req, res) {
	var users = [
		{name: 'Flimmer', email: 'flimmer@etaten.dk', avatar: 'http://placekitten.com/300/300'},
		{name: 'Henrik', email: 'henrik@etaten.dk', avatar: 'http://placekitten.com/400/400'},
		{name: 'Frank', email: 'frank@etaten.dk', avatar: 'http://placekitten.com/500/500'},
		{name: 'Simon', email: 'simon@etaten.dk', avatar: 'http://placekitten.com/600/600'},
		{name: 'Lisbeth', email: 'lisbeth@etaten.dk', avatar: 'http://placekitten.com/700/700'}
	];


	res.render('pages/about', {users: users });
});


//route for contact page
router.get('/contact', function(req, res){
	res.render('pages/contact');
});
//POST-route for contact page
router.post('/contact', function(req, res){
	res.send('Thanks for contacting us' + req.body.name + '! We will respond very fast');

});