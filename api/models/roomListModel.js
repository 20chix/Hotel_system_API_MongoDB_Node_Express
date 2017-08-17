'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RoomSchema = new Schema({
  full_name: {
    type: String,
    Required: 'Enter first name'
  },
time: {
    type: String,
    Required: 'Enter checkout'
},
people: {
    type: Number,
    Required: 'Enter people'
},
  kids: {
    type: Number,
    Required: 'Enter kids'
},
 room_type: {
    type: String,
    Required: 'Enter room type'
},
   room_number: {
    type: Number,
    Required: 'Enter room Number'
},
  Created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Rooms', RoomSchema);
