'use strict';
module.exports = function(app) {
  var room_list = require('../controllers/roomListController');


  // user List Routes
  app.route('/rooms')
    .get(room_list.list_all_rooms)
    .post(room_list.create_a_room);

  app.route('/rooms/:roomId')
    .get(room_list.read_a_room)
    .delete(room_list.delete_a_room);

};
