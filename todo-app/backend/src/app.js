const express = require('express');
const cors = require('cors');
const fs = require('fs');

const userRouter = require("./routes/userRouter")

const app = express();
const PORT = 4000;

const filePath = "./data/todos.csv"

app.use(cors());
app.use(express.json());

app.use("/todos", userRouter)

// ----------------------------------------------------------------

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const SECRET_KEY = "your_secret_key"; 

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;

//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error("Error reading the file:", err);
//             return res.status(500).send("Internal Server Error");
//         }

//         const rows = data.split('\n');
//         const userRow = rows.find(row => row.startsWith(`${username},`));

//         if (!userRow) {
//             return res.status(401).send("Invalid username or password");
//         }

//         const [storedUsername, storedPassword, role] = userRow.split(',');

//         bcrypt.compare(password, storedPassword, (err, isMatch) => {
//             if (err) {
//                 console.error("Error comparing passwords:", err);
//                 return res.status(500).send("Internal Server Error");
//             }

//             if (!isMatch) {
//                 return res.status(401).send("Invalid username or password");
//             }

//             // Generate a token
//             const token = jwt.sign({ username, role }, SECRET_KEY, { expiresIn: '1h' });

//             res.json({ message: "Login successful", token });
//         });
//     });
// });

// app.post('/register', (req, res) => {
//     const { username, password, role = 'user' } = req.body;

//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error("Error reading the file:", err);
//             return res.status(500).send("Internal Server Error");
//         }

//         // Check if username already exists
//         const rows = data.split('\n');
//         if (rows.some(row => row.startsWith(`${username},`))) {
//             return res.status(409).send("Username already exists");
//         }

//         // Hash the password
//         bcrypt.hash(password, 10, (err, hashedPassword) => {
//             if (err) {
//                 console.error("Error hashing password:", err);
//                 return res.status(500).send("Internal Server Error");
//             }

//             const newUser = `${username},${hashedPassword},${role}\n`;

//             // Append the new user to the file
//             fs.appendFile(filePath, newUser, (err) => {
//                 if (err) {
//                     console.error("Error writing to the file:", err);
//                     return res.status(500).send("Internal Server Error");
//                 }

//                 res.status(201).send("User registered successfully");
//             });
//         });
//     });
// });

// const authenticateToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];

//     if (!token) return res.status(401).send("Access Denied");

//     jwt.verify(token, SECRET_KEY, (err, user) => {
//         if (err) return res.status(403).send("Invalid Token");

//         req.user = user;
//         next();
//     });
// };


// app.get('/protected', authenticateToken, (req, res) => {
//     res.send(`Hello, ${req.user.username}. Your role is ${req.user.role}.`);
// });


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
