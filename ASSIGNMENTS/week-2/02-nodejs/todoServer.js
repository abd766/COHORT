/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, "description": "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

module.exports = app;
let id = 3;
todos = [{
  id: 0,
  details: [{
    title: "task-0",
    completed: true,
    description: "This is task 0"
  }]
}, {
  id: 1,
  details: [{
    title: "task-1",
    completed: true,
    description: "This is task 1"
  }]
}, {
  id: 2,
  details: [{
    title: "task-2",
    completed: false,
    description: "This is task 2"
  }]
},]

function details() {
  let id, title, description;
  for (let i = 0; i < todos.length; i++) {
    id = todos[i].id;
    title = todos[i].title;
    description = todos[i].description;
  }
  return {
    id,
    title,
    description

  }
}

app.get("/todos", function (req, res) {
  res.status(200).json({
    todos: todos
  })
});


app.get("/todos/:id", function (req, res) {
  const id = parseInt(req.params.id);
  if (id > todos.length - 1 || id < 0) {
    res.status(404).json({
      message: "Todo not found"
    });
  }
  else {
    let title = todos[id].details[0].title;
    let completed = todos[id].details[0].completed;
    let description = todos[id].details[0].description;

    res.status(200).json({
      id,
      title,
      completed,
      description
    });
  }

});

app.post("/todos", function (req, res) {
  const title = req.body.title;
  const completed = req.body.completed;
  const description = req.body.description;
  if (title !== undefined && completed !== undefined && description !== undefined) {
    todos.push({
      id: id,
      details: [{
        title: title,
        completed: completed,
        description: description,
      }]
    });
    res.status(201).json({
      msg: "Done dana done"
    });
    id = id + 1;
  } else {
    res.status(400).json({
      msg: "Bhai entry kaide se kro"
    })
  }
})

app.put("/todos/:id", function (req, res) {
  const id = req.params.id;
  if (id > todos.length - 1 || id < 0) {
    res.status(404).json({
      msg: "todo not found"
    })
  }
  else {
    var title = req.body.title || todos[id].details[0].title;
    var completed = req.body.completed !== undefined ? req.body.completed : todos[id].details[0].completed;
    var description = req.body.description || todos[id].details[0].description;
    todos[id].details[0] = {
      title: title,
      completed: completed,
      description: description
    };
    res.status(200).json({
      todos: todos[id],
    })
  }
});

app.delete("/todos/:id", function (req, res) {
  const id = parseInt(req.params.id);
  if (id > todos.length || id < 0) {
    res.status(404).json({
      msg: "todo not found"
    })
  } else {
    let outputTodos = [];
    for (let i = 0, j = 0; i < todos.length; i++) {
      if (i !== id) {
        outputTodos[j] = todos[i];
        j = j + 1;
      } else {
        continue;
      }
    }
    res.status(200).json({
      msg: "Todo ${id} was deleted",
      todos: outputTodos
    })
  }
})
app.all('*', (req, res) => {
  res.status(404).send('Route not found');
});

app.listen(3000);