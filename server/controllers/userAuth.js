import User from "../models/userModel.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });
  } catch (error) {
    throw error;
  }
};

export default registerUser;
