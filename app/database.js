var loki = require('lokijs');

var db = new loki('db.json');

db.addCollection('top').insert([
    {term: '370z',      style:'warning'},
    {term: 'Z',         style:'danger'},
    {term: 'Fairlady',  style:'success'},
    {term: '350z',      style:'info'},
    {term: '300zx',     style:'default'},
    {term: '240z',      style:'warning'},
    {term: '280zx',     style:'info'},
    {term: 'Z34',       style:'primary'},
    {term: 'nismo',     style:'default'},
    {term: 'nissan',    style:'success'},
  ]);

  db.addCollection('searches');
  db.saveDatabase();
