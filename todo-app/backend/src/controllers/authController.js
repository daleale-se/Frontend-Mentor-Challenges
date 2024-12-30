const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "your_secret_key"; 
const fs = require('fs');
const filePath = "./data/todos.csv"

const registerUser = function(req, res) {
    const { username, password, role = 'user' } = req.body;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            return res.status(500).send("Internal Server Error");
        }

        // Check if username already exists
        const rows = data.split('\n');
        if (rows.some(row => row.startsWith(`${username},`))) {
            return res.status(409).send("Username already exists");
        }

        // Hash the password
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error("Error hashing password:", err);
                return res.status(500).send("Internal Server Error");
            }

            const newUser = `${username},${hashedPassword},${role}\n`;

            // Append the new user to the file
            fs.appendFile(filePath, newUser, (err) => {
                if (err) {
                    console.error("Error writing to the file:", err);
                    return res.status(500).send("Internal Server Error");
                }

                res.status(201).send("User registered successfully");
            });
        });
    });
}

const loginUser = function(req, res) {
    const { username, password } = req.body;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            return res.status(500).send("Internal Server Error");
        }

        const rows = data.split('\n');
        const userRow = rows.find(row => row.startsWith(`${username},`));

        if (!userRow) {
            return res.status(401).send("Invalid username or password");
        }

        const [storedUsername, storedPassword, role] = userRow.split(',');

        bcrypt.compare(password, storedPassword, (err, isMatch) => {
            if (err) {
                console.error("Error comparing passwords:", err);
                return res.status(500).send("Internal Server Error");
            }

            if (!isMatch) {
                return res.status(401).send("Invalid username or password");
            }

            // Generate a token
            const token = jwt.sign({ username, role }, SECRET_KEY, { expiresIn: '1h' });

            res.json({ message: "Login successful", token });
        });
    });
}


module.exports = {
    registerUser,
    loginUser
}