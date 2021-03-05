const categorie = require('../models/categorie.model.js');
 

// POST a categorie
exports.createcategorie = (req, res) => {

    const Categorie = new categorie({
      caty_name: req.body.caty_name
                        });
 
    // Save a categorie in the MongoDB
    Categorie.save().then(data => {
                    res.status(200).json(data);
                }).catch(err => {
                    res.status(400).json({
                      message: "error!",
                      error: err.message
                    });
                });
};
  



















// FETCH all categories
exports.categories = (req, res) => {
    categorie.find().then(categorieInfos => {
          res.status(200).json(categorieInfos);
        }).catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
};

// get a categorie by Id
exports.getcategorie = (req, res) => {
  categorie.findById(req.params.id)
      .then(categorie => {
        res.status(200).json(categorie);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "categorie not found with id " + req.params.id,
                  error: err
              });                
          }
          return res.status(500).send({
              message: "Error retrieving categorie with id " + req.params.id,
              error: err
          });
      });
};
 
// UPDATE a categorie
exports.updatecategorie = (req, res) => {
    // Find categorie and update it
    categorie.findByIdAndUpdate(
                      req.body._id, 
                      {
                        caty_name: req.body.caty_name
                      }
                    )
        .then(categorie => {
            if(!categorie) {
                return res.status(404).send({
                    message: "Error -> Can NOT update a categorie with id = " + req.params.id,
                    error: "Not Found!"
                });
            }

            res.status(200).json(categorie);
        }).catch(err => {
            return res.status(500).send({
              message: "Error -> Can not update a categorie with id = " + req.params.id,
              error: err.message
            });
        });
};

// DELETE a categorie
exports.deletecategorie = (req, res) => {
    let categorieId = req.params.id

    categorie.findByIdAndRemove(categorieId)
        .then(categorie => {
            if(!categorie) {
              res.status(404).json({
                message: "Does Not exist a categorie with id = " + categorieId,
                error: "404",
              });
            }
            res.status(200).json({message : 'ctg was deletted '});
        }).catch(err => {
            return res.status(500).send({
              message: "Error -> Can NOT delete a categorie with id = " + categorieId,
              error: err.message
            });
        });
};