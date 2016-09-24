



app.get('/', function(req, res, next) {
    res.render('pages/index.ejs', { title: 'express' });
  });

module.exports = routes
