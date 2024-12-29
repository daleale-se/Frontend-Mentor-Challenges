const express = require("express")
const router = express.Router()
const { getTodos, createTodo, checkTodo, deleteTodo, reorderTodos } = require("../controllers/userController")

router.get("/:username", getTodos)
router.post("/:username", createTodo)
router.patch("/:username", checkTodo)
router.delete("/:username", deleteTodo);
router.put("/reorder/:username", reorderTodos);

module.exports = router