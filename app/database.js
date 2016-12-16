var loki = require('lokijs');

var db = new loki('db.json');

db.addCollection('top').insert([
  {term:'Nissan'          , style :'warning' },
  {term:'240z'            , style :'danger'  },
  {term:'280z'            , style :'success' },
  {term:'300zx'           , style :'info'    },
  {term:'350z'            , style :'default' },
  {term:'370z'            , style :'warning' },
  {term:'GTR'             , style :'info'    },
  {term:'Fairlady Z'      , style :'primary' },
  {term:'Nismo'           , style :'default' },
  {term:'ZCON'         , style :'success' }
]);

db.addCollection('searches');

db.saveDatabase();
