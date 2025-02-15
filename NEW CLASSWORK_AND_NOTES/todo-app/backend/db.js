const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:ZY56VzgJAKPb0fKq@cluster0.xgmdwmx.mongodb.net/");
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed:  Boolean
});

const todo = mongoose.model("todos-app", todoSchema);
module.exports = {
    todo
}