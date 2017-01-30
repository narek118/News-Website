const Gift = require('../models/Gift');

exports.addGift = (req,res) => {
	let gift = new Gift;
	gift.name = req.query.name;
	gift.save((err, data) => {
		console.log(data);
		res.send(data)
	})
};

exports.index = (req, res) => {
	console.log(req.query);


  res.render('results', {
    title: 'Արդյունքներ',
    info: req.query	
  });
};