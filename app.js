const PORT = 8080
const express = require('express');
const cors = require('cors');


const connetDB = require('./config/db')

const todoRoutes = require('./routes/todos')
const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();


connetDB();

app.use('/todos', todoRoutes)
app.get('/', (req, res) => {
    res.send("<h1>Hello from Yuvi's Todo's Backend</h1>")

})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
