const express = require('express');
const app = express();
const cors = require("cors");
const behaviours = require('./routes/behaviours.route')
const behaviourTodos = require('./routes/behaviourTodos.route')

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/', behaviours);
app.use('/', behaviourTodos);

// app.get("/todos/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const todo = await pool.query("SELECT * FROM testtable WHERE id = $1", [id]);
//         res.json(todo.rows);
//     } catch (err) {
//         console.log(err);
//     }
// })


app.listen(PORT, console.log(`Server Listening on PORT ${PORT}...`))