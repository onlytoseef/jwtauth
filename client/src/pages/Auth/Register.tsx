import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserData } from "../../Types/Types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { registerUser } from "../../store/features/authSlice";

export default function Register() {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Register
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-600">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Register
            </button>
          </form>
          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link
              className="text-blue-500 hover:text-blue-800"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
