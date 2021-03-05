const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/mongodb.config.js");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
const categorie = require('./app/models/categorie.model.js');
const question = require('./app/models/Question.model.js');
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

// Connecting to the database
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Successfully connected to MongoDB.");   
        const categories = [
          
          ]
          const questions = [
          
          ]
    for(let i=0; i<categories.length; i++){

      const Categorie = new categorie({
        caty_name: categories[i].caty_name
        });

      // Save a categorie in the MongoDB
      await Categorie.save();
    }

    for(let i=0; i<questions.length; i++){

      const Question = new quesion({
        Cateogory: quesions[i].Cateogory,
        main_question: quesions[i].main_question,
        anser_quesion: quesions[i].anser_quesion
        });
  
      // Save a quesions in the MongoDB
      await Question.save();
    }
  })

  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to YASSINE application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require('./app/routes/categorie.router.js')(app);
require('./app/routes/Question.router.js')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
