const Gift = require('../models/Gift');

exports.index = (req, res) => {

	Gift.find({})
	.then(response => {
		console.log(response);
	  res.render('results', {
	    title: 'Արդյունքներ',
	    info: req.query,
	    res: response	
	  });
	})
};