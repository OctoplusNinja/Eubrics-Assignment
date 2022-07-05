const pool = require('../models/db');
const { v4: uuidv4 } = require('uuid');

const getBehaviourTodos = async (req, res) => {
    const { behaviour } = req.params;
    try {
        const allTodos = await pool.query(`SELECT * FROM ${behaviour}`);
        res.json(allTodos.rows);
    } catch (err) {
        console.log(err);
    }
}

const createBehaviourTodo = async (req, res) => {
    const { behaviour } = req.params;
    try {
        const { todo } = req.body;
        const newTodo = await pool.query(`INSERT INTO ${behaviour} (id, task) VALUES($1, $2) RETURNING *`, [uuidv4(), todo]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.log(err);
    }
}

const updateBehaviourTodo = async (req, res) => {
    const { behaviour } = req.params;
    try {
        const { id, todo, completed } = req.body;
        const updateTodo = await pool.query(`UPDATE ${behaviour} SET task=$1, completed=$2 WHERE id=$3 RETURNING *`, [todo, completed, id]);
        res.json(updateTodo.rows[0]);
    } catch (err) {
        console.log(err);
    }
}

const deleteBehaviourTodo = async (req, res) => {
    const { behaviour } = req.params;
    try {
        const { id } = req.body;
        const deleteTodo = await pool.query(`DELETE FROM ${behaviour} WHERE id=$1 RETURNING *`, [id]);
        res.json(deleteTodo.rows[0]);
    } catch (err) {
        console.log(err);
    }
}

const deleteCompletedTodo = async (req, res) => {
    const { behaviour } = req.params;
    try {
        const deleteTodo = await pool.query(`DELETE FROM ${behaviour} WHERE completed=true`);
        res.json({ status: "Success", description: "Deleted All Todos" });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getBehaviourTodos,
    createBehaviourTodo,
    updateBehaviourTodo,
    deleteBehaviourTodo,
    deleteCompletedTodo
}