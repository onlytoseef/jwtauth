import Todo from "../models/todoModel.js";

export const createTodo = async (req, res) => {
  const { name, date, description, category } = req.body;

  console.log(req.body);
  if (!name || !date || !description || !category) {
    return res.status(400).json({ message: "All Fields are required " });
  }

  try {
    const newTodo = await Todo.create({ name, date, description, category });
    return res.status(200).json({ message: "Todo Added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Todo Add Failed", error });
  }
};

export const getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find({});
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(400).json({ message: "Error Fetching the todos" });
  }
};
