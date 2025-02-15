const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:ZY56VzgJAKPb0fKq@cluster0.xgmdwmx.mongodb.net/todo-list"); 
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}