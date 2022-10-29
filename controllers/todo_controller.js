const ToDo = require('../models/todo');

// Create a task in the dp
module.exports.createTask = function (req, res) {
    ToDo.create({
        title: req.body.title,
        date: req.body.date,
        category: req.body.category
    }, function (err, newTodoItem) {
        if (err) {
            console.log('Error in creating a todo', err);
            return;
        }
        console.log(`Todo item created successfully - ${newTodoItem.title}`);
        return res.redirect('/');
    });
}

// Delete a task in dp
module.exports.deleteTask = function (req, res) {
    if (req.body.item_name != null) {
        ToDo.deleteMany({ title: req.body.item_name }, function (err) {
            if (err) {
                console.log('Error in finding the todo Item', err);
                return;
            }
            console.log('Deleted the items succesfully')
        });
    }
    return res.redirect('/');
}

// Update the status of the todo item
module.exports.updateTask = function (req, res) {
    let statusOfItem;

    // Find the todo item and get the current status
    ToDo.findOne({ title: req.query.title }, function (err, todo) {
        if (err) {
            console.log('Error in finding the todo item', err);
            return;
        }
        statusOfItem = !todo.status;

        // Update the status of the todo item based on previous state
        ToDo.findOneAndUpdate({ title: req.query.title }, { status: statusOfItem }, function (err, todo) {
            if (err) {
                console.log('Error in finding the todo item', err);
                return;
            }

            statusOfItem = !todo.status;
            console.log(statusOfItem);
        });
    });
    return res.redirect('/');
}