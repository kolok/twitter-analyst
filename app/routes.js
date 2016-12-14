var core = require('./controllers.core');

module.exports = function(app){
  app.get('/', core.home);
  })
  app.get('/top', function(req, res){
    res.send('This is the top page');
  })
  app.get('/results', function(req, res){
    res.send('This is the results page');
  })
  app.get('/', function(req, res){
    res.json({message:'This is the API'});
  })
}
