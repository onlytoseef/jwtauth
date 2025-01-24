import Router from "express";
import { createTodo, getAllTodo } from "../controllers/todos.js";

const router = Router();

router.route("/addTodo").post(createTodo);
router.route("/getTodo").get(getAllTodo);

export default router;
