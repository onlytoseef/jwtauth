import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginData } from "../../Types/Types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { loginUser } from "../../store/features/authSlice";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const [loginForm, setLoginForm] = useState<loginData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(loginForm as any));
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Login
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
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
              Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <Link
              className="text-blue-500 hover:text-blue-800"
              to="/auth/register"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
