const express = require("express");
const { createTodo, updateTodo } = require("../backend/types")
const { todo } = require("../backend/db")
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}
));

app.post("/todos", async (req, res) => {
    const createPayload = req.body;
    const parsedTodo = await createTodo.safeParse(createPayload)
    if (!parsedTodo.success) {
        res.status(411).json({
            msg: "Wrong format of todo"
        })
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.status(200).json({
        msg: "Todo Created"
    })
})

app.get("/todos", async (req, res) => {
    try {
        const todos = await todo.find()
        if (todos.length == 0) {
            res.status(404).json({
                msg: "No todo found"
            })
        }
        res.status(200).json({
            todos
        })
    } catch (error) {
        res.status(500).json({
            msg: "error catched"
        })
    }

})

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong Payload"
        })
    }
    else {
        const todos = await todo.updateOne({
            _id: updatePayload.id
        }, {
            completed: true
        }
        )
        res.status(200).json({
            msg: "Todo mark as completed"
        })
    }
})
app.listen(3000);