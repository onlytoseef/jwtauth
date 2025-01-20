import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All Fields are required" });
  }
  try {
    const newUser = await User.create({ name, email, password });
    return res.status(200).json({ message: "User Registered Successfully" });
  } catch (error) {
    return res.status(201).json({ message: "User Signup Failed", error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const loggedIn = await User.findOne({ email, password });
    if (loggedIn) {
      return res.status(200).json({ message: "User logged in successfully" });
    }
    console.log(error);
    return res.status(400).json({ message: "Invalid Credentials" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "User logged in failed", error });
  }
};
