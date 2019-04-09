const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo');

router.post('/todo', todoController.addTodo);
router.get('/todo', todoController.getAllTodo);


module.exports = router;