const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
const todoController = require('../controllers/todo_controller');

// Routes for the different end points
router.get('/', homeController.home);
router.post('/add-task', todoController.createTask);
router.post('/delete-task', todoController.deleteTask);
router.get('/update-task', todoController.updateTask);

module.exports = router;