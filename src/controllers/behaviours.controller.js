const pool = require('../models/db');

const getBehaviours = async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM behaviours");
        res.json(allTodos.rows);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getBehaviours
}