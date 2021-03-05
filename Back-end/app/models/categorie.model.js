const mongoose = require('mongoose');
 
const categorieschema = mongoose.Schema({
  caty_name: String
});

module.exports = mongoose.model('Categorie', categorieschema);