const express = require('express');
require('dotenv').config();
const app = express();
const cors = require("cors");
const behaviours = require('./routes/behaviours.route')
const behaviourTodos = require('./routes/behaviourTodos.route')

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/', behaviours);
app.use('/', behaviourTodos);


app.listen(PORT, console.log(`Server Listening on PORT ${PORT}...`))