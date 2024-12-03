import mongoose from "mongoose";



const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completion: {
        type: Boolean,
        default: false,
    },
});

export const todoModel = mongoose.model("ToDo", todoSchema);