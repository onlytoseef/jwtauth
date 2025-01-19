import User from "../models/userModel.js";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All Fields are required" });
  }
  try {
    newUser = await User.create({ name, email, password });
    return res.status(200).json({ message: "User Registered Successfully" });
  } catch (error) {
    return res.status(201).json({ message: "User Signup Failed", error });
  }
};
export default registerUser;
