'use strict';


var mongoose = require('mongoose'),
  Room = mongoose.model('Rooms');

exports.list_all_rooms = function(req, res) {
  Room.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_a_room = function(req, res) {
  var new_room = new Room(req.body);
  new_room.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_room = function(req, res) {
  Room.remove({
    _id: req.params.roomId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ task: 'Room successfully deleted' });
  });
};



exports.read_a_room = function(req, res) {
  Room.findById(req.params.roomId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

