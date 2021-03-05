const question = require('../models/Question.model.js');
 
// POST a Question
exports.createquestion = (req, res) => {

    const Question = new question({
        Cateogory: req.body.Cateogory,
        main_question : req.body.main_question,
        anser_quesion: req.body.anser_quesion
                        });
 
    // Save a Question in the MongoDB
    Question.save().then(data => {
                    res.status(200).json(data);
                }).catch(err => {
                    res.status(500).json({
                      message: "Fail!",
                      error: err.message
                    });
                });
};
  
// FETCH all Question
exports.questions = (req, res) => {
    question.find().select('-__v').then(questionInfos => {
          res.status(200).json(questionInfos);
        }).catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
};

// get a question by Id
exports.getquestion = (req, res) => {
    question.findById(req.params.id).select('-__v')
      .then(question => {
        res.status(200).json(question);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "question not found with id " + req.params.id,
                  error: err
              });                
          }
          return res.status(500).send({
              message: "Error retrieving question with id " + req.params.id,
              error: err
          });
      });
};
 
// UPDATE a question
exports.updatequestion = (req, res) => {
    // Find question and update it
    question.findByIdAndUpdate(
                      req.body._id, 
                      {
                        Cateogory: req.body.Cateogory,
                        main_question : req.body.main_question,
                        anser_quesion: req.body.anser_quesion
                      }, 
                        {new: true}
                    ).select('-__v')
        .then(question => {
            if(!question) {
                return res.status(404).send({
                    message: "Error -> Can NOT update a question with id = " + req.params.id,
                    error: "Not Found!"
                });
            }

            res.status(200).json(question);
        }).catch(err => {
            return res.status(500).send({
              message: "Error -> Can not update a question with id = " + req.params.id,
              error: err.message
            });
        });
};

// DELETE a question
exports.deletequestion = (req, res) => {
    let questionId = req.params.id

    question.findByIdAndRemove(questionId).select('-__v -_id')
        .then(question => {
            if(!question) {
              res.status(404).json({
                message: "Does Not exist a question with id = " + questionId,
                error: "404",
              });
            }
            res.status(200).json({});
        }).catch(err => {
            return res.status(500).send({
              message: "Error -> Can NOT delete a question with id = " + questionId,
              error: err.message
            });
        });
};