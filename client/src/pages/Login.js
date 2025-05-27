import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://thinkfashion.onrender.com/login", form);
       toast.success('Login successful!');
      console.log(res.data);
      navigate("/"); // 👈 Redirect to Home page
    } catch (err) {
  console.error(err); // Full debug
  const message = err.response?.data?.message || "login failed!";
  toast.error(message);
}

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg w-full max-w-sm shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-gray-700 placeholder-gray-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded bg-gray-700 placeholder-gray-400"
          required
        />

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded font-semibold">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
