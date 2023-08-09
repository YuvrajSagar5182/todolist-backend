const express = require('express');
const Todos = require('../models/todo');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const todos = await Todos.find({});
        res.json(todos);
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res, next) => {
    try {
        // console.log('sadam')
        console.log(req.body);
        const todo = new Todos({ todo: req.body.todo });
        const resp = await todo.save();
        res.status(201).json({ message: "Todo created successfully" });

    } catch (err) {
        console.log(err);
        next();

    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        res.json({ id });
    } catch (error) {
        next(error);
    }
})

router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const todo = await Todos.findByIdAndUpdate(id, { todo: req.body.todo });
        if (!todo) {
            console.log('ERROR FINDING the TODO');
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.json(todo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        await Todos.findByIdAndDelete(id);
        res.json("Deleted Successfully..");
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = router