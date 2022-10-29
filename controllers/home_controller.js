const ToDo = require('../models/todo');

// Get all the todo items and render on the page
module.exports.home = function (req, res) {
    ToDo.find({}, function (err, todos) {
        return res.render('home', {
            title: 'To Do Application',
            todos: todos
        });
    });
}