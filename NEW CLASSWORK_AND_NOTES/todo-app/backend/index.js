const express = require('express');
const cors = require('cors');
const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const {todo} = require("./db")
const app = express()
const port = 3000

app.use(express.json());
app.use(cors());
app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You provided the data in the wrong format"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg:"Todo successfully created"
    });

})
app.get("/todos", async function (req, res) {
    const todos = await todo.find();

    res.json({
        todos
    });
})

app.put("/completed", function (req, res) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).msg({
            msg: "Please proide correct input format"
        })
        return;
    }

    todo.update({
        _id: req.body.id
    },{
        completed: true
    })

    res.json({
        msg: "You todo has been marked completed"
    });
})

app.listen(port);