module.exports = function(app) {
 
    var questions = require('../controllers/Question.controller.js');
  
    app.post('/api/question', questions.createquestion);
    app.get('/api/question/:id', questions.getquestion);
    app.get('/api',/questions questions.questions);
    app.put('/api/question', questions.updatequestion);
    app.delete('/api/question/:id', questions.deletequestion);
  }