var core = require('./controllers.core');

module.exports = function(app){
  app.get('/', core.home);
  })
  app.get('/top', core.top);
  })
  app.get('/results', core.results);
  })
  app.get('/', function(req, res){
    res.json({message:'This is the API'});
  })
}
