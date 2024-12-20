const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { log } = require('console');

const app = express();
const PORT = 5000;

const filePath = "./data/todos.csv"

app.use(cors());
app.use(express.json());

app.get("/todos", (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        const rows = data.split('\n');
        const todos = rows.map(todo => todo.split(",")).map(todo => ({
            user: todo[0],
            title: todo[1],
            checked: (todo[2] === "true"),
            id: todo[3]
        }))

        res.send(todos)
    })
})

app.post("/todos/:username", (req, res) => {
    const {title} = req.body
    const {username} = req.params
    const todoChecked = false;
    const newId = "id" + Math.random().toString(16).slice(2)
    const formatRow = `${username},${title},${todoChecked},${newId}\n`
    fs.appendFile(filePath, formatRow, function (err) {
        if (err) {
            console.error("Error writing to file", err);
            return res.status(500).send("Internal Server Error");
        }
        res.status(201).send("Todo created successfully");
    });
})

app.get("/todos/:username", (req, res) => {
    const {username} = req.params
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          return;
        }

        const rows = data.split('\n');
        const todos = rows.map(todo => todo.split(","))
        const userTodos = todos.filter(todo => todo[0] === username).map(todo => ({
            title: todo[1],
            checked: (todo[2] === "true"),
            id: todo[3]
        }))

        res.send(userTodos)
    })
})

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
