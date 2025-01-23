import Router from "express";
import { createTodo } from "../controllers/todos.js";

const router = Router();

router.route("/addTodo").post(createTodo);
router.route("/getTodo").get();

export default router;
