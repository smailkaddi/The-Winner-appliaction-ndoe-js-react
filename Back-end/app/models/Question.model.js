const mongoose = require('mongoose');
 
const questionschema = mongoose.Schema({
    Cateogory: String,
    main_question : String,
    anser_quesion : String,
});

module.exports = mongoose.model('Question', questionschema);