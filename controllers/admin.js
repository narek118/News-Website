const Gift = require('../models/Gift');

exports.index = (req, res) => {
  res.render('admin', {
    title: 'Ադմինո'
  });
}

exports.addGift = (req, res, next) => {
	console.log(req.file)
	let gift = new Gift({
	  name: req.body.name,
	  price: req.body.price,
	  romantic: req.body.romantic,
	  original: req.body.original,
	  surprise: req.body.surprise,
	  joke: req.body.joke,
	  description: req.body.description,
	  picture: req.file.originalname
	})

	gift.save((err, user) => {
		console.log(err);
		console.log(user);
	})
	// let gift = new Gift;
	// gift.name = req.query.name;
	// gift.save((err, data) => {
	// 	console.log(data);
	// 	res.send(data)
	// })
};	
