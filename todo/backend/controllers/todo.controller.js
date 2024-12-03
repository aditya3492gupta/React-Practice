// defines how data is going to get saved in the db

import { todoModel } from "../models/todo.model.js";

export const toDo = async (req, res) => {
    try {
        const todoTask = await todoModel.find();
        // console.log(todoTask);
        res.status(200).json(todoTask);
        // res.send("hello get");
    } catch (error) {
        console.log(`todo error ${error}`);
    }
};


export const saveToDo = async (req, res) => {
    try {
        const { task, description, completion } = req.body;
        // const task = "hello save";
        console.log(req.body);
        const newTask = new todoModel({ task, description, completion });
        const saveTask = await newTask.save();
        res.status(201).json(saveTask);
        // res.send("Task Saved");
        console.log("Task Saved");

        // res.send("save");
    } catch (error) {
        console.log(`save error ${error}`);
    }
};


export const deleteToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await todoModel.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json("Task Not Found ");
            // console.log(`not found error ${error}`);
        }
        res.status(202).json({ message: "Task deleted successfully", task: task });
        console.log("Task deleted");
    } catch (error) {
        console.log(`delete error ${error}`);

    }
};


export const completeToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const { completion } = req.body;
        const updateTask = await todoModel.findByIdAndUpdate(id, { completion }, { new: true });
        if (!updateTask) {
            return res.status(404).json("Task Not Updated");
        }
        res.status(200).json({
            message: "Task completion updated",
            task: updateTask,
        });
        console.log(id, completion, req.body);
    } catch (error) {
        console.log(`complete error ${error}`);

    }
};