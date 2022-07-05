const express = require("express");
const router = express.Router();

const { getBehaviourTodos, createBehaviourTodo, updateBehaviourTodo, deleteBehaviourTodo, deleteCompletedTodo } = require('../controllers/behaviourTodos.controller');

router.route('/:behaviour').get(getBehaviourTodos).post(createBehaviourTodo).put(updateBehaviourTodo).delete(deleteBehaviourTodo);
router.route('/:behaviour/deleteCompletedTodo').post(deleteCompletedTodo);

module.exports = router;