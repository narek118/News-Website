exports.initialRendering = (req, res, next) => {
	res.render('hotsales', {
	    title: 'HotSales'
	  });
}