var mongoose = require('mongoose');
var Pokestop = mongoose.model('Pokestop');

module.exports = (function() {
	return {
		index: function(req, res){
			console.log(req);
		},
		create: function(req, res){
			console.log(req.body);
			Pokestop.create({position: req.body.position}, function(err, results) {
				if(err){
					console.log(err);
				}
			})
		},
		find: function(req, res){
			Pokestop.find({}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		remove: function(req, res) {
			var pos = [];
			pos.push(parseFloat(req.params.lat));
			pos.push(parseFloat(req.params.lng));
			Pokestop.remove({position: pos}, function(err, results) {
				if (err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		}
	}
})();