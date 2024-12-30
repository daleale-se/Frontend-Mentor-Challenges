const express = require('express');
const cors = require('cors');
const userRouter = require("./routes/userRouter")
const userAuth = require("./routes/authController")

const PORT = 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/todos", userRouter)
app.use("/auth", userAuth)

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
