const PORT = 8080
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connetDB = require('./config/db')

const todoRoutes = require('./routes/todos')
const app = express();
app.use(cors());
app.use(express.json());


connetDB();

app.use('/todos', todoRoutes)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
