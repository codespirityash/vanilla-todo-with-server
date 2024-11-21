import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import DB from "./lib/DB.js";
import { generateId } from "./lib/utils.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())
const db = new DB("./data.json")
app.get("/endpoints", (req, res) => {
    res.json({
        "GET /api/todos": "Get all todos",
        "POST /api/todos": "Create a todo",
        "DELETE /api/todos/:id": "Delete a todo",
        "PUT /api/todos/:id": "Update a todo"
    })
})
app.get("/api/todos", (req, res) => {
    res.json(db.read())
})
app.post("/api/todos", (req, res) => {
    const todo = req.body
    console.log(todo)
    const id = generateId()
    const final = {
        ...todo,
        id,
        date: Date.now()
    }
    db.add(final)
    res.json({
        success: true,
        id
    })
})
app.delete("/api/todos/", (req, res) => {
    const {id} = req.body
    db.delete(id)
    res.json({
        success: true,
        id
    })
})
app.put("/api/todos/", (req, res) => {
    const {id, todo} = req.body
    db.update(id, todo)
    res.json({
        success: true,
        id
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})