import { Router } from "express";
import { completeToDo, deleteToDo, saveToDo, toDo } from "../controllers/todo.controller.js";



const router = Router();


// router.get("/", toDo);
router.route("/").get(toDo);
router.route("/saveTask").post(saveToDo);
router.route("/deleteTask/:id").delete(deleteToDo);
router.route("/updateTask/:id").patch(completeToDo);

export default router;