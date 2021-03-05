module.exports = function(app) {
  var categories = require('../controllers/categorie.controller.js');
  app.post('/api/categorie', categories.createcategorie);
  app.get('/api/categorie/:id', categories.getcategorie);  
  
  app.get('/api/categories', categories.categories);
  app.put('/api/categorie', categories.updatecategorie);
  app.delete('/api/categorie/:id', categories.deletecategorie);
}