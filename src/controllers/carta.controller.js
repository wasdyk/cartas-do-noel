const db = require("../models/carta.model.js");
const Carta = db.cartas;

// Create and Save a new carta
exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a new carta
  const carta = new carta({
    name: req.body.name,
    content: req.body.content,
  });

  // Save carta in the database
  carta
    .save(carta)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the carta."
      });
    });  
};

// Retrieve all cartas from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  name.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cartas."
      });
    }); 
};

// Find a single carta with a name
exports.findOne = (req, res) => {
  const name = req.params.name;

  Carta.findById(name)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Carta not found with name " + name });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Carta with name=" + name });
    });
};
