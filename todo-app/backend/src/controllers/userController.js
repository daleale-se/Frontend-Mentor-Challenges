const fs = require('fs');
const filePath = "./data/todos.csv"

const csvParser = (data) => {
    const rows = data.split('\n');
    return rows.map(todo => {
        const [user, title, checked, id] = todo.split(",")
        return {
            user,
            title,
            checked: checked === "true",
            id
        }
    })
}

const getTodos = function(req, res) {
    const { username } = req.params

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          return;
        }

        const todos = csvParser(data).filter(todo => todo.user === username)

        res.json(todos)
    })

    // const todos = readCsv(filePath).filter(todo => todo[0] === username)
    // res.json(todos)
}

const createTodo = function(req, res) {
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
}

const checkTodo = function(req, res) {
    const { username } = req.params;
    const { id, checked } = req.body;

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            return res.status(500).send("Internal Server Error");
        }

        const rows = data.split("\n");

        let todoUpdated = false;
        const updatedRows = rows.map((row) => {
            if (row.includes(id)) {
                const todo = row.split(",");
                if (todo[0] === username) { 
                    todo[2] = checked;
                    todoUpdated = true;
                    return todo.join(",");
                }
            }
            return row;
        });

        if (!todoUpdated) {
            return res.status(404).send("Todo not found or does not belong to this user");
        }

        fs.writeFile(filePath, updatedRows.join("\n"), (err) => {
            if (err) {
                console.error("Error writing to the file:", err);
                return res.status(500).send("Internal Server Error");
            }

            console.log("Todo updated successfully");
            res.status(200).send("Todo updated successfully");
        });
    });
}

const deleteTodo = function(req, res) {
    const { username } = req.params;
    const { id } = req.body;

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            return res.status(500).send("Internal Server Error");
        }

        const rows = data.split("\n");

        let todoFound = false;
        const updatedTodos = rows.filter((row) => {
            const todo = row.split(",");
            if (todo[0] === username && todo[3] === id) {
                todoFound = true; 
                return false;
            }
            return true; 
        });

        if (!todoFound) {
            return res.status(404).send("Todo not found or does not belong to this user");
        }

        fs.writeFile(filePath, updatedTodos.join("\n"), (err) => {
            if (err) {
                console.error("Error writing to the file:", err);
                return res.status(500).send("Internal Server Error");
            }

            console.log("Todo deleted successfully");
            res.status(200).send("Todo deleted successfully");
        });
    });
}

const reorderTodos = function(req, res) {
    const { username } = req.params;
    const { newOrder } = req.body; 

    if (!Array.isArray(newOrder)) {
        return res.status(400).send("Invalid format: 'newOrder' must be an array of IDs.");
    }

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            return res.status(500).send("Internal Server Error");
        }

        const rows = data.split("\n");
        const userTodos = [];
        const otherTodos = [];

        rows.forEach(row => {
            const todo = row.split(",");
            if (todo[0] === username) {
                userTodos.push(row); 
            } else {
                otherTodos.push(row); 
            }
        });

        const updatedUserTodos = [];
        newOrder.forEach(id => {
            const todoRow = userTodos.find(row => row.split(",")[3] === id);
            if (todoRow) {
                updatedUserTodos.push(todoRow);
            }
        });

        const updatedTodos = [...updatedUserTodos, ...otherTodos];

        fs.writeFile(filePath, updatedTodos.join("\n"), (err) => {
            if (err) {
                console.error("Error writing to the file:", err);
                return res.status(500).send("Internal Server Error");
            }

            console.log("Todos reordered successfully");
            res.status(200).send("Todos reordered successfully");
        });
    });
}

module.exports = {
    getTodos,
    createTodo,
    checkTodo,
    deleteTodo,
    reorderTodos
}